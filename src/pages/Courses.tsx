import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { areasOfStudy, courses } from "@/data/courses";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Courses = () => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Courses"
          description="Explore thousands of courses across all disciplines"
        >
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-3" />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  className="flex-1 bg-transparent px-3 py-2.5 outline-none text-foreground" 
                />
              </div>
            </div>
          </div>
        </PageHero>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-8">Areas of Study</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {areasOfStudy.map((area, i) => (
                <ScrollReveal key={area.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/courses/area/${area.slug}`} 
                    className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1 block h-full"
                  >
                    <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform inline-block">{area.icon}</span>
                    <h3 className="font-display font-semibold mb-1 group-hover:text-secondary transition-colors">{area.name}</h3>
                    <p className="text-sm text-muted-foreground">{area.courses}+ courses</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-8">Popular Courses</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, i) => (
                <ScrollReveal key={course.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/courses/${course.slug}`} 
                    className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1 block h-full"
                  >
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mb-3 inline-block">{course.level}</span>
                    <h3 className="font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.areaOfStudy} · {course.duration}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
