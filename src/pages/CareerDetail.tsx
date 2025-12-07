import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const CareerDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-display font-bold mb-4">Job Position</h1>
            <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70">
              <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Department</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Lagos, Nigeria</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Full-time</span>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">About the Role</h2>
                  <p className="text-muted-foreground">This is a placeholder for job description content. The full details would be loaded from a CMS based on slug: <strong>{slug}</strong>.</p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Requirements</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Requirement 1</li>
                    <li>Requirement 2</li>
                    <li>Requirement 3</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Benefits</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Competitive salary</li>
                    <li>Health insurance</li>
                    <li>Remote work options</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-4">Apply for this Role</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-border bg-background" />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-border bg-background" />
                    <input type="text" placeholder="LinkedIn Profile" className="w-full p-3 rounded-lg border border-border bg-background" />
                    <textarea placeholder="Why do you want to join NUMAWAY?" rows={3} className="w-full p-3 rounded-lg border border-border bg-background" />
                    <Button variant="hero" className="w-full">Submit Application</Button>
                  </form>
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

export default CareerDetail;
