import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { universities } from "@/data/universities";
import { useState } from "react";
import { Search, MapPin, Trophy } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Universities = () => {
  const [search, setSearch] = useState("");
  const filtered = universities.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Universities"
          description="Discover world-class universities and find your perfect match"
        >
          <div className="max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-white rounded-xl p-2 shadow-lg">
                <Search className="w-5 h-5 text-muted-foreground ml-3" />
                <input 
                  type="text" 
                  placeholder="Search universities..." 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  className="flex-1 bg-transparent px-3 py-2.5 outline-none text-foreground" 
                />
              </div>
            </div>
          </div>
        </PageHero>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((uni, i) => (
                <ScrollReveal key={uni.slug} animation="fade-up" delay={i * 0.05}>
                  <a 
                    href={`/universities/${uni.slug}`}
                    className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 overflow-hidden block h-full"
                  >
                    <div className="h-40 bg-muted relative overflow-hidden">
                      <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Trophy className="w-3 h-3" />#{uni.ranking}
                      </div>
                      {uni.logo && (
                        <div className="absolute bottom-3 left-3 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-1">
                          <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{uni.name}</h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1 mb-3">
                        <span className="text-lg">{uni.countryFlag}</span>
                        <MapPin className="w-4 h-4" />{uni.city}, {uni.country}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">{uni.type}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded">{uni.internationalStudents} Intl</span>
                      </div>
                    </div>
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

export default Universities;
