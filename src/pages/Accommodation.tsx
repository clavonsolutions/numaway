import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Shield, MapPin, Wifi } from "lucide-react";

const Accommodation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Accommodation</motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Find safe, comfortable housing near your campus</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">We Help You Find the Perfect Home</h2>
              <p className="text-muted-foreground mb-6">Finding accommodation in a new country can be overwhelming. NUMAWAY partners with verified housing providers to help you find safe, affordable housing near your university.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ icon: Shield, text: "Verified Properties" }, { icon: MapPin, text: "Near Campus" }, { icon: Wifi, text: "All Amenities" }, { icon: Home, text: "Budget Options" }].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-soft"><f.icon className="w-5 h-5 text-secondary" /><span className="text-sm">{f.text}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-display font-bold mb-6">Request Accommodation Support</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-border bg-background" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-border bg-background" />
                <select className="w-full p-3 rounded-lg border border-border bg-background text-muted-foreground">
                  <option>Select Country</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                <input type="text" placeholder="City" className="w-full p-3 rounded-lg border border-border bg-background" />
                <input type="text" placeholder="Monthly Budget (e.g., £500-800)" className="w-full p-3 rounded-lg border border-border bg-background" />
                <Button variant="hero" className="w-full">Submit Request</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Accommodation;
