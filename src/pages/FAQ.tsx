import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does NUMAWAY offer?", a: "NUMAWAY provides comprehensive study abroad services including admissions counselling, visa support, scholarship guidance, accommodation assistance, test preparation, and post-arrival support." },
  { q: "How much do NUMAWAY services cost?", a: "We offer a free initial consultation. Service fees vary based on your chosen package and destination. We're committed to transparency — all fees are disclosed upfront with no hidden charges." },
  { q: "Which countries can I study in through NUMAWAY?", a: "We support 15+ countries including UK, USA, Canada, Australia, Germany, Ireland, Netherlands, France, and more. Check our countries page for the full list." },
  { q: "How long does the application process take?", a: "Timelines vary by country and university, but typically 3-6 months from initial consultation to visa approval. We recommend starting 12-18 months before your intended start date." },
  { q: "Do you guarantee university admission?", a: "While we can't guarantee admission (that's the university's decision), our expert guidance significantly improves your chances. We help you apply to universities that match your profile." },
  { q: "Can NUMAWAY help with scholarships?", a: "Yes! We help identify scholarships you qualify for, assist with applications, and review your scholarship essays. Many of our students have secured partial or full scholarships." },
  { q: "What is NUMAWAY Genie?", a: "Genie is our AI-powered assistant that provides instant answers to your study abroad questions 24/7. It complements our human counsellors by handling common queries instantly." },
  { q: "How do I get started with NUMAWAY?", a: "Book a free consultation through our website. A counsellor will assess your profile, understand your goals, and recommend the best path forward." }
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Frequently Asked Questions</motion.h1>
          <p className="text-xl text-primary-foreground/70">Everything you need to know about studying abroad with NUMAWAY</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                <AccordionTrigger className="text-left font-display font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQ;
