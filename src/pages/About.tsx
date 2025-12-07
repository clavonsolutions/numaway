import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient-gold">NUMAWAY</span>
            </motion.h1>
            <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
              Nigeria's leading study abroad consultancy, helping students achieve their global education dreams with transparency, expertise, and AI-powered guidance.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <Target className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">To provide transparent, technology-driven, personalised access to global study opportunities — powered by AI, verified content, structured workflows, and human expertise.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <Globe className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">To be the most trusted global education ecosystem for Nigerian students, setting the standard for ethical, student-first guidance in study abroad services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Guiding Principles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Students First", desc: "Every decision centers on student success" },
                { icon: Heart, title: "Zero Fraud", desc: "Complete transparency, no hidden fees" },
                { icon: Award, title: "Global Standard", desc: "World-class service and support" },
                { icon: Sparkles, title: "AI-Powered", desc: "Technology that enhances human expertise" }
              ].map((v, i) => (
                <div key={i} className="bg-card p-6 rounded-xl shadow-soft text-center">
                  <v.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Start Your Journey?</h2>
            <Button variant="hero" size="lg" asChild><a href="/consultation">Book Free Consultation</a></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
