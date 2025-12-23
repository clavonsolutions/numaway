import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { universities } from "@/data/universities";
import { useState } from "react";
import { Search, MapPin, Trophy, ChevronRight, GraduationCap, DollarSign, Calendar, Building2, HelpCircle, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Universities = () => {
  const [search, setSearch] = useState("");
  const filtered = universities.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Universities"
          description="Discover world-class universities and find your perfect match"
        >
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-3" />
                <input 
                  type="text" 
                  placeholder="Search universities..." 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  className="flex-1 bg-transparent px-3 py-2.5 outline-none text-foreground" 
                />
              </div>
            </div>
          </div>
        </PageHero>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((uni, i) => (
                <ScrollReveal key={uni.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/universities/${uni.slug}`}
                    className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 overflow-hidden block h-full"
                  >
                    <div className="h-40 bg-muted relative overflow-hidden">
                      <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Trophy className="w-3 h-3" />#{uni.ranking}
                      </div>
                      {uni.logo && (
                        <div className="absolute bottom-3 left-3 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-1">
                          <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{uni.name}</h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1 mb-3">
                        <span className="text-lg">{uni.countryFlag}</span>
                        <MapPin className="w-4 h-4" />{uni.city}, {uni.country}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{uni.type}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">{uni.internationalStudents} Intl</span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How to Choose a University - Decision Framework */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">How to Choose the Right University</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choosing a university is one of the biggest decisions you'll make. Here's a framework to help you decide.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Academic Fit</h3>
                  <p className="text-sm text-muted-foreground">
                    Does the university offer your desired program? Check course structure, specializations, faculty expertise, and research opportunities.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Budget & Affordability</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider tuition fees, living costs, scholarship availability, and post-study work opportunities to calculate your total investment.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Location & Lifestyle</h3>
                  <p className="text-sm text-muted-foreground">
                    Think about climate, city vs campus life, safety, part-time job opportunities, and proximity to Nigerian community.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.25}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Career Outcomes</h3>
                  <p className="text-sm text-muted-foreground">
                    Research employment rates, industry connections, internship programs, and alumni networks in your desired career field.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" className="text-center">
              <Button variant="hero" asChild>
                <Link to="/consultation">
                  Get Personalized University Recommendations <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* University Types Explained */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">University Types Explained</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not all universities are the same. Understanding the differences helps you make better choices.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <h3 className="font-display font-semibold mb-2">Research Universities</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Focus on research and academic discovery. Ideal for students planning graduate studies or academic careers.
                  </p>
                  <p className="text-xs text-secondary font-medium">Examples: Oxford, MIT, Cambridge</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-accent h-full">
                  <h3 className="font-display font-semibold mb-2">Teaching-Focused Universities</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Prioritize undergraduate education and student experience. Smaller class sizes and more faculty interaction.
                  </p>
                  <p className="text-xs text-accent font-medium">Examples: Liberal arts colleges, smaller institutions</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-gold h-full">
                  <h3 className="font-display font-semibold mb-2">Technical Universities</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Specialize in STEM fields. Strong industry ties and practical, hands-on learning. Great for engineering and tech careers.
                  </p>
                  <p className="text-xs text-gold font-medium">Examples: TU Munich, Imperial, Caltech</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.25}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-secondary h-full">
                  <h3 className="font-display font-semibold mb-2">Community Colleges</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Affordable 2-year programs. Pathway to bachelor's degrees or direct entry to workforce. Common in USA and Canada.
                  </p>
                  <p className="text-xs text-secondary font-medium">Great for: Budget-conscious students, pathway programs</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-accent h-full">
                  <h3 className="font-display font-semibold mb-2">Public vs Private</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Public universities are government-funded (often cheaper). Private universities have independent funding and may offer more financial aid.
                  </p>
                  <p className="text-xs text-accent font-medium">Tip: Compare net cost after scholarships</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.35}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border-l-4 border-gold h-full">
                  <h3 className="font-display font-semibold mb-2">Universities of Applied Sciences</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Practical, career-oriented programs. Common in Germany and Netherlands. Strong internship components.
                  </p>
                  <p className="text-xs text-gold font-medium">Examples: Fachhochschulen, HBO institutions</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Intake Timelines by Region */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Timing Matters</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">Intake Timelines by Region</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Different countries have different academic calendars. Plan your applications accordingly.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇬🇧</span>
                    <h3 className="font-display font-semibold">United Kingdom</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Main Intake:</span><span className="font-medium">September</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Secondary Intake:</span><span className="font-medium">January</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Oct-Jan (UCAS)</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇺🇸</span>
                    <h3 className="font-display font-semibold">United States</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Fall Intake:</span><span className="font-medium">August/September</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Spring Intake:</span><span className="font-medium">January</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Nov-Feb (varies)</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇨🇦</span>
                    <h3 className="font-display font-semibold">Canada</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Fall Intake:</span><span className="font-medium">September</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Winter Intake:</span><span className="font-medium">January</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Dec-Feb</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.25}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇦🇺</span>
                    <h3 className="font-display font-semibold">Australia</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Semester 1:</span><span className="font-medium">February</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Semester 2:</span><span className="font-medium">July</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Oct-May</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.3}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇩🇪</span>
                    <h3 className="font-display font-semibold">Germany</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Winter Semester:</span><span className="font-medium">October</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Summer Semester:</span><span className="font-medium">April</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Jul 15 / Jan 15</span></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.35}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇮🇪</span>
                    <h3 className="font-display font-semibold">Ireland</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Main Intake:</span><span className="font-medium">September</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Secondary Intake:</span><span className="font-medium">January/February</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Apply by:</span><span className="font-medium text-secondary">Rolling basis</span></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">Understanding the True Cost</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tuition is just part of the picture. Here's what really drives study abroad costs.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <h3 className="font-display font-bold text-lg mb-6">Cost Components</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-4 bg-secondary rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Tuition Fees</span>
                          <span className="text-sm text-muted-foreground">40-60%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Varies by country, institution, and program</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-4 bg-accent rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Accommodation</span>
                          <span className="text-sm text-muted-foreground">25-35%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">On-campus, private halls, or shared flats</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-4 bg-gold rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Living Expenses</span>
                          <span className="text-sm text-muted-foreground">15-25%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Food, transport, utilities, personal</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-muted-foreground/50 rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Other Costs</span>
                          <span className="text-sm text-muted-foreground">5-10%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Insurance, visa, flights, books</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <h3 className="font-display font-bold text-lg mb-6">Annual Cost Ranges by Country</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span>🇺🇸</span>
                        <span className="font-medium">USA</span>
                      </div>
                      <span className="text-secondary font-semibold">$40,000 - $80,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span>🇬🇧</span>
                        <span className="font-medium">UK</span>
                      </div>
                      <span className="text-secondary font-semibold">£25,000 - £45,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span>🇨🇦</span>
                        <span className="font-medium">Canada</span>
                      </div>
                      <span className="text-secondary font-semibold">CAD 30,000 - 55,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span>🇩🇪</span>
                        <span className="font-medium">Germany</span>
                      </div>
                      <span className="text-secondary font-semibold">€10,000 - €15,000*</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span>🇦🇺</span>
                        <span className="font-medium">Australia</span>
                      </div>
                      <span className="text-secondary font-semibold">AUD 45,000 - 70,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">*Germany has no/low tuition at public universities</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Scholarship & Application Essentials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6">Scholarship Basics</h2>
                <div className="space-y-4">
                  <div className="bg-card p-5 rounded-xl shadow-soft">
                    <h4 className="font-semibold mb-2">Merit-Based Scholarships</h4>
                    <p className="text-sm text-muted-foreground">Based on academic achievement, test scores, or exceptional talent. Apply early as these are competitive.</p>
                  </div>
                  <div className="bg-card p-5 rounded-xl shadow-soft">
                    <h4 className="font-semibold mb-2">Need-Based Financial Aid</h4>
                    <p className="text-sm text-muted-foreground">Based on demonstrated financial need. Common in US universities. Requires financial documentation.</p>
                  </div>
                  <div className="bg-card p-5 rounded-xl shadow-soft">
                    <h4 className="font-semibold mb-2">Country-Specific Scholarships</h4>
                    <p className="text-sm text-muted-foreground">Commonwealth, Chevening (UK), Fulbright (USA), DAAD (Germany) - research what's available for Nigerians.</p>
                  </div>
                  <div className="bg-card p-5 rounded-xl shadow-soft">
                    <h4 className="font-semibold mb-2">University Scholarships</h4>
                    <p className="text-sm text-muted-foreground">Many universities offer automatic scholarships for international students meeting certain criteria.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6">Application Checklist</h2>
                <div className="bg-card p-6 rounded-2xl shadow-soft">
                  <div className="space-y-3">
                    {[
                      "Academic transcripts (secondary & tertiary)",
                      "Standardized test scores (IELTS/TOEFL, GRE/GMAT if required)",
                      "Personal statement / Statement of purpose",
                      "Letters of recommendation (2-3)",
                      "CV/Resume (for postgraduate)",
                      "Valid international passport",
                      "Portfolio (for arts/design programs)",
                      "Proof of funds / Financial documents",
                      "Application fee payment"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-secondary">{i + 1}</span>
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <HelpCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">University Selection FAQs</h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  { q: "How important are university rankings?", a: "Rankings provide a general indicator of academic reputation, but shouldn't be the only factor. Consider program-specific rankings, career outcomes, location, costs, and fit with your goals. A lower-ranked university might be better for your specific needs." },
                  { q: "Should I apply to multiple universities?", a: "Yes, we recommend a balanced approach: 2-3 'ambitious' choices (reach schools), 2-3 'realistic' choices (match schools), and 1-2 'safe' choices. This gives you options and increases your chances of getting a suitable offer." },
                  { q: "Can I work while studying abroad?", a: "Most countries allow international students to work part-time (typically 20 hours/week during term). Rules vary by country - UK, Canada, and Australia are generally more flexible. Check specific visa conditions before planning." },
                  { q: "What's the difference between undergraduate and foundation programs?", a: "Foundation programs (also called pathway programs) prepare students whose qualifications don't directly meet university entry requirements. They typically last 1 year and lead to undergraduate admission upon successful completion." },
                  { q: "How do I know if my qualifications are recognized?", a: "Check with specific universities - most have clear international qualification equivalencies on their websites. NARIC/ENIC services can also verify qualification recognition. NUMAWAY counsellors can help assess your eligibility." },
                  { q: "When should I start my application process?", a: "Start 12-18 months before your intended start date. This gives time for test preparation, document gathering, application writing, and visa processing. Earlier is always better for competitive programs and scholarships." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl shadow-soft px-6">
                    <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Talk to Sage CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal animation="fade-up">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">Still Not Sure Where to Apply?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Talk to Sage, our AI assistant, for personalized university recommendations based on your profile, 
                or book a free consultation with a NUMAWAY counsellor.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/sage">Ask Sage <Sparkles className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/consultation">Book Free Consultation</Link>
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

export default Universities;