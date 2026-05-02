import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Search, Brain, BookOpen, FileCheck, MessageCircle, Globe, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const AppShowcaseSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const appFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Course Search",
      description: "Shortlist courses with the best success rates based on your eligibility and academic profile.",
      color: "from-secondary/20 to-secondary/10",
      iconColor: "text-secondary",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="bg-amber-100 rounded-lg p-2 text-xs flex items-center justify-between">
            <span className="text-amber-800">679</span>
            <span className="text-amber-600 text-[10px]">Tough to get in</span>
          </div>
          <div className="bg-sky-100 rounded-lg p-2 text-xs flex items-center justify-between">
            <span className="text-sky-800">180</span>
            <span className="text-sky-600 text-[10px]">Give it a try</span>
          </div>
          <div className="bg-green-100 rounded-lg p-2 text-xs flex items-center justify-between">
            <span className="text-green-800">6,790</span>
            <span className="text-green-600 text-[10px]">Easy to get in</span>
          </div>
        </div>
      )
    },
    {
      icon: MessageCircle,
      title: "Dedicated Personal Counsellor",
      description: "Receive virtual counselling on course selection through to visa guidance from our experts.",
      color: "from-gold/20 to-gold/10",
      iconColor: "text-gold",
      visual: (
        <div className="mt-4 relative">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-2xl font-bold">
              🎓
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-red-500" />
            </div>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Globe className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Seamless Applications",
      description: "Apply directly to universities and get real-time status updates on all your applications.",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 bg-green-50 rounded-lg p-2">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <FileCheck className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-green-700">Offer Received</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <BookOpen className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-blue-700">In Review</span>
          </div>
        </div>
      )
    },
    {
      icon: BookOpen,
      title: "Document Management",
      description: "Upload, organize, and share all your academic documents securely in one place.",
      color: "from-purple-500/20 to-purple-500/10",
      iconColor: "text-purple-500",
      visual: (
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-muted rounded-lg p-2 text-center">
            <div className="text-lg">📄</div>
            <span className="text-[10px] text-muted-foreground">Transcript</span>
          </div>
          <div className="bg-muted rounded-lg p-2 text-center">
            <div className="text-lg">🎓</div>
            <span className="text-[10px] text-muted-foreground">Certificate</span>
          </div>
          <div className="bg-muted rounded-lg p-2 text-center">
            <div className="text-lg">📝</div>
            <span className="text-[10px] text-muted-foreground">SOP</span>
          </div>
          <div className="bg-muted rounded-lg p-2 text-center">
            <div className="text-lg">✉️</div>
            <span className="text-[10px] text-muted-foreground">LOR</span>
          </div>
        </div>
      )
    },
    {
      icon: FileCheck,
      title: "Visa Assistance",
      description: "Get step-by-step guidance through the visa application process with expert support.",
      color: "from-rose-500/20 to-rose-500/10",
      iconColor: "text-rose-500",
      visual: (
        <div className="mt-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-3 text-center">
            <div className="text-white text-lg font-bold mb-1">🛂</div>
            <span className="text-white text-xs">Visa Approved</span>
          </div>
        </div>
      )
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/20 via-background to-background relative overflow-hidden">
      {/* Diagonal divider at top */}
      <div className="absolute -top-1 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,80 1440,30 1440,80 0,80" fill="hsl(var(--muted) / 0.2)" />
        </svg>
      </div>

      {/* Subtle background pattern - softer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-default relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Apply with confidence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our app empowers you to make smart academic decisions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* Phone Mockup - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex flex-col items-center lg:sticky lg:top-24 w-full lg:w-auto flex-shrink-0"
          >
            <div className="relative">
              {/* Secondary phone - behind (hidden on mobile) */}
              <div className="absolute -left-8 top-8 w-[180px] h-[360px] hidden xl:block">
                <div className="w-full h-full bg-gradient-to-b from-[hsl(var(--mock-phone-top))] via-[hsl(var(--mock-phone-mid))] to-[hsl(var(--mock-phone-bot))] rounded-[2.5rem] shadow-xl opacity-60 transform -rotate-6">
                  <div className="absolute inset-2 bg-muted rounded-[2rem] flex items-center justify-center">
                    <div className="text-muted-foreground/50 text-sm text-center p-4">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <span className="opacity-50">Rankings</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Phone Device */}
              <div className="relative w-[240px] sm:w-[260px] md:w-[280px] h-[480px] sm:h-[520px] md:h-[560px] z-10">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--mock-phone-top))] via-[hsl(var(--mock-phone-mid))] to-[hsl(var(--mock-phone-bot))] rounded-[3rem] shadow-2xl shadow-primary/20">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />
                  
                  {/* Screen bezel */}
                  <div className="absolute inset-2.5 bg-gradient-to-b from-secondary via-secondary/90 to-primary rounded-[2.5rem] overflow-hidden">
                    {/* App UI Inside Phone */}
                    <div className="p-5 pt-12 h-full flex flex-col">
                      {/* Header with logo */}
                      <div className="text-center text-white font-bold text-lg mb-3">NUMAWAY</div>
                      
                      {/* Search Bar */}
                      <div className="bg-white/15 backdrop-blur-md rounded-xl p-3.5 mb-4 border border-white/10">
                        <div className="flex items-center gap-2.5 text-white/80 text-sm">
                          <Search className="w-4 h-4" />
                          <span>Find courses, institutions, locations</span>
                        </div>
                      </div>

                      {/* Course Cards */}
                      <div className="space-y-3 flex-1">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                          <div className="text-white/50 text-xs mb-2">Courses</div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-white text-sm font-medium">MSc Data Science</div>
                              <div className="text-white/50 text-xs mt-1">🇺🇸 American University</div>
                            </div>
                            <div className="text-white/60 text-xs">$36,744</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                          <div className="text-white/50 text-xs mb-2">Institutions</div>
                          <div className="flex gap-3">
                            <div className="text-center">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-1">🏛️</div>
                              <span className="text-white/70 text-[10px]">Cardiff</span>
                            </div>
                            <div className="text-center">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-1">🏫</div>
                              <span className="text-white/70 text-[10px]">American U</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* App Store Buttons */}
                      <div className="mt-auto pt-3 flex gap-2">
                        <a 
                          href="/app" 
                          className="flex items-center gap-1.5 bg-black hover:bg-black/80 rounded-lg px-3 py-2.5 transition-colors border border-white/10 flex-1"
                        >
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div className="flex flex-col">
                            <span className="text-[8px] text-white/60 leading-none">Download on the</span>
                            <span className="text-xs text-white font-semibold leading-tight">App Store</span>
                          </div>
                        </a>
                        <a 
                          href="/app" 
                          className="flex items-center gap-1.5 bg-black hover:bg-black/80 rounded-lg px-3 py-2.5 transition-colors border border-white/10 flex-1"
                        >
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                          </svg>
                          <div className="flex flex-col">
                            <span className="text-[8px] text-white/60 leading-none">GET IT ON</span>
                            <span className="text-xs text-white font-semibold leading-tight">Google Play</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-foreground font-semibold text-lg mt-8 max-w-xs"
            >
              An all-in-one app for your study-abroad needs
            </motion.p>

            {/* Large App Store Buttons below phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 mt-6"
            >
              <a 
                href="/app" 
                className="flex items-center gap-2 bg-black hover:bg-black/80 rounded-xl px-4 py-3 transition-colors"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 leading-none">Download on the</span>
                  <span className="text-base text-white font-semibold leading-tight">App Store</span>
                </div>
              </a>
              <a 
                href="/app" 
                className="flex items-center gap-2 bg-black hover:bg-black/80 rounded-xl px-4 py-3 transition-colors"
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 leading-none">GET IT ON</span>
                  <span className="text-base text-white font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Feature Cards - Horizontal Scroll */}
          <div className="flex-1 relative min-w-0 w-full">
            {/* Scroll buttons */}
            <div className="flex justify-between sm:justify-end gap-2 mb-4">
              <span className="text-sm text-muted-foreground sm:hidden">Swipe to explore</span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                    canScrollLeft 
                      ? 'border-border hover:bg-muted text-foreground' 
                      : 'border-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                    canScrollRight 
                      ? 'border-border hover:bg-muted text-foreground' 
                      : 'border-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <div className="bg-card border border-border/60 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    {feature.visual}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
