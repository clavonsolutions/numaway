import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { serviceDomains } from "@/data/serviceDomains";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Shield, Clock, DollarSign, Sparkles, Users, Building2, School, Globe, XCircle, Timer, Award, TrendingUp, Heart, Target, FileCheck } from "lucide-react";
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

      {/* Turnaround Time & Trust Banner */}
      <section className="py-8 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-secondary" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-secondary" />
              <span className="font-medium">24–48hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="font-medium">Trusted by 10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary" />
              <span className="font-medium">97% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pricing Philosophy */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                How NUMAWAY Gets Paid (Transparency First)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe you deserve to know how your agency makes money. Our model is designed to keep your interests first.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-secondary">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">University Commissions</h3>
                <p className="text-muted-foreground text-sm">
                  For most partner universities, we're paid by the institution—not by you. This means our services are free for students applying to commission-paying schools.
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-accent">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Service Fees (When Applicable)</h3>
                <p className="text-muted-foreground text-sm">
                  For non-partner universities or premium services (VIP support, intensive coaching), we charge transparent service fees explained upfront.
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-primary">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Never Pushed, Always Protected</h3>
                <p className="text-muted-foreground text-sm">
                  We never push you toward a school just because it pays us more. Your counsellor recommends what fits your profile, not our revenue.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We DON'T Do */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                What NUMAWAY <span className="text-destructive">Does NOT</span> Do
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Honesty means being clear about our limits. Here's what we don't offer—so you're never misled.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "We do NOT guarantee visa approval",
                "We do NOT write fake documents or statements",
                "We do NOT promise admission to any university",
                "We do NOT provide licensed immigration advice",
                "We do NOT book flights or travel on your behalf",
                "We do NOT offer exam tutoring (we provide guidance only)",
                "We do NOT process payments to universities directly",
                "We do NOT make decisions for you—we inform and support",
                "We do NOT pressure you into decisions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                We focus on what we do best: honest guidance, structured support, and intelligent tools that empower you to make the right decisions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Evidence & Track Record */}
      <section className="py-16 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Evidence of Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our results speak louder than promises. Here's what we've achieved with students like you.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { stat: "10,000+", label: "Students Guided", icon: Users },
                { stat: "97%", label: "Student Satisfaction", icon: Heart },
                { stat: "85%", label: "Visa Success Rate", icon: Award },
                { stat: "150+", label: "University Partners", icon: Building2 }
              ].map((item, i) => (
                <div key={i} className="text-center bg-card rounded-2xl p-6 shadow-soft">
                  <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-1">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial Highlight */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div>
                  <p className="text-lg italic mb-4">
                    "NUMAWAY didn't just help me get into university—they helped me understand what I was getting into. 
                    The transparency about costs, the honest feedback on my chances, and the structured support made all the difference."
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold">Chioma Adeyemi</p>
                      <p className="text-sm text-muted-foreground">MSc Business Analytics, University of Manchester</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Turnaround Times */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Our Service Turnaround Times
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We respect your time. Here's what you can expect for each service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { service: "Initial Consultation Booking", time: "Within 24 hours", icon: Clock },
                { service: "Student Profile Assessment", time: "2–3 business days", icon: Target },
                { service: "University Shortlist Preparation", time: "3–5 business days", icon: FileCheck },
                { service: "Application Document Review", time: "2–4 business days per application", icon: FileCheck },
                { service: "SOP/Personal Statement Feedback", time: "3–5 business days", icon: FileCheck },
                { service: "Visa Document Preparation", time: "5–7 business days", icon: Sparkles },
                { service: "Scholarship Application Support", time: "5–7 business days", icon: Award },
                { service: "Emergency/Priority Requests", time: "24–48 hours (VIP)", icon: Timer }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{item.service}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                * Turnaround times may vary during peak admission seasons (September–January). VIP clients receive priority processing.
              </p>
            </div>
          </ScrollReveal>
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
                <Link to="/sage">Try Sage AI</Link>
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
