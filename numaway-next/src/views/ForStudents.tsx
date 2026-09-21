"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Users, 
  FileCheck, 
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import studentsImage from "@/assets/journey-students.jpg";

const ForStudents = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Course Discovery",
      description: "Explore thousands of courses across top universities worldwide, tailored to your interests and qualifications."
    },
    {
      icon: Globe,
      title: "University Matching",
      description: "Our AI-powered system matches you with universities that fit your profile, budget, and career goals."
    },
    {
      icon: FileCheck,
      title: "Application Support",
      description: "Get step-by-step guidance through the entire application process, from documents to submission."
    },
    {
      icon: Users,
      title: "Dedicated Counsellor",
      description: "Work one-on-one with an experienced counsellor who understands your unique journey."
    },
    {
      icon: MessageCircle,
      title: "Visa Assistance",
      description: "Navigate the visa process with confidence using our expert guidance and document preparation."
    },
    {
      icon: GraduationCap,
      title: "Pre-Departure Support",
      description: "From accommodation to travel tips, we prepare you for life abroad every step of the way."
    }
  ];

  const steps = [
    "Create your free account",
    "Complete your profile with academic details",
    "Get matched with suitable universities",
    "Apply with our guided application system",
    "Receive offers and make your choice",
    "Prepare for your journey abroad"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="For Students: Study Abroad with Expert Guidance"
      description="Numaway supports students at every stage of the study abroad journey: from country selection to visa approval and arrival."
      canonical="/for-students"
    />

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(179 75% 41% / 0.25), transparent 60%)'
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
                <GraduationCap className="w-4 h-4 text-secondary" />
                <span className="text-sm text-white/90">For Students</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Your Dream University is
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"> Within Reach</span>
              </h1>
              
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Join thousands of Nigerian students who've achieved their study abroad dreams with NUMAWAY. 
                We guide you from course selection to campus life.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/register">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <Link to="/consultation">
                    Book Consultation
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white/60 text-sm">Trusted by 10,000+ students</span>
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
                  src={studentsImage} 
                  alt="Happy Nigerian students graduating"
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
              Everything you need to study abroad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From your first search to your first day on campus, we're with you every step of the way.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/15 to-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Your journey in 6 simple steps
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 bg-card border border-border/60 rounded-xl p-4">
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/register">
                Start Your Journey Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ForStudents;


