import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const Countries = () => {
  const [search, setSearch] = useState("");
  const filtered = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Study Destinations</motion.h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">Explore world-class education opportunities across the globe</p>
            <div className="max-w-md mx-auto flex items-center bg-primary-foreground rounded-xl p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input type="text" placeholder="Search countries..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent px-3 py-2 outline-none text-foreground" />
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((country, i) => (
                <motion.a key={country.slug} href={`/countries/${country.slug}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{country.flag}</span>
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:text-secondary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{country.name}</h3>
                  <p className="text-muted-foreground text-sm">{country.universities}+ Universities</p>
                  <p className="text-muted-foreground text-sm">{country.students} International Students</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Countries;
