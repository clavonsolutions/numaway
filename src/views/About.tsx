"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe, Award, Sparkles, ShieldCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="About Numaway: Our Mission and Story"
        description="Numaway is a global education mobility platform built to give every student a clear, intelligent path to their global future."
        canonical="/about"
      />

      <Header />
      <main>
        <PageHero
          title="About"
          titleHighlight="NUMAWAY"
          description="We are a Nigeria-born education agency using technology and human expertise to make global education more accessible, transparent and stress-free."
        />

        {/* Our Story */}
        <section className="py-24">
          <div className="container-default">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal animation="fade-up" className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold mb-8">Our Story</h2>
                <div className="prose prose-lg text-muted-foreground space-y-6">
                  <p>
                    NUMAWAY was created to solve a simple but painful reality: Many talented students 
                    in Nigeria want to study abroad, but the process is confusing, stressful and full 
                    of conflicting advice.
                  </p>
                  <p className="text-muted-foreground">
                    To help students in Nigeria and across Africa access global education opportunities 
                    with clarity, confidence and integrity.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <Globe className="w-12 h-12 text-secondary mb-4" />
                  <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To be the most trusted education ecosystem for Nigerian students – setting the 
                    standard for ethical, student-first guidance in study abroad services.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at NUMAWAY.
              </p>
            </ScrollReveal>
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
                <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                  <div className="bg-card p-6 rounded-xl shadow-soft h-full hover:shadow-card transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <v.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-muted/50">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="max-w-3xl mx-auto text-center">
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
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether you're still exploring or already decided on a country, our team and tools are ready to support you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/consultation">Book Free Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/about/team">Meet Our Team</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
