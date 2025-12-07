import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUniversityBySlug } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { MapPin, Trophy, Users, Calendar, CheckCircle } from "lucide-react";

const UniversityDetail = () => {
  const { slug } = useParams();
  const uni = getUniversityBySlug(slug || "");
  if (!uni) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🎓</span>
            <h1 className="text-4xl font-display font-bold mb-4">University Not Found</h1>
            <p className="text-muted-foreground mb-8">The university you're looking for doesn't exist.</p>
            <Button asChild><a href="/universities">View All Universities</a></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="relative h-80 bg-gradient-hero">
          <img src={uni.image} alt={uni.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
          <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <div className="flex items-end gap-6">
              {uni.logo && (
                <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 shrink-0">
                  <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-contain" />
                </div>
              )}
              <div className="text-primary-foreground">
                <div className="flex items-center gap-2 mb-2"><Trophy className="w-5 h-5 text-secondary" /><span className="text-secondary font-semibold">#{uni.ranking} {uni.rankingSource}</span></div>
                <h1 className="text-3xl lg:text-5xl font-display font-bold mb-2">{uni.name}</h1>
                <p className="flex items-center gap-2 text-primary-foreground/70">
                  <span className="text-2xl">{uni.countryFlag}</span>
                  <MapPin className="w-4 h-4" />{uni.city}, {uni.country}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground mb-4">{uni.description}</p>
                  <div className="space-y-2">{uni.overview.map((o, i) => <div key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary mt-0.5" /><span>{o}</span></div>)}</div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><Users className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{uni.students}</div><div className="text-sm text-muted-foreground">Students</div></div>
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><Calendar className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{uni.founded}</div><div className="text-sm text-muted-foreground">Founded</div></div>
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><Trophy className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{uni.acceptanceRate}</div><div className="text-sm text-muted-foreground">Acceptance</div></div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Popular Courses</h2>
                  <div className="flex flex-wrap gap-2">{uni.popularCourses.map((c, i) => <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">{c}</span>)}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Scholarships</h2>
                  <div className="space-y-2">{uni.scholarships.map((s, i) => <div key={i} className="p-3 bg-card rounded-lg shadow-soft">{s}</div>)}</div>
                </div>
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-2">Tuition Fees</h3>
                  <p className="text-2xl font-bold text-secondary mb-4">{uni.tuitionRange}</p>
                  <p className="text-sm text-muted-foreground mb-6">Living: {uni.livingCost}</p>
                  <Button variant="hero" className="w-full mb-3" asChild><a href="/consultation">Apply via NUMAWAY</a></Button>
                  <Button variant="outline" className="w-full" asChild><a href={`/countries/${uni.countrySlug}`}>Explore {uni.country}</a></Button>
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

export default UniversityDetail;
