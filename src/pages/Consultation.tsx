import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Consultation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Free Consultation</motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Book a free session with our expert counsellors. No obligations, just honest guidance.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Tell Us About Yourself</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-3 rounded-lg border border-border bg-background" />
                <input type="text" placeholder="Last Name" className="p-3 rounded-lg border border-border bg-background" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-border bg-background" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-border bg-background" />
              <select className="w-full p-3 rounded-lg border border-border bg-background text-muted-foreground">
                <option>Preferred Study Destination</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>Other</option>
              </select>
              <select className="w-full p-3 rounded-lg border border-border bg-background text-muted-foreground">
                <option>Highest Education Level</option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your study goals..." rows={4} className="w-full p-3 rounded-lg border border-border bg-background" />
              <Button variant="hero" size="lg" className="w-full">Book Consultation <ArrowRight className="w-4 h-4" /></Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Consultation;
