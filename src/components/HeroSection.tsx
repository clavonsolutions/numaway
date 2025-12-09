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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:flex justify-center items-center h-[550px]"
            >
              {students.map((student, index) => {
                const offset = index - 2;
                const xOffset = offset * 85;
                const zIndex = 5 - Math.abs(offset);
                const scale = 1 - Math.abs(offset) * 0.08;
                const opacity = 1 - Math.abs(offset) * 0.15;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      width: '220px',
                      height: '320px',
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
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    {/* Country badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-2 w-fit">
                        <span className="text-lg">{student.flag}</span>
                        <span className="text-white text-sm font-medium">{student.country}</span>
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

      {/* App Showcase Section - Stripe-inspired */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/40 via-background to-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone Mockup - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <div className="relative">
                {/* Phone Device */}
                <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px]">
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-[3rem] shadow-2xl shadow-primary/20">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />
                    
                    {/* Screen bezel */}
                    <div className="absolute inset-2.5 bg-gradient-to-b from-secondary via-secondary/90 to-primary rounded-[2.5rem] overflow-hidden">
                      {/* App UI Inside Phone */}
                      <div className="p-5 pt-12 h-full flex flex-col">
                        {/* Search Bar */}
                        <div className="bg-white/15 backdrop-blur-md rounded-xl p-3.5 mb-4 border border-white/10">
                          <div className="flex items-center gap-2.5 text-white/80 text-sm">
                            <Search className="w-4 h-4" />
                            <span>Find courses...</span>
                          </div>
                        </div>

                        {/* Course Cards */}
                        <div className="space-y-3 flex-1">
                          {[
                            { name: 'MSc Data Science', badge: 'Popular' },
                            { name: 'MBA Finance', badge: null },
                            { name: 'BSc Computer Science', badge: null }
                          ].map((course, i) => (
                            <motion.div 
                              key={i} 
                              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-white text-sm font-medium">{course.name}</div>
                                  <div className="text-white/50 text-xs mt-1">Top Universities</div>
                                </div>
                                {course.badge && (
                                  <span className="text-[10px] px-2 py-1 bg-gold/20 text-gold rounded-full font-medium">
                                    {course.badge}
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge - Top Right */}
                <motion.div
                  className="absolute -right-4 sm:-right-8 top-16 sm:top-24 bg-card rounded-2xl shadow-elevated p-4 border border-border/80 max-w-[160px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Easy to get in</div>
                      <div className="text-xs text-muted-foreground">6,790 courses</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Bottom Left */}
                <motion.div
                  className="absolute -left-4 sm:-left-8 bottom-24 sm:bottom-32 bg-card rounded-2xl shadow-elevated p-4 border border-border/80 max-w-[180px]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">AI Recommendations</div>
                      <div className="text-xs text-muted-foreground">Personalized</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                An all-in-one app for your study-abroad needs
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Search courses, track applications, connect with counsellors, and get AI-powered recommendations — all in one beautiful app designed for African students.
              </p>

              {/* Feature List */}
              <div className="space-y-5 mb-10">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2 shadow-lg shadow-secondary/20" asChild>
                  <a href="/app">
                    Try the App
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 border-secondary/30 text-secondary hover:bg-secondary/5 hover:border-secondary/50" 
                  asChild
                >
                  <a href="/consultation">
                    Book Consultation
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
