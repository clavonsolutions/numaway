"use client";
import { useParams, Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUniversityBySlug, universities } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { MapPin, Trophy, Users, Calendar, CheckCircle, Globe, GraduationCap, Home, Briefcase, FileText, Plane, ChevronRight, Sparkles, HelpCircle, Building2, BookOpen, DollarSign, Shield } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const UniversityDetail = () => {
  const { slug } = useParams();
  const uni = getUniversityBySlug(slug || "");
  
  if (!uni) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead title="University Not Found" description="Browse 150+ partner universities worldwide. Numaway helps students from Nigeria and Africa apply to top institutions." canonical="/universities" noIndex={true} />
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🎓</span>
            <h1 className="text-4xl font-display font-bold mb-4">University Not Found</h1>
            <p className="text-muted-foreground mb-8">The university you're looking for doesn't exist.</p>
            <Button asChild><Link to="/universities">View All Universities</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedUniversities = universities.filter(u => u.countrySlug === uni.countrySlug && u.slug !== uni.slug).slice(0, 3);

  // Generate FAQs based on university data
  const universityFaqs = [
    { q: `What are the entry requirements for ${uni.name}?`, a: uni.entryRequirements.join(", ") + ". Requirements vary by program - always check specific course requirements." },
    { q: `How much does it cost to study at ${uni.name}?`, a: `Tuition ranges from ${uni.tuitionRange}. Living costs in ${uni.city} are approximately ${uni.livingCost}. Budget for additional costs like insurance, books, and personal expenses.` },
    { q: `What scholarships are available at ${uni.name}?`, a: `Available scholarships include: ${uni.scholarships.join(", ")}. Many scholarships have early deadlines, so apply as soon as possible.` },
    { q: `What is the acceptance rate at ${uni.name}?`, a: `The overall acceptance rate is around ${uni.acceptanceRate}. However, this varies significantly by program - competitive programs like medicine or law may have much lower rates.` },
    { q: `When should I apply to ${uni.name}?`, a: `Key deadline: ${uni.applicationDeadlines}. We recommend starting your application 12-18 months before your intended start date to allow time for test preparation and document gathering.` },
    { q: `Can international students work while studying at ${uni.name}?`, a: `Yes, international students in ${uni.country} can typically work part-time during studies (usually 20 hours/week during term). Check visa conditions for specific rules.` },
    { q: `What support is available for international students?`, a: `${uni.name} offers dedicated international student services including orientation programs, academic support, career services, and often has an active Nigerian student community.` },
    { q: `How do I apply through NUMAWAY?`, a: `Book a free consultation with a NUMAWAY counsellor who will assess your profile, help you prepare documents, guide you through the application process, and track your application status.` }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={`${uni.name} - Rankings, Courses and How to Apply`}
        description={uni.description.slice(0, 155)}
        canonical={`/universities/${slug}`}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section with Snapshot */}
        <section className="relative h-80 lg:h-96 bg-gradient-hero">
          <img src={uni.image} alt={uni.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
          <div className="container-default h-full flex items-end pb-8 relative z-10">
            <div className="flex items-end gap-6">
              {uni.logo && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 shrink-0"
                >
                  <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-contain" />
                </motion.div>
              )}
              <div className="text-primary-foreground">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-2"
                >
                  <Trophy className="w-5 h-5 text-secondary" />
                  <span className="text-secondary font-semibold">#{uni.ranking} {uni.rankingSource}</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl lg:text-4xl font-display font-bold mb-2"
                >
                  {uni.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-primary-foreground/70"
                >
                  <span className="text-2xl">{uni.countryFlag}</span>
                  <MapPin className="w-4 h-4" />{uni.city}, {uni.country}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="bg-card border-b border-border">
          <div className="container-default">
            <div className="flex flex-wrap justify-center lg:justify-between gap-4 py-4">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">Type:</span>
                <span className="font-medium">{uni.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">Founded:</span>
                <span className="font-medium">{uni.founded}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">Students:</span>
                <span className="font-medium">{uni.students}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">International:</span>
                <span className="font-medium">{uni.internationalStudents}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">Acceptance:</span>
                <span className="font-medium">{uni.acceptanceRate}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-secondary" />
                      Overview
                    </h2>
                    <p className="text-muted-foreground mb-4">{uni.description}</p>
                    <div className="space-y-2">
                      {uni.overview.map((o, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Why This University */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      Why Choose {uni.name}?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-2">Academic Excellence</h4>
                        <p className="text-sm text-muted-foreground">Ranked #{uni.ranking} globally with world-class faculty and research facilities.</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-2">Global Recognition</h4>
                        <p className="text-sm text-muted-foreground">Degrees recognized worldwide with strong employer reputation.</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-2">International Community</h4>
                        <p className="text-sm text-muted-foreground">{uni.internationalStudents} international students from diverse backgrounds.</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-2">Prime Location</h4>
                        <p className="text-sm text-muted-foreground">Located in {uni.city}, offering rich cultural experiences and career opportunities.</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Entry Requirements */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      Entry Requirements
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <h4 className="font-semibold mb-3">General Requirements</h4>
                      <div className="space-y-2 mb-6">
                        {uni.entryRequirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3">English Language Requirements</h4>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="font-bold text-secondary">IELTS</div>
                            <div className="text-sm text-muted-foreground">6.5 - 7.5+</div>
                          </div>
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="font-bold text-secondary">TOEFL</div>
                            <div className="text-sm text-muted-foreground">90 - 110+</div>
                          </div>
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="font-bold text-secondary">Duolingo</div>
                            <div className="text-sm text-muted-foreground">110 - 130+</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">*Requirements vary by program. Check specific course requirements.</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Tuition & Costs */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      Tuition & Costs
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Annual Tuition</div>
                          <div className="text-2xl font-bold text-secondary">{uni.tuitionRange}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Living Costs (Annual)</div>
                          <div className="text-2xl font-bold">{uni.livingCost}</div>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Estimated Total Annual Cost</h4>
                        <p className="text-sm text-muted-foreground">
                          Including tuition, accommodation, food, transport, insurance, and personal expenses. 
                          Actual costs depend on lifestyle and accommodation choices.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Scholarships */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-secondary" />
                      Scholarships & Financial Aid
                    </h2>
                    <div className="space-y-3">
                      {uni.scholarships.map((s, i) => (
                        <div key={i} className="p-4 bg-card rounded-xl shadow-soft flex items-start gap-3">
                          <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-4 h-4 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{s}</h4>
                            <p className="text-sm text-muted-foreground">Apply early - many scholarships have early deadlines</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-secondary/10 rounded-xl">
                      <p className="text-sm text-secondary font-medium">
                        💡 Tip: NUMAWAY can help you identify and apply for relevant scholarships as part of your application support.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Popular Courses */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      Popular Courses
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {uni.popularCourses.map((c, i) => (
                        <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Employability & Outcomes */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-secondary" />
                      Employability & Career Outcomes
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">90%+</div>
                          <div className="text-sm text-muted-foreground">Graduate Employment</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">Top 50</div>
                          <div className="text-sm text-muted-foreground">Employer Reputation</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-secondary mb-1">Active</div>
                          <div className="text-sm text-muted-foreground">Alumni Network</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Graduates from {uni.name} are highly sought after by employers globally. 
                        The university offers career services, internship programs, and industry connections 
                        to help students transition into the workforce.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Housing & Student Life */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Home className="w-5 h-5 text-secondary" />
                      Housing & Student Life
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card p-5 rounded-xl shadow-soft">
                        <h4 className="font-semibold mb-2">Accommodation Options</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• On-campus halls of residence</li>
                          <li>• University-managed housing</li>
                          <li>• Private student accommodation</li>
                          <li>• Shared flats/apartments</li>
                        </ul>
                      </div>
                      <div className="bg-card p-5 rounded-xl shadow-soft">
                        <h4 className="font-semibold mb-2">Campus Facilities</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {uni.facilities.slice(0, 4).map((f, i) => (
                            <li key={i}>• {f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Location Guide */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      {uni.city} - Location Guide
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Living in {uni.city}</h4>
                          <p className="text-sm text-muted-foreground">
                            {uni.city} is a vibrant city with excellent transport links, cultural attractions, 
                            and a welcoming international community. The cost of living is {uni.livingCost} annually.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Safety & Transport</h4>
                          <p className="text-sm text-muted-foreground">
                            {uni.country} is generally safe for international students. Public transport 
                            is reliable, and many cities offer student discounts on travel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Visa Considerations */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-secondary" />
                      Visa Considerations for {uni.country}
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-4">
                            International students need a valid student visa to study in {uni.country}. 
                            Requirements typically include proof of acceptance, financial capability, 
                            English proficiency, and valid passport.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            NUMAWAY provides visa preparation support - we help you organize documents, 
                            understand requirements, and prepare for your visa application. We do not 
                            provide legal or immigration advice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Apply with NUMAWAY */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-secondary" />
                      Apply with NUMAWAY
                    </h2>
                    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-xl">
                      <div className="grid sm:grid-cols-4 gap-4 mb-6">
                        {[
                          { step: 1, title: "Free Consultation", desc: "Discuss your goals and profile" },
                          { step: 2, title: "Document Prep", desc: "Organize and review documents" },
                          { step: 3, title: "Apply", desc: "Submit strong applications" },
                          { step: 4, title: "Track & Support", desc: "Monitor progress to arrival" }
                        ].map((s) => (
                          <div key={s.step} className="text-center">
                            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mx-auto mb-2">
                              {s.step}
                            </div>
                            <h4 className="font-semibold text-sm">{s.title}</h4>
                            <p className="text-xs text-muted-foreground">{s.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <Button variant="hero" size="lg" asChild>
                          <Link to="/consultation">
                            Start Your Application <ChevronRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* FAQs */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-secondary" />
                      Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {universityFaqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                          <AccordionTrigger className="text-left font-semibold text-sm">{faq.q}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm">{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ScrollReveal>

                {/* Related Universities */}
                {relatedUniversities.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <div>
                      <h2 className="text-xl font-display font-bold mb-4">Other Universities in {uni.country}</h2>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {relatedUniversities.map((related) => (
                          <Link
                            key={related.slug}
                            to={`/universities/${related.slug}`}
                            className="group bg-card p-4 rounded-xl shadow-soft hover:shadow-card transition-all"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              {related.logo && (
                                <img src={related.logo} alt={related.name} className="w-8 h-8 object-contain" />
                              )}
                              <Trophy className="w-4 h-4 text-secondary" />
                              <span className="text-sm text-muted-foreground">#{related.ranking}</span>
                            </div>
                            <h4 className="font-semibold group-hover:text-secondary transition-colors text-sm">{related.name}</h4>
                            <p className="text-xs text-muted-foreground">{related.city}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-2">Tuition Fees</h3>
                  <p className="text-2xl font-bold text-secondary mb-2">{uni.tuitionRange}</p>
                  <p className="text-sm text-muted-foreground mb-6">Living: {uni.livingCost}</p>
                  
                  <Button variant="hero" className="w-full mb-3" asChild>
                    <Link to="/consultation">Apply via NUMAWAY</Link>
                  </Button>
                  <Button variant="outline" className="w-full mb-6" asChild>
                    <Link to={`/countries/${uni.countrySlug}`}>Explore {uni.country}</Link>
                  </Button>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold mb-3 text-sm">Key Dates</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Application Deadline:</span>
                        <span className="font-medium">{uni.applicationDeadlines}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="text-sm font-medium">Ask Sage</p>
                        <p className="text-xs text-muted-foreground">Get instant answers about {uni.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityDetail;

