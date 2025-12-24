import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  size?: "default" | "large" | "small";
}

const PageHero = ({ 
  title, 
  titleHighlight, 
  subtitle, 
  description, 
  children,
  size = "default" 
}: PageHeroProps) => {
  const paddingClasses = {
    small: "py-16 pt-28",
    default: "py-20 pt-32",
    large: "py-28 pt-36"
  };

  return (
    <section className={`relative overflow-hidden ${paddingClasses[size]}`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Gradient glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 70% at 50% -10%, hsl(179 75% 41% / 0.25), transparent 60%)'
        }}
      />
      
      {/* Secondary glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 90% 80%, hsl(40 68% 55% / 0.1), transparent 50%)'
        }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal orb */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(179 75% 41% / 0.12) 0%, transparent 60%)',
            top: '-30%',
            left: '-15%',
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gold accent orb */}
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(40 68% 55% / 0.1) 0%, transparent 60%)',
            top: '20%',
            right: '-10%',
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small floating orb */}
        <motion.div 
          className="absolute w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(195 82% 71% / 0.12) 0%, transparent 60%)',
            bottom: '10%',
            left: '25%',
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Mesh gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6"
            >
              <span className="text-sm font-medium text-white/80">{subtitle}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] tracking-tight mb-5"
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                    {titleHighlight}
                  </span>
                </span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Children (search bars, buttons, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom diagonal divider - Stripe-inspired */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-10" style={{ height: "120px" }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="0,40 1440,80 1440,120 0,120"
            fill="hsl(var(--background))"
            className="transition-colors duration-300"
          />
          <line 
            x1="0" 
            y1="38" 
            x2="1440" 
            y2="78" 
            stroke="hsl(var(--secondary) / 0.15)" 
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
