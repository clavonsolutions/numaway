"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/react-router-dom";
import { 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import agentsImage from "@/assets/journey-agents.jpg";

const ForAgents = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Commissions",
      description: "Earn competitive commissions on every successful placement with transparent payment structures."
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Submit applications quickly with our streamlined system designed for efficiency."
    },
    {
      icon: Shield,
      title: "Compliance Support",
      description: "Stay compliant with our built-in checks and guidance on regulatory requirements."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Access a dedicated partner success team to help grow your business."
    },
    {
      icon: Award,
      title: "Training & Resources",
      description: "Regular training sessions and marketing materials to boost your success."
    },
    {
      icon: Briefcase,
      title: "Dashboard & Analytics",
      description: "Track applications, conversions, and earnings with our powerful partner portal."
    }
  ];

  const features = [
    "Access to 500+ partner universities worldwide",
    "Real-time application tracking",
    "Automated document verification",
    "Multi-student management",
    "Marketing support and co-branded materials",
    "Priority application processing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="For Education Agents: Partner with Numaway"
      description="Numaway works with trusted education agents to place students at international universities. Learn about our partnership programme."
      canonical="/for-agents"
    />

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(40 68% 55% / 0.25), transparent 60%)'
          }}
        />
        
        <div className="container-default relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                <Briefcase className="w-4 h-4 text-gold" />
                <span className="text-sm text-white/90">For Agents</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Partner with NUMAWAY,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-secondary"> Grow Your Business</span>
              </h1>
              
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Join our network of successful education agents. Get the tools, support, and commissions 
                you need to help more students achieve their study abroad dreams.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Become a Partner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={(agentsImage as any)?.src || agentsImage as any} 
                  alt="Business partners collaborating"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Why agents choose NUMAWAY
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to scale your education consultancy business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-secondary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Everything you need to succeed
              </h2>
              <p className="text-muted-foreground mb-8">
                Our partner portal gives you powerful tools to manage applications, 
                track performance, and grow your business.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Apply to Partner Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/60 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Partner Benefits at a Glance</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">Universities</span>
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">Countries</span>
                  <span className="text-2xl font-bold text-foreground">15+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">Commission Rate</span>
                  <span className="text-2xl font-bold text-secondary">Competitive</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <span className="text-muted-foreground">Support</span>
                  <span className="text-2xl font-bold text-foreground">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ForAgents;


