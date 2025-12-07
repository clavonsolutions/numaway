import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Our Services</motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive support for every step of your study abroad journey</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.a key={service.slug} href={`/services/${service.slug}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-secondary font-medium">Learn More <ArrowRight className="w-4 h-4" /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Our counsellors will recommend the right services based on your unique situation.</p>
          <Button variant="hero" size="lg" asChild><a href="/consultation">Book Free Consultation</a></Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
