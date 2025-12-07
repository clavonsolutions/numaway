import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Star, Smartphone, BookOpen, Brain, FileCheck } from "lucide-react";
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

      {/* App Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">NUMAWAY App</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Apply with <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">confidence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our app empowers you to make smart academic decisions with AI-powered tools and expert guidance.
            </p>
          </motion.div>

          {/* App Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-gold/5 rounded-3xl p-8 lg:p-12 border border-border/50">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Phone Mockup */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-[240px] h-[480px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                    {/* Phone frame */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-10" />
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-secondary to-primary rounded-[2.5rem] overflow-hidden">
                      <div className="p-4 pt-10">
                        <div className="bg-white/20 backdrop-blur rounded-xl p-3 mb-3">
                          <div className="flex items-center gap-2 text-white text-xs mb-2">
                            <Search className="w-3 h-3" />
                            <span className="opacity-70">Find courses...</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {['MSc Data Science', 'MBA Finance', 'BSc Computer Science'].map((course, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-3">
                              <div className="text-white text-xs font-medium">{course}</div>
                              <div className="text-white/60 text-[10px] mt-1">Top Universities</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -right-6 top-20 bg-white rounded-xl shadow-lg p-3 border"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <FileCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-foreground">Easy to get in</div>
                        <div className="text-[10px] text-muted-foreground">6,790 courses</div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -left-6 bottom-32 bg-white rounded-xl shadow-lg p-3 border"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-foreground">AI Recommendations</div>
                        <div className="text-[10px] text-muted-foreground">Personalized</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                    An all-in-one app for your study-abroad needs
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Search courses, track applications, connect with counsellors, and get AI-powered recommendations — all in one beautiful app designed for African students.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button variant="hero" size="lg" className="gap-2" asChild>
                      <a href="/app">
                        Try the App
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                      <a href="/consultation">
                        Book Consultation
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
