import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import MegaMenu from "./MegaMenu";
import numawayLogo from "@/assets/numaway-logo.png";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src={numawayLogo} 
                alt="NUMAWAY Education - Study Abroad Support for Nigerian Students" 
                className="h-10 sm:h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation - Mega Menu */}
            <MegaMenu 
              activeMenu={activeMegaMenu} 
              onMenuChange={setActiveMegaMenu} 
            />

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                <a href="/search">
                  <Search className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button variant="gold" size="sm" className="hidden sm:inline-flex" asChild>
                <a href="/consultation">Book Free Consultation</a>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
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