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

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Modern gradient background */}
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
          <motion.div 
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(179 75% 41% / 0.15) 0%, transparent 60%)',
              top: '-20%',
              left: '-15%',
            }}
            animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(40 68% 55% / 0.12) 0%, transparent 60%)',
              top: '40%',
              right: '-10%',
            }}
            animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div 
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(195 82% 71% / 0.15) 0%, transparent 60%)',
              bottom: '15%',
              left: '15%',
            }}
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Mesh grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6 shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium text-white/90">Human Counsellors + AI Intelligence</span>
                <Sparkles className="w-4 h-4 text-gold animate-pulse-soft" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
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
                className="text-lg sm:text-xl text-white/70 max-w-lg mb-8 leading-relaxed"
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

            {/* Right Content - Student Cards Stack */}
            {/* Desktop version */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:flex justify-center items-center h-[450px] xl:h-[550px]"
            >
              {students.map((student, index) => {
                const offset = index - 2;
                const xOffset = offset * 70;
                const zIndex = 5 - Math.abs(offset);
                const scale = 1 - Math.abs(offset) * 0.08;
                const opacity = 1 - Math.abs(offset) * 0.15;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      width: '180px',
                      height: '260px',
                      zIndex,
                      transform: `translateX(${xOffset}px) scale(${scale})`,
                      opacity,
                    }}
                    initial={{ opacity: 0, y: 50, x: xOffset }}
                    animate={{ opacity, y: 0, x: xOffset }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    whileHover={{ 
                      scale: scale * 1.05, 
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img
                      src={student.image}
                      alt={`Student in ${student.country}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1.5 w-fit">
                        <span className="text-sm">{student.flag}</span>
                        <span className="text-white text-xs font-medium">{student.country}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile/Tablet version - horizontal scroll */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex lg:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
            >
              {students.slice(0, 4).map((student, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-xl snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <img
                    src={student.image}
                    alt={`Student in ${student.country}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 w-fit">
                      <span className="text-sm">{student.flag}</span>
                      <span className="text-white text-[10px] font-medium">{student.country}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
