/**
 * Authenticated Sage chat page — ADR-016 / MRS §7.5
 * IMPORTANT: Never calls the Anthropic API directly from the browser.
 * All requests go through the server-side proxy at /api/sage/chat.
 * The proxy at the API server adds the Authorization header and system prompt.
 */
import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Send, User, GraduationCap, FileCheck, CreditCard,
  MessageSquare, ThumbsUp, ThumbsDown, Copy, Loader2,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED: { icon: typeof GraduationCap; text: string }[] = [
  { icon: GraduationCap, text: "What universities match my profile?" },
  { icon: FileCheck, text: "How should I structure my personal statement?" },
  { icon: CreditCard, text: "Find scholarships I might qualify for" },
  { icon: MessageSquare, text: "Explain UK student visa requirements" },
];

/**
 * Post a message to the server-side Sage proxy.
 * The proxy endpoint authenticates the request using the Supabase session token
 * and attaches the Anthropic API key server-side.
 *
 * URL resolution:
 *   Production: Nginx proxies /api/* to the numaway-api server — base is same origin.
 *   Local dev:  set VITE_SAGE_API_BASE_URL=http://localhost:3001 in .env.local.
 */
const BASE_URL = (
  import.meta.env.VITE_SAGE_API_BASE_URL as string | undefined ?? ""
).replace(/\/$/, "");
const SAGE_CHAT_URL = `${BASE_URL}/api/sage/chat`;

async function callSageApi(
  messages: { role: "user" | "assistant"; content: string }[],
  sessionToken: string
): Promise<string> {
  const response = await fetch(SAGE_CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Server error ${response.status}`);
  }

  const data = (await response.json()) as { reply: string };
  return data.reply;
}

const SageChat = (): JSX.Element => {
  const { session, profile } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        `Hello${profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}! I'm NUMAWAY Sage, your AI study abroad counsellor. I can help with university recommendations, scholarship searches, visa guidance, document tips, and more. What would you like to know?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  // Prevent scrollIntoView firing on the initial render (welcome message).
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(): Promise<void> {
    const text = input.trim();
    if (!text || loading) return;
    if (!session?.access_token) {
      setError("Session expired. Please sign in again.");
      return;
    }

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      // Build conversation history for the API (skip the welcome message id)
      const history = [...messages, userMsg]
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const reply = await callSageApi(history, session.access_token);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    void sendMessage();
  }

  function copyToClipboard(text: string): void {
    void navigator.clipboard.writeText(text);
  }

  return (
    <div className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b">
        <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
          <span className="text-secondary-foreground font-display font-bold text-lg">S</span>
        </div>
        <div>
          <h1 className="text-xl font-display font-bold">NUMAWAY Sage</h1>
          <p className="text-sm text-muted-foreground">Your AI Study Abroad Counsellor</p>
        </div>
        <Badge variant="secondary" className="ml-auto">Beta</Badge>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-gradient-gold"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold text-secondary-foreground">S</span>
                )}
              </div>
              <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
                <Card
                  className={`p-4 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </Card>
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Helpful">
                      <ThumbsUp className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Not helpful">
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      aria-label="Copy"
                      onClick={() => copyToClipboard(msg.content)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-xs font-bold text-secondary-foreground">S</span>
            </div>
            <Card className="p-4 bg-muted/50">
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            </Card>
          </motion.div>
        )}

        {error && (
          <div className="mx-auto max-w-sm p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive text-center">
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions (show only before first user message) */}
      {messages.filter((m) => m.role === "user").length === 0 && (
        <div className="py-3 border-t">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED.map((q, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => setInput(q.text)}
                className="text-left h-auto py-2 text-xs"
              >
                <q.icon className="w-3 h-3 mr-1.5 shrink-0" />
                {q.text}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="pt-3 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Sage about universities, visas, scholarships..."
            disabled={loading}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || loading}
            aria-label="Send"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-2">
          Sage may make mistakes. Always verify important decisions with a counsellor.
        </p>
      </form>
    </div>
  );
};

export default SageChat;
