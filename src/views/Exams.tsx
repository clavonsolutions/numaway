"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { exams } from "@/data/exams";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Exams = () => (
  <div className="min-h-screen bg-background">
    <PageHead
      title="English and Entrance Exams, IELTS, TOEFL and More"
      description="Prepare for IELTS, TOEFL, SAT, GRE, and GMAT with Numaway's exam guidance and preparation resources."
      canonical="/exams"
    />

    <Header />
    <main>
      <PageHero
        title="Standardised Tests &"
        titleHighlight="Exams"
        description="Standardised tests can be confusing – which one, what score, and when to take it? NUMAWAY helps you understand the main exams used for international study."
      />

      <section className="py-16">
        <div className="container-default">
          <ScrollReveal animation="fade-up" className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Which Exam Do You Need?</h2>
            <p className="text-muted-foreground">
              The exam you need depends on your destination country, university and course. 
              Most universities require proof of English proficiency (IELTS, TOEFL, PTE) for non-native speakers. 
              Some postgraduate programs also require GRE or GMAT. NUMAWAY counsellors can help you identify 
              exactly what you need for your specific pathway.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-0">
        <div className="container-default py-8">
          <img
            src="/images/heroes/student-library-3.jpg"
            alt="Student studying in a library preparing for international exams"
            className="w-full rounded-xl object-cover h-52"
            loading="lazy"
            width="1200"
            height="208"
          />
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container-default">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, i) => (
              <ScrollReveal key={exam.slug} animation="fade-up" delay={i * 0.08}>
                <a 
                  href={`/exams/${exam.slug}`} 
                  className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 block h-full"
                >
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">{exam.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exam.fullName}</p>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{exam.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Fees: {exam.fees}</span>
                    <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-default text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl font-display font-bold mb-4">Need Help Planning Your Exams?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our counsellors can help you understand which exams you need, what scores to aim for, 
              and how to plan your preparation around your application timeline.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/consultation" className="gap-2">
                Get Exam Planning Support 
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Exams;

