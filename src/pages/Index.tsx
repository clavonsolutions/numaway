import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import GenieSection from "@/components/GenieSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StartJourneySection from "@/components/StartJourneySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <HowItWorksSection />
        <ServicesSection />
        <AppShowcaseSection />
        <GenieSection />
        <TestimonialsSection />
        <StartJourneySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
