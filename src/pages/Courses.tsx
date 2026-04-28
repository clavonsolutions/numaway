import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { areasOfStudy, courses } from "@/data/courses";
import { useState } from "react";
import { Search, ArrowRight, MessageCircle, Lightbulb, TrendingUp, AlertCircle } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Courses = () => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const popularPaths = [
    { field: "Business & Management", careers: "Management Consulting, Finance, Entrepreneurship", growth: "High demand globally" },
    { field: "Computer Science & IT", careers: "Software Engineering, Data Science, Cybersecurity", growth: "Fastest growing sector" },
    { field: "Engineering", careers: "Civil, Mechanical, Electrical, Chemical Engineering", growth: "Strong global demand" },
    { field: "Healthcare & Medicine", careers: "Medicine, Nursing, Public Health, Pharmacy", growth: "Essential services" }
  ];

  const faqs = [
    {
      question: "How do I choose the right course for me?",
      answer: "Consider your interests, career goals, and academic strengths. Our NUMAWAY Sage AI can help match you with suitable courses based on your profile. You can also book a free consultation with a counsellor for personalized guidance."
    },
    {
      question: "What's the difference between Bachelor's, Master's, and PhD programs?",
      answer: "Bachelor's (3-4 years) is your first degree after secondary school. Master's (1-2 years) is for specialization after a Bachelor's. PhD (3-5 years) is for research and academic careers. Each has different entry requirements and career outcomes."
    },
    {
      question: "Can I change my course after starting university?",
      answer: "Many universities allow course changes within the first year, especially within the same faculty. However, it's better to choose carefully upfront as changes may extend your study duration and affect visa status for international students."
    },
    {
      question: "Do I need work experience for my course application?",
      answer: "Undergraduate programs typically don't require work experience. However, MBA and some Master's programs (especially in business, management, and healthcare) often require 2-5 years of relevant experience."
    },
    {
      question: "How do course fees vary by country?",
      answer: "Germany offers tuition-free education at public universities. UK courses cost £10,000-£35,000/year. US courses range from $20,000-$60,000/year. Canada is mid-range at CAD 15,000-35,000/year. We help you find options within your budget."
    }
  ];

  const tips = [
    "Research post-study work opportunities in your destination country before choosing a course",
    "Consider the total cost of study including living expenses, not just tuition",
    "Look beyond rankings, focus on course content, industry connections, and employability",
    "Start your research at least 12 months before your intended start date"
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Undergraduate and Postgraduate Courses Abroad"
      description="Browse thousands of undergraduate and postgraduate courses at international universities. Filter by subject, country, and tuition."
      canonical="/courses"
    />

      <Header />
      <main>
        <PageHero
          title="Explore Courses"
          description="Discover thousands of courses across all disciplines. From business to engineering, find the perfect program to launch your global career."
        >
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-3" />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  className="flex-1 bg-transparent px-3 py-2.5 outline-none text-foreground" 
                />
              </div>
            </div>
          </div>
        </PageHero>

        {/* Decision Framework */}
        <section className="py-12 bg-muted/30">
          <div className="container-default">
            <ScrollReveal animation="fade-up">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold mb-2">How to Choose Your Course</h2>
                    <p className="text-muted-foreground">Not sure where to start? Consider these key factors:</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="bg-muted/50 rounded-xl p-4">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-secondary font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Courses visual */}
        <section className="py-0 bg-muted/30">
          <div className="container-default pt-0 pb-8">
            <img
              src="/images/heroes/student-diploma-4.jpg"
              alt="Student holding a diploma after completing their university programme"
              className="w-full rounded-xl object-cover h-52"
              loading="lazy"
              width="1200"
              height="208"
            />
          </div>
        </section>

        {/* Areas of Study */}
        <section className="py-16">
          <div className="container-default">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-2">Areas of Study</h2>
              <p className="text-muted-foreground mb-8">Explore courses by field of interest</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {areasOfStudy.map((area, i) => (
                <ScrollReveal key={area.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/courses/area/${area.slug}`} 
                    className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1 block h-full border border-border/50"
                  >
                    <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform inline-block">{area.icon}</span>
                    <h3 className="font-display font-semibold mb-1 group-hover:text-secondary transition-colors">{area.name}</h3>
                    <p className="text-sm text-muted-foreground">{area.courses}+ courses</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Popular Career Paths */}
            <ScrollReveal animation="fade-up">
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-2 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                  Popular Career Paths
                </h2>
                <p className="text-muted-foreground">High-demand fields with strong career outcomes</p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {popularPaths.map((path, i) => (
                <ScrollReveal key={path.field} animation="fade-up" delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-semibold">{path.field}</h3>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">{path.growth}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Career options: {path.careers}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Popular Courses */}
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-2">Popular Courses</h2>
              <p className="text-muted-foreground mb-8">Top courses Nigerian students are exploring</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, i) => (
                <ScrollReveal key={course.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/courses/${course.slug}`} 
                    className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1 block h-full border border-border/50"
                  >
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mb-3 inline-block">{course.level}</span>
                    <h3 className="font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.areaOfStudy} · {course.duration}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="text-center mb-10">
              <h2 className="text-2xl font-display font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about choosing and applying for courses</p>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <ScrollReveal key={index} animation="fade-up" delay={index * 0.05}>
                    <AccordionItem value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6">
                      <AccordionTrigger className="text-left py-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sage CTA */}
        <section className="py-16">
          <div className="container-default">
            <ScrollReveal animation="fade-up">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground relative overflow-hidden">
                <motion.div 
                  className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(circle, hsl(179 75% 41% / 0.2) 0%, transparent 60%)', top: '-20%', right: '-10%' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="relative z-10 max-w-2xl">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                    <MessageCircle className="w-7 h-7 text-secondary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">Not sure which course is right for you?</h2>
                  <p className="text-primary-foreground/70 mb-6">
                    Chat with NUMAWAY Sage, our AI assistant, to explore courses based on your interests, 
                    career goals, and academic background. Get personalized recommendations in minutes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" size="lg" asChild>
                      <a href="/sage" className="gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Chat with Sage
                      </a>
                    </Button>
                    <Button variant="hero-outline" size="lg" asChild>
                      <a href="/consultation">Book Free Consultation</a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Courses;