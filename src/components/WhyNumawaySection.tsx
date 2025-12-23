import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { 
  Bot, 
  Users, 
  Shield, 
  Globe, 
  Zap, 
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    icon: Bot,
    title: "AI + Human Expertise",
    description: "Sage handles quick queries 24/7, while expert counsellors guide critical decisions.",
    highlight: "Best of both worlds"
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No hidden fees, no false promises. We explain every cost and never guarantee outcomes we don't control.",
    highlight: "Zero surprises"
  },
  {
    icon: Globe,
    title: "Nigeria-Born, Global Reach",
    description: "Built by Nigerians who understand your journey, with partnerships spanning 500+ universities worldwide.",
    highlight: "Local insight, global access"
  },
  {
    icon: Zap,
    title: "Tech-Powered Efficiency",
    description: "Track applications in real-time, get deadline reminders, and manage documents—all from our app.",
    highlight: "Modern experience"
  },
  {
    icon: HeartHandshake,
    title: "Ethical First Approach",
    description: "We never fabricate documents, misrepresent qualifications, or make promises we can't keep.",
    highlight: "Integrity always"
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description: "From course selection to arrival abroad—accommodation, visas, and everything in between.",
    highlight: "Complete journey"
  }
];

const WhyNumawaySection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">
            What Makes <span className="text-gradient">NUMAWAY Different</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another study abroad agency. Here's why thousands of Nigerian 
            students trust us with their future.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 h-full group"
              >
                {/* Highlight badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2 pr-16">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up" className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Expert guidance</span>
            </div>
            <Button variant="hero" size="sm" asChild className="gap-2">
              <a href="/consultation">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyNumawaySection;