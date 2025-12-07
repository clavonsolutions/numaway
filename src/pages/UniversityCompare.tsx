import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UniversityCompare = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Compare Universities</h1>
          <p className="text-xl text-primary-foreground/70">Select universities to compare side by side</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">University comparison feature coming soon. Select universities from our listings to compare.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default UniversityCompare;
