import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  MapPin, 
  DollarSign, 
  Target, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  BookOpen,
  Briefcase,
  FlaskConical,
  Palette,
  Scale,
  Heart,
  Building2,
  Users
} from "lucide-react";

const steps = [
  {
    id: "level",
    question: "What level of study are you interested in?",
    icon: GraduationCap,
    options: [
      { id: "undergraduate", label: "Undergraduate (Bachelor's)", icon: BookOpen },
      { id: "postgraduate", label: "Postgraduate (Master's)", icon: GraduationCap },
      { id: "phd", label: "PhD/Doctoral", icon: FlaskConical },
      { id: "foundation", label: "Foundation/Pathway", icon: Target },
    ]
  },
  {
    id: "field",
    question: "Which field interests you most?",
    icon: Target,
    options: [
      { id: "business", label: "Business & Management", icon: Briefcase },
      { id: "engineering", label: "Engineering & Technology", icon: Building2 },
      { id: "health", label: "Health & Medicine", icon: Heart },
      { id: "arts", label: "Arts & Humanities", icon: Palette },
      { id: "science", label: "Sciences", icon: FlaskConical },
      { id: "law", label: "Law & Social Sciences", icon: Scale },
    ]
  },
  {
    id: "destination",
    question: "Where would you like to study?",
    icon: MapPin,
    options: [
      { id: "uk", label: "🇬🇧 United Kingdom", flag: true },
      { id: "usa", label: "🇺🇸 United States", flag: true },
      { id: "canada", label: "🇨🇦 Canada", flag: true },
      { id: "australia", label: "🇦🇺 Australia", flag: true },
      { id: "germany", label: "🇩🇪 Germany", flag: true },
      { id: "flexible", label: "I'm flexible / Help me decide", icon: Users },
    ]
  },
  {
    id: "budget",
    question: "What's your approximate annual budget?",
    icon: DollarSign,
    options: [
      { id: "low", label: "Under ₦10M (~£8,000)", budget: true },
      { id: "medium", label: "₦10M - ₦20M (£8,000-£15,000)", budget: true },
      { id: "high", label: "₦20M - ₦35M (£15,000-£25,000)", budget: true },
      { id: "premium", label: "Above ₦35M (£25,000+)", budget: true },
      { id: "scholarship", label: "Need scholarship/funding help", icon: Sparkles },
    ]
  }
];

const FindMyPathWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (optionId: string) => {
    const stepId = steps[currentStep].id;
    setAnswers(prev => ({ ...prev, [stepId]: optionId }));
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setIsComplete(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  const step = steps[currentStep];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Quick Path Finder</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">
              Find <span className="text-gradient">Your Path</span>
            </h2>
            <p className="text-muted-foreground">
              Answer a few questions and we'll recommend your best options
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? "w-8 bg-primary" 
                    : index < currentStep 
                      ? "w-4 bg-primary/50"
                      : "w-4 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Card */}
          <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Step {currentStep + 1} of {steps.length}
                      </p>
                      <h3 className="text-lg font-display font-semibold">{step.question}</h3>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {step.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary hover:bg-primary/5 ${
                          answers[step.id] === option.id
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background"
                        }`}
                      >
                        {option.icon && <option.icon className="w-5 h-5 text-primary flex-shrink-0" />}
                        <span className="font-medium text-sm">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Select an option to continue
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Great! We've Got Your Preferences</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a free consultation to get personalized recommendations from our counsellors.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="hero" asChild>
                      <a href="/consultation" className="gap-2">
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" onClick={handleReset}>
                      Start Over
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMyPathWizard;