"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, GraduationCap, BookOpen, FileText, Briefcase, ArrowRight } from "lucide-react";

const ICON_STROKE = 1.75;
import { countries } from "@/data/countries";

interface MegaMenuProps {
  activeMenu: string | null;
  onMenuChange: (menu: string | null) => void;
  isScrolled?: boolean;
}

const MegaMenu = ({ activeMenu, onMenuChange, isScrolled = true }: MegaMenuProps) => {
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
              { label: "🇬🇧 UK Universities", href: "/universities?country=uk" },
              { label: "🇺🇸 US Universities", href: "/universities?country=usa" },
              { label: "🇨🇦 Canadian Universities", href: "/universities?country=canada" },
              { label: "🇦🇺 Australian Universities", href: "/universities?country=australia" },
              { label: "🇩🇪 German Universities", href: "/universities?country=germany" },
              { label: "🇮🇪 Irish Universities", href: "/universities?country=ireland" },
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
              { label: "Study Abroad Counselling", href: "/services/study-abroad-counselling" },
              { label: "Application Support", href: "/services/application-support" },
              { label: "Visa Preparation", href: "/services/visa-preparation" },
              { label: "Scholarship Guidance", href: "/services/scholarships-funding" },
              { label: "Exams Support", href: "/services/exams-support" },
              { label: "Offer Decision Support", href: "/services/offer-decision-support" },
            ],
          },
          {
            title: "Student Support",
            links: [
              { label: "Accommodation", href: "/accommodation" },
              { label: "Interest-Free Loans", href: "/loans" },
              { label: "AI Sage", href: "/sage" },
            ],
          },
        ],
        allLink: "/services",
        allLabel: "View All Services",
      },
    },
  ];

  return (
    <nav className="hidden lg:flex items-center">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => onMenuChange(item.id)}
          onMouseLeave={() => onMenuChange(null)}
        >
          <button
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeMenu === item.id
                ? isScrolled 
                  ? "text-foreground bg-muted" 
                  : "text-white bg-white/15"
                : isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {item.label}
            <ChevronDown
              strokeWidth={ICON_STROKE}
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                activeMenu === item.id ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeMenu === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-full left-0 mt-3 w-[500px] bg-card/95 backdrop-blur-xl rounded-2xl shadow-elevated border border-border/50 overflow-hidden z-50"
              >
                {/* Countries Grid */}
                {item.id === "destinations" && item.content.featured && (
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-5">
                      {item.content.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.content.featured.map((country) => (
                        <a
                          key={country.slug}
                          href={`/countries/${country.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/80 transition-all duration-300 group hover:-translate-y-0.5"
                        >
                          <span className="text-2xl group-hover:scale-110 transition-transform">{country.flag}</span>
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
                      className="flex items-center justify-center gap-2 mt-5 py-3 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group"
                    >
                      {item.content.allLabel}
                      <ArrowRight strokeWidth={ICON_STROKE} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Sections Grid */}
                {item.content.sections && (
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-8">
                      {item.content.sections.map((section, index) => (
                        <div key={index}>
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                            {section.title}
                          </h4>
                          <ul className="space-y-2.5">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  className="block text-sm text-foreground hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <a
                        href={item.content.allLink}
                        className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group"
                      >
                        {item.content.allLabel}
                        <ArrowRight strokeWidth={ICON_STROKE} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
          isScrolled
            ? "text-muted-foreground hover:text-foreground hover:bg-muted"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        Resources
      </a>
    </nav>
  );
};

export default MegaMenu;

