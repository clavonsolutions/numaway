import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultationFormSection from "@/components/ConsultationFormSection";
import DestinationsSection from "@/components/DestinationsSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import SageSection from "@/components/SageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StartJourneySection from "@/components/StartJourneySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FindMyPathWizard from "@/components/FindMyPathWizard";
import TrustCenterSection from "@/components/TrustCenterSection";
import WhyNumawaySection from "@/components/WhyNumawaySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConsultationFormSection />
        <FindMyPathWizard />
        <DestinationsSection />
        <StatsSection />
        <WhyNumawaySection />
        <HowItWorksSection />
        <ServicesSection />
        <AppShowcaseSection />
        <SageSection />
        <TrustCenterSection />
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
