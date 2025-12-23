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
    <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 20% 20%, hsl(179 75% 41% / 0.15), transparent 50%)'
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 80%, hsl(40 68% 55% / 0.1), transparent 50%)'
        }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative group"
            >
              {/* Glass card */}
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden text-center">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-secondary/30 via-transparent to-gold/20" />
                </div>
                
                {/* Icon with glow */}
                <motion.div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-2xl bg-white/10 flex items-center justify-center relative`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute inset-0 rounded-2xl ${stat.color === 'text-secondary' ? 'bg-secondary/20' : stat.color === 'text-gold' ? 'bg-gold/20' : 'bg-accent/20'} blur-xl opacity-50`} />
                  <stat.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color} relative z-10`} />
                </motion.div>

                {/* Counter */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                </div>

                {/* Label */}
                <div className="text-white/60 text-sm sm:text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
