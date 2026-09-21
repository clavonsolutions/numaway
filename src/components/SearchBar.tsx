"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, GraduationCap, MapPin, BookOpen, ArrowRight } from "lucide-react";
import { universities } from "@/data/universities";
import { countries } from "@/data/countries";
import { courses } from "@/data/courses";

interface SearchBarProps {
  variant?: "hero" | "header" | "page";
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ variant = "hero", placeholder = "Search universities, courses, countries...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<{
    universities: typeof universities;
    countries: typeof countries;
    courses: typeof courses;
  }>({ universities: [], countries: [], courses: [] });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const lowerQuery = query.toLowerCase();
      
      const filteredUniversities = universities.filter(
        (u) => u.name.toLowerCase().includes(lowerQuery) || u.country.toLowerCase().includes(lowerQuery)
      ).slice(0, 3);
      
      const filteredCountries = countries.filter(
        (c) => c.name.toLowerCase().includes(lowerQuery)
      ).slice(0, 3);
      
      const filteredCourses = courses.filter(
        (c) => c.name.toLowerCase().includes(lowerQuery) || c.areaOfStudy.toLowerCase().includes(lowerQuery)
      ).slice(0, 3);

      setResults({
        universities: filteredUniversities,
        countries: filteredCountries,
        courses: filteredCourses,
      });
      setIsOpen(true);
    } else {
      setResults({ universities: [], countries: [], courses: [] });
      setIsOpen(false);
    }
  }, [query]);

  const hasResults = results.universities.length > 0 || results.countries.length > 0 || results.courses.length > 0;

  const variantStyles = {
    hero: "w-full max-w-2xl bg-card rounded-2xl shadow-card border border-border",
    header: "w-80 bg-muted rounded-xl",
    page: "w-full bg-card rounded-xl shadow-soft border border-border",
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className={`flex items-center gap-3 ${variantStyles[variant]} ${variant === "hero" ? "p-4" : "p-3"}`}>
        <Search className={`text-muted-foreground flex-shrink-0 ${variant === "hero" ? "w-6 h-6" : "w-5 h-5"}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none placeholder:text-muted-foreground ${
            variant === "hero" ? "text-lg" : "text-sm"
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-card border border-border overflow-hidden z-50"
          >
            {hasResults ? (
              <div className="max-h-96 overflow-y-auto">
                {/* Countries */}
                {results.countries.length > 0 && (
                  <div className="p-3 border-b border-border">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                      Countries
                    </h4>
                    {results.countries.map((country) => (
                      <a
                        key={country.slug}
                        href={`/countries/${country.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-xl">{country.flag}</span>
                        <div className="flex-1">
                          <div className="font-medium">{country.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {country.universities}+ universities
                          </div>
                        </div>
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Universities */}
                {results.universities.length > 0 && (
                  <div className="p-3 border-b border-border">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                      Universities
                    </h4>
                    {results.universities.map((uni) => (
                      <a
                        key={uni.slug}
                        href={`/universities/${uni.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{uni.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {uni.country} • Rank #{uni.ranking}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* Courses */}
                {results.courses.length > 0 && (
                  <div className="p-3">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                      Courses
                    </h4>
                    {results.courses.map((course) => (
                      <a
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{course.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {course.level} • {course.areaOfStudy}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* View All Results */}
                <div className="p-3 border-t border-border bg-muted/50">
                  <a
                    href={`/search?q=${encodeURIComponent(query)}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-secondary hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    View all results for "{query}"
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-muted-foreground">No results found for "{query}"</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try searching for a country, university, or course
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
