import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Scale,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trustItems = [
  {
    icon: Shield,
    title: "Verified Partnerships",
    description: "500+ accredited universities worldwide with verified credentials",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "NDPR & GDPR compliant. Your data is encrypted and never sold",
    color: "from-green-500/20 to-green-600/10"
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No hidden fees. All costs explained clearly before you commit",
    color: "from-purple-500/20 to-purple-600/10"
  },
  {
    icon: FileCheck,
    title: "Ethical Guidance",
    description: "We never guarantee admission or visas. Honest advice only",
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    icon: AlertTriangle,
    title: "Fraud Prevention",
    description: "Zero-tolerance fraud policy with dedicated reporting channels",
    color: "from-red-500/20 to-red-600/10"
  },
  {
    icon: Scale,
    title: "Complaints Process",
    description: "4-stage escalation process ensuring fair resolution",
    color: "from-teal-500/20 to-teal-600/10"
  }
];

const commitments = [
  "We never fabricate documents or misrepresent your qualifications",
  "We don't promise what we can't deliver (visas, admissions)",
  "We disclose all fees upfront with no surprise charges",
  "We protect your personal data with enterprise-grade security",
  "We provide honest assessments, even when it's not what you want to hear"
];

const TrustCenterSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-muted/15">
      {/* Diagonal divider at top */}
      <div className="absolute -top-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,80 1440,30 1440,80 0,80" fill="hsl(var(--muted) / 0.15)" />
        </svg>
      </div>
      
      {/* Diagonal divider at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 1440,50 1440,80 0,80" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Background decorations - softer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container-default relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trust Center</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">
            Your Trust Is <span className="text-gradient">Our Foundation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Studying abroad is a major investment. Here's how we ensure transparency, 
            security, and ethical practices at every step.
          </p>
        </ScrollReveal>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Commitments */}
        <ScrollReveal animation="fade-up">
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <h3 className="text-xl font-display font-bold mb-3">Our Commitments to You</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  These aren't just policies, they're promises we make to every student we work with.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/complaints">Complaints</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/fraud-prevention">Fraud Prevention</a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-2/3">
                <ul className="space-y-3">
                  {commitments.map((commitment, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{commitment}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-up" className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Have concerns or questions about our practices?
          </p>
          <Button variant="ghost" asChild className="gap-2">
            <a href="/contact">
              Contact Our Compliance Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustCenterSection;