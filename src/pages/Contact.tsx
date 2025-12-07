import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Contact Us
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Have a question or want to speak to someone before booking a consultation? 
            We're happy to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Use the form below or reach us via email or WhatsApp. We typically respond within 24-48 hours.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@numaway.com" className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-muted-foreground">hello@numaway.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-secondary text-secondary-foreground rounded-xl shadow-soft hover:bg-secondary/90 transition-colors">
                  <div className="w-12 h-12 bg-secondary-foreground/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm opacity-80">Chat with us on WhatsApp</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-sm text-muted-foreground">Typically within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <h3 className="font-display font-semibold mb-2">Office Location</h3>
                <p className="text-muted-foreground text-sm">
                  Lagos, Nigeria
                  <br />
                  <span className="text-xs">(Full address available upon request)</span>
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input type="tel" placeholder="+234 XXX XXX XXXX" className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Study Abroad Question</option>
                    <option>Partnership Inquiry</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <textarea placeholder="How can we help you?" rows={4} className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:outline-none transition-colors resize-none" required />
                </div>
                <Button variant="hero" className="w-full">Send Message</Button>
                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Looking for Something Specific?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><a href="/consultation">Book Consultation</a></Button>
            <Button variant="outline" asChild><a href="/faq">Read FAQs</a></Button>
            <Button variant="outline" asChild><a href="/services">View Services</a></Button>
            <Button variant="outline" asChild><a href="/careers">Careers at NUMAWAY</a></Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;