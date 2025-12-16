import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, GraduationCap, FileCheck, CreditCard, ArrowRight, Clock, Users } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "University Matching", desc: "\"Which country is right for me?\" Get personalized suggestions based on your profile." },
  { icon: FileCheck, title: "Document Checklists", desc: "\"What documents do I need for my visa?\" Generate tailored checklists instantly." },
  { icon: CreditCard, title: "Scholarship Finder", desc: "\"What can I study with my grades and budget?\" Explore realistic funding options." },
  { icon: Clock, title: "Timeline Planning", desc: "\"What are the steps to study in Canada?\" Get structured timelines and reminders." },
  { icon: MessageSquare, title: "Quick Answers 24/7", desc: "\"How should I prepare for IELTS in 2 months?\" Get instant study plan suggestions." },
  { icon: Users, title: "Human Handoff", desc: "When things are complex or high-stakes, we always involve a human expert." }
];

const SagePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Meet <span className="text-gradient-gold">Sage</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-2">Your AI study abroad assistant</p>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Ask questions, explore options and get structured checklists and timelines – 24/7.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/app/sage">Try Sage in the App <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">What Sage Can Help You With</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Sage handles quick questions, planning, basic comparisons and reminders – so your human 
            counsellor can focus on advising you, reviewing your profile and helping with decisions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-card p-6 rounded-xl shadow-soft"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">How Sage Works With Humans</h2>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Sage does not replace your counsellor.</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                It handles quick questions, planning, basic comparisons and reminders – so your human 
                counsellor can focus on advising you, reviewing your profile and helping with decisions.
              </p>
              <p className="text-muted-foreground">
                When things are complex or high-stakes, we always involve a human expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Experience Sage?</h2>
          <p className="text-muted-foreground mb-8">Get access through the NUMAWAY App.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="/app">Get Access via App</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/consultation">Talk to a Human Counsellor</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default SagePage;
