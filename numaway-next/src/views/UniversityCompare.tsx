"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UniversityCompare = () => (
  <div className="min-h-screen bg-background">
    <PageHead
      title="Compare Universities Side by Side"
      description="Compare universities across tuition, rankings, acceptance rates, and course availability to make an informed choice."
      canonical="/universities/compare"
    />

    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container-default text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Compare Universities</h1>
          <p className="text-xl text-primary-foreground/70">Select universities to compare side by side</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-default text-center">
          <p className="text-muted-foreground">University comparison feature coming soon. Select universities from our listings to compare.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default UniversityCompare;

