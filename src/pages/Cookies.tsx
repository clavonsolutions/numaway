import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Cookie Policy</h1>
          <p className="text-primary-foreground/70">Last updated: December 2024</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>
          <h2>How We Use Cookies</h2>
          <p>We use cookies to improve your browsing experience, analyze site traffic, and personalize content.</p>
          <h2>Types of Cookies</h2>
          <p>Essential cookies, analytics cookies, and marketing cookies may be used on our site.</p>
          <h2>Managing Cookies</h2>
          <p>You can control cookies through your browser settings.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Cookies;
