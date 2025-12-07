import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Play } from "lucide-react";
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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Gradient glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(179 75% 41% / 0.25), transparent)'
        }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal orb */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(179 75% 41% / 0.2) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gold accent orb */}
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(40 68% 55% / 0.15) 0%, transparent 70%)',
            top: '50%',
            right: '-5%',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
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
            background: 'radial-gradient(circle, hsl(195 82% 71% / 0.2) 0%, transparent 70%)',
            bottom: '20%',
            left: '20%',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Mesh gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Human Counsellors + AI Intelligence
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Your intelligent pathway
            <br />
            <span className="relative">
              to{" "}
              <span className="text-secondary">
                global education
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help students in Nigeria and across Africa discover the right country, 
            university and course – with expert counsellors and powerful AI tools.
          </motion.p>

          {/* Search Bar - Glassmorphism */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-elevated">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search universities, courses or countries…"
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 text-base"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="hidden sm:flex gap-2">
                  Search
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.form>

          {/* CTA Buttons for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="flex sm:hidden gap-3 justify-center mb-10"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="/consultation">Get Started</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="/genie" className="gap-2">
                <Play className="w-4 h-4" />
                Try Genie
              </a>
            </Button>
          </motion.div>

          {/* Popular destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <span className="text-sm text-white/60 mr-1">Popular:</span>
            {destinations.map((dest, index) => (
              <motion.a
                key={dest.slug}
                href={`/countries/${dest.slug}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 hover:border-white/30 rounded-full text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-lg">{dest.flag}</span>
                <span className="hidden sm:inline">{dest.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-6 sm:gap-12 lg:gap-16 mt-16 pt-16 border-t border-white/10"
          >
            {[
              { number: "50+", label: "Partner Universities" },
              { number: "10K+", label: "Students Guided" },
              { number: "15+", label: "Countries" },
              { number: "98%", label: "Visa Success" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave - smoother */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-background" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,50 C1260,75 1380,60 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
