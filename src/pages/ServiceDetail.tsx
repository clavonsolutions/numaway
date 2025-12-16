import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild><Link to="/services">View All Services</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <service.icon className="w-10 h-10 text-secondary" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-display font-bold mb-4"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-primary-foreground/70 max-w-2xl mx-auto"
              >
                {service.shortDescription}
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Who Is It For */}
                {service.whoIsItFor && service.whoIsItFor.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                      <Users className="w-6 h-6 text-secondary" />
                      Who This Service Is For
                    </h2>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">This service is ideal if:</p>
                      <ul className="space-y-3">
                        {service.whoIsItFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* What's Included */}
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">What's Included</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How It Works */}
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">How It Works</h2>
                  <div className="space-y-4">
                    {service.howItWorks.map((step) => (
                      <div key={step.step} className="flex gap-4 p-4 bg-card rounded-lg shadow-soft">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sage & App Support */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-2">How Sage & the NUMAWAY App Support This</h3>
                      <p className="text-muted-foreground text-sm">
                        Sage can generate checklists, timelines and quick answers related to this service. 
                        The NUMAWAY App keeps track of your progress and lets you message your counsellor anytime.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                {service.outcomes && service.outcomes.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">What You Walk Away With</h2>
                    <div className="bg-card rounded-xl p-6 shadow-soft">
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {service.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                          <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="text-xl font-display font-bold mb-4">Get Started</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to begin? Book a free consultation to discuss your needs.
                  </p>
                  <Button variant="hero" className="w-full mb-3" asChild>
                    <Link to="/consultation">
                      Book Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>

                  {/* Other Services */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4">Other Services</h4>
                    <div className="space-y-2">
                      {services
                        .filter(s => s.slug !== slug)
                        .slice(0, 4)
                        .map(s => (
                          <Link 
                            key={s.slug} 
                            to={`/services/${s.slug}`}
                            className="block text-sm text-muted-foreground hover:text-secondary transition-colors"
                          >
                            {s.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book a free consultation and let's discuss how we can help you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
