"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import MegaMenu from "./MegaMenu";
import ThemeToggle from "./ThemeToggle";
import numawayLogo from "@/assets/numaway-logo.png";

const ICON_STROKE = 1.75;

interface HeaderProps {
  /** When false, the header is always rendered in its scrolled (solid) state.
   *  Use on pages whose top section has a light background (no dark hero). */
  transparent?: boolean;
}

const Header = ({ transparent = true }: HeaderProps): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // isScrolled is true either because the user has scrolled, or because
  // transparent mode is disabled (light-background pages).
  const isScrolled = scrolled || !transparent;

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
        <div className="container-default">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center group flex-shrink-0">
              <img
                src={numawayLogo as any}
                alt="NUMAWAY Education"
                className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </a>

            {/* Navigation + Actions */}
            <div className="flex items-center gap-1">
              <MegaMenu
                activeMenu={activeMegaMenu}
                onMenuChange={setActiveMegaMenu}
                isScrolled={isScrolled}
              />

              <div className="flex items-center gap-1.5 ml-2">
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
                    <Search className="w-4 h-4" strokeWidth={ICON_STROKE} />
                  </a>
                </Button>

                <Button
                  variant={isScrolled ? "outline" : "glass"}
                  size="sm"
                  className={`hidden sm:flex h-9 text-sm font-display ${
                    !isScrolled ? "border-white/20 text-white hover:bg-white/10" : ""
                  }`}
                  asChild
                >
                  <a href="/login">Log in</a>
                </Button>

                {/* Primary CTA, only nav-level CTA per MRS §8 */}
                <Button
                  variant="hero"
                  size="sm"
                  className="hidden sm:inline-flex h-9 text-sm font-display px-4"
                  asChild
                >
                  <a href="/consultation">Book a consultation</a>
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
                  <Menu className="w-5 h-5" strokeWidth={ICON_STROKE} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};

export default Header;

