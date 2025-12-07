import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { universities } from "@/data/universities";
import { useState } from "react";
import { Search, MapPin, Trophy } from "lucide-react";

const Universities = () => {
  const [search, setSearch] = useState("");
  const filtered = universities.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Universities</motion.h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">Discover world-class universities and find your perfect match</p>
            <div className="max-w-md mx-auto flex items-center bg-primary-foreground rounded-xl p-2">
              <Search className="w-5 h-5 text-muted-foreground ml-3" />
              <input type="text" placeholder="Search universities..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent px-3 py-2 outline-none text-foreground" />
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((uni, i) => (
                <motion.a key={uni.slug} href={`/universities/${uni.slug}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2 overflow-hidden">
                  <div className="h-40 bg-muted relative">
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"><Trophy className="w-3 h-3" />#{uni.ranking}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">{uni.name}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mb-3"><MapPin className="w-4 h-4" />{uni.city}, {uni.country}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded">{uni.type}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">{uni.internationalStudents} Intl</span>
                    </div>
                  </div>
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

export default Universities;
