import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, Send, Mic, Paperclip, User, Bot, 
  GraduationCap, FileCheck, CreditCard, MessageSquare,
  ThumbsUp, ThumbsDown, Copy, RotateCcw
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  { icon: GraduationCap, text: "What universities match my profile?" },
  { icon: FileCheck, text: "Review my SOP for Toronto" },
  { icon: CreditCard, text: "Find scholarships I qualify for" },
  { icon: MessageSquare, text: "Explain visa requirements for Canada" },
];

const SageChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm NUMAWAY Sage, your AI-powered study abroad counsellor. I can help you with university recommendations, document review, scholarship search, and answer any questions about studying abroad. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "universities": "Based on your profile (BSc Computer Science, 8.5 GPA, IELTS 7.5), here are my top recommendations:\n\n🎓 **University of Toronto** - MSc Computer Science\n- Ranking: #26 globally\n- Match Score: 95%\n\n🎓 **TU Munich** - MSc Informatics\n- Ranking: #50 globally\n- Match Score: 92%\n\n🎓 **University of Melbourne** - Master of IT\n- Ranking: #33 globally\n- Match Score: 90%\n\nWould you like me to provide more details about any of these?",
        "sop": "I'd be happy to review your Statement of Purpose! Please upload your SOP document using the attachment button, and I'll provide detailed feedback on:\n\n✅ Structure and flow\n✅ Content relevance\n✅ Grammar and language\n✅ University-specific requirements\n✅ Suggestions for improvement\n\nAlternatively, you can paste the text directly here.",
        "scholarships": "Great news! Based on your profile, you may qualify for these scholarships:\n\n💰 **Vanier Canada Graduate Scholarship**\n- Value: $50,000/year for 3 years\n- Eligibility: High academic achievement\n\n💰 **DAAD Scholarship (Germany)**\n- Value: €934/month + benefits\n- Eligibility: International students\n\n💰 **Australia Awards**\n- Value: Full tuition + living expenses\n- Eligibility: Developing country citizens\n\nShall I help you check your eligibility for any of these?",
        "visa": "Here's what you need to know about Canadian student visa (Study Permit):\n\n📋 **Key Requirements:**\n1. Letter of Acceptance from a DLI\n2. Proof of funds (~CAD $20,635/year)\n3. Valid passport\n4. Clean criminal record\n5. Medical exam (if required)\n\n⏱️ **Processing Time:** 8-12 weeks\n💰 **Application Fee:** CAD $150\n\n**Pro Tips:**\n- Apply early (3-4 months before intake)\n- Create a GCKey account on IRCC\n- Prepare biometrics appointment\n\nWould you like a detailed checklist or help with the application process?",
      };

      let responseContent = "I understand you're asking about studying abroad. Could you please provide more details about what specific information you need? I can help with:\n\n• University recommendations\n• Document review (SOP, LOR)\n• Scholarship search\n• Visa guidance\n• Application timeline\n• Test preparation tips";

      const lowerInput = userMessage.content.toLowerCase();
      if (lowerInput.includes("universit") || lowerInput.includes("match")) {
        responseContent = responses.universities;
      } else if (lowerInput.includes("sop") || lowerInput.includes("statement")) {
        responseContent = responses.sop;
      } else if (lowerInput.includes("scholarship") || lowerInput.includes("funding")) {
        responseContent = responses.scholarships;
      } else if (lowerInput.includes("visa") || lowerInput.includes("canada")) {
        responseContent = responses.visa;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  return (
    <div className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold">NUMAWAY Sage</h1>
          <p className="text-sm text-muted-foreground">Your AI Study Abroad Counsellor</p>
        </div>
        <Badge variant="secondary" className="ml-auto">Beta</Badge>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                message.role === "user" 
                  ? "bg-primary" 
                  : "bg-gradient-to-r from-amber-500 to-orange-500"
              }`}>
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Sparkles className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                <Card className={`p-4 ${
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted/50"
                }`}>
                  <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                </Card>
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <ThumbsUp className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <RotateCcw className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <Card className="p-4 bg-muted/50">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </Card>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="py-4 border-t">
          <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestionClick(q.text)}
                className="text-left h-auto py-2"
              >
                <q.icon className="w-4 h-4 mr-2 shrink-0" />
                {q.text}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="pt-4 border-t">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="w-5 h-5" />
          </Button>
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Sage anything about studying abroad..."
              className="pr-20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="icon" className="h-8 w-8" onClick={handleSend} disabled={!inputValue.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-2">
          Sage may make mistakes. Always verify important information.
        </p>
      </div>
    </div>
  );
};

export default SageChat;
