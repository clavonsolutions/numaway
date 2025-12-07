import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Contact Us</motion.h1>
          <p className="text-xl text-primary-foreground/70">We're here to help you every step of the way</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <a href="mailto:hello@numaway.com" className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                  <Mail className="w-6 h-6 text-secondary" /><span>hello@numaway.com</span>
                </a>
                <a href="tel:+2348000000000" className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                  <Phone className="w-6 h-6 text-secondary" /><span>+234 800 000 0000</span>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <MapPin className="w-6 h-6 text-secondary" /><span>123 Education Street, Victoria Island, Lagos</span>
                </div>
                <a href="https://wa.me/2348000000000" className="flex items-center gap-4 p-4 bg-secondary text-secondary-foreground rounded-xl shadow-soft hover:bg-secondary/90 transition-colors">
                  <MessageCircle className="w-6 h-6" /><span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-border bg-background" />
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-border bg-background" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg border border-border bg-background" />
                <Button variant="hero" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
