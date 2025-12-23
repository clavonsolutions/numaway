import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { AnimatedCounter } from "@/hooks/useAnimatedCounter";

const countries = [
  {
    name: "United Kingdom",
    code: "uk",
    universities: 150,
    flag: "🇬🇧",
    gradient: "from-blue-600 to-red-600",
  },
  {
    name: "United States",
    code: "usa",
    universities: 200,
    flag: "🇺🇸",
    gradient: "from-blue-700 to-red-500",
  },
  {
    name: "Canada",
    code: "canada",
    universities: 100,
    flag: "🇨🇦",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "Australia",
    code: "australia",
    universities: 80,
    flag: "🇦🇺",
    gradient: "from-blue-800 to-yellow-500",
  },
  {
    name: "Germany",
    code: "germany",
    universities: 90,
    flag: "🇩🇪",
    gradient: "from-black to-yellow-500",
  },
  {
    name: "Ireland",
    code: "ireland",
    universities: 40,
    flag: "🇮🇪",
    gradient: "from-green-600 to-orange-500",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
          >
            <Globe className="w-4 h-4" />
            Study Destinations
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            Explore Top Study{" "}
            <span className="text-gradient-teal">Destinations</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class education opportunities across the globe. Each destination
            offers unique programs and experiences tailored for Nigerian students.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <motion.a
              key={country.code}
              href={`/countries/${country.code === "uk" ? "united-kingdom" : country.code === "usa" ? "united-states" : country.code}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-secondary/30 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Gradient Background with animation */}
              <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <div className="relative p-6 lg:p-8">
                <div className="flex items-start justify-between mb-5">
                  {/* Flag with animated background */}
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${country.gradient} opacity-20 blur-xl scale-150`} />
                    <span className="relative text-6xl drop-shadow-lg">{country.flag}</span>
                  </div>
                  
                  {/* Arrow button with enhanced styling */}
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-muted/80 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {country.name}
                </h3>
                <p className="text-muted-foreground font-medium">
                  <AnimatedCounter end={country.universities} suffix="+" duration={1500} /> Partner Universities
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${country.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.a
            href="/countries"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary/5 hover:bg-primary/10 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
