import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceDomainBySlug, serviceDomains } from "@/data/serviceDomains";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, Clock, DollarSign, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceDomainDetail = () => {
  const { slug } = useParams();
  const domain = getServiceDomainBySlug(slug || "");

  if (!domain) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service domain you're looking for doesn't exist.</p>
            <Button asChild><Link to="/services">View All Services</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherDomains = serviceDomains.filter(d => d.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={domain.image} 
              alt={domain.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  <domain.icon className="w-4 h-4" />
                  Domain {domain.id}
                </span>
                {domain.isFree && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                    FREE FOR STUDENTS
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4"
              >
                {domain.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-xl text-secondary font-medium mb-4"
              >
                {domain.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-foreground/80 mb-8"
              >
                {domain.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link to="/consultation">
                    Book Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Free Consultation Banner */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center text-sm">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-secondary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                What's Included in {domain.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive services designed to support every aspect of your journey.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domain.subServices.map((sub, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 0.05}>
                  <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all h-full">
                    <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center mb-6 transition-colors">
                      <sub.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-secondary transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">{sub.description}</p>
                    
                    <ul className="space-y-2">
                      {sub.features.slice(0, 4).map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {sub.features.length > 4 && (
                        <li className="text-sm text-muted-foreground pl-6">
                          +{sub.features.length - 4} more
                        </li>
                      )}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Accordion */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold mb-8 text-center">
                Complete Feature List
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {domain.subServices.map((sub, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      <div className="flex items-center gap-3">
                        <sub.icon className="w-5 h-5 text-secondary" />
                        {sub.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">{sub.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {sub.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))
                        }
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Our expert counsellors are here to help you navigate your study abroad journey. 
                  Book a free consultation today — no pressure, no hidden fees.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button size="lg" variant="secondary" className="gap-2" asChild>
                    <Link to="/consultation">
                      Book Free Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/contact">
                      <Phone className="w-4 h-4" /> Contact Form
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-primary-foreground/60">
                  Or email us at <a href="mailto:hello@numaway.com" className="underline hover:text-secondary">hello@numaway.com</a>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Other Domains */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-8 text-center">
                Explore Other Service Domains
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherDomains.map((d, i) => (
                  <Link 
                    key={d.slug} 
                    to={`/services/${d.slug}`}
                    className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all"
                  >
                    <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <d.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{d.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">
                      Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
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

export default ServiceDomainDetail;
