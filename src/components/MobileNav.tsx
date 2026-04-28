import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MapPin, GraduationCap, BookOpen, FileText, Briefcase, Home, Building, MessageCircle } from "lucide-react";

const ICON_STROKE = 1.75;
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuSections = [
    {
      id: "destinations",
      label: "Study Destinations",
      icon: MapPin,
      links: [
        { label: "All Countries", href: "/countries" },
        { label: "🇬🇧 United Kingdom", href: "/countries/united-kingdom" },
        { label: "🇺🇸 United States", href: "/countries/united-states" },
        { label: "🇨🇦 Canada", href: "/countries/canada" },
        { label: "🇦🇺 Australia", href: "/countries/australia" },
        { label: "🇩🇪 Germany", href: "/countries/germany" },
        { label: "🇮🇪 Ireland", href: "/countries/ireland" },
      ],
    },
    {
      id: "universities",
      label: "Universities",
      icon: GraduationCap,
      links: [
        { label: "Explore Universities", href: "/universities" },
        { label: "Compare Universities", href: "/universities/compare" },
        { label: "Top Ranked", href: "/universities?sort=ranking" },
      ],
    },
    {
      id: "courses",
      label: "Courses",
      icon: BookOpen,
      links: [
        { label: "All Courses", href: "/courses" },
        { label: "Business & Management", href: "/courses/area/business-management" },
        { label: "Computer Science", href: "/courses/area/computer-science" },
        { label: "Engineering", href: "/courses/area/engineering" },
        { label: "Medicine & Health", href: "/courses/area/medicine-health" },
      ],
    },
    {
      id: "exams",
      label: "Exams",
      icon: FileText,
      links: [
        { label: "All Exams", href: "/exams" },
        { label: "IELTS", href: "/exams/ielts" },
        { label: "TOEFL", href: "/exams/toefl" },
        { label: "GRE", href: "/exams/gre" },
        { label: "GMAT", href: "/exams/gmat" },
      ],
    },
    {
      id: "services",
      label: "Services",
      icon: Briefcase,
      links: [
        { label: "All Services", href: "/services" },
        { label: "Study Abroad Counselling", href: "/services/study-abroad-counselling" },
        { label: "Application Support", href: "/services/application-support" },
        { label: "Visa Preparation", href: "/services/visa-preparation" },
        { label: "Accommodation", href: "/services/accommodation-landing" },
      ],
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Building },
    { label: "Careers", href: "/careers", icon: Briefcase },
    { label: "Resources", href: "/resources", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: MessageCircle },
    { label: "FAQ", href: "/faq", icon: FileText },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-background z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
              <div className="flex items-center justify-between p-4">
                <a href="/" className="flex items-center gap-2" onClick={onClose}>
                  <img 
                    src="/favicon.png" 
                    alt="NUMAWAY" 
                    className="h-8 w-8 rounded-lg object-contain"
                  />
                  <span className="font-display font-bold text-lg">NUMAWAY</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-6 h-6" strokeWidth={ICON_STROKE} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* CTA Buttons */}
              <div className="flex gap-3">
                <Button variant="hero" className="flex-1 font-display" asChild>
                  <a href="/consultation" onClick={onClose}>Book a consultation</a>
                </Button>
                <Button variant="outline" className="flex-1 font-display" asChild>
                  <a href="/login" onClick={onClose}>Log in</a>
                </Button>
              </div>

              {/* Menu Sections */}
              <div className="space-y-2">
                {menuSections.map((section) => (
                  <div key={section.id} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
                        <span className="font-medium">{section.label}</span>
                      </div>
                      <ChevronRight
                        strokeWidth={ICON_STROKE}
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          activeSection === section.id ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeSection === section.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-2 pt-0 space-y-1">
                            {section.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="pt-4 border-t border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-2 p-3 text-sm hover:bg-muted rounded-lg transition-colors"
                    >
                      <link.icon className="w-4 h-4 text-muted-foreground" strokeWidth={ICON_STROKE} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* App Download */}
              <div className="pt-4 border-t border-border">
                <a
                  href="/app"
                  onClick={onClose}
                  className="block p-4 bg-gradient-hero text-primary-foreground rounded-xl"
                >
                  <div className="font-semibold mb-1">Download NUMAWAY App</div>
                  <p className="text-sm text-primary-foreground/70">
                    Get personalized guidance on your phone
                  </p>
                </a>
              </div>

              {/* AI Sage Promo */}
              <div className="pb-8">
                <a
                  href="/sage"
                  onClick={onClose}
                  className="block p-4 bg-gradient-gold text-secondary-foreground rounded-xl"
                >
                  <div className="font-semibold mb-1">✨ Try NUMAWAY Sage</div>
                  <p className="text-sm opacity-80">
                    AI-powered study abroad guidance
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
