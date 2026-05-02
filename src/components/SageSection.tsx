import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SageIcon from "@/components/icons/SageIcon";
import { Link } from "react-router-dom";
const SageSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Diagonal divider at top */}
      <div className="absolute -top-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "100px" }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,100 1440,50 1440,100 0,100" fill="hsl(var(--primary) / 0.95)" />
        </svg>
      </div>
      
      {/* Diagonal divider at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "100px" }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 1440,50 1440,100 0,100" fill="hsl(var(--background))" />
          <line x1="0" y1="0" x2="1440" y2="50" stroke="hsl(var(--secondary) / 0.08)" strokeWidth="1" />
        </svg>
      </div>

      {/* Decorative elements - softer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-default relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <SageIcon className="text-secondary" size={18} />
              <span className="text-sm font-medium text-primary-foreground">
                AI-Powered Assistant
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Meet <span className="text-gradient-gold">NUMAWAY Sage</span>
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

            <Button variant="hero" size="lg" asChild>
              <Link to="/sage">
                Try Sage Now
                <ArrowRight className="w-4 h-4" />
              </Link>
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
                  <SageIcon className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">NUMAWAY Sage</h4>
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
                    <SageIcon className="text-primary" size={18} />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Hello! I'm your NUMAWAY Sage 👋 How can I help you today with your study abroad journey?
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
                    <SageIcon className="text-primary" size={18} />
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

export default SageSection;
