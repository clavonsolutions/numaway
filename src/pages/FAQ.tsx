import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  { 
    q: "Do you charge students for your services?", 
    a: "For many universities, we are paid by the institution, not by you. In some cases, there may be service fees for specific support (for example, visa or special applications). We explain all costs clearly before you decide." 
  },
  { 
    q: "Can you guarantee admission or visa?", 
    a: "No. No genuine agency can guarantee admission or visa. We help you build strong, honest applications and prepare properly, but final decisions are made by universities and embassies." 
  },
  { 
    q: "Do you help with scholarships?", 
    a: "Yes, we help you identify relevant scholarships and integrate them into your plan. However, scholarships are competitive and depend on your profile and the institution's criteria." 
  },
  { 
    q: "Do you help with local Nigerian universities?", 
    a: "Yes. Through partner universities in Nigeria, we help you apply using the same NUMAWAY structure and support." 
  },
  { 
    q: "Can I work while studying abroad?", 
    a: "Many countries allow students to work part-time under certain conditions. We provide high-level guidance, but you should always check official government sources for the most current rules." 
  },
  { 
    q: "What is NUMAWAY Genie?", 
    a: "Genie is our AI-powered assistant that handles quick questions, planning, basic comparisons and reminders 24/7. It complements our human counsellors – when things are complex or high-stakes, we always involve a human expert." 
  },
  { 
    q: "When should I start the application process?", 
    a: "Ideally, start 12-18 months before your intended start date to allow time for research, exam preparation, applications, and visa processing." 
  },
  { 
    q: "How many universities should I apply to?", 
    a: "We typically recommend applying to 5-8 universities with a mix of ambitious, realistic and safe options. Your counsellor will help you decide based on your profile." 
  },
  { 
    q: "Do you write my personal statement for me?", 
    a: "No. We coach you, give structure and help you refine your own writing. We never fabricate stories – your personal statement must be authentically yours." 
  },
  { 
    q: "What if my visa is rejected?", 
    a: "We analyze the rejection reason and help you understand next steps. In many cases, reapplication with a stronger case is possible. We support you throughout." 
  }
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Frequently Asked Questions
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about studying abroad with NUMAWAY. Can't find your answer? Contact us.
          </p>
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

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">Our team is here to help. Book a free consultation or send us a message.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="/consultation">Book Free Consultation <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQ;