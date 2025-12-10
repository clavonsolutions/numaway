import { motion } from "framer-motion";
import { AnimatedCounter } from "@/hooks/useAnimatedCounter";
import { GraduationCap, Globe, Building2, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Students Placed",
    color: "text-secondary"
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Partner Universities",
    color: "text-gold"
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Countries",
    color: "text-accent"
  },
  {
    icon: GraduationCap,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    color: "text-secondary"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
