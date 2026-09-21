"use client";
import { useParams, useLocation, Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Sparkles, XCircle, Timer, Shield, Clock, Award, DollarSign, TrendingUp, AlertTriangle, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const ServiceDetail = (): JSX.Element => {
  const { slug: paramSlug } = useParams();
  const { pathname } = useLocation();
  // Static routes (e.g. services/application-support) have no :slug param — fall back to pathname
  const slug = paramSlug || pathname.split("/").filter(Boolean).pop();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead
          title="Service Not Found"
          description="Browse all Numaway student services for study abroad support, visa guidance, and university applications."
          canonical="/services"
          noIndex={true}
        />
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

  const serviceSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://numaway.com/services/${service.slug}`,
    provider: { "@id": "https://numaway.com/#org" },
    serviceType: "Educational Consultancy",
    areaServed: ["AF", "EU"],
  };

  // Service-specific turnaround times
  const turnaroundTimes: Record<string, { estimate: string; note: string }> = {
    "study-abroad-counselling": { estimate: "24–48 hours", note: "Initial consultation booking" },
    "application-support": { estimate: "2–4 business days", note: "Per application review" },
    "offer-decision-support": { estimate: "1–2 business days", note: "Offer comparison analysis" },
    "visa-preparation": { estimate: "5–7 business days", note: "Complete visa document prep" },
    "accommodation-landing": { estimate: "3–5 business days", note: "Housing guidance report" },
    "exams-support": { estimate: "2–3 business days", note: "Exam planning consultation" },
    "exam-support": { estimate: "2–3 business days", note: "Exam planning consultation" },
    "scholarships-funding": { estimate: "5–7 business days", note: "Scholarship matching report" },
    "genie": { estimate: "Instant", note: "24/7 AI availability" },
    "student-profiling": { estimate: "24–48 hours", note: "Profile assessment and report" },
    "program-selection": { estimate: "3–5 business days", note: "Shortlist and advisory session" },
    "pre-departure": { estimate: "1–2 weeks", note: "Full academy completion" },
    "post-arrival": { estimate: "Ongoing", note: "30/60/90-day check-in programme" },
  };

  // Service-specific "What We Don't Do"
  const whatWeDontDo: Record<string, string[]> = {
    "study-abroad-counselling": [
      "We don't guarantee admission to any university",
      "We don't make decisions for you, we inform and guide",
      "We don't push schools that pay us more over schools that fit you"
    ],
    "application-support": [
      "We don't write your statements for you (we coach and refine)",
      "We don't submit applications without your review and approval",
      "We don't fabricate any information in your applications"
    ],
    "offer-decision-support": [
      "We don't choose your offer for you, we help you understand options",
      "We don't negotiate fees with universities on your behalf",
      "We don't guarantee scholarship amounts or discounts"
    ],
    "visa-preparation": [
      "We do NOT provide licensed immigration advice",
      "We do NOT guarantee visa approval",
      "We do NOT handle embassy appointments or submissions directly"
    ],
    "accommodation-landing": [
      "We do NOT book accommodation on your behalf",
      "We do NOT guarantee specific housing availability",
      "We do NOT handle rental payments or deposits"
    ],
    "exams-support": [
      "We do NOT offer intensive exam tutoring",
      "We do NOT register you for exams",
      "We do NOT guarantee specific score improvements"
    ],
    "scholarships-funding": [
      "We do NOT guarantee any scholarship awards",
      "We do NOT fabricate eligibility criteria",
      "We do NOT promise full funding for any student"
    ],
    "genie": [
      "Genie does not replace human counsellors for complex decisions",
      "Genie does not verify documents or process applications",
      "Genie recommendations should always be verified with your counsellor"
    ]
  };

  const currentTurnaround = turnaroundTimes[slug || ""] || { estimate: "2–5 business days", note: "Standard processing" };
  const currentWhatWeDontDo = whatWeDontDo[slug || ""] || [
    "We don't make guarantees we can't keep",
    "We don't take shortcuts with your future",
    "We don't compromise on honesty or ethics"
  ];

  const serviceImages: Record<string, string> = {
    "study-abroad-counselling": "/images/services/service-counselling.jpg",
    "application-support": "/images/heroes/student-2-600.jpg",
    "offer-decision-support": "/images/heroes/student-graduate-1.jpg",
    "visa-preparation": "/images/services/service-compliance.jpg",
    "accommodation-landing": "/images/heroes/student-campus-2.jpg",
    "exams-support": "/images/heroes/student-library-3.jpg",
    "scholarships-funding": "/images/services/service-premium.jpg",
    "genie": "/images/services/service-digital.jpg",
    "student-profiling": "/images/services/service-counselling.jpg",
    "program-selection": "/images/heroes/student-diploma-4.jpg",
    "exam-support": "/images/heroes/student-library-3.jpg",
    "pre-departure": "/images/heroes/student-airport-5.jpg",
    "post-arrival": "/images/heroes/student-campus-2.jpg",
  };
  const serviceImage = serviceImages[service.slug] ?? "/images/heroes/student-library-3.jpg";

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={`${service.title}: Numaway Student Services`}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
        jsonLd={serviceSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: service.title },
                ]}
                className="mb-6 justify-center text-primary-foreground/70"
              />
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

        {/* Quick Stats Bar */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center text-sm">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-secondary" />
                <span className="font-medium">Turnaround: {currentTurnaround.estimate}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-secondary" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="font-medium">Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span className="font-medium">97% Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Who Is It For */}
                {service.whoIsItFor && service.whoIsItFor.length > 0 && (
                  <ScrollReveal animation="fade-up">
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
                  </ScrollReveal>
                )}

                {/* What's Included */}
                <ScrollReveal animation="fade-up">
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
                </ScrollReveal>

                {/* How It Works */}
                <ScrollReveal animation="fade-up">
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
                </ScrollReveal>

                {/* Turnaround Time */}
                <ScrollReveal animation="fade-up">
                  <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Timer className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold mb-2">Expected Turnaround Time</h3>
                        <p className="text-2xl font-bold text-secondary mb-1">{currentTurnaround.estimate}</p>
                        <p className="text-muted-foreground text-sm">
                          {currentTurnaround.note}. Times may vary during peak admission seasons. VIP clients receive priority processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* What We DON'T Do */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                      What We <span className="text-destructive">Don't</span> Do
                    </h2>
                    <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-destructive">
                      <p className="text-muted-foreground mb-4 text-sm">Honesty means being clear about our limits:</p>
                      <ul className="space-y-3">
                        {currentWhatWeDontDo.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Sage & App Support */}
                <ScrollReveal animation="fade-up">
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
                </ScrollReveal>

                {/* Evidence & Success Stories */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                      Evidence of Impact
                    </h2>
                    <img
                      src={serviceImage}
                      alt={`${service.title} — students consulting with a Numaway adviser`}
                      className="w-full rounded-xl object-cover h-52 mb-6"
                      loading="lazy"
                      width="800"
                      height="208"
                    />
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-card rounded-xl p-4 text-center shadow-soft">
                        <div className="text-2xl font-bold text-secondary">97%</div>
                        <div className="text-sm text-muted-foreground">Student Satisfaction</div>
                      </div>
                      <div className="bg-card rounded-xl p-4 text-center shadow-soft">
                        <div className="text-2xl font-bold text-secondary">10,000+</div>
                        <div className="text-sm text-muted-foreground">Students Helped</div>
                      </div>
                      <div className="bg-card rounded-xl p-4 text-center shadow-soft">
                        <div className="text-2xl font-bold text-secondary">150+</div>
                        <div className="text-sm text-muted-foreground">University Partners</div>
                      </div>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-soft">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <p className="italic text-muted-foreground mb-2">
                            "The structured approach made everything less overwhelming. I knew exactly what to expect and when."
                          </p>
                          <p className="text-sm font-medium">,  NUMAWAY Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Outcomes */}
                {service.outcomes && service.outcomes.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <div>
                      <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                        <Target className="w-6 h-6 text-secondary" />
                        What You Walk Away With
                      </h2>
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
                  </ScrollReveal>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <ScrollReveal animation="fade-up">
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
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="text-xl font-display font-bold mb-4">Get Started</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to begin? Book a free consultation to discuss your needs.
                  </p>

                  {/* Pricing Info */}
                  <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      <span className="font-semibold">Pricing</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Free for most students applying to partner universities. Service fees apply for non-partner schools or premium options.
                    </p>
                  </div>

                  <Button variant="hero" className="w-full mb-3" asChild>
                    <Link to="/consultation">
                      Book Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>

                  {/* Turnaround Quick View */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Turnaround Time</span>
                    </div>
                    <p className="text-lg font-bold text-secondary">{currentTurnaround.estimate}</p>
                  </div>

                  {/* Other Services */}
                  <div className="mt-6 pt-6 border-t border-border">
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
          <div className="container-default text-center">
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
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;


