import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Send, GraduationCap, FileCheck, CreditCard,
  Globe, Clock, Users, ChevronRight, Sparkles,
} from "lucide-react";
import SageIcon from "@/components/icons/SageIcon";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED = [
  { icon: GraduationCap, label: "Which country suits my profile?", q: "I'm a Nigerian student with a 3.8 GPA. Which country should I consider for a Master's in Computer Science?" },
  { icon: FileCheck, label: "Visa document checklist", q: "What documents do I need for a UK student visa application?" },
  { icon: CreditCard, label: "Scholarships I can apply for", q: "What fully funded scholarships are available for Nigerian students studying abroad?" },
  { icon: Globe, label: "UK vs Canada comparison", q: "What are the key differences between studying in the UK versus Canada for Nigerian students?" },
  { icon: Clock, label: "Application timeline for UK", q: "What is the ideal application timeline if I want to start a UK university in September 2026?" },
];

const FEATURES = [
  { icon: GraduationCap, title: "University Matching", desc: "Personalised suggestions based on your grades, goals and budget." },
  { icon: FileCheck, title: "Document Checklists", desc: "Tailored lists for every visa type and institution." },
  { icon: CreditCard, title: "Scholarship Finder", desc: "Realistic funding options matched to your profile." },
  { icon: Clock, title: "Timeline Planning", desc: "Step-by-step plans so you never miss a deadline." },
  { icon: Users, title: "Human Handoff", desc: "Complex decisions always get a real counsellor." },
];

function renderContent(text: string): JSX.Element {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
}

const TypingDots = (): JSX.Element => (
  <div className="flex items-center gap-1 py-1">
    {[0, 150, 300].map((delay) => (
      <span
        key={delay}
        className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce"
        style={{ animationDelay: `${delay}ms` }}
      />
    ))}
  </div>
);

const SagePage = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: "Hello! I'm Sage, Numaway's AI study abroad counsellor. Ask me anything about universities, visas, scholarships, or application timelines. For high-stakes decisions, I'll always recommend speaking with a human counsellor.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setApiError(false);

    try {
      const history = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/sage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) throw new Error("API error");

      const data = (await res.json()) as { content: string };
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: data.content },
      ]);
    } catch {
      setApiError(true);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sage is temporarily unavailable. Please book a consultation and a human counsellor will respond within 24 hours.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [loading, messages]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const isFirstLoad = messages.length === 1;

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Sage, AI Study Abroad Counsellor | Numaway"
        description="Ask Sage, Numaway's AI counsellor, anything about studying abroad, universities, visas, scholarships, timelines. Free, instant, 24/7."
        canonical="/sage"
      />

      <Header />

      <main className="pt-16">
        {/* Split layout: info panel left, chat right */}
        <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row">

          {/* ─── Left panel ─────────────────────────────────────── */}
          <aside className="lg:w-[360px] xl:w-[400px] lg:min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary via-primary/95 to-[hsl(200_50%_22%)] text-primary-foreground flex flex-col lg:sticky lg:top-16 lg:max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="p-8 flex flex-col gap-8 flex-1">

              {/* Sage identity */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/80 to-amber-500 flex items-center justify-center shadow-glow shrink-0">
                  <SageIcon className="text-primary" size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-display font-bold">Sage</h1>
                    <span className="text-[10px] font-medium bg-white/10 text-white/80 px-2 py-0.5 rounded-full">Beta</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70">by Numaway</p>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                <p className="text-primary-foreground/90 text-base leading-relaxed">
                  Instant answers on universities, visas, scholarships and timelines. Free for everyone, 24/7.
                </p>
              </motion.div>

              {/* Feature list */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="space-y-4"
              >
                {FEATURES.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-secondary" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary-foreground/90">{title}</p>
                      <p className="text-xs text-primary-foreground/55 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>

              {/* Spacer pushes CTA to bottom */}
              <div className="flex-1 hidden lg:block" />

              {/* Human counsellor CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/8 rounded-xl p-5 border border-white/10"
              >
                <p className="text-xs text-primary-foreground/60 mb-3">
                  Sage handles quick questions. For complex situations, our counsellors are here.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 text-primary-foreground hover:bg-white/10 hover:text-white text-sm"
                  asChild
                >
                  <Link to="/consultation">
                    Book a free consultation <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </aside>

          {/* ─── Chat panel ─────────────────────────────────────── */}
          <section className="flex-1 flex flex-col bg-background min-h-[600px] lg:min-h-[calc(100vh-4rem)]">

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-5">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        msg.role === "user"
                          ? "bg-primary"
                          : "bg-gradient-to-br from-gold/90 to-amber-500"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <span className="text-[11px] font-bold text-primary-foreground">You</span>
                      ) : (
                        <SageIcon className="text-primary" size={16} />
                      )}
                    </div>

                    {/* Bubble */}
                    <div className={`max-w-[78%] sm:max-w-[68%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-sm"
                            : "bg-muted/60 text-foreground rounded-tl-sm border border-border/40"
                        }`}
                      >
                        {renderContent(msg.content)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/90 to-amber-500 flex items-center justify-center shrink-0">
                    <SageIcon className="text-primary" size={16} />
                  </div>
                  <div className="px-4 py-3 bg-muted/60 rounded-2xl rounded-tl-sm border border-border/40">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggested questions, only on first load */}
            <AnimatePresence>
              {isFirstLoad && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="px-4 sm:px-8 pb-4"
                >
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" strokeWidth={1.75} />
                    Try asking Sage:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED.map(({ icon: Icon, label, q }) => (
                      <button
                        key={label}
                        onClick={() => send(q)}
                        className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border border-border/60 bg-card hover:border-secondary/50 hover:bg-secondary/5 hover:text-secondary transition-all text-muted-foreground font-medium"
                      >
                        <Icon className="w-3 h-3 shrink-0" strokeWidth={1.75} />
                        {label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* API error banner */}
            {apiError && (
              <div className="mx-4 sm:mx-8 mb-2 px-4 py-2.5 bg-destructive/8 border border-destructive/20 rounded-xl text-xs text-destructive/80 flex items-center justify-between gap-4">
                <span>Sage is temporarily unavailable.</span>
                <Link to="/consultation" className="font-medium underline underline-offset-2 shrink-0">
                  Book a counsellor
                </Link>
              </div>
            )}

            {/* Input bar */}
            <div className="px-4 sm:px-8 pb-6 pt-2 border-t border-border/40">
              <div className="flex items-end gap-3 bg-card border border-border/60 rounded-2xl px-4 py-3 shadow-soft focus-within:border-secondary/50 focus-within:ring-1 focus-within:ring-secondary/20 transition-all">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask Sage anything about studying abroad…"
                  rows={1}
                  className="flex-1 bg-transparent resize-none outline-none text-sm text-foreground placeholder:text-muted-foreground/60 max-h-32 leading-relaxed"
                  style={{ height: "auto" }}
                  onInput={(e) => {
                    const t = e.currentTarget;
                    t.style.height = "auto";
                    t.style.height = `${t.scrollHeight}px`;
                  }}
                  disabled={loading}
                />
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary/90 transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground/50 text-center mt-2">
                Sage may make mistakes. Verify important information with a counsellor.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SagePage;
