import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import MegaMenu from "./MegaMenu";
import ThemeToggle from "./ThemeToggle";
import numawayLogo from "@/assets/numaway-logo.svg";

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
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo - Left side */}
            <a href="/" className="flex items-center group flex-shrink-0">
              <img 
                src={numawayLogo} 
                alt="NUMAWAY Education" 
                className="h-9 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 rounded-lg"
              />
            </a>

            {/* Navigation + Actions - Right side */}
            <div className="flex items-center gap-1">
              {/* Desktop Navigation - Mega Menu */}
              <MegaMenu 
                activeMenu={activeMegaMenu} 
                onMenuChange={setActiveMegaMenu}
                isScrolled={isScrolled}
              />

              {/* CTA Buttons */}
              <div className="flex items-center gap-1.5 ml-2">
                {/* Theme Toggle */}
                <ThemeToggle isScrolled={isScrolled} />
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`hidden md:flex transition-colors h-9 w-9 p-0 ${
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
                  className={`hidden sm:flex h-9 text-sm ${
                    !isScrolled ? "border-white/20 text-white hover:bg-white/10" : ""
                  }`}
                  asChild
                >
                  <a href="/login">Log in</a>
                </Button>
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="hidden sm:inline-flex h-9 text-sm px-4" 
                  asChild
                >
                  <a href="/consultation">Sign up</a>
                </Button>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileNavOpen(true)}
                  className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? "hover:bg-muted text-foreground" 
                      : "hover:bg-white/10 text-white"
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
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
