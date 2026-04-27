import { useState } from "react";
import { NAP } from "@/lib/nap";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import { localBusinessSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Mail, MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const contactSchema: JsonLdGraph = localBusinessSchema() as JsonLdGraph;

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY: ContactForm = { name: "", email: "", phone: "", subject: "General Inquiry", message: "" };

const Contact = (): JSX.Element => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof ContactForm, value: string): void =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          message: `[${form.subject}] ${form.message}`,
          source: "contact-form",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSent(true);
      setForm(EMPTY);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please email us directly at connect@numaway.com",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Contact Numaway: Email, WhatsApp and Office"
        description="Reach Numaway's team via email at connect@numaway.com or WhatsApp at +234 906 505 0363. Based in Kano, Nigeria."
        canonical="/contact"
        jsonLd={contactSchema}
      />

      <Header />
      <main>
        <PageHero
          title="Contact Us"
          description="Have a question or want to speak to someone before booking a consultation? We are happy to help."
        />

        <section className="py-24">
          <div className="container-default">
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal animation="slide-left">
                <h2 className="text-2xl font-display font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Use the form or reach us via email or WhatsApp. We typically respond within 24 hours.
                </p>

                <div className="space-y-4">
                  <a
                    href={NAP.mailtoUrl}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <Mail className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm text-muted-foreground">{NAP.email}</p>
                    </div>
                  </a>

                  <a
                    href={NAP.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm opacity-80">{NAP.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" strokeWidth={1.75} />
                    Office Address
                  </h3>
                  <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                    {NAP.address.street}<br />
                    {NAP.address.city}, {NAP.address.postal_code}<br />
                    {NAP.address.lga}, {NAP.address.state}<br />
                    {NAP.address.country}
                  </address>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right">
                <div className="bg-card p-8 rounded-2xl shadow-card h-full">
                  {sent ? (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                      <CheckCircle className="w-16 h-16 text-secondary" strokeWidth={1.5} />
                      <h3 className="text-xl font-display font-bold">Message Received</h3>
                      <p className="text-muted-foreground">
                        We will reply to <strong>{form.email || "your inbox"}</strong> within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setSent(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
                      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+234 XXX XXX XXXX"
                            className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Subject</label>
                          <select
                            value={form.subject}
                            onChange={(e) => update("subject", e.target.value)}
                            className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all"
                          >
                            <option>General Inquiry</option>
                            <option>Study Abroad Question</option>
                            <option>Partnership Inquiry</option>
                            <option>Feedback</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Message *</label>
                          <textarea
                            value={form.message}
                            onChange={(e) => update("message", e.target.value)}
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full p-3 rounded-lg border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-all resize-none"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          variant="hero"
                          className="w-full"
                          disabled={submitting || !form.name || !form.email || !form.message}
                        >
                          {submitting ? "Sending..." : "Send Message"}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          We will respond within 24 hours to <strong>{NAP.email}</strong>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-display font-bold mb-4">Looking for Something Specific?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild><a href="/consultation">Book Consultation</a></Button>
                <Button variant="outline" asChild><a href="/faq">Read FAQs</a></Button>
                <Button variant="outline" asChild><a href="/services">View Services</a></Button>
                <Button variant="outline" asChild><a href="/careers">Careers at NUMAWAY</a></Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
