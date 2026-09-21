"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/react-router-dom";
import { 
  Building2, 
  Users, 
  Globe, 
  BarChart3, 
  Target,
  Handshake,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import institutionsImage from "@/assets/journey-institutions.jpg";
import { AnimatedCounter } from "@/hooks/useAnimatedCounter";

const ForInstitutions = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access a diverse pool of qualified African students actively seeking international education opportunities."
    },
    {
      icon: Target,
      title: "Quality Applications",
      description: "Receive pre-screened, high-quality applications from students who match your admission criteria."
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      description: "Gain valuable insights into African student preferences, trends, and market dynamics."
    },
    {
      icon: Users,
      title: "Student Pipeline",
      description: "Build a consistent pipeline of qualified applicants for your programs year-round."
    },
    {
      icon: Handshake,
      title: "Partnership Support",
      description: "Dedicated partnership managers to ensure smooth collaboration and mutual success."
    },
    {
      icon: Building2,
      title: "Brand Visibility",
      description: "Increase your institution's visibility among African students through our platform and events."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Students" },
    { value: "15+", label: "Countries" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "500+", label: "Partner Institutions" }
  ];

  const features = [
    "Dedicated account management",
    "Real-time application dashboard",
    "Student verification services",
    "Virtual recruitment events",
    "Co-branded marketing campaigns",
    "Performance analytics and reporting"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="For Universities and Institutions: Recruit with Numaway"
        description="Numaway connects African and European students with your institution. Learn about our university partnership programme."
        canonical="/for-institutions"
      />

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(195 82% 71% / 0.25), transparent 60%)'
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
                <Building2 className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/90">For Institutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Connect with Africa's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary"> Brightest Students</span>
              </h1>
              
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Partner with NUMAWAY to access a growing pool of motivated, qualified African students 
                seeking world-class education at your institution.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Partner with Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    Request Information
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <img 
                src={institutionsImage.src} 
                alt="Students studying together" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter end={10000} suffix="+" duration={2000} />
              </div>
              <div className="text-muted-foreground">Active Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter end={15} suffix="+" duration={1500} />
              </div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter end={95} suffix="%" duration={1800} />
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter end={500} suffix="+" duration={2000} />
              </div>
              <div className="text-muted-foreground">Partner Institutions</div>
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
              Why institutions partner with us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help you connect with qualified students while providing comprehensive support throughout the recruitment process.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-secondary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Comprehensive partnership support
              </h2>
              <p className="text-muted-foreground mb-8">
                From onboarding to ongoing recruitment support, we're committed to helping 
                your institution achieve its international student recruitment goals.
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
                  Become a Partner Institution
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
              <h3 className="text-xl font-bold text-foreground mb-6">Ready to expand your reach?</h3>
              <p className="text-muted-foreground mb-6">
                Join our growing network of partner institutions and connect with thousands of qualified African students.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Submit Your Interest</h4>
                    <p className="text-sm text-muted-foreground">Fill out our partnership inquiry form</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Discuss Your Goals</h4>
                    <p className="text-sm text-muted-foreground">Meet with our partnerships team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Start Receiving Applications</h4>
                    <p className="text-sm text-muted-foreground">Get connected with qualified students</p>
                  </div>
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

export default ForInstitutions;
