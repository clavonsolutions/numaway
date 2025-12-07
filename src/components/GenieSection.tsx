import { motion } from "framer-motion";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GenieSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                AI-Powered Assistant
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Meet <span className="text-gradient-gold">NUMAWAY Genie</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/70 mb-8">
              Your personal AI counsellor available 24/7. Get instant answers about
              universities, courses, visa requirements, and more. Powered by advanced
              AI but backed by human expertise when you need it.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Instant answers to any study abroad question",
                "Personalized university recommendations",
                "Visa and document guidance",
                "Scholarship matching",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-primary-foreground/80"
                >
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Button variant="hero" size="lg">
              Try Genie Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right - Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl shadow-card p-6 max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">NUMAWAY Genie</h4>
                  <span className="text-sm text-accent flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Online
                  </span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Hello! I'm your NUMAWAY Genie 👋 How can I help you today with your study abroad journey?
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm">
                      I want to study Computer Science in the UK. What are my options?
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Great choice! The UK has excellent CS programs. Based on your profile, I recommend looking at:
                      <br /><br />
                      🎓 Imperial College London<br />
                      🎓 University of Edinburgh<br />
                      🎓 University of Manchester
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-2 bg-muted rounded-full p-2">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors">
                  <MessageSquare className="w-5 h-5 text-secondary-foreground" />
                </button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GenieSection;
