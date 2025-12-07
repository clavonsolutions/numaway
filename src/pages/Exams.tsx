import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { exams } from "@/data/exams";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Exams = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Standardised Tests & Exams
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Standardised tests can be confusing – which one, what score, and when to take it? 
            NUMAWAY helps you understand the main exams used for international study.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Which Exam Do You Need?</h2>
            <p className="text-muted-foreground">
              The exam you need depends on your destination country, university and course. 
              Most universities require proof of English proficiency (IELTS, TOEFL, PTE) for non-native speakers. 
              Some postgraduate programs also require GRE or GMAT. NUMAWAY counsellors can help you identify 
              exactly what you need for your specific pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, i) => (
              <motion.a 
                key={exam.slug} 
                href={`/exams/${exam.slug}`} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2"
              >
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">{exam.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exam.fullName}</p>
                <p className="text-muted-foreground mb-4 line-clamp-2">{exam.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Fees: {exam.fees}</span>
                  <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need Help Planning Your Exams?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our counsellors can help you understand which exams you need, what scores to aim for, 
            and how to plan your preparation around your application timeline.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/consultation">Get Exam Planning Support <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Exams;