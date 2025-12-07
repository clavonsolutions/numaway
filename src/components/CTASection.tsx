import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-hero rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to start your
              <span className="text-gradient-gold"> journey?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Whether you're still exploring or already decided on a country, our team and tools 
              are ready to support you. Book a free consultation – no obligations, no hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="/consultation">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Talk to Us on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-primary-foreground/10">
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Zero fraud, zero shortcuts
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Response within 24 hours
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Transparent pricing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;