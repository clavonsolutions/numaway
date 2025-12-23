import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceDomainBySlug, serviceDomains } from "@/data/serviceDomains";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone, MessageCircle, Shield, Clock, DollarSign, ChevronRight, Users, Sparkles, XCircle, Timer, Award, TrendingUp, AlertTriangle, Target, Heart, FileCheck } from "lucide-react";
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

  // Domain-specific turnaround times
  const domainTurnarounds: Record<string, { primary: string; range: string }> = {
    "student-services": { primary: "24–48 hours", range: "Initial consultation to full support" },
    "university-partnerships": { primary: "2–3 business days", range: "Partner onboarding and setup" },
    "digital-services": { primary: "Instant", range: "AI and portal access" },
    "compliance-services": { primary: "3–5 business days", range: "Document verification and QC" },
    "community-services": { primary: "1–2 business days", range: "Community access and engagement" },
    "consulting-services": { primary: "5–10 business days", range: "Report delivery and advisory" },
    "events-services": { primary: "Varies", range: "Event-specific timelines" },
    "premium-services": { primary: "Priority: 24 hours", range: "Accelerated VIP processing" },
    "future-services": { primary: "Coming Soon", range: "Join waitlist for early access" }
  };

  // Domain-specific "What We Don't Do"
  const domainWhatWeDontDo: Record<string, string[]> = {
    "student-services": [
      "We do NOT guarantee admission to any university",
      "We do NOT provide licensed immigration or legal advice",
      "We do NOT write fake documents, statements, or references",
      "We do NOT book flights, hotels, or make travel arrangements",
      "We do NOT process payments to universities on your behalf"
    ],
    "university-partnerships": [
      "We do NOT send unqualified or unscreened students",
      "We do NOT guarantee enrollment numbers",
      "We do NOT engage in fraudulent or unethical recruitment",
      "We do NOT share student data without proper consent"
    ],
    "digital-services": [
      "AI recommendations should always be verified with a counsellor",
      "We do NOT guarantee AI-generated content is 100% accurate",
      "Portal access does NOT replace human advisory support"
    ],
    "compliance-services": [
      "We do NOT certify documents as legally verified",
      "We do NOT provide legal compliance advice",
      "We do NOT guarantee regulatory approval"
    ],
    "community-services": [
      "We do NOT guarantee job placements or outcomes",
      "We do NOT provide financial advice to parents",
      "Community connections are peer-based, not professional services"
    ],
    "consulting-services": [
      "We do NOT guarantee policy changes or outcomes",
      "We do NOT implement solutions without institutional buy-in",
      "Advisory recommendations are guidance, not mandates"
    ],
    "events-services": [
      "We do NOT guarantee event attendance numbers",
      "We do NOT guarantee admissions from event participation",
      "Content co-production requires partner collaboration"
    ],
    "premium-services": [
      "Premium services do NOT guarantee admission or visa approval",
      "VIP support does NOT bypass university or embassy requirements",
      "Accelerated processing does NOT mean shortcuts or compromises"
    ],
    "future-services": [
      "Future services are subject to development timelines",
      "Features may change before official launch",
      "Early access does NOT guarantee specific features"
    ]
  };

  const currentTurnaround = domainTurnarounds[slug || ""] || { primary: "Varies", range: "Service-dependent" };
  const currentWhatWeDontDo = domainWhatWeDontDo[slug || ""] || [
    "We don't make guarantees we can't keep",
    "We don't take shortcuts with your future",
    "We don't compromise on honesty or ethics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={domain.image} 
              alt={domain.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 mb-6"
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

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-secondary font-semibold text-lg mb-2"
              >
                {domain.header}
              </motion.p>

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
                className="text-xl text-primary-foreground/90 font-medium mb-4"
              >
                {domain.subheader}
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

        {/* Quick Stats Banner */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center text-sm">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-secondary" />
                <span className="font-medium">Turnaround: {currentTurnaround.primary}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-secondary" />
                <span className="font-medium">{domain.isFree ? "Free for Students" : "Transparent Pricing"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span className="font-medium">97% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Count Overview */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                {domain.subServices.length} Services Included
              </div>
              <p className="text-muted-foreground">
                Everything you need for {domain.title.toLowerCase()}, delivered with excellence and backed by our free consultation promise.
              </p>
            </div>
          </div>
        </section>

        {/* Turnaround & Evidence Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Turnaround Time */}
                <ScrollReveal animation="fade-up">
                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                        <Timer className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <h3 className="text-xl font-display font-bold">Turnaround Time</h3>
                    </div>
                    <p className="text-3xl font-bold text-secondary mb-2">{currentTurnaround.primary}</p>
                    <p className="text-muted-foreground text-sm mb-4">{currentTurnaround.range}</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>VIP clients receive priority processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span>Peak season timelines communicated upfront</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Evidence of Excellence */}
                <ScrollReveal animation="fade-up" delay={0.1}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-display font-bold">Evidence of Excellence</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">10,000+</div>
                        <div className="text-xs text-muted-foreground">Students Helped</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">97%</div>
                        <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">150+</div>
                        <div className="text-xs text-muted-foreground">Partner Universities</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">85%</div>
                        <div className="text-xs text-muted-foreground">Visa Success</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* What We DON'T Do */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h2 className="text-2xl lg:text-3xl font-display font-bold">
                    What We <span className="text-destructive">Don't</span> Do
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparency means being honest about our limits. Here's what this service domain doesn't cover.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border-l-4 border-destructive">
                <ul className="grid md:grid-cols-2 gap-4">
                  {currentWhatWeDontDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  We focus on what we do best: honest guidance, structured support, and intelligent tools that empower informed decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                  How This Service Is Priced
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We believe in transparent pricing with no hidden fees or surprises.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Commission-Based</h3>
                  <p className="text-sm text-muted-foreground">
                    {domain.isFree 
                      ? "Free for students applying to partner universities. We're paid by institutions, not you."
                      : "Partner institutions pay us, keeping costs transparent and predictable."
                    }
                  </p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Service Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    For non-partner universities or premium services, transparent fees are explained upfront before you proceed.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Your Interest First</h3>
                  <p className="text-sm text-muted-foreground">
                    We never push options that don't fit you. Recommendations are based on your profile, not our revenue.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sub-Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive services designed to support every aspect of your journey.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domain.subServices.map((sub, i) => (
                <ScrollReveal key={sub.id} animation="fade-up" delay={i * 0.05}>
                  <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center transition-colors">
                        <sub.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                        {sub.id}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-secondary transition-colors">
                      {sub.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {sub.shortDescription}
                    </p>

                    {sub.whoItsFor && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <Users className="w-3 h-3" />
                        <span>For: {sub.whoItsFor}</span>
                      </div>
                    )}
                    
                    <ul className="space-y-2 mb-6">
                      {sub.features.slice(0, 3).map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {sub.features.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-6">
                          +{sub.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                      <Link to={sub.ctaLink}>
                        {sub.ctaText} <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
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
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Complete Service Details
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Expand each service to see the full details and all included features.
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                {domain.subServices.map((sub, i) => (
                  <AccordionItem key={sub.id} value={`item-${i}`} className="bg-card rounded-xl shadow-soft px-6 border-none">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <sub.icon className="w-5 h-5 text-secondary" />
                        <div>
                          <span className="block">{sub.title}</span>
                          <span className="text-xs font-normal text-muted-foreground">{sub.id}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-foreground mb-4 font-medium">{sub.longDescription}</p>
                      
                      {sub.whoItsFor && (
                        <div className="flex items-center gap-2 text-sm text-secondary mb-4 bg-secondary/10 px-3 py-2 rounded-lg w-fit">
                          <Users className="w-4 h-4" />
                          <span>Perfect for: {sub.whoItsFor}</span>
                        </div>
                      )}

                      <h4 className="font-semibold text-sm mb-3">What's included:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                        {sub.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="secondary" size="sm" asChild>
                        <Link to={sub.ctaLink}>
                          {sub.ctaText} <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-10 h-10 text-secondary" />
                </motion.div>

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
                  Or email us at <a href="mailto:hello@numaway.com" className="underline hover:text-secondary transition-colors">hello@numaway.com</a>
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
                {otherDomains.map((d) => (
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
                  <Link to="/services">View All 9 Service Domains</Link>
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
