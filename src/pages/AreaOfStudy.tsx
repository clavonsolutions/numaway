import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAreaBySlug, getCoursesByArea, areasOfStudy } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Globe, BookOpen, CheckCircle, AlertTriangle, HelpCircle, Sparkles, ChevronRight, Users, TrendingUp, MapPin } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AreaOfStudy = () => {
  const { slug } = useParams();
  const area = getAreaBySlug(slug || "");
  const areaCourses = getCoursesByArea(slug || "");
  
  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">📖</span>
            <h1 className="text-4xl font-display font-bold mb-4">Area of Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The area of study you're looking for doesn't exist.</p>
            <Button asChild><Link to="/courses">View All Courses</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedAreas = areasOfStudy.filter(a => a.slug !== slug).slice(0, 4);

  // Generate specializations based on area
  const specializations = {
    "business-management": ["Marketing", "Finance", "Human Resources", "Supply Chain", "Entrepreneurship", "International Business", "Strategy", "Operations Management", "Business Analytics", "Consulting"],
    "computer-science": ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Data Science", "Software Engineering", "Cloud Computing", "Mobile Development", "Web Development", "Computer Graphics", "Blockchain"],
    "engineering": ["Mechanical", "Civil", "Electrical", "Chemical", "Aerospace", "Biomedical", "Environmental", "Industrial", "Robotics", "Materials Science"],
    "health-medicine": ["General Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology", "Psychiatry", "Oncology", "Public Health", "Nursing", "Pharmacy"],
    "law": ["Corporate Law", "Criminal Law", "International Law", "Intellectual Property", "Human Rights", "Environmental Law", "Tax Law", "Family Law", "Constitutional Law", "Maritime Law"],
    "arts-design": ["Graphic Design", "Fashion Design", "Interior Design", "UX/UI Design", "Animation", "Fine Arts", "Photography", "Film & Media", "Industrial Design", "Game Design"],
    "social-sciences": ["Psychology", "Sociology", "Political Science", "Economics", "Anthropology", "International Relations", "Criminology", "Geography", "History", "Philosophy"],
    "natural-sciences": ["Biology", "Chemistry", "Physics", "Environmental Science", "Astronomy", "Geology", "Biotechnology", "Ecology", "Genetics", "Marine Science"],
    "hospitality-tourism": ["Hotel Management", "Event Management", "Tourism Marketing", "Food & Beverage", "Resort Management", "Travel Operations", "Cruise Management", "Culinary Arts", "Destination Management", "Sustainable Tourism"],
    "education": ["Primary Education", "Secondary Education", "Special Education", "Educational Leadership", "Curriculum Development", "TESOL/ESL", "Higher Education", "Educational Psychology", "Early Childhood", "Educational Technology"]
  };

  const areaSpecializations = specializations[area.slug as keyof typeof specializations] || area.popularCourses;

  // Generate curriculum modules
  const curriculumModules = {
    "business-management": ["Business Fundamentals", "Financial Accounting", "Marketing Principles", "Organizational Behavior", "Business Ethics", "Strategic Management", "Operations Management", "Business Research Methods"],
    "computer-science": ["Programming Fundamentals", "Data Structures & Algorithms", "Database Systems", "Operating Systems", "Computer Networks", "Software Engineering", "Discrete Mathematics", "Computer Architecture"],
    "engineering": ["Mathematics for Engineers", "Physics", "Engineering Drawing", "Materials Science", "Thermodynamics", "Mechanics", "Electrical Circuits", "Project Management"],
    "health-medicine": ["Anatomy", "Physiology", "Biochemistry", "Pharmacology", "Pathology", "Clinical Skills", "Medical Ethics", "Public Health"],
    "law": ["Contract Law", "Constitutional Law", "Criminal Law", "Legal Research", "Tort Law", "Property Law", "Legal Writing", "Ethics & Professional Responsibility"],
    "arts-design": ["Design Fundamentals", "Color Theory", "Typography", "Digital Tools", "Design History", "Visual Communication", "Portfolio Development", "Creative Process"],
    "social-sciences": ["Research Methods", "Statistical Analysis", "Social Theory", "Qualitative Methods", "Ethics in Research", "Writing & Communication", "Critical Thinking", "Data Analysis"],
    "natural-sciences": ["Scientific Method", "Laboratory Techniques", "Data Analysis", "Research Ethics", "Scientific Writing", "Mathematical Methods", "Field Work", "Computational Skills"],
    "hospitality-tourism": ["Hospitality Operations", "Customer Service", "Food & Beverage Management", "Tourism Marketing", "Revenue Management", "Event Planning", "Sustainability", "Industry Experience"],
    "education": ["Educational Psychology", "Curriculum Design", "Assessment & Evaluation", "Classroom Management", "Teaching Methods", "Special Needs Education", "Educational Technology", "Professional Practice"]
  };

  const areaCurriculum = curriculumModules[area.slug as keyof typeof curriculumModules] || [];

  // Generate FAQs
  const areaFaqs = [
    { q: `What can I do with a ${area.name} degree?`, a: `Career paths include: ${area.careerPaths.join(", ")}. The field offers diverse opportunities across industries.` },
    { q: `Which countries are best for studying ${area.name}?`, a: `Top destinations include: ${area.topCountries.join(", ")}. Each offers unique strengths in terms of programs, industry connections, and career opportunities.` },
    { q: `What are the entry requirements for ${area.name} programs?`, a: `Requirements vary by level and institution. Generally, you'll need relevant academic qualifications, English proficiency (IELTS/TOEFL), and potentially standardized tests (GRE/GMAT for postgraduate). Some programs require portfolios or work experience.` },
    { q: `How long does a ${area.name} degree take?`, a: `Undergraduate degrees typically take 3-4 years. Master's programs are 1-2 years. PhD programs range from 3-5 years. Duration varies by country and institution.` },
    { q: `Are there scholarships available for ${area.name} students?`, a: `Yes! Scholarships are available for most fields. These include merit-based, need-based, country-specific, and university scholarships. NUMAWAY can help identify scholarships matching your profile.` },
    { q: `Can I work while studying ${area.name} abroad?`, a: `Most countries allow international students to work part-time (typically 20 hours/week during term). Opportunities depend on your program's flexibility and local job market.` }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">{area.icon}</span>
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-4">{area.name}</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">{area.description}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">{area.courses}+ Courses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{area.topCountries.length} Top Countries</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm">{area.careerPaths.length}+ Career Paths</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Field Overview */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-secondary" />
                      Field Overview
                    </h2>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <p className="text-muted-foreground mb-4">{area.description}</p>
                      <h4 className="font-semibold mb-2">Who This Field Is For:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Students passionate about {area.name.toLowerCase()}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Those seeking diverse career opportunities</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Analytical and creative thinkers</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Future industry leaders and innovators</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Degree Pathways */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Degree Pathways
                    </h2>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary/20" />
                      <div className="space-y-6">
                        <div className="relative pl-12">
                          <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">1</div>
                          <div className="bg-card p-5 rounded-xl shadow-soft">
                            <h4 className="font-semibold mb-1">Foundation/Pathway Programs</h4>
                            <p className="text-sm text-muted-foreground">For students needing additional preparation before undergraduate study. Typically 1 year.</p>
                          </div>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">2</div>
                          <div className="bg-card p-5 rounded-xl shadow-soft">
                            <h4 className="font-semibold mb-1">Undergraduate (Bachelor's Degree)</h4>
                            <p className="text-sm text-muted-foreground">3-4 years depending on country. Foundation for entry-level positions or further study.</p>
                          </div>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">3</div>
                          <div className="bg-card p-5 rounded-xl shadow-soft">
                            <h4 className="font-semibold mb-1">Postgraduate (Master's Degree)</h4>
                            <p className="text-sm text-muted-foreground">1-2 years. Specialized knowledge for advanced roles. May require work experience.</p>
                          </div>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">4</div>
                          <div className="bg-card p-5 rounded-xl shadow-soft">
                            <h4 className="font-semibold mb-1">Doctoral (PhD)</h4>
                            <p className="text-sm text-muted-foreground">3-5+ years of research. For academic or senior research careers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Core Curriculum */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      Typical Curriculum
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      While specific courses vary by program, here are common modules you'll encounter:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {areaCurriculum.map((module, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft">
                          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-secondary">{i + 1}</span>
                          </div>
                          <span className="text-sm font-medium">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Specializations */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-secondary" />
                      Specializations
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {area.name} offers diverse specialization options to match your interests:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {areaSpecializations.map((spec, i) => (
                        <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Career Paths */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-secondary" />
                      Career Paths
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {area.careerPaths.map((career, i) => (
                        <div key={i} className="bg-card p-4 rounded-xl shadow-soft flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{career}</h4>
                            <p className="text-xs text-muted-foreground">Explore opportunities</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> Salary ranges vary significantly by country, experience level, industry, and specific role. 
                        Research specific markets for accurate expectations.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Top Countries */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-secondary" />
                      Top Countries for {area.name}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {area.topCountries.map((country, i) => (
                        <div key={i} className="bg-card p-5 rounded-xl shadow-soft">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <h4 className="font-semibold">{country}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Known for excellent {area.name.toLowerCase()} programs, industry connections, and career opportunities.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Entry Requirements */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      Typical Entry Requirements
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card p-5 rounded-xl shadow-soft">
                        <h4 className="font-semibold mb-3">Undergraduate</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            High school diploma/equivalent
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            Relevant subject grades
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            English proficiency (IELTS 6.0-6.5+)
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            Personal statement
                          </li>
                        </ul>
                      </div>
                      <div className="bg-card p-5 rounded-xl shadow-soft">
                        <h4 className="font-semibold mb-3">Postgraduate</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            Bachelor's degree (often 2:1 or equivalent)
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            Relevant background preferred
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            English proficiency (IELTS 6.5-7.0+)
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            GRE/GMAT (for some programs)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Common Mistakes */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-secondary" />
                      Common Mistakes (and How NUMAWAY Helps)
                    </h2>
                    <div className="space-y-4">
                      {[
                        { mistake: "Choosing based on rankings alone", solution: "We help you consider career goals, budget, location, and program fit" },
                        { mistake: "Underestimating total costs", solution: "We provide realistic budget planning including hidden costs" },
                        { mistake: "Missing scholarship deadlines", solution: "We track deadlines and identify funding opportunities" },
                        { mistake: "Weak personal statements", solution: "We coach you to present your genuine story effectively" },
                        { mistake: "Applying to unsuitable programs", solution: "We assess your profile and recommend realistic options" }
                      ].map((item, i) => (
                        <div key={i} className="bg-card p-4 rounded-xl shadow-soft">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="w-4 h-4 text-destructive" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-destructive mb-1">{item.mistake}</h4>
                              <p className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                {item.solution}
                              </p>
                            </div>
                          </div>
                        </div>
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
                      {areaFaqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                          <AccordionTrigger className="text-left font-semibold text-sm">{faq.q}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm">{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ScrollReveal>

                {/* Courses in This Area */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-6">Courses in {area.name}</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {areaCourses.map((course) => (
                        <Link 
                          key={course.slug} 
                          to={`/courses/${course.slug}`} 
                          className="group bg-card p-5 rounded-xl shadow-soft hover:shadow-card transition-all"
                        >
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mb-3 inline-block">{course.level}</span>
                          <h3 className="font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{course.name}</h3>
                          <p className="text-sm text-muted-foreground">{course.duration}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Related Areas */}
                <ScrollReveal animation="fade-up">
                  <div>
                    <h2 className="text-xl font-display font-bold mb-4">Explore Related Fields</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {relatedAreas.map((related) => (
                        <Link
                          key={related.slug}
                          to={`/courses/area/${related.slug}`}
                          className="group bg-card p-4 rounded-xl shadow-soft hover:shadow-card transition-all text-center"
                        >
                          <span className="text-3xl mb-2 block">{related.icon}</span>
                          <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors">{related.name}</h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-4">Need Help Choosing?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Our counsellors can help you find the perfect course and university for your goals.
                  </p>
                  
                  <Button variant="hero" className="w-full mb-3" asChild>
                    <Link to="/consultation">
                      Get Free Guidance <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full mb-6" asChild>
                    <Link to="/sage">
                      Ask Sage <Sparkles className="w-4 h-4" />
                    </Link>
                  </Button>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold mb-3 text-sm">Quick Stats</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{area.courses}+ courses available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{area.topCountries.length} top destinations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{area.careerPaths.length}+ career paths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="text-sm">High global demand</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <h4 className="font-semibold mb-3 text-sm">Popular Courses</h4>
                    <div className="space-y-2">
                      {area.popularCourses.slice(0, 4).map((course, i) => (
                        <div key={i} className="text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-4">Ready to Start Your {area.name} Journey?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Get personalized course recommendations and application support from our expert counsellors.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaOfStudy;