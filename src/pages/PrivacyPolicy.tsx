import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/70">Last updated: December 2024</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <h2>1. Introduction</h2>
          <p>NUMAWAY Education Technology ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, phone number, educational background, and documents related to your study abroad application.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to provide counselling services, process applications, communicate with you, and improve our services.</p>
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
          <h2>5. Contact Us</h2>
          <p>For privacy-related inquiries, contact us at privacy@numaway.com.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
