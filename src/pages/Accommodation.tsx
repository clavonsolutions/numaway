import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Shield, MapPin, Wifi, Building, Users, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";

const accommodationTypes = [
  {
    icon: Building,
    title: "On-Campus Halls of Residence",
    description: "University-managed accommodation, close to campus with built-in support.",
    pros: ["Convenient location", "Built-in community", "University support"],
    cons: ["Limited availability", "May have waiting lists"]
  },
  {
    icon: Home,
    title: "Purpose-Built Student Accommodation",
    description: "Private halls designed for students, often with modern amenities.",
    pros: ["Modern facilities", "All-inclusive bills", "Social spaces"],
    cons: ["Can be expensive", "Contracts may be inflexible"]
  },
  {
    icon: Users,
    title: "Shared Houses or Apartments",
    description: "Private rentals shared with other students for more independence.",
    pros: ["More independence", "Often cheaper", "Flexible locations"],
    cons: ["More responsibility", "Need to find housemates"]
  },
  {
    icon: Home,
    title: "Homestay (Host Family)",
    description: "Living with a local family for a supportive, cultural experience.",
    pros: ["Cultural immersion", "Meals often included", "Family support"],
    cons: ["Less independence", "Rules and expectations"]
  }
];

const Accommodation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Accommodation & Landing Support
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            We help you understand your options and make safer, smarter choices about where you'll live.
          </p>
        </div>
      </section>

      {/* Types of Accommodation */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-4">Types of Accommodation</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding your options is the first step to making a good decision.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {accommodationTypes.map((type, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-secondary mb-2">Pros</p>
                        <ul className="space-y-1">
                          {type.pros.map((pro, j) => (
                            <li key={j} className="flex items-center gap-1 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-secondary" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Consider</p>
                        <ul className="space-y-1">
                          {type.cons.map((con, j) => (
                            <li key={j} className="flex items-center gap-1 text-xs text-muted-foreground">
                              <AlertTriangle className="w-3 h-3" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How NUMAWAY Helps */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">How NUMAWAY Helps</h2>
              <p className="text-muted-foreground mb-6">
                We don't book accommodation for you, but we provide guidance to help you make safer, smarter choices.
              </p>
              <ul className="space-y-4">
                {[
                  "Explain the pros and cons of each option for your destination",
                  "Help you estimate realistic budgets for your chosen city",
                  "Share trusted partners or platforms where applicable",
                  "Guide you on what to look out for (contracts, deposits, safety)",
                  "Generate a 'first 30 days' landing checklist via Genie"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-display font-bold mb-6">Request Accommodation Support</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-lg border border-border bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full p-3 rounded-lg border border-border bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destination Country</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background">
                    <option>Select Country</option>
                    <option>🇬🇧 United Kingdom</option>
                    <option>🇺🇸 United States</option>
                    <option>🇨🇦 Canada</option>
                    <option>🇦🇺 Australia</option>
                    <option>🇩🇪 Germany</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input type="text" placeholder="Where will you be studying?" className="w-full p-3 rounded-lg border border-border bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                  <input type="text" placeholder="e.g., £500-800 / $800-1200" className="w-full p-3 rounded-lg border border-border bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Move-in Date</label>
                  <input type="text" placeholder="e.g., September 2025" className="w-full p-3 rounded-lg border border-border bg-background" />
                </div>
                <Button variant="hero" className="w-full">
                  Request Support <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Safety & Scam Prevention</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold mb-2">Watch Out for Scams</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unfortunately, accommodation scams target international students. Here's how to protect yourself:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Never pay large deposits before seeing the property or verifying the landlord</li>
                    <li>• Be wary of prices that seem too good to be true</li>
                    <li>• Use official university accommodation services where possible</li>
                    <li>• Never transfer money via untraceable methods</li>
                    <li>• Verify the property exists (use Google Street View, check addresses)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Accommodation;