import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { serviceDomains } from "@/data/serviceDomains";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Shield, Clock, DollarSign, Sparkles, Users, Building2, School, Globe } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <PageHero
        title="NUMAWAY"
        titleHighlight="Services"
        description="A complete ecosystem built to guide, support, and empower every step of your global education journey."
      />

      {/* Intro Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-lg text-foreground leading-relaxed mb-8">
                NUMAWAY EDUCATION delivers a full spectrum of student, university, digital, compliance, and advisory services 
                designed to remove confusion and increase clarity in the global admissions process. Powered by intelligent 
                systems and world-class operations, NUMAWAY ensures every student and partner receives accurate, timely, 
                and ethical support.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Students</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Parents</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <Building2 className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Universities</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <School className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Schools & Communities</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Governments & Partners</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                Our services span the entire global mobility journey, from career guidance to post-arrival support.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-8 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-secondary" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="font-medium">24hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="font-medium">Trusted by 10,000+ Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Domains Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              9 Service Domains, One Complete Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NUMAWAY is not just an education agency — we're the most complete, intelligent, and globally 
              standardized mobility ecosystem for students, universities, and institutions.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {serviceDomains.map((domain, i) => (
              <ScrollReveal key={domain.slug} animation="fade-up" delay={i * 0.05}>
                <div className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-card transition-all ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className={`relative h-64 lg:h-auto min-h-[350px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={domain.image} 
                        alt={domain.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                          <domain.icon className="w-4 h-4" />
                          Domain {domain.id}
                        </span>
                        {domain.isFree && (
                          <span className="ml-2 inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold">
                            FREE
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <p className="text-secondary font-semibold text-sm mb-2">{domain.header}</p>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">{domain.subheader}</p>
                      <p className="text-foreground mb-6">{domain.description}</p>

                      {/* Sub-services preview */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {domain.subServices.slice(0, 4).map((sub, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{sub.title}</span>
                          </div>
                        ))}
                        {domain.subServices.length > 4 && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>+{domain.subServices.length - 4} more services</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button variant="hero" asChild>
                          <Link to={`/services/${domain.slug}`}>
                            Explore All {domain.subServices.length} Services <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/consultation">Book Free Consultation</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-xl lg:text-2xl text-foreground font-medium mb-4">
              "No fees for most universities – we're paid by our partners, not by pushing you 
              somewhere that's wrong for you."
            </p>
            <p className="text-muted-foreground">
              Honest guidance, transparent options, no pressure. That's the NUMAWAY promise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-10 h-10 text-secondary" />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our consultation is completely free. No pressure, no hidden fees — just honest guidance 
                from experts who've helped thousands of students achieve their dreams.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                    <Phone className="w-4 h-4" /> Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free for Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No Hidden Charges</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="text-center">
            <h3 className="text-2xl font-display font-bold mb-8">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/for-students">For Students</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/for-agents">For Agents</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/for-institutions">For Institutions</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/genie">Try AI Genie</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/scholarships">Scholarships</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
