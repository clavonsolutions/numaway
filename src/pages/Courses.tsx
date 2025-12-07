import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { areasOfStudy, courses } from "@/data/courses";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

const Courses = () => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Courses</motion.h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">Explore thousands of courses across all disciplines</p>
            <div className="max-w-md mx-auto flex items-center bg-primary-foreground rounded-xl p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent px-3 py-2 outline-none text-foreground" />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold mb-8">Areas of Study</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {areasOfStudy.map((area) => (
                <a key={area.slug} href={`/courses/area/${area.slug}`} className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1">
                  <span className="text-4xl mb-3 block">{area.icon}</span>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-secondary transition-colors">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.courses}+ courses</p>
                </a>
              ))}
            </div>
            <h2 className="text-2xl font-display font-bold mb-8">Popular Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <a key={course.slug} href={`/courses/${course.slug}`} className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mb-3 inline-block">{course.level}</span>
                  <h3 className="font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{course.areaOfStudy} · {course.duration}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">Learn more <ArrowRight className="w-3 h-3" /></span>
                </a>
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
