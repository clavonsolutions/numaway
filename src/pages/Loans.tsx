import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  FileText, 
  Users, 
  AlertTriangle,
  Percent,
  GraduationCap,
  Globe
} from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const loanFeatures = [
  {
    icon: Percent,
    title: "0% Interest",
    description: "No interest charges on your student loan – pay back exactly what you borrowed."
  },
  {
    icon: Clock,
    title: "Flexible Repayment",
    description: "Start repaying after you complete your studies and secure employment."
  },
  {
    icon: Shield,
    title: "Sharia-Compliant",
    description: "Fully ethical and Sharia-compliant financing options available."
  },
  {
    icon: GraduationCap,
    title: "Tuition Coverage",
    description: "Cover your tuition fees partially or fully depending on eligibility."
  }
];

const eligibilityCriteria = [
  "Nigerian student with a confirmed university admission abroad",
  "Valid international passport",
  "Guarantor or collateral (requirements vary by partner)",
  "Proof of admission from a recognized institution",
  "Academic transcripts and certificates"
];

const loanPartners = [
  {
    name: "EduFund Partners",
    coverage: "Up to ₦15,000,000",
    repayment: "12-48 months post-graduation",
    countries: ["UK", "Canada", "USA", "Australia"]
  },
  {
    name: "StudyNow Finance",
    coverage: "Up to ₦10,000,000",
    repayment: "Grace period + 36 months",
    countries: ["UK", "Germany", "Ireland"]
  },
  {
    name: "Global Scholar Fund",
    coverage: "Up to ₦20,000,000",
    repayment: "Income-based repayment",
    countries: ["All destinations"]
  }
];

const Loans = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <PageHero
      title="Interest-Free"
      titleHighlight="Student Loans"
      description="Access ethical, interest-free financing to fund your study abroad dreams. We connect you with trusted partners offering 0% interest student loans."
    />
    
    <main>
      {/* Why Interest-Free */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Why Interest-Free Loans?
              </h2>
              <p className="text-muted-foreground text-lg">
                Traditional loans can burden students with high interest. Our partner programs 
                offer ethical alternatives that put your education first.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl shadow-soft h-full"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg">
                From application to disbursement, we guide you every step of the way.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply with NUMAWAY", desc: "Submit your interest and share your study abroad plans with us." },
              { step: "02", title: "Get Matched", desc: "We connect you with suitable loan partners based on your needs." },
              { step: "03", title: "Documentation", desc: "Complete required paperwork with our guidance and support." },
              { step: "04", title: "Receive Funding", desc: "Funds disbursed directly to your institution or account." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Partners */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Our Financing Partners
              </h2>
              <p className="text-muted-foreground text-lg">
                We work with trusted financial partners to bring you the best interest-free options.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {loanPartners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card p-6 rounded-2xl shadow-soft border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold">{partner.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Coverage</span>
                      <span className="font-medium">{partner.coverage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Repayment</span>
                      <span className="font-medium">{partner.repayment}</span>
                    </div>
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">
                          {partner.countries.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  Eligibility Requirements
                </h2>
                <p className="text-primary-foreground/70 mb-8">
                  While specific requirements vary by partner, here are the general criteria 
                  for interest-free student loan applications.
                </p>
                <ul className="space-y-4">
                  {eligibilityCriteria.map((criteria, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{criteria}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-6">
                  Check Your Eligibility
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination Country</label>
                    <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground">
                      <option value="">Select Country</option>
                      <option value="uk">🇬🇧 United Kingdom</option>
                      <option value="usa">🇺🇸 United States</option>
                      <option value="canada">🇨🇦 Canada</option>
                      <option value="australia">🇦🇺 Australia</option>
                      <option value="germany">🇩🇪 Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Amount Needed</label>
                    <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground">
                      <option value="">Select Range</option>
                      <option value="5m">Up to ₦5,000,000</option>
                      <option value="10m">₦5,000,000 - ₦10,000,000</option>
                      <option value="15m">₦10,000,000 - ₦15,000,000</option>
                      <option value="20m">₦15,000,000+</option>
                    </select>
                  </div>
                  <Button variant="hero" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Check Eligibility <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-xl mb-3">Important Information</h3>
                    <p className="text-muted-foreground mb-4">
                      NUMAWAY does not directly provide loans. We connect students with trusted 
                      financing partners and guide you through the application process. 
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• All loan applications are subject to partner approval</li>
                      <li>• Terms and conditions vary by financing partner</li>
                      <li>• Ensure you understand all repayment obligations before committing</li>
                      <li>• NUMAWAY's service for loan facilitation is free of charge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Ready to Fund Your Education?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your financing options and get matched 
              with the right loan partner for your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    
    <Footer />
  </div>
);

export default Loans;