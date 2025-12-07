import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Study Destinations", href: "/countries" },
    { label: "Universities", href: "/universities" },
    { label: "Courses", href: "/courses" },
    { label: "Exams", href: "/exams" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center shadow-soft">
              <span className="font-display font-bold text-primary text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              NUMAWAY
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Login
            </Button>
            <Button variant="gold" size="sm">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
