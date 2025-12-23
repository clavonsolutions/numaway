import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const trustBadges = [
    { icon: Shield, text: "Zero fraud, zero shortcuts" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Wallet, text: "Transparent pricing" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-gold to-accent p-[2px] rounded-[2.5rem]">
            <div className="absolute inset-[2px] bg-gradient-hero rounded-[calc(2.5rem-2px)]" />
          </div>

          <div className="relative bg-gradient-hero rounded-[2.5rem] p-8 sm:p-12 lg:p-20 overflow-hidden">
            {/* Animated decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-secondary/40 rounded-full"
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* Pre-heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/80">Start Today, Study Tomorrow</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight"
              >
                Ready to start your
                <span className="block sm:inline"> </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold">
                  global journey?
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg lg:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Whether you're still exploring or already decided on a country, our team and tools 
                are ready to support you. Book a free consultation – no obligations, no hidden fees.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto shadow-xl shadow-secondary/20">
                  <a href="/consultation">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild className="w-full sm:w-auto">
                  <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Talk to Us on WhatsApp
                  </a>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mt-14 pt-10 border-t border-primary-foreground/10"
              >
                {trustBadges.map((badge, index) => (
                  <motion.div 
                    key={badge.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-primary-foreground/80 text-sm font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;