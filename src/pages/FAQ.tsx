import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

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
    q: "What is NUMAWAY Sage?", 
    a: "Sage is our AI-powered assistant that handles quick questions, planning, basic comparisons and reminders 24/7. It complements our human counsellors – when things are complex or high-stakes, we always involve a human expert." 
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
    <main>
      <PageHero
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Everything you need to know about studying abroad with NUMAWAY. Can't find your answer? Contact us."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.05}>
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6 border-none hover:shadow-card transition-shadow">
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-secondary transition-colors">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl font-display font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">Our team is here to help. Book a free consultation or send us a message.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <a href="/consultation" className="gap-2">
                  Book Free Consultation 
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQ;
