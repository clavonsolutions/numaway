import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Trophy, 
  Globe, 
  DollarSign, 
  ArrowRight,
  Star
} from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Scholarships = () => {
  const scholarshipTypes = [
    {
      title: "Merit-Based Scholarships",
      description: "Awarded based on academic excellence, test scores, and achievements.",
      icon: Trophy,
      examples: ["Chevening Scholarship", "Gates Cambridge", "Rhodes Scholarship"],
    },
    {
      title: "Need-Based Scholarships",
      description: "Financial aid for students who demonstrate financial need.",
      icon: DollarSign,
      examples: ["University Financial Aid", "Government Grants", "NGO Scholarships"],
    },
    {
      title: "Country-Specific Scholarships",
      description: "Scholarships offered by specific countries for international students.",
      icon: Globe,
      examples: ["DAAD (Germany)", "Fulbright (USA)", "Vanier (Canada)"],
    },
    {
      title: "Subject-Specific Scholarships",
      description: "Funding for students in specific fields of study.",
      icon: GraduationCap,
      examples: ["STEM Scholarships", "Arts Scholarships", "Healthcare Scholarships"],
    },
  ];

  const featuredScholarships = [
    {
      name: "Chevening Scholarship",
      country: "United Kingdom",
      flag: "🇬🇧",
      value: "Full Funding",
      deadline: "November 2025",
      eligibility: "Master's Degree applicants with work experience",
    },
    {
      name: "DAAD Scholarship",
      country: "Germany",
      flag: "🇩🇪",
      value: "€934/month + tuition",
      deadline: "October 2025",
      eligibility: "Graduate and postgraduate students",
    },
    {
      name: "Fulbright Program",
      country: "United States",
      flag: "🇺🇸",
      value: "Full Funding",
      deadline: "February 2025",
      eligibility: "Graduate students and young professionals",
    },
    {
      name: "Commonwealth Scholarship",
      country: "Multiple",
      flag: "🌍",
      value: "Full Funding",
      deadline: "December 2025",
      eligibility: "Students from Commonwealth countries",
    },
    {
      name: "Vanier Canada Graduate",
      country: "Canada",
      flag: "🇨🇦",
      value: "$50,000/year",
      deadline: "November 2025",
      eligibility: "PhD students in all fields",
    },
    {
      name: "Australia Awards",
      country: "Australia",
      flag: "🇦🇺",
      value: "Full Funding",
      deadline: "April 2025",
      eligibility: "Students from developing countries",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Profile Assessment",
      description: "We evaluate your academic background, achievements, and goals.",
    },
    {
      step: 2,
      title: "Scholarship Matching",
      description: "Our AI matches you with scholarships you're eligible for.",
    },
    {
      step: 3,
      title: "Application Support",
      description: "We help you prepare winning applications and essays.",
    },
    {
      step: 4,
      title: "Interview Preparation",
      description: "Mock interviews and coaching for scholarship interviews.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Scholarship Search and Application Support"
      description="Find and apply for international scholarships with Numaway's expert advisers and AI-powered scholarship matching."
      canonical="/scholarships"
    />

      <Header />
      <main>
        <PageHero
          title="Find"
          titleHighlight="Scholarships"
          subtitle="Funding Your Dreams"
          description="Access thousands of scholarships worth millions of dollars. Let NUMAWAY help you find and apply for the right funding opportunities."
          size="large"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="gold" size="lg" className="shadow-gold/30 shadow-lg" asChild>
              <a href="/consultation">Find Scholarships</a>
            </Button>
            <Button variant="glass" size="lg" className="border-white/20 text-white hover:bg-white/15" asChild>
              <a href="/sage">Ask NUMAWAY Sage</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-secondary">₦500M+</div>
              <p className="text-xs sm:text-sm text-white/60">Secured</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-secondary">2,000+</div>
              <p className="text-xs sm:text-sm text-white/60">Students</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-secondary">500+</div>
              <p className="text-xs sm:text-sm text-white/60">Programs</p>
            </div>
          </div>
        </PageHero>

        {/* Scholarship Types */}
        <section className="py-24">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Types of Scholarships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the different types of scholarships available to help you 
                find the right funding for your education.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarshipTypes.map((type, index) => (
                <ScrollReveal key={type.title} animation="fade-up" delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-gold/70 rounded-xl flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-gold-foreground" />
                    </div>
                    <h3 className="font-display font-bold mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-1">
                      {type.examples.map((example) => (
                        <li key={example} className="text-xs text-secondary flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Scholarships */}
        <section className="py-24 bg-muted/50">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Featured Scholarships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Top scholarships available for Nigerian students. Deadlines are updated regularly.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredScholarships.map((scholarship, index) => (
                <ScrollReveal key={scholarship.name} animation="fade-up" delay={index * 0.08}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{scholarship.flag}</span>
                      <div>
                        <h3 className="font-display font-bold">{scholarship.name}</h3>
                        <p className="text-sm text-muted-foreground">{scholarship.country}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Value:</span>
                        <span className="font-semibold text-secondary">{scholarship.value}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deadline:</span>
                        <span className="font-medium">{scholarship.deadline}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{scholarship.eligibility}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="/consultation">Learn More</a>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-24">
          <div className="container-default">
            <ScrollReveal animation="fade-up" className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">How NUMAWAY Helps You Win Scholarships</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven process has helped thousands of students secure funding.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} animation="fade-up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-display font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(179 75% 41% / 0.2), transparent)'
          }} />
          <div className="container-default text-center relative z-10">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-display font-bold mb-4 text-white">
                Don't Miss Out on Funding Opportunities
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Book a free consultation and let our scholarship experts help you 
                find the right funding for your education.
              </p>
              <Button variant="gold" size="lg" className="shadow-gold/30 shadow-lg" asChild>
                <a href="/consultation" className="gap-2">
                  Get Scholarship Guidance
                  <ArrowRight className="w-5 h-5" />
                </a>
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

export default Scholarships;
