import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Star, BookOpen, Brain, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import student images
import student1 from "@/assets/hero-student-1.jpg";
import student2 from "@/assets/hero-student-2.jpg";
import student3 from "@/assets/hero-student-3.jpg";
import student4 from "@/assets/hero-student-4.jpg";
import student5 from "@/assets/hero-student-5.jpg";

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

  const students = [
    { image: student1, country: "Australia", flag: "🇦🇺" },
    { image: student2, country: "USA", flag: "🇺🇸" },
    { image: student3, country: "UK", flag: "🇬🇧" },
    { image: student4, country: "Canada", flag: "🇨🇦" },
    { image: student5, country: "Ireland", flag: "🇮🇪" },
  ];

  const appFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Get personalized university and course recommendations based on your profile and goals."
    },
    {
      icon: BookOpen,
      title: "Smart Course Search",
      description: "Shortlist courses with the best success rates based on your eligibility and preferences."
    },
    {
      icon: FileCheck,
      title: "Application Tracking",
      description: "Track all your applications in one place with real-time status updates."
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% -10%, hsl(179 75% 41% / 0.35), transparent 60%)'
          }}
          animate={{ 
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Secondary glow with animation */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 80% 80%, hsl(40 68% 55% / 0.15), transparent 50%)'
          }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-secondary/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Animated orbs with enhanced glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, hsl(179 75% 41% / 0.2) 0%, transparent 60%)',
              top: '-20%',
              left: '-15%',
            }}
            animate={{ y: [0, 40, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, hsl(40 68% 55% / 0.15) 0%, transparent 60%)',
              top: '35%',
              right: '-10%',
            }}
            animate={{ y: [0, -50, 0], x: [0, 30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div 
            className="absolute w-[400px] h-[400px] rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, hsl(195 82% 71% / 0.18) 0%, transparent 60%)',
              bottom: '10%',
              left: '10%',
            }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Mesh grid with better visibility */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Enhanced Badge with animated border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="relative inline-flex mb-6 group"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-secondary via-gold to-accent opacity-75 blur-[2px] group-hover:opacity-100 transition-opacity" />
                <div className="relative inline-flex items-center gap-3 bg-primary/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary shadow-glow"></span>
                  </span>
                  <span className="text-sm font-semibold text-white tracking-wide">Human Counsellors + AI Intelligence</span>
                  <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-5"
              >
                Study Abroad.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                  Simplified.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="text-base sm:text-lg text-white/70 max-w-lg mb-7 leading-relaxed"
              >
                From courses to countries, find what you need in a moment. 
                Expert guidance for Nigerian students seeking global education.
              </motion.p>

              {/* Search Bar */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-xl mb-6"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/40 via-gold/30 to-secondary/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-elevated border-2 border-transparent group-focus-within:border-secondary/50 transition-colors">
                    <div className="flex-1 flex items-center gap-3 px-5">
                      <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for courses, universities..."
                        className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 text-base"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="rounded-full px-6 shadow-lg">
                      Search
                    </Button>
                  </div>
                </div>
              </motion.form>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-white/70 text-sm font-medium">
                  Rated 4.9 • <span className="text-white/50">Trusted by 10,000+ students</span>
                </span>
              </motion.div>

              {/* Popular Destinations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-wrap items-center gap-2 mt-8"
              >
                <span className="text-sm text-white/50">Popular:</span>
                {destinations.slice(0, 4).map((dest, index) => (
                  <motion.a
                    key={dest.slug}
                    href={`/countries/${dest.slug}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/25 rounded-full text-sm text-white transition-all duration-300"
                  >
                    <span>{dest.flag}</span>
                    <span className="font-medium">{dest.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Student Cards Fan Gallery */}
            {/* Desktop version */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:flex justify-center items-center h-[480px] xl:h-[560px]"
            >
              {students.map((student, index) => {
                const offset = index - 2;
                // Wider spacing so each card is ~70% visible
                const xOffset = offset * 130;
                const zIndex = 5 - Math.abs(offset);
                // Subtle height differences
                const heights = [260, 290, 320, 290, 260];
                const widths = [150, 165, 180, 165, 150];
                const yOffsets = [25, 10, 0, 10, 25];
                const rotation = offset * 2;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-[24px] overflow-hidden cursor-pointer"
                    style={{
                      width: `${widths[index]}px`,
                      height: `${heights[index]}px`,
                      zIndex,
                      boxShadow: index === 2 
                        ? '0 25px 60px -15px rgba(0,0,0,0.35), 0 10px 30px -10px rgba(0,0,0,0.25)' 
                        : '0 15px 40px -10px rgba(0,0,0,0.25), 0 5px 20px -5px rgba(0,0,0,0.15)',
                    }}
                    initial={{ opacity: 0, y: 60, x: xOffset, rotate: rotation, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: yOffsets[index], 
                      x: xOffset, 
                      rotate: rotation,
                      scale: 1,
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.4 + index * 0.08, 
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: yOffsets[index] - 10,
                      zIndex: 10,
                      rotate: 0,
                      boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4), 0 15px 35px -10px rgba(0,0,0,0.3)',
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  >
                    <motion.img
                      src={student.image}
                      alt={`Student in ${student.country}`}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.08, ease: "easeOut" }}
                    />
                    {/* Gradient overlay for badge visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" />
                    {/* Ring border effect */}
                    <div className="absolute inset-0 rounded-[24px] ring-1 ring-white/15 ring-inset" />
                    {/* Country badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1.5 w-fit shadow-lg">
                        <span className="text-sm">{student.flag}</span>
                        <span className="text-foreground text-xs font-semibold">{student.country}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Floating animation layer */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Mobile/Tablet version - staggered fan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex lg:hidden justify-center items-center h-[280px] sm:h-[320px]"
            >
              {students.slice(0, 5).map((student, index) => {
                const offset = index - 2;
                const xOffset = offset * 70;
                const zIndex = 5 - Math.abs(offset);
                const heights = [170, 190, 210, 190, 170];
                const widths = [90, 105, 120, 105, 90];
                const yOffsets = [18, 8, 0, 8, 18];
                const rotation = offset * 2;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-xl overflow-hidden"
                    style={{
                      width: `${widths[index]}px`,
                      height: `${heights[index]}px`,
                      zIndex,
                      boxShadow: index === 2 
                        ? '0 18px 40px -10px rgba(0,0,0,0.35)' 
                        : '0 10px 25px -5px rgba(0,0,0,0.25)',
                    }}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      y: yOffsets[index], 
                      x: xOffset, 
                      rotate: rotation,
                      scale: 1,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  >
                    <img
                      src={student.image}
                      alt={`Student in ${student.country}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-white/15 ring-inset" />
                    {/* Country badge */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-full px-2 py-1 w-fit shadow-md">
                        <span className="text-xs">{student.flag}</span>
                        <span className="text-foreground text-[10px] font-semibold">{student.country}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full h-auto fill-background" preserveAspectRatio="none">
            <path d="M0,40 C360,70 720,10 1080,45 C1260,60 1380,50 1440,35 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
