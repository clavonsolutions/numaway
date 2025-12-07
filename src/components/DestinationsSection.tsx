import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <section className="py-24 bg-background">
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
            Study Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore Top Study Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class education opportunities across the globe. Each destination
            offers unique programs and experiences tailored for Nigerian students.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <motion.a
              key={country.code}
              href={`/countries/${country.code === "uk" ? "united-kingdom" : country.code === "usa" ? "united-states" : country.code}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{country.flag}</span>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {country.name}
                </h3>
                <p className="text-muted-foreground">
                  {country.universities}+ Universities
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/countries"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
