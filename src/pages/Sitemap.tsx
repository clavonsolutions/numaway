import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { countries } from "@/data/countries";

const Sitemap = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold">Sitemap</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Main Pages</h3>
              <ul className="space-y-2">{["/", "/about", "/contact", "/consultation", "/faq"].map(p => <li key={p}><a href={p} className="text-muted-foreground hover:text-secondary">{p === "/" ? "Home" : p.slice(1).replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}</a></li>)}</ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2"><li><a href="/services" className="text-muted-foreground hover:text-secondary">All Services</a></li></ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Countries</h3>
              <ul className="space-y-2">{countries.slice(0, 8).map(c => <li key={c.slug}><a href={`/countries/${c.slug}`} className="text-muted-foreground hover:text-secondary">{c.name}</a></li>)}</ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">{["/universities", "/courses", "/exams", "/resources", "/careers", "/app", "/genie"].map(p => <li key={p}><a href={p} className="text-muted-foreground hover:text-secondary">{p.slice(1).replace(/\b\w/g, l => l.toUpperCase())}</a></li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sitemap;
