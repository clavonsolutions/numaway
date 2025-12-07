import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCourseBySlug } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap, MapPin, CheckCircle } from "lucide-react";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug || "");
  if (!course) return <div className="min-h-screen flex items-center justify-center">Course not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">{course.level}</span>
            <h1 className="text-3xl lg:text-5xl font-display font-bold mb-4">{course.name}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{course.duration}</span>
              <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" />{course.areaOfStudy}</span>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground">{course.overview}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Entry Requirements</h2>
                  <div className="space-y-2">{course.requirements.map((r, i) => <div key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary mt-0.5" /><span>{r}</span></div>)}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Career Outcomes</h2>
                  <div className="flex flex-wrap gap-2">{course.careerOutcomes.map((c, i) => <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">{c}</span>)}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Where to Study</h2>
                  <div className="flex flex-wrap gap-2">{course.countries.map((c, i) => <span key={i} className="px-4 py-2 bg-muted rounded-full">{c}</span>)}</div>
                </div>
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-2">Tuition Range</h3>
                  <p className="text-xl font-bold text-secondary mb-6">{course.tuitionRange}</p>
                  <Button variant="hero" className="w-full mb-3" asChild><a href="/consultation">Get Matched</a></Button>
                  <Button variant="outline" className="w-full" asChild><a href="/universities">Browse Universities</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
