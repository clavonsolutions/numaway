"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Globe, 
  Target, 
  Heart,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const WhyNumaway = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Zero Fraud Policy",
      description: "We operate with complete transparency. No hidden fees, no fake promises. Every recommendation is backed by verified data.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Guidance",
      description: "Our NUMAWAY Sage uses advanced AI to match you with universities and courses that truly fit your profile and goals.",
    },
    {
      icon: Users,
      title: "Expert Counsellors",
      description: "Our team includes certified education counsellors with years of experience in international admissions.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Partnerships with 500+ universities across 15+ countries, giving you access to the best opportunities worldwide.",
    },
    {
      icon: Target,
      title: "End-to-End Support",
      description: "From initial consultation to settling in your new country, we're with you at every step of your journey.",
    },
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Your success is our success. We prioritize what's best for you, not what earns us the highest commission.",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Students Placed" },
    { value: "98%", label: "Visa Success Rate" },
    { value: "500+", label: "Partner Universities" },
    { value: "₦500M+", label: "Scholarships Secured" },
  ];

  const differentiators = [
    "No application fees to students",
    "Free initial consultation",
    "Dedicated counsellor throughout your journey",
    "24/7 AI assistant for quick answers",
    "Post-arrival support in destination country",
    "Parent advisory services included",
    "Scholarship matching and application support",
    "Visa interview preparation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Why Choose Numaway: What Sets Us Apart"
      description="Learn why students and families choose Numaway: proven results, transparent pricing, and AI-assisted guidance."
      canonical="/about/why-numaway"
    />

      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-default">
            <Breadcrumbs 
              items={[
                { label: "About", href: "/about" },
                { label: "Why NUMAWAY" }
              ]} 
              className="mb-8 text-primary-foreground/70"
            />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                  Why Choose <span className="text-gradient-gold">NUMAWAY?</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 mb-8">
                  We're not just another study abroad agency. We're your partners in achieving 
                  global education success, powered by technology and driven by transparency.
                </p>
                <Button variant="gold" size="xl" asChild>
                  <a href="/consultation">Start Your Journey</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-display font-bold text-secondary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Numaway visual */}
        <section className="py-12">
          <div className="container-default">
            <img
              src="/images/heroes/student-graduate-1.jpg"
              alt="Student who succeeded in their study abroad journey with Numaway"
              className="w-full rounded-xl object-cover h-52"
              loading="lazy"
              width="1200"
              height="208"
            />
          </div>
        </section>

        {/* Reasons */}
        <section className="py-24">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Six key reasons why thousands of Nigerian students trust NUMAWAY 
                for their study abroad journey.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-24 bg-muted">
          <div className="container-default">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Everything You Need, All in One Place
                </h2>
                <p className="text-muted-foreground mb-8">
                  Unlike traditional agencies, NUMAWAY provides comprehensive support 
                  that goes beyond just university applications.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {differentiators.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-2xl font-display font-bold mb-4">
                  Our Promise to You
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Honest Recommendations</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll only recommend options that genuinely fit your profile and budget.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparent Fees</h4>
                      <p className="text-sm text-muted-foreground">
                        No hidden charges. You'll know exactly what you're paying for upfront.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Success or Support Continues</h4>
                      <p className="text-sm text-muted-foreground">
                        If your first application doesn't succeed, we'll help you reapply at no extra cost.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Book a free consultation and let us show you why NUMAWAY is the right choice for your study abroad dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <a href="/consultation" className="gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="/sage">Try NUMAWAY Sage</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyNumaway;

