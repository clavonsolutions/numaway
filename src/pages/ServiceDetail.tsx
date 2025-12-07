import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) return <div className="min-h-screen flex items-center justify-center">Service not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <service.icon className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">{service.description}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">What's Included</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">How It Works</h2>
                  <div className="space-y-4">
                    {service.howItWorks.map((step) => (
                      <div key={step.step} className="flex gap-4 p-4 bg-card rounded-lg shadow-soft">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold flex-shrink-0">{step.step}</div>
                        <div><h4 className="font-semibold">{step.title}</h4><p className="text-muted-foreground text-sm">{step.description}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="text-xl font-display font-bold mb-4">Get Started</h3>
                  <p className="text-muted-foreground mb-6">Ready to begin? Book a free consultation to discuss your needs.</p>
                  <Button variant="hero" className="w-full mb-3" asChild><a href="/consultation">Book Consultation <ArrowRight className="w-4 h-4" /></a></Button>
                  <Button variant="outline" className="w-full" asChild><a href="/contact">Contact Us</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
