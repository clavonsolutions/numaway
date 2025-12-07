import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCountryBySlug } from "@/data/countries";
import { getUniversitiesByCountry } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap, Briefcase, Home, CreditCard, Plane, FileCheck } from "lucide-react";

const CountryDetail = () => {
  const { slug } = useParams();
  const country = getCountryBySlug(slug || "");
  const unis = getUniversitiesByCountry(slug || "");

  if (!country) return <div className="min-h-screen flex items-center justify-center">Country not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <span className="text-7xl mb-6 block">{country.flag}</span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">Study in {country.name}</h1>
            <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">{country.description}</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="text-center"><div className="text-3xl font-bold text-secondary">{country.universities}+</div><div className="text-sm text-primary-foreground/60">Universities</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-secondary">{country.students}</div><div className="text-sm text-primary-foreground/60">Intl Students</div></div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-secondary" /> Why Study Here?</h2>
                  <div className="space-y-3">{country.whyStudy.map((w, i) => <div key={i} className="flex items-start gap-3 p-3 bg-card rounded-lg"><CheckCircle className="w-5 h-5 text-secondary mt-0.5" /><span>{w}</span></div>)}</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl shadow-soft"><Home className="w-8 h-8 text-secondary mb-3" /><h3 className="font-semibold mb-2">Living Cost</h3><p className="text-muted-foreground">{country.livingCost}</p></div>
                  <div className="bg-card p-6 rounded-xl shadow-soft"><Briefcase className="w-8 h-8 text-secondary mb-3" /><h3 className="font-semibold mb-2">Work Rights</h3><p className="text-muted-foreground">{country.workRights}</p></div>
                  <div className="bg-card p-6 rounded-xl shadow-soft"><Plane className="w-8 h-8 text-secondary mb-3" /><h3 className="font-semibold mb-2">Post-Study Visa</h3><p className="text-muted-foreground">{country.postStudyVisa}</p></div>
                  <div className="bg-card p-6 rounded-xl shadow-soft"><FileCheck className="w-8 h-8 text-secondary mb-3" /><h3 className="font-semibold mb-2">Visa Info</h3><p className="text-muted-foreground text-sm">{country.visaInfo}</p></div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6"><CreditCard className="w-6 h-6 text-secondary inline mr-2" />Scholarships</h2>
                  <div className="flex flex-wrap gap-2">{country.scholarships.map((s, i) => <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">{s}</span>)}</div>
                </div>
                {unis.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">Top Universities</h2>
                    <div className="grid sm:grid-cols-2 gap-4">{unis.slice(0, 4).map(u => <a key={u.slug} href={`/universities/${u.slug}`} className="p-4 bg-card rounded-lg shadow-soft hover:shadow-card transition-shadow">{u.name}</a>)}</div>
                  </div>
                )}
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="text-xl font-display font-bold mb-4">Study in {country.name}</h3>
                  <p className="text-muted-foreground mb-6">Get expert guidance on studying in {country.name}.</p>
                  <Button variant="hero" className="w-full mb-3" asChild><a href="/consultation">Free Consultation</a></Button>
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

export default CountryDetail;
