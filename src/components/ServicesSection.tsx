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
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "End-to-end visa support with high approval success rates.",
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Find safe, comfortable housing near your campus.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: CreditCard,
    title: "Scholarships",
    description: "Access funding opportunities and scholarship guidance.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description: "Everything you need to know before you travel.",
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
  {
    icon: Languages,
    title: "Test Prep",
    description: "IELTS, TOEFL, GRE, GMAT preparation support.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Building2,
    title: "Career Counseling",
    description: "Align your education with career goals.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: HeartHandshake,
    title: "Post-Arrival",
    description: "Continued support after you land abroad.",
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.65, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span 
              className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Everything You Need to
              <span className="text-gradient-gold"> Study Abroad</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From your first inquiry to your graduation abroad, NUMAWAY provides
              comprehensive support at every stage of your educational journey.
              No hidden costs, no surprises — just honest guidance.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button variant="hero" size="lg" className="group">
                <span>View All Services</span>
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </Button>
              <Button variant="outline" size="lg" className="hover:border-secondary hover:text-secondary transition-colors">
                Free Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Services Grid with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                className="group relative bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border border-border/50 group-hover:border-secondary/30 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className={`w-6 h-6 ${service.iconColor} group-hover:text-secondary-foreground transition-colors duration-300`} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
