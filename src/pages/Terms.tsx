import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-primary-foreground/70">Last updated: December 2024</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing NUMAWAY services, you agree to be bound by these Terms of Service.</p>
          <h2>2. Services</h2>
          <p>NUMAWAY provides education consultancy services including admissions counselling, visa support, and related services.</p>
          <h2>3. User Responsibilities</h2>
          <p>You agree to provide accurate information and comply with all applicable laws and university requirements.</p>
          <h2>4. Limitation of Liability</h2>
          <p>NUMAWAY provides guidance but does not guarantee admission or visa approval, which are decisions made by universities and embassies.</p>
          <h2>5. Contact</h2>
          <p>For questions about these terms, contact legal@numaway.com.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
