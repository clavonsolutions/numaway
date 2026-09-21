import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, User, GraduationCap, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 2: Education
  currentEducation: string;
  fieldOfStudy: string;
  gpa: string;
  graduationYear: string;
  // Step 3: Goals
  studyLevel: string;
  preferredCountries: string[];
  budget: string;
  intake: string;
  // Step 4: Additional
  englishTest: string;
  englishScore: string;
  workExperience: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentEducation: "",
  fieldOfStudy: "",
  gpa: "",
  graduationYear: "",
  studyLevel: "",
  preferredCountries: [],
  budget: "",
  intake: "",
  englishTest: "",
  englishScore: "",
  workExperience: "",
  additionalInfo: "",
};

const MultiStepForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: "personal", title: "Personal Info", icon: User },
    { id: "education", title: "Education", icon: GraduationCap },
    { id: "goals", title: "Study Goals", icon: Target },
    { id: "additional", title: "Additional", icon: Calendar },
  ];

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleCountry = (country: string) => {
    const current = formData.preferredCountries;
    const newCountries = current.includes(country)
      ? current.filter(c => c !== country)
      : [...current, country];
    updateField("preferredCountries", newCountries);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    toast({
      title: "Consultation Request Submitted!",
      description: "Our counsellor will contact you within 24 hours.",
    });
  };

  const countries = [
    { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { code: "usa", name: "United States", flag: "🇺🇸" },
    { code: "canada", name: "Canada", flag: "🇨🇦" },
    { code: "australia", name: "Australia", flag: "🇦🇺" },
    { code: "germany", name: "Germany", flag: "🇩🇪" },
    { code: "ireland", name: "Ireland", flag: "🇮🇪" },
  ];

  const studyLevels = ["Bachelor's Degree", "Master's Degree", "PhD", "Foundation", "Diploma"];
  const budgets = ["Below ₦5M/year", "₦5M - ₦10M/year", "₦10M - ₦20M/year", "Above ₦20M/year", "Need Scholarship"];
  const intakes = ["January 2025", "May 2025", "September 2025", "January 2026"];
  const englishTests = ["IELTS", "TOEFL", "PTE", "Duolingo", "Not Taken Yet"];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  index < currentStep
                    ? "bg-secondary text-secondary-foreground"
                    : index === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                    index < currentStep ? "bg-secondary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-center font-medium">
          Step {currentStep + 1}: {steps[currentStep].title}
        </p>
      </div>

      {/* Form Steps */}
      <div className="bg-card rounded-2xl p-8 shadow-card min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Step 1: Personal Info */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-2">Let's get to know you</h2>
                <p className="text-muted-foreground mb-6">Tell us a bit about yourself so we can personalize your experience.</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Education */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-2">Your Education Background</h2>
                <p className="text-muted-foreground mb-6">Help us understand your academic profile.</p>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Current/Highest Education *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Secondary School", "Diploma", "Bachelor's", "Master's", "PhD"].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => updateField("currentEducation", level)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                          formData.currentEducation === level
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Field of Study</label>
                  <Input
                    value={formData.fieldOfStudy}
                    onChange={(e) => updateField("fieldOfStudy", e.target.value)}
                    placeholder="e.g., Computer Science, Business"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">GPA / Grade</label>
                    <Input
                      value={formData.gpa}
                      onChange={(e) => updateField("gpa", e.target.value)}
                      placeholder="e.g., 3.5/4.0 or 2:1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Graduation Year</label>
                    <Input
                      value={formData.graduationYear}
                      onChange={(e) => updateField("graduationYear", e.target.value)}
                      placeholder="e.g., 2024"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Study Goals */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-2">Your Study Goals</h2>
                <p className="text-muted-foreground mb-6">Where would you like to study?</p>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Preferred Countries (select up to 3)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => toggleCountry(country.code)}
                        disabled={formData.preferredCountries.length >= 3 && !formData.preferredCountries.includes(country.code)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors flex items-center gap-2 ${
                          formData.preferredCountries.includes(country.code)
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50 disabled:opacity-50"
                        }`}
                      >
                        <span className="text-lg">{country.flag}</span>
                        {country.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3">Study Level *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {studyLevels.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => updateField("studyLevel", level)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                          formData.studyLevel === level
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3">Budget Range</label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => updateField("budget", budget)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                          formData.budget === budget
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-2">Almost Done!</h2>
                <p className="text-muted-foreground mb-6">A few more details to help us serve you better.</p>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Preferred Intake</label>
                  <div className="grid grid-cols-2 gap-3">
                    {intakes.map((intake) => (
                      <button
                        key={intake}
                        type="button"
                        onClick={() => updateField("intake", intake)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                          formData.intake === intake
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        {intake}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3">English Test</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {englishTests.map((test) => (
                      <button
                        key={test}
                        type="button"
                        onClick={() => updateField("englishTest", test)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-colors ${
                          formData.englishTest === test
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        {test}
                      </button>
                    ))}
                  </div>
                </div>
                {formData.englishTest && formData.englishTest !== "Not Taken Yet" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Score</label>
                    <Input
                      value={formData.englishScore}
                      onChange={(e) => updateField("englishScore", e.target.value)}
                      placeholder="e.g., 7.0 for IELTS"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">Anything else we should know?</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => updateField("additionalInfo", e.target.value)}
                    placeholder="Special requirements, specific universities you're interested in, etc."
                    className="w-full p-3 rounded-xl border border-border bg-background min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button variant="gold" onClick={nextStep} className="gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="gold"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="gap-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
