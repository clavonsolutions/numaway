import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCourseBySlug } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { 
  Clock, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Globe,
  AlertTriangle,
  MessageCircle,
  DollarSign,
  Building2,
  Award,
  Lightbulb,
  Target,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug || "");
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">📚</span>
            <h1 className="text-4xl font-display font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Button asChild><a href="/courses">View All Courses</a></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const modules = [
    "Foundation concepts and theoretical frameworks",
    "Research methodologies and analytical skills",
    "Practical applications and case studies",
    "Industry-specific specializations",
    "Professional development and ethics",
    "Capstone project or dissertation"
  ];

  const scholarships = [
    { name: "Commonwealth Scholarships", coverage: "Full tuition + stipend", eligibility: "Nigerian citizens with strong academics" },
    { name: "Chevening Scholarships", coverage: "Full tuition + living costs", eligibility: "Leadership potential required" },
    { name: "University Merit Awards", coverage: "10-50% tuition reduction", eligibility: "Based on academic performance" }
  ];

  const faqs = [
    {
      question: `What are the entry requirements for ${course.name}?`,
      answer: `Entry requirements typically include: ${course.requirements.join(", ")}. Requirements may vary by university, so we recommend checking specific institution requirements or speaking with a NUMAWAY counsellor.`
    },
    {
      question: "How long does the application process take?",
      answer: "The typical application timeline is 3-6 months before the intake date. We recommend starting early to allow time for document preparation, English test scores, and visa processing."
    },
    {
      question: "Can I work while studying this course?",
      answer: "Most countries allow international students to work part-time (15-20 hours/week) during studies. Post-study work rights vary by country - the UK offers 2 years, Canada offers 3 years, and Australia offers 2-4 years depending on your qualification level."
    },
    {
      question: "What if my grades don't meet the requirements?",
      answer: "Foundation or pathway programs can help bridge the gap. Many universities offer these programs that lead into degree courses. A NUMAWAY counsellor can help identify suitable options."
    },
    {
      question: "Are there scholarships available for this course?",
      answer: "Yes, various scholarships are available including government scholarships (Commonwealth, Chevening), university-specific awards, and private foundations. Scholarship availability depends on the destination country and institution."
    }
  ];

  const commonMistakes = [
    "Applying to only one university instead of diversifying applications",
    "Submitting generic personal statements not tailored to the course",
    "Underestimating the total cost of study including living expenses",
    "Starting the application process too late for desired intake",
    "Not researching post-study work opportunities in the destination country"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(179 75% 41% / 0.2) 0%, transparent 60%)', top: '-20%', right: '-10%' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumbs 
              items={[
                { label: "Courses", href: "/courses" },
                { label: course.areaOfStudy, href: `/courses/area/${course.areaOfStudy.toLowerCase().replace(/\s+/g, '-')}` },
                { label: course.name }
              ]} 
              className="mb-6 text-primary-foreground/70"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                {course.level}
              </span>
              <h1 className="text-3xl lg:text-5xl font-display font-bold mb-4">{course.name}</h1>
              <div className="flex flex-wrap gap-6 text-primary-foreground/70 mb-6">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{course.duration}</span>
                <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" />{course.areaOfStudy}</span>
                <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" />{course.tuitionRange}</span>
              </div>
              <p className="text-lg text-primary-foreground/80 max-w-3xl">
                {course.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-4 bg-muted/50 border-b border-border/50 sticky top-16 z-30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
              {["Overview", "Requirements", "Curriculum", "Careers", "Costs", "Scholarships", "FAQs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <ScrollReveal animation="fade-up" id="overview">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-secondary" />
                    Course Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{course.overview}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="text-sm text-muted-foreground mb-1">Study Level</div>
                      <div className="font-semibold">{course.level}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal animation="fade-up" id="requirements">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-secondary" />
                    Entry Requirements
                  </h2>
                  <div className="space-y-3">
                    {course.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <p className="text-sm text-secondary">
                      <strong>Pro Tip:</strong> Requirements vary by university. A NUMAWAY counsellor can help you understand your eligibility and find the best-fit institutions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Curriculum */}
              <ScrollReveal animation="fade-up" id="curriculum">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                    Typical Curriculum
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    While specific modules vary by university, {course.name} programs typically cover:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {modules.map((module, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-secondary font-semibold text-sm">{i + 1}</span>
                        </div>
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Career Outcomes */}
              <ScrollReveal animation="fade-up" id="careers">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    Career Outcomes
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Graduates of {course.name} programs pursue careers in:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.careerOutcomes.map((career, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 text-foreground rounded-full font-medium border border-secondary/20">
                        {career}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
                    <p className="text-sm">
                      <strong className="text-gold">Industry Insight:</strong> Post-study work visas in countries like the UK (2 years), Canada (up to 3 years), and Australia (2-4 years) allow you to gain valuable international experience after graduation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Where to Study */}
              <ScrollReveal animation="fade-up" id="costs">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-secondary" />
                    Where to Study
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    This course is available in the following countries:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.countries.map((country, i) => (
                      <a
                        key={i}
                        href={`/countries/${country.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                      >
                        {country}
                      </a>
                    ))}
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Estimated Tuition Range</span>
                      <span className="text-secondary font-bold">{course.tuitionRange}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Tuition varies significantly by country and institution. This range represents typical costs across destinations.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Scholarships */}
              <ScrollReveal animation="fade-up" id="scholarships">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary" />
                    Scholarships & Funding
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Nigerian students can access various scholarships for this course:
                  </p>
                  <div className="space-y-4">
                    {scholarships.map((scholarship, i) => (
                      <div key={i} className="bg-muted/30 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{scholarship.name}</h3>
                          <span className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded-full">{scholarship.coverage}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <a href="/scholarships">Explore All Scholarships</a>
                  </Button>
                </div>
              </ScrollReveal>

              {/* Common Mistakes */}
              <ScrollReveal animation="fade-up">
                <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    Common Mistakes to Avoid
                  </h2>
                  <div className="space-y-3">
                    {commonMistakes.map((mistake, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-destructive text-sm font-bold">{i + 1}</span>
                        </div>
                        <span className="text-foreground">{mistake}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQs */}
              <ScrollReveal animation="fade-up" id="faqs">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                  <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-6 rounded-2xl shadow-card border border-border/50"
                >
                  <h3 className="font-display font-bold text-lg mb-2">Ready to Apply?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get matched with universities offering {course.name} based on your profile.
                  </p>
                  <div className="space-y-3">
                    <Button variant="hero" className="w-full gap-2" asChild>
                      <a href="/consultation">
                        Get Matched
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/universities">Browse Universities</a>
                    </Button>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h4 className="font-semibold mb-4">Course Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium">{course.areaOfStudy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Countries</span>
                      <span className="font-medium">{course.countries.length}+</span>
                    </div>
                  </div>
                </div>

                {/* Sage CTA */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Have Questions?</h4>
                  <p className="text-sm text-primary-foreground/70 mb-4">
                    Ask NUMAWAY Sage about this course, entry requirements, or career prospects.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <a href="/sage">Chat with Sage</a>
                  </Button>
                </div>

                {/* Related */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h4 className="font-semibold mb-4">Related Courses</h4>
                  <div className="space-y-3">
                    <a href="/courses" className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-sm font-medium">View all {course.areaOfStudy} courses</span>
                    </a>
                    <a href={`/courses/area/${course.areaOfStudy.toLowerCase().replace(/\s+/g, '-')}`} className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-sm font-medium">Explore {course.areaOfStudy}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CourseDetail;