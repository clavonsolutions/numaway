import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const destinations = [
    { name: "United Kingdom", flag: "🇬🇧", slug: "united-kingdom" },
    { name: "Canada", flag: "🇨🇦", slug: "canada" },
    { name: "United States", flag: "🇺🇸", slug: "united-states" },
    { name: "Australia", flag: "🇦🇺", slug: "australia" },
    { name: "Germany", flag: "🇩🇪", slug: "germany" },
    { name: "Ireland", flag: "🇮🇪", slug: "ireland" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern gradient background - seamless with header */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Gradient glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 70% at 50% -10%, hsl(179 75% 41% / 0.3), transparent 60%)'
        }}
      />
      
      {/* Secondary glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 80%, hsl(40 68% 55% / 0.12), transparent 50%)'
        }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal orb */}
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(179 75% 41% / 0.15) 0%, transparent 60%)',
            top: '-20%',
            left: '-15%',
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gold accent orb */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(40 68% 55% / 0.12) 0%, transparent 60%)',
            top: '40%',
            right: '-10%',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small floating orb */}
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(195 82% 71% / 0.15) 0%, transparent 60%)',
            bottom: '15%',
            left: '15%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Mesh gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Human Counsellors + AI Intelligence
            </span>
            <Sparkles className="w-4 h-4 text-gold animate-pulse-soft" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Your intelligent pathway
            <br />
            <span className="relative inline-block mt-2">
              to{" "}
              <span className="relative">
                <span className="text-gradient-hero bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  global education
                </span>
                {/* Underline glow */}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-secondary/80 via-accent/60 to-secondary/80"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We help students in Nigeria and across Africa discover the right country, 
            university and course – with expert counsellors and powerful AI tools.
          </motion.p>

          {/* Search Bar - Glassmorphism */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary/40 via-gold/30 to-secondary/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-elevated">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search universities, courses or countries…"
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3.5 text-base"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="hidden sm:flex gap-2 shadow-lg">
                  Search
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button variant="gold" size="lg" className="shadow-gold/30 shadow-lg hover:shadow-gold/50 transition-all" asChild>
              <a href="/consultation" className="gap-2">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" className="border-white/20 text-white hover:bg-white/15" asChild>
              <a href="/genie" className="gap-2">
                <Play className="w-4 h-4" />
                Try AI Genie
              </a>
            </Button>
          </motion.div>

          {/* Popular destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <span className="text-sm text-white/60 mr-2">Popular destinations:</span>
            {destinations.map((dest, index) => (
              <motion.a
                key={dest.slug}
                href={`/countries/${dest.slug}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 hover:border-white/30 rounded-full text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-lg">{dest.flag}</span>
                <span className="hidden sm:inline font-medium">{dest.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20 mt-20 pt-12 border-t border-white/10"
          >
            {[
              { number: "50+", label: "Partner Universities" },
              { number: "10K+", label: "Students Guided" },
              { number: "15+", label: "Countries" },
              { number: "98%", label: "Visa Success" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary mb-2 group-hover:animate-glow-pulse">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom wave - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto fill-background" preserveAspectRatio="none">
          <path d="M0,40 C360,70 720,10 1080,45 C1260,60 1380,50 1440,35 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
