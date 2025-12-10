import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import MegaMenu from "./MegaMenu";
import numawayLogo from "@/assets/numaway-logo.png";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                {isScrolled ? (
                  <img 
                    src={numawayLogo} 
                    alt="NUMAWAY Education" 
                    className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight transition-all duration-300 group-hover:scale-105">
                    NUMAWAY
                  </span>
                )}
              </div>
            </a>

            {/* Desktop Navigation - Mega Menu */}
            <MegaMenu 
              activeMenu={activeMegaMenu} 
              onMenuChange={setActiveMegaMenu}
              isScrolled={isScrolled}
            />

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`hidden md:flex transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`} 
                asChild
              >
                <a href="/search">
                  <Search className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant={isScrolled ? "outline" : "glass"} 
                size="sm" 
                className={`hidden sm:flex ${
                  !isScrolled ? "border-white/20 text-white hover:bg-white/10" : ""
                }`}
                asChild
              >
                <a href="/login">Login</a>
              </Button>
              <Button 
                variant="gold" 
                size="sm" 
                className="hidden sm:inline-flex shadow-gold/30 shadow-lg hover:shadow-gold/50 transition-shadow" 
                asChild
              >
                <a href="/consultation">Book Free Consultation</a>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? "hover:bg-muted text-foreground" 
                    : "hover:bg-white/10 text-white"
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
    </>
  );
};

export default Header;
