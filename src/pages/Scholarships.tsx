import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Trophy, 
  Globe, 
  DollarSign, 
  Search, 
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

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
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[{ label: "Scholarships" }]}
              className="mb-8 text-primary-foreground/70"
            />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                  Find <span className="text-gradient-gold">Scholarships</span> to Fund Your Dreams
                </h1>
                <p className="text-xl text-primary-foreground/70 mb-8">
                  Access thousands of scholarships worth millions of dollars. 
                  Let NUMAWAY help you find and apply for the right funding opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="xl" asChild>
                    <a href="/consultation">Find Scholarships</a>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <a href="/genie">Ask NUMAWAY Genie</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl font-display font-bold text-secondary">
                    ₦500M+
                  </div>
                  <p className="text-primary-foreground/70">Scholarships secured for students</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <div className="text-2xl font-bold">2,000+</div>
                    <p className="text-sm text-primary-foreground/70">Students funded</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <div className="text-2xl font-bold">500+</div>
                    <p className="text-sm text-primary-foreground/70">Scholarship programs</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scholarship Types */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                Types of Scholarships
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the different types of scholarships available to help you 
                find the right funding for your education.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarshipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-secondary-foreground" />
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Scholarships */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                Featured Scholarships
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Top scholarships available for Nigerian students. Deadlines are updated regularly.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredScholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
                >
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
                  <p className="text-xs text-muted-foreground mb-4">
                    {scholarship.eligibility}
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="/consultation">Learn More</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                How NUMAWAY Helps You Win Scholarships
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven process has helped thousands of students secure funding.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-hero text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-display font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Don't Miss Out on Funding Opportunities
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Book a free consultation and let our scholarship experts help you 
                find the right funding for your education.
              </p>
              <Button variant="gold" size="xl" asChild>
                <a href="/consultation" className="gap-2">
                  Get Scholarship Guidance
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Scholarships;
