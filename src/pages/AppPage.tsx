import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, CheckCircle, ArrowRight, Clock, MessageCircle, FileText, Bell } from "lucide-react";

const features = [
  { icon: Clock, title: "Track Applications", description: "Track your applications from 'idea' to 'enrolled' in real time" },
  { icon: MessageCircle, title: "Chat with Counsellor", description: "Chat securely with your assigned counsellor anytime" },
  { icon: Sparkles, title: "Use Sage", description: "Get quick answers and planning help from your AI assistant" },
  { icon: Bell, title: "Deadline Reminders", description: "Never miss an exam, document or application deadline again" },
  { icon: FileText, title: "Document Storage", description: "Store documents safely and access them anytime, anywhere" }
];

const AppPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Launching Soon</span>
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                NUMAWAY App – Your Journey, Organised
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-8">
                A simple, intelligent app that keeps all your study abroad plans, tasks and conversations in one place.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary-foreground/80">
                    <f.icon className="w-5 h-5 text-secondary" />
                    <span>{f.description}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" asChild>
                <a href="#early-access">Join the Early Access List <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex justify-center">
              <div className="w-72 h-[500px] bg-card rounded-[3rem] shadow-card p-4 relative">
                <div className="w-full h-full bg-muted rounded-[2.5rem] flex items-center justify-center">
                  <Smartphone className="w-20 h-20 text-muted-foreground/30" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Designed for Nigerian Students */}
      <section className="py-24">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Designed for Nigerian Students</h2>
            <p className="text-muted-foreground mb-8">
              The app is built around the real journeys of students from Nigeria and across Africa.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WAEC/NECO Support</h3>
                <p className="text-sm text-muted-foreground">Your Nigerian qualifications understood and supported</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Local Timelines</h3>
                <p className="text-sm text-muted-foreground">Reminders based on Nigerian bank cycles and intake dates</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visa Guidance</h3>
                <p className="text-sm text-muted-foreground">Clear guidance on bank statements, sponsorship and visa processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 bg-muted/50">
        <div className="container-default text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Availability</h2>
          <p className="text-muted-foreground mb-6">We are launching the NUMAWAY App in phases:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 bg-card p-4 rounded-xl shadow-soft">
              <span className="text-secondary font-bold">Web App</span>
              <p className="text-sm text-muted-foreground">Accessible through your browser</p>
            </div>
            <div className="flex-1 bg-card p-4 rounded-xl shadow-soft">
              <span className="text-muted-foreground font-bold">Mobile App</span>
              <p className="text-sm text-muted-foreground">Coming soon on app stores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section id="early-access" className="py-24">
        <div className="container-default text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Join the Early Access List</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Be the first to try the NUMAWAY App when it launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="text" placeholder="Your name" className="flex-1 p-4 rounded-xl border border-border bg-background" />
            <input type="email" placeholder="Your email" className="flex-1 p-4 rounded-xl border border-border bg-background" />
          </form>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-3">
            <input type="tel" placeholder="Phone (optional)" className="flex-1 p-4 rounded-xl border border-border bg-background" />
            <select className="flex-1 p-4 rounded-xl border border-border bg-background">
              <option>Current level</option>
              <option>SSCE (WAEC/NECO)</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
              <option>Postgraduate</option>
            </select>
          </form>
          <Button variant="hero" size="lg" className="mt-6">
            Join Waiting List <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AppPage;