import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenieSection from "@/components/GenieSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, GraduationCap, FileCheck, CreditCard, ArrowRight } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "University Matching", desc: "Get personalized university recommendations based on your profile" },
  { icon: FileCheck, title: "Document Evaluation", desc: "AI-powered review of your documents and eligibility" },
  { icon: CreditCard, title: "Scholarship Finder", desc: "Discover scholarships you qualify for" },
  { icon: MessageSquare, title: "24/7 Assistance", desc: "Get instant answers to any study abroad question" }
];

const GeniePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Meet NUMAWAY <span className="text-gradient-gold">Genie</span></h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">Your AI-powered study abroad counsellor. Get instant answers, personalized recommendations, and expert guidance 24/7.</p>
            <Button variant="hero" size="lg">Try Genie in the App <ArrowRight className="w-4 h-4" /></Button>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">What Genie Can Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-xl shadow-soft text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><f.icon className="w-7 h-7 text-secondary" /></div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Experience Genie?</h2>
          <p className="text-muted-foreground mb-8">Get early access to NUMAWAY Genie in the app.</p>
          <Button variant="hero" size="lg" asChild><a href="/app">Get Early Access</a></Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default GeniePage;
