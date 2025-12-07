import { motion } from "framer-motion";
import { 
  GraduationCap, 
  FileCheck, 
  Home, 
  CreditCard, 
  Plane, 
  Languages, 
  Building2, 
  HeartHandshake 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description: "Expert guidance for admission to top universities worldwide.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "End-to-end visa support with high approval success rates.",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Find safe, comfortable housing near your campus.",
  },
  {
    icon: CreditCard,
    title: "Scholarships",
    description: "Access funding opportunities and scholarship guidance.",
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: "Everything you need to know before you travel.",
  },
  {
    icon: Languages,
    title: "Test Prep",
    description: "IELTS, TOEFL, GRE, GMAT preparation support.",
  },
  {
    icon: Building2,
    title: "Career Counseling",
    description: "Align your education with career goals.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Arrival",
    description: "Continued support after you land abroad.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Everything You Need to
              <span className="text-gradient-gold"> Study Abroad</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From your first inquiry to your graduation abroad, NUMAWAY provides
              comprehensive support at every stage of your educational journey.
              No hidden costs, no surprises — just honest guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                View All Services
              </Button>
              <Button variant="outline" size="lg">
                Free Consultation
              </Button>
            </div>
          </motion.div>

          {/* Right - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
