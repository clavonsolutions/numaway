import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAreaBySlug, getCoursesByArea } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AreaOfStudy = () => {
  const { slug } = useParams();
  const area = getAreaBySlug(slug || "");
  const areaCourses = getCoursesByArea(slug || "");
  if (!area) return <div className="min-h-screen flex items-center justify-center">Area not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="text-6xl mb-4 block">{area.icon}</span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">{area.name}</h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">{area.description}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold mb-6">Courses in {area.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {areaCourses.map((course) => (
                <a key={course.slug} href={`/courses/${course.slug}`} className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mb-3 inline-block">{course.level}</span>
                  <h3 className="font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.duration}</p>
                </a>
              ))}
            </div>
            <h2 className="text-2xl font-display font-bold mb-6">Career Paths</h2>
            <div className="flex flex-wrap gap-3 mb-12">{area.careerPaths.map((c, i) => <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">{c}</span>)}</div>
            <h2 className="text-2xl font-display font-bold mb-6">Top Countries for {area.name}</h2>
            <div className="flex flex-wrap gap-3">{area.topCountries.map((c, i) => <span key={i} className="px-4 py-2 bg-muted rounded-full">{c}</span>)}</div>
          </div>
        </section>
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-6">Our counsellors can help you find the perfect course.</p>
            <Button variant="hero" size="lg" asChild><a href="/consultation">Get Free Guidance <ArrowRight className="w-4 h-4" /></a></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaOfStudy;
