import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const AppPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6"><Sparkles className="w-4 h-4 text-secondary" /><span className="text-sm font-medium">Coming Soon</span></span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">The NUMAWAY App</h1>
              <p className="text-xl text-primary-foreground/70 mb-8">Your complete study abroad companion. Track applications, chat with Genie, manage documents, and stay connected with your counsellor — all in one app.</p>
              <div className="space-y-3 mb-8">
                {["Track your applications in real-time", "Chat with AI Genie 24/7", "Manage all your documents", "Connect directly with counsellors", "Get deadline reminders"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary-foreground/80"><CheckCircle className="w-5 h-5 text-secondary" />{f}</div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="hero" size="lg">Get Early Access <ArrowRight className="w-4 h-4" /></Button>
              </div>
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
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Be the First to Know</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join our waiting list and be notified when the NUMAWAY App launches.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 p-4 rounded-xl border border-border bg-background" />
            <Button variant="hero" size="lg">Notify Me</Button>
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AppPage;
