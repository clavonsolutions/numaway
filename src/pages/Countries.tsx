import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { countries } from "@/data/countries";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Countries = () => {
  const [search, setSearch] = useState("");
  const filtered = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  const featured = filtered.filter(c => c.featured);
  const others = filtered.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Explore"
          titleHighlight="Study Destinations"
          description="Discover countries that welcome international students and match your academic goals, lifestyle and budget."
        >
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-3" />
                <input 
                  type="text" 
                  placeholder="Search countries..." 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  className="flex-1 bg-transparent px-3 py-2.5 outline-none text-foreground" 
                />
              </div>
            </div>
          </div>
        </PageHero>

        {/* Featured Destinations */}
        {featured.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-display font-bold mb-8">Popular Destinations for Nigerian Students</h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((country, i) => (
                  <ScrollReveal key={country.slug} animation="fade-up" delay={i * 0.05}>
                    <a 
                      href={`/countries/${country.slug}`} 
                      className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 border-2 border-secondary/20 block h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-5xl group-hover:scale-110 transition-transform">{country.flag}</span>
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                          <ArrowRight className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{country.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{country.description.slice(0, 100)}...</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{country.universities}+ Universities</span>
                        <span>{country.students} Students</span>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Destinations */}
        {others.length > 0 && (
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-display font-bold mb-8">More Destinations</h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {others.map((country, i) => (
                  <ScrollReveal key={country.slug} animation="fade-up" delay={i * 0.05}>
                    <a 
                      href={`/countries/${country.slug}`} 
                      className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 block h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl group-hover:scale-110 transition-transform">{country.flag}</span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-1 group-hover:text-secondary transition-colors">{country.name}</h3>
                      <p className="text-muted-foreground text-sm">{country.universities}+ Universities</p>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-display font-bold mb-6">Not sure which country is right for you?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Our counsellors will help you compare destinations based on your profile, budget, and goals.
              </p>
              <a 
                href="/consultation" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-1 transition-all"
              >
                Get Personalised Advice
                <ArrowRight className="w-5 h-5" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;
