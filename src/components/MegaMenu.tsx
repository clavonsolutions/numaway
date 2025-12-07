import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, GraduationCap, BookOpen, FileText, Briefcase, ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";

interface MegaMenuProps {
  activeMenu: string | null;
  onMenuChange: (menu: string | null) => void;
}

const MegaMenu = ({ activeMenu, onMenuChange }: MegaMenuProps) => {
  const menuItems = [
    {
      id: "destinations",
      label: "Study Destinations",
      icon: MapPin,
      content: {
        featured: countries.slice(0, 6),
        allLink: "/countries",
        allLabel: "View All Countries",
        description: "Explore study opportunities in 15+ countries worldwide",
      },
    },
    {
      id: "universities",
      label: "Universities",
      icon: GraduationCap,
      content: {
        sections: [
          {
            title: "Explore",
            links: [
              { label: "All Universities", href: "/universities" },
              { label: "Compare Universities", href: "/universities/compare" },
              { label: "Top Ranked", href: "/universities?sort=ranking" },
              { label: "Partner Universities", href: "/universities?partner=true" },
            ],
          },
          {
            title: "By Country",
            links: [
              { label: "UK Universities", href: "/universities?country=uk" },
              { label: "US Universities", href: "/universities?country=usa" },
              { label: "Canadian Universities", href: "/universities?country=canada" },
              { label: "Australian Universities", href: "/universities?country=australia" },
            ],
          },
        ],
        allLink: "/universities",
        allLabel: "Browse All Universities",
      },
    },
    {
      id: "courses",
      label: "Courses",
      icon: BookOpen,
      content: {
        sections: [
          {
            title: "Areas of Study",
            links: [
              { label: "Business & Management", href: "/courses/area/business-management" },
              { label: "Computer Science & IT", href: "/courses/area/computer-science" },
              { label: "Engineering", href: "/courses/area/engineering" },
              { label: "Medicine & Health", href: "/courses/area/medicine-health" },
              { label: "Law", href: "/courses/area/law" },
              { label: "Arts & Design", href: "/courses/area/arts-design" },
            ],
          },
          {
            title: "By Level",
            links: [
              { label: "Bachelor's Degrees", href: "/courses?level=bachelor" },
              { label: "Master's Degrees", href: "/courses?level=master" },
              { label: "PhD Programs", href: "/courses?level=phd" },
              { label: "Foundation Courses", href: "/courses?level=foundation" },
            ],
          },
        ],
        allLink: "/courses",
        allLabel: "Explore All Courses",
      },
    },
    {
      id: "exams",
      label: "Exams",
      icon: FileText,
      content: {
        sections: [
          {
            title: "English Tests",
            links: [
              { label: "IELTS", href: "/exams/ielts" },
              { label: "TOEFL", href: "/exams/toefl" },
              { label: "PTE Academic", href: "/exams/pte" },
              { label: "Duolingo English Test", href: "/exams/det" },
            ],
          },
          {
            title: "Aptitude Tests",
            links: [
              { label: "GRE", href: "/exams/gre" },
              { label: "GMAT", href: "/exams/gmat" },
              { label: "SAT", href: "/exams/sat" },
            ],
          },
        ],
        allLink: "/exams",
        allLabel: "View All Exams",
      },
    },
    {
      id: "services",
      label: "Services",
      icon: Briefcase,
      content: {
        sections: [
          {
            title: "Our Services",
            links: [
              { label: "Admissions Consulting", href: "/services/admissions" },
              { label: "Visa & Immigration", href: "/services/visa" },
              { label: "Scholarships Guidance", href: "/services/scholarships" },
              { label: "Accommodation Search", href: "/accommodation" },
              { label: "Pre-departure Support", href: "/services/pre-departure" },
              { label: "AI-Powered Profiling", href: "/services/ai-profiling" },
            ],
          },
          {
            title: "For Parents",
            links: [
              { label: "Parent Advisory", href: "/services/parent-advisory" },
              { label: "Safety & Support", href: "/services/safety" },
            ],
          },
        ],
        allLink: "/services",
        allLabel: "View All Services",
      },
    },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => onMenuChange(item.id)}
          onMouseLeave={() => onMenuChange(null)}
        >
          <button
            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeMenu === item.id
                ? "text-foreground bg-muted"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {item.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                activeMenu === item.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 w-[480px] bg-card rounded-2xl shadow-card border border-border overflow-hidden z-50"
              >
                {/* Countries Grid */}
                {item.id === "destinations" && item.content.featured && (
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.content.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {item.content.featured.map((country) => (
                        <a
                          key={country.slug}
                          href={`/countries/${country.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                        >
                          <span className="text-2xl">{country.flag}</span>
                          <div>
                            <div className="font-medium group-hover:text-secondary transition-colors">
                              {country.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {country.universities}+ universities
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <a
                      href={item.content.allLink}
                      className="flex items-center justify-center gap-2 mt-4 py-3 text-sm font-medium text-secondary hover:underline"
                    >
                      {item.content.allLabel}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Sections Grid */}
                {item.content.sections && (
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {item.content.sections.map((section, index) => (
                        <div key={index}>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  className="block text-sm text-foreground hover:text-secondary transition-colors"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <a
                        href={item.content.allLink}
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                      >
                        {item.content.allLabel}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Resources Link (no mega menu) */}
      <a
        href="/resources"
        className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
      >
        Resources
      </a>
    </nav>
  );
};

export default MegaMenu;
