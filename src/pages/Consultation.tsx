import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Consultation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Book a Free Study Abroad Consultation
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Tell us a bit about yourself and your plans. A NUMAWAY counsellor will review your information and get in touch.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">This is not a sales call.</h2>
              <p className="text-muted-foreground mb-6">
                It's a structured conversation to understand:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your academic background (WAEC/NECO, degrees, transcripts)",
                  "Your goals and timeline",
                  "Your budget and financial capacity",
                  "The options that genuinely fit you"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-display font-semibold mb-2">Honest Information Helps</h3>
                <p className="text-sm text-muted-foreground">
                  We kindly ask that you provide accurate information. Honest details help us give you better guidance. 
                  No fake promises, no pressure – just structured advice.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Free initial consultation
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  No obligation to proceed
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Response within 24-48 hours
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h2 className="text-2xl font-display font-bold mb-6">Tell Us About Yourself</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input type="text" placeholder="Enter your first name" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input type="text" placeholder="Enter your last name" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone / WhatsApp Number *</label>
                  <input type="tel" placeholder="+234 XXX XXX XXXX" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Study Destination(s)</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors">
                    <option value="">Select your top choice</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="usa">🇺🇸 United States</option>
                    <option value="canada">🇨🇦 Canada</option>
                    <option value="australia">🇦🇺 Australia</option>
                    <option value="germany">🇩🇪 Germany</option>
                    <option value="ireland">🇮🇪 Ireland</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Current Education Level</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors">
                    <option value="">Select your level</option>
                    <option value="ssce">SSCE (WAEC/NECO)</option>
                    <option value="nd-hnd">ND / HND</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">When do you want to start studying?</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors">
                    <option value="">Select intake</option>
                    <option value="2025-jan">January 2025</option>
                    <option value="2025-sep">September 2025</option>
                    <option value="2026-jan">January 2026</option>
                    <option value="2026-sep">September 2026</option>
                    <option value="later">Later / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your study goals (optional)</label>
                  <textarea 
                    placeholder="What do you want to study? What are your career goals? Any concerns or questions?" 
                    rows={4} 
                    className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors resize-none" 
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Submit Consultation Request
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> and consent to be contacted by NUMAWAY.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Consultation;