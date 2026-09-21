"use client";
import { useParams, Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getExamBySlug, exams } from "@/data/exams";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Calendar, CheckCircle, AlertTriangle, HelpCircle, BookOpen, Target, Sparkles, ChevronRight, FileText, Globe, Lightbulb, Timer } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ExamDetail = (): JSX.Element => {
  const { slug } = useParams();
  const exam = getExamBySlug(slug || "");
  
  if (!exam) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead title="Exam Not Found" description="Explore Numaway exam guides for IELTS, TOEFL, GRE, GMAT, SAT, PTE and Duolingo English Test preparation." canonical="/exams" noIndex={true} />
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">📝</span>
            <h1 className="text-4xl font-display font-bold mb-4">Exam Not Found</h1>
            <p className="text-muted-foreground mb-8">The exam you're looking for doesn't exist.</p>
            <Button asChild><Link to="/exams">View All Exams</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const otherExams = exams.filter(e => e.slug !== slug).slice(0, 4);

  const examSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: exam.name,
    description: exam.description,
    url: `https://numaway.com/exams/${slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "English Language Proficiency and Standardised Exams",
    },
  };

  // Generate score requirements by program type
  const scoreRequirements = {
    ielts: [
      { program: "Foundation Programs", score: "5.0 - 5.5" },
      { program: "Undergraduate (General)", score: "6.0 - 6.5" },
      { program: "Undergraduate (Competitive)", score: "6.5 - 7.0" },
      { program: "Postgraduate (General)", score: "6.5 - 7.0" },
      { program: "MBA Programs", score: "7.0+" },
      { program: "Medicine/Law", score: "7.0 - 7.5+" }
    ],
    toefl: [
      { program: "Foundation Programs", score: "60 - 70" },
      { program: "Undergraduate (General)", score: "80 - 90" },
      { program: "Undergraduate (Competitive)", score: "90 - 100" },
      { program: "Postgraduate (General)", score: "90 - 100" },
      { program: "MBA Programs", score: "100+" },
      { program: "Medicine/Law", score: "100 - 110+" }
    ],
    gre: [
      { program: "Master's (General)", score: "300 - 310" },
      { program: "Master's (Competitive)", score: "310 - 320" },
      { program: "Top Programs", score: "320+" },
      { program: "PhD Programs", score: "315+" },
      { program: "STEM Programs", score: "Quant 160+" },
      { program: "Humanities", score: "Verbal 160+" }
    ],
    gmat: [
      { program: "MBA (Average)", score: "550 - 650" },
      { program: "MBA (Good)", score: "650 - 700" },
      { program: "Top 50 MBA", score: "700+" },
      { program: "Top 20 MBA", score: "720+" },
      { program: "Top 10 MBA", score: "730+" },
      { program: "Executive MBA", score: "600+" }
    ],
    sat: [
      { program: "Community College", score: "900 - 1000" },
      { program: "Average Universities", score: "1000 - 1200" },
      { program: "Competitive Universities", score: "1200 - 1400" },
      { program: "Top 50 Universities", score: "1400+" },
      { program: "Ivy League", score: "1500+" },
      { program: "Merit Scholarships", score: "1400+" }
    ],
    pte: [
      { program: "Foundation Programs", score: "42 - 50" },
      { program: "Undergraduate (General)", score: "50 - 58" },
      { program: "Undergraduate (Competitive)", score: "58 - 65" },
      { program: "Postgraduate (General)", score: "58 - 65" },
      { program: "Australian Immigration", score: "65+" },
      { program: "Medicine/Law", score: "65 - 73+" }
    ],
    det: [
      { program: "Foundation Programs", score: "90 - 100" },
      { program: "Undergraduate (General)", score: "100 - 115" },
      { program: "Undergraduate (Competitive)", score: "115 - 125" },
      { program: "Postgraduate (General)", score: "115 - 125" },
      { program: "Top Programs", score: "125+" },
      { program: "Note", score: "Check university acceptance" }
    ]
  };

  const examScores = scoreRequirements[exam.slug as keyof typeof scoreRequirements] || [];

  // Generate preparation plans
  const prepPlans = {
    short: { duration: "2 Weeks", desc: "Intensive review for those already proficient", focus: "Practice tests, timing, strategy refinement" },
    medium: { duration: "1 Month", desc: "Balanced preparation for most students", focus: "Core skills, practice materials, 2-3 full tests" },
    long: { duration: "3 Months", desc: "Comprehensive preparation for best results", focus: "Foundation building, extensive practice, multiple mock tests" }
  };

  // Common pitfalls
  const commonPitfalls = [
    { mistake: "Not practicing under test conditions", tip: "Take full-length practice tests with exact time limits" },
    { mistake: "Ignoring weaker sections", tip: "Identify weak areas early and allocate more practice time" },
    { mistake: "Waiting too long to take the test", tip: "Book your test 2-3 months in advance to secure your preferred date" },
    { mistake: "Not reviewing mistakes", tip: "Analyze every error to understand why you got it wrong" },
    { mistake: "Relying only on free resources", tip: "Invest in official practice materials for the most accurate preparation" },
    { mistake: "Poor time management during test", tip: "Practice pacing - know how much time per question/section" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={`${exam.name} Exam Guide: Scores, Preparation and Registration`}
        description={exam.description.slice(0, 155)}
        canonical={`/exams/${slug}`}
        jsonLd={examSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <Breadcrumbs
              items={[{ label: "Exams", href: "/exams" }, { label: exam.name }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">{exam.name}</h1>
            <p className="text-xl text-primary-foreground/70 mb-6">{exam.fullName}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">{exam.fees}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Valid: {exam.validity}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Target className="w-4 h-4" />
                <span className="text-sm">Score: {exam.scoring}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* What It Is / Who Needs It */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      What is {exam.name}?
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <p className="text-muted-foreground mb-4">{exam.description}</p>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Purpose</h4>
                        <p className="text-sm text-muted-foreground">{exam.purpose}</p>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Who Needs {exam.name}?</h4>
                        <p className="text-sm text-muted-foreground">{exam.eligibility}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Test Format Breakdown */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      Test Format & Sections
                    </h2>
                    <div className="space-y-4">
                      {exam.sections.map((section, i) => (
                        <div key={i} className="bg-card p-5 rounded-xl shadow-soft">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold flex items-center gap-2">
                              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                                <span className="text-sm font-bold text-secondary">{i + 1}</span>
                              </div>
                              {section.name}
                            </h4>
                            <span className="text-sm bg-muted px-3 py-1 rounded-full flex items-center gap-1">
                              <Timer className="w-3 h-3" />
                              {section.duration}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{section.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-secondary/10 p-4 rounded-xl flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Total Test Time: </span>
                        <span className="text-muted-foreground">
                          {exam.sections.reduce((acc, s) => {
                            const mins = parseInt(s.duration.match(/\d+/)?.[0] || "0");
                            return acc + mins;
                          }, 0)} minutes approximately
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Scoring Details */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-secondary" />
                      Scoring System
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-secondary mb-1">{exam.scoring}</div>
                          <div className="text-sm text-muted-foreground">Score Range</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold mb-1">{exam.validity}</div>
                          <div className="text-sm text-muted-foreground">Score Validity</div>
                        </div>
                      </div>
                      <h4 className="font-semibold mb-3">Score Breakdown</h4>
                      <div className="space-y-2">
                        {exam.scoringDetails.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Score Requirements by Program */}
                {examScores.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-secondary" />
                        Typical Score Requirements
                      </h2>
                      <div className="bg-card rounded-xl shadow-soft overflow-hidden">
                        <div className="grid grid-cols-2 bg-muted/50 p-4 font-semibold text-sm">
                          <div>Program Type</div>
                          <div>Target Score</div>
                        </div>
                        {examScores.map((req, i) => (
                          <div key={i} className={`grid grid-cols-2 p-4 text-sm ${i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}>
                            <div>{req.program}</div>
                            <div className="font-semibold text-secondary">{req.score}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        *Requirements vary by institution. Always check specific program requirements.
                      </p>
                    </div>
                  </ScrollReveal>
                )}

                {/* Exam study illustration */}
                <ScrollReveal animation="fade-up">
                  <img
                    src="/images/heroes/student-library-3.jpg"
                    alt="Student preparing for an English proficiency exam with study materials"
                    className="w-full rounded-xl object-cover h-52"
                    loading="lazy"
                    width="800"
                    height="208"
                  />
                </ScrollReveal>

                {/* Preparation Plans */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-secondary" />
                      Preparation Timeline
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-card p-5 rounded-xl shadow-soft border-t-4 border-accent">
                        <h4 className="font-semibold mb-1">{prepPlans.short.duration}</h4>
                        <p className="text-xs text-muted-foreground mb-3">{prepPlans.short.desc}</p>
                        <p className="text-sm"><strong>Focus:</strong> {prepPlans.short.focus}</p>
                      </div>
                      <div className="bg-card p-5 rounded-xl shadow-soft border-t-4 border-secondary">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{prepPlans.medium.duration}</h4>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded">Recommended</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{prepPlans.medium.desc}</p>
                        <p className="text-sm"><strong>Focus:</strong> {prepPlans.medium.focus}</p>
                      </div>
                      <div className="bg-card p-5 rounded-xl shadow-soft border-t-4 border-gold">
                        <h4 className="font-semibold mb-1">{prepPlans.long.duration}</h4>
                        <p className="text-xs text-muted-foreground mb-3">{prepPlans.long.desc}</p>
                        <p className="text-sm"><strong>Focus:</strong> {prepPlans.long.focus}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Preparation Tips */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-secondary" />
                      Preparation Tips
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {exam.preparationTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-soft">
                          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-secondary">{i + 1}</span>
                          </div>
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Study Resources */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      Recommended Study Resources
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Official Resources</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              Official {exam.name} practice tests
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              Official study guides and books
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              Free sample questions on official website
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Additional Resources</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              Prep courses (online and in-person)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              Mobile apps for practice
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                              YouTube channels and tutorials
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 bg-secondary/10 p-4 rounded-lg">
                        <p className="text-sm text-secondary font-medium">
                          💡 NUMAWAY can recommend specific resources and help you create a study plan tailored to your timeline and target score.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Registration Steps */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      How to Register
                    </h2>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary/20" />
                      <div className="space-y-4">
                        {exam.registrationSteps.map((step, i) => (
                          <div key={i} className="relative pl-12">
                            <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                              {i + 1}
                            </div>
                            <div className="bg-card p-4 rounded-xl shadow-soft">
                              <p className="text-sm">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Common Pitfalls */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-secondary" />
                      Common Pitfalls to Avoid
                    </h2>
                    <div className="space-y-3">
                      {commonPitfalls.map((item, i) => (
                        <div key={i} className="bg-card p-4 rounded-xl shadow-soft">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="w-4 h-4 text-destructive" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-destructive mb-1">{item.mistake}</h4>
                              <p className="text-sm text-muted-foreground flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                {item.tip}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Accepted By */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-secondary" />
                      Where {exam.name} is Accepted
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {exam.acceptedBy.map((place, i) => (
                        <span key={i} className="px-4 py-2 bg-card rounded-full shadow-soft text-sm">
                          {place}
                        </span>
                      ))}
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
                      {exam.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                          <AccordionTrigger className="text-left font-semibold text-sm">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ScrollReveal>

                {/* Other Exams */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4">Other Exams</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {otherExams.map((other) => (
                        <Link
                          key={other.slug}
                          to={`/exams/${other.slug}`}
                          className="group bg-card p-4 rounded-xl shadow-soft hover:shadow-card transition-all text-center"
                        >
                          <h4 className="font-bold text-lg group-hover:text-secondary transition-colors">{other.name}</h4>
                          <p className="text-xs text-muted-foreground">{other.fees}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-4">Ready to Register?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    We can help you register and prepare for {exam.name}.
                  </p>
                  
                  <Button variant="hero" className="w-full mb-3" asChild>
                    <Link to="/consultation">
                      Get Help Registering <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full mb-6" asChild>
                    <Link to="/services/exams-support">
                      Test Prep Services
                    </Link>
                  </Button>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold mb-3 text-sm">Quick Facts</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Test Fee:</span>
                        <span className="font-medium">{exam.fees}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Validity:</span>
                        <span className="font-medium">{exam.validity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Score Range:</span>
                        <span className="font-medium">{exam.scoring}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="text-sm font-medium">Ask Sage</p>
                        <p className="text-xs text-muted-foreground">Get a personalized study plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-4">Need Help Planning Your {exam.name}?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our counsellors can help you understand which exams you need, what scores to aim for, 
                and how to plan your preparation around your application timeline.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/consultation">
                  Get Exam Planning Support <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExamDetail;


