import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, Award, Sparkles, ShieldCheck, Eye } from "lucide-react";
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
              We are a Nigeria-born education agency using technology and human expertise 
              to make global education more accessible, transparent and stress-free.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  NUMAWAY was created to solve a simple but painful reality: Many talented students 
                  in Nigeria want to study abroad, but the process is confusing, stressful and full 
                  of conflicting advice.
                </p>
                <p>
                  Traditional agencies are often built around commission, not what is best for the 
                  student. On the other side, students are left alone to figure out complex applications, 
                  visas and financial planning.
                </p>
                <p className="font-semibold text-foreground">
                  We built NUMAWAY to change this.
                </p>
                <p>
                  We combine human counsellors who understand the realities of Nigerian students with 
                  intelligent AI tools that make information clear, personalised and available 24/7. 
                  The result is a study abroad experience that is structured, transparent and built around you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <Target className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To help students in Nigeria and across Africa access global education opportunities 
                  with clarity, confidence and integrity.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft">
                <Globe className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the most trusted education ecosystem for Nigerian students – setting the 
                  standard for ethical, student-first guidance in study abroad services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-4">Our Values</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              These principles guide everything we do at NUMAWAY.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  icon: Users, 
                  title: "Students first, always", 
                  desc: "We never push a school or course that isn't in the student's best interest." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Zero tolerance for fraud", 
                  desc: "No fake documents, no shortcuts, no dangers to your future." 
                },
                { 
                  icon: Eye, 
                  title: "Transparency over pressure", 
                  desc: "We show you the real options, costs and timelines so you can decide confidently." 
                },
                { 
                  icon: Sparkles, 
                  title: "Technology with a human face", 
                  desc: "AI makes the process smarter. Humans make it caring." 
                }
              ].map((v, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just help you fill forms. We help you build a plan.
              </p>
              <div className="text-left space-y-4 text-muted-foreground">
                <p>From the moment you contact NUMAWAY, we treat your journey as a structured project:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>We profile you and your goals</li>
                  <li>We explore options together</li>
                  <li>We co-design a pathway that matches your budget, grades and long-term plans</li>
                  <li>We guide you step by step until you land at your new university</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're still exploring or already decided on a country, our team and tools are ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/consultation">Book Free Consultation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/team">Meet Our Team</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;