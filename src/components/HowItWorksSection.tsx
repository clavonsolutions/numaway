import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Sparkles, FileText, Plane, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserCheck,
    title: "Understand You",
    description: "We learn your background, grades, goals, budget and timeline.",
    details: [
      "Academic background assessment",
      "Career goals exploration", 
      "Budget & timeline planning",
      "Personalized pathway creation"
    ],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary",
  },
  {
    icon: Sparkles,
    title: "Explore Options",
    description: "Use our AI Genie and expert counsellors to discover the best-fit countries, universities and courses.",
    details: [
      "AI-powered recommendations",
      "Expert counsellor guidance",
      "University shortlisting",
      "Course comparison tools"
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent",
  },
  {
    icon: FileText,
    title: "Build Application",
    description: "We help you prepare documents, apply to multiple options and track every decision.",
    details: [
      "Document preparation",
      "Application submission",
      "Real-time tracking",
      "Interview preparation"
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary",
  },
  {
    icon: Plane,
    title: "Visa & Travel",
    description: "We guide you through visa preparation, housing options and pre-departure planning.",
    details: [
      "Visa application support",
      "Accommodation booking",
      "Travel arrangements",
      "Pre-departure briefing"
    ],
    color: "text-gold",
    bgColor: "bg-gold/10",
    borderColor: "border-gold",
  },
];

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((c) => Math.min(steps.length - 1, c + 1));
  const prevStep = () => setCurrentStep((c) => Math.max(0, c - 1));

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            How NUMAWAY Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            A Simple, Guided Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to arrival – we guide you every step of the way with structured 
            support and complete transparency.
          </p>
        </motion.div>

        {/* Interactive Stepper */}
        <div className="max-w-5xl mx-auto">
          {/* Stepper Navigation */}
          <div className="relative mb-12">
            {/* Progress Line Background */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full hidden md:block" />
            
            {/* Active Progress Line */}
            <motion.div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full hidden md:block"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Step Indicators */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                const Icon = step.icon;

                return (
                  <motion.button
                    key={step.title}
                    onClick={() => setCurrentStep(index)}
                    className="flex flex-col items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`
                        relative w-12 h-12 rounded-full flex items-center justify-center
                        transition-all duration-300 z-10
                        ${isCompleted 
                          ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30" 
                          : isActive 
                            ? `${step.bgColor} ${step.borderColor} border-2 ${step.color}` 
                            : "bg-card border-2 border-border text-muted-foreground"
                        }
                      `}
                      animate={isActive ? { 
                        boxShadow: ["0 0 0 0 rgba(26, 182, 180, 0)", "0 0 0 12px rgba(26, 182, 180, 0.1)", "0 0 0 0 rgba(26, 182, 180, 0)"]
                      } : {}}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </motion.div>

                    {/* Step Label */}
                    <span className={`
                      mt-3 text-xs sm:text-sm font-medium text-center max-w-[80px] sm:max-w-[100px]
                      transition-colors duration-300
                      ${isActive ? "text-foreground" : "text-muted-foreground"}
                    `}>
                      {step.title}
                    </span>

                    {/* Step Number Badge */}
                    <span className={`
                      absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold
                      flex items-center justify-center
                      ${isCompleted || isActive 
                        ? "bg-gold text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                      }
                    `}>
                      {index + 1}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Step Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <div className={`
                relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 
                border ${steps[currentStep].borderColor}/30
                shadow-xl overflow-hidden
              `}>
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${steps[currentStep].bgColor} rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2`} />
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Icon & Title */}
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className={`w-20 h-20 ${steps[currentStep].bgColor} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      {(() => {
                        const Icon = steps[currentStep].icon;
                        return <Icon className={`w-10 h-10 ${steps[currentStep].color}`} />;
                      })()}
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      Step {currentStep + 1}: {steps[currentStep].title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </div>

                  {/* Right: Details List */}
                  <div className="space-y-4">
                    {steps[currentStep].details.map((detail, idx) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50"
                      >
                        <div className={`w-8 h-8 ${steps[currentStep].bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-4 h-4 ${steps[currentStep].color}`} />
                        </div>
                        <span className="text-foreground font-medium">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${idx === currentStep 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-muted-foreground"
                    }
                  `}
                />
              ))}
            </div>

            {currentStep < steps.length - 1 ? (
              <Button
                variant="hero"
                size="lg"
                onClick={nextStep}
                className="gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button variant="hero" size="lg" asChild className="gap-2">
                <a href="/consultation">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
