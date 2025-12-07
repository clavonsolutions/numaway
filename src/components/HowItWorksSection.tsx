import { motion } from "framer-motion";
import { Search, UserCheck, FileText, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Explore",
    description: "Browse universities, courses, and countries that match your goals and preferences.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Get Matched",
    description: "Our AI-powered system and expert counsellors find the perfect programs for you.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: FileText,
    number: "03",
    title: "Apply",
    description: "Submit applications with our streamlined process. We handle the complex paperwork.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Plane,
    number: "04",
    title: "Fly & Thrive",
    description: "Get visa support, pre-departure guidance, and arrive ready to succeed abroad.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/50">
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Your Journey in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From dreaming to departure, we guide you every step of the way with
            transparent support and zero hidden fees.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-soft">
                  <span className="font-display font-bold text-primary text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
