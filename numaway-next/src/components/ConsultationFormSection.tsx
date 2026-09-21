"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, Users, GraduationCap, Globe, FileCheck, Plane, Home, BookOpen, Handshake, MessageSquare, UserCheck, Video, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface QuickFormData {
  userType: "student" | "guardian" | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  studyLevel: string;
  preferredCountry: string;
}

const ConsultationFormSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuickFormData>({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studyLevel: "",
    preferredCountry: "",
  });

  const updateField = (field: keyof QuickFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.userType || !formData.firstName || !formData.lastName || !formData.email)) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (step < 2) setStep(prev => prev + 1);
  };

  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || undefined,
          destination: formData.preferredCountry || undefined,
          message: `User type: ${formData.userType}. Study level: ${formData.studyLevel || "not specified"}.`,
          source: "consultation-form",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      toast({
        title: "Consultation Request Received!",
        description: "Our team will contact you within 24 hours at " + formData.email,
      });
      setStep(1);
      setFormData({ userType: "", firstName: "", lastName: "", email: "", phone: "", studyLevel: "", preferredCountry: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us directly at connect@numaway.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { icon: Globe, title: "Study Abroad Advisory", desc: "Expert guidance on choosing the right country, course, and university that fits your goals." },
    { icon: FileCheck, title: "Visa Counseling", desc: "Step-by-step help with your student visa application, including documents and interview tips." },
    { icon: GraduationCap, title: "Study Loan Application", desc: "We help you apply for education loans from trusted banks and lenders." },
    { icon: Handshake, title: "Agent Partnerships", desc: "We partner with agents and counselors to provide trusted support across different regions." },
    { icon: BookOpen, title: "IELTS Training/Preparation", desc: "Join our training classes to improve your English and get ready for IELTS and other tests." },
    { icon: Home, title: "Accommodation Support", desc: "We can help you find safe and affordable housing near your university or off-campus." },
    { icon: Users, title: "Alumni Connections", desc: "Talk to past students who have studied at your chosen university and learn from their experience." },
    { icon: Plane, title: "Pre-Departure Briefing", desc: "Attend our sessions to learn what to expect abroad, from travel tips to living independently." },
  ];

  const additionalServices = [
    { icon: Video, title: "University Webinars & Events", desc: "Meet university reps online or on-site at our exhibition fairs." },
    { icon: MessageSquare, title: "Student Community Groups", desc: "Join our community of students preparing to study abroad." },
    { icon: UserCheck, title: "Profile Evaluation", desc: "Get your academic profile evaluated by our experts." },
  ];

  const expectations = [
    { num: "01", title: "Personalized Consultation", desc: "Discuss your goals and how NUMAWAY can support your unique journey and candidacy." },
    { num: "02", title: "Tailored Recommendations", desc: "Receive detailed recommendations on services, universities, and an outline of next steps." },
    { num: "03", title: "Clear Action Plan", desc: "Walk away with a focused plan on what to expect from your personalized NUMAWAY programme." },
  ];

  const studyLevels = ["Foundation", "Bachelor's", "Master's", "PhD"];
  const countries = [
    { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { code: "usa", name: "United States", flag: "🇺🇸" },
    { code: "canada", name: "Canada", flag: "🇨🇦" },
    { code: "australia", name: "Australia", flag: "🇦🇺" },
    { code: "germany", name: "Germany", flag: "🇩🇪" },
    { code: "ireland", name: "Ireland", flag: "🇮🇪" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/20 relative overflow-hidden">
      {/* Diagonal divider at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 1440,50 1440,80 0,80" fill="hsl(var(--background))" />
          <line x1="0" y1="0" x2="1440" y2="50" stroke="hsl(var(--secondary) / 0.08)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="container-default">
        {/* Main Consultation Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              <span className="text-secondary">NUMAWAY</span> is here to help!
            </h2>
            
            <p className="text-lg font-semibold text-foreground mb-4">
              Applying to top universities is a difficult task which is why many students seek external support.
            </p>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Each of our programmes are tailored to the student and are delivered by a carefully selected team of mentors who provide focused support with every aspect of the process.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are proud to say that students who work with us are up to <span className="font-bold text-secondary">4x as likely</span> to get into their dream university than those who apply alone.
            </p>
            
            <p className="text-foreground font-medium mb-6">
              By speaking to one of our Academic Advisors you can expect:
            </p>
            
            {/* Expectations */}
            <div className="grid sm:grid-cols-3 gap-6">
              {expectations.map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-secondary rounded-full" />
                    <div>
                      <span className="text-3xl font-display font-bold text-secondary/80">{item.num}</span>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">
              Book a free consultation today
            </h3>
            <p className="text-muted-foreground mb-6">
              Register now and one of our experts will contact you to discuss your academic journey
            </p>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* User Type Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Are you a student or a guardian?
                    </label>
                    <div className="flex gap-3">
                      {["student", "guardian"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField("userType", type as "student" | "guardian")}
                          className={`px-5 py-2.5 rounded-lg border text-sm font-medium capitalize transition-all ${
                            formData.userType === type
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border hover:border-secondary/50 text-muted-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Fields */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="Enter your email"
                      className="bg-background"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button variant="gold" onClick={handleNext} className="gap-2">
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="w-8 h-1.5 rounded-full bg-secondary" />
                    <div className="w-8 h-1.5 rounded-full bg-muted" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Study Level</label>
                    <div className="grid grid-cols-2 gap-3">
                      {studyLevels.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => updateField("studyLevel", level)}
                          className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                            formData.studyLevel === level
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border hover:border-secondary/50 text-muted-foreground"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Preferred Destination</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => updateField("preferredCountry", country.code)}
                          className={`p-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 ${
                            formData.preferredCountry === country.code
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border hover:border-secondary/50 text-muted-foreground"
                          }`}
                        >
                          <span>{country.flag}</span>
                          {country.name.split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button variant="gold" onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
                      {isSubmitting ? "Submitting..." : "Book Consultation"}
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="w-8 h-1.5 rounded-full bg-secondary" />
                    <div className="w-8 h-1.5 rounded-full bg-secondary" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Services at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            {/* Main Services Grid */}
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
                Our <span className="text-secondary">Services</span> at a Glance
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="lg:w-80 flex-shrink-0">
              <h4 className="text-xl font-display font-semibold text-muted-foreground mb-6">and more...</h4>
              
              <div className="space-y-4">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-card rounded-xl p-4 border border-border hover:border-secondary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="w-5 h-5 text-secondary" />
                      <h5 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {service.title}
                      </h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationFormSection;

