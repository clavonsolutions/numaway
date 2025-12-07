import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const Countries = () => {
  const [search, setSearch] = useState("");
  const filtered = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  const featured = filtered.filter(c => c.featured);
  const others = filtered.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Explore <span className="text-gradient-gold">Study Destinations</span>
            </motion.h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-4">
              Discover countries that welcome international students and match your academic goals, 
              lifestyle and budget.
            </p>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-8">
              Different countries offer different experiences. Some have shorter degrees, others have 
              strong migration pathways. NUMAWAY helps you understand these differences and choose a 
              destination that fits your plan – not just what's popular on social media.
            </p>
            <div className="max-w-md mx-auto flex items-center bg-primary-foreground rounded-xl p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input 
                type="text" 
                placeholder="Search countries..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="flex-1 bg-transparent px-3 py-2 outline-none text-foreground" 
              />
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        {featured.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-display font-bold mb-8">Popular Destinations for Nigerian Students</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((country, i) => (
                  <motion.a 
                    key={country.slug} 
                    href={`/countries/${country.slug}`} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.05 }} 
                    className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 border-2 border-secondary/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-5xl">{country.flag}</span>
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                        <ArrowRight className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{country.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{country.description.slice(0, 100)}...</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{country.universities}+ Universities</span>
                      <span>{country.students} Students</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Destinations */}
        {others.length > 0 && (
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-display font-bold mb-8">More Destinations</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {others.map((country, i) => (
                  <motion.a 
                    key={country.slug} 
                    href={`/countries/${country.slug}`} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.05 }} 
                    className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{country.flag}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-1">{country.name}</h3>
                    <p className="text-muted-foreground text-sm">{country.universities}+ Universities</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Not sure which country is right for you?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our counsellors will help you compare destinations based on your profile, budget, and goals.
            </p>
            <a 
              href="/consultation" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/90 transition-colors"
            >
              Get Personalised Advice
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;
