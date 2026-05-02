import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SearchBar from "@/components/SearchBar";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen, FileText, ArrowRight } from "lucide-react";
import { universities } from "@/data/universities";
import { countries } from "@/data/countries";
import { courses } from "@/data/courses";
import { exams } from "@/data/exams";

const Search = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("all");

  const lowerQuery = query.toLowerCase();

  const filteredResults = {
    universities: universities.filter(
      (u) => u.name.toLowerCase().includes(lowerQuery) || u.country.toLowerCase().includes(lowerQuery)
    ),
    countries: countries.filter(
      (c) => c.name.toLowerCase().includes(lowerQuery)
    ),
    courses: courses.filter(
      (c) => c.name.toLowerCase().includes(lowerQuery) || c.areaOfStudy.toLowerCase().includes(lowerQuery)
    ),
    exams: exams.filter(
      (e) => e.name.toLowerCase().includes(lowerQuery) || e.fullName.toLowerCase().includes(lowerQuery)
    ),
  };

  const totalResults = 
    filteredResults.universities.length + 
    filteredResults.countries.length + 
    filteredResults.courses.length + 
    filteredResults.exams.length;

  const tabs = [
    { id: "all", label: "All", count: totalResults },
    { id: "universities", label: "Universities", count: filteredResults.universities.length },
    { id: "countries", label: "Countries", count: filteredResults.countries.length },
    { id: "courses", label: "Courses", count: filteredResults.courses.length },
    { id: "exams", label: "Exams", count: filteredResults.exams.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Search Numaway, Universities, Courses and Countries"
      description="Search Numaway's database of universities, courses, countries, and resources for your study abroad journey."
      canonical="/search"
    />

      <Header transparent={false} />
      <main className="pt-20">
        {/* Search Header */}
        <section className="py-12 bg-muted">
          <div className="container-default">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-display font-bold text-center mb-6">
                Search NUMAWAY
              </h1>
              <SearchBar 
                variant="page" 
                placeholder="Search universities, courses, countries, exams..." 
              />
            </div>
          </div>
        </section>

        {/* Tabs & Results */}
        <section className="py-12">
          <div className="container-default">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            {query.length < 2 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Enter at least 2 characters to search
                </p>
              </div>
            ) : totalResults === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-xl font-display font-bold mb-2">No results found</h2>
                <p className="text-muted-foreground mb-8">
                  We couldn't find anything matching "{query}". Try a different search term.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="/universities" className="text-secondary hover:underline">Browse Universities</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/courses" className="text-secondary hover:underline">Browse Courses</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/countries" className="text-secondary hover:underline">Browse Countries</a>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Countries */}
                {(activeTab === "all" || activeTab === "countries") && filteredResults.countries.length > 0 && (
                  <div>
                    <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      Countries ({filteredResults.countries.length})
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredResults.countries.slice(0, activeTab === "countries" ? undefined : 3).map((country) => (
                        <motion.a
                          key={country.slug}
                          href={`/countries/${country.slug}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                        >
                          <span className="text-4xl">{country.flag}</span>
                          <div className="flex-1">
                            <h3 className="font-semibold">{country.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {country.universities}+ universities
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        </motion.a>
                      ))}
                    </div>
                    {activeTab === "all" && filteredResults.countries.length > 3 && (
                      <button
                        onClick={() => setActiveTab("countries")}
                        className="mt-4 text-sm text-secondary hover:underline"
                      >
                        View all {filteredResults.countries.length} countries
                      </button>
                    )}
                  </div>
                )}

                {/* Universities */}
                {(activeTab === "all" || activeTab === "universities") && filteredResults.universities.length > 0 && (
                  <div>
                    <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-secondary" />
                      Universities ({filteredResults.universities.length})
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredResults.universities.slice(0, activeTab === "universities" ? undefined : 6).map((uni) => (
                        <motion.a
                          key={uni.slug}
                          href={`/universities/${uni.slug}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              <GraduationCap className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold truncate">{uni.name}</h3>
                              <p className="text-sm text-muted-foreground">{uni.country}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Rank #{uni.ranking}</span>
                            <ArrowRight className="w-4 h-4 text-secondary" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                    {activeTab === "all" && filteredResults.universities.length > 6 && (
                      <button
                        onClick={() => setActiveTab("universities")}
                        className="mt-4 text-sm text-secondary hover:underline"
                      >
                        View all {filteredResults.universities.length} universities
                      </button>
                    )}
                  </div>
                )}

                {/* Courses */}
                {(activeTab === "all" || activeTab === "courses") && filteredResults.courses.length > 0 && (
                  <div>
                    <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      Courses ({filteredResults.courses.length})
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredResults.courses.slice(0, activeTab === "courses" ? undefined : 6).map((course) => (
                        <motion.a
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                        >
                          <h3 className="font-semibold mb-1">{course.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {course.level} • {course.duration}
                          </p>
                          <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                            {course.areaOfStudy}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                    {activeTab === "all" && filteredResults.courses.length > 6 && (
                      <button
                        onClick={() => setActiveTab("courses")}
                        className="mt-4 text-sm text-secondary hover:underline"
                      >
                        View all {filteredResults.courses.length} courses
                      </button>
                    )}
                  </div>
                )}

                {/* Exams */}
                {(activeTab === "all" || activeTab === "exams") && filteredResults.exams.length > 0 && (
                  <div>
                    <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-secondary" />
                      Exams ({filteredResults.exams.length})
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredResults.exams.map((exam) => (
                        <motion.a
                          key={exam.slug}
                          href={`/exams/${exam.slug}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                        >
                          <h3 className="font-semibold">{exam.name}</h3>
                          <p className="text-sm text-muted-foreground">{exam.fullName}</p>
                          <p className="text-sm text-secondary mt-2">Fees: {exam.fees}</p>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Search;
