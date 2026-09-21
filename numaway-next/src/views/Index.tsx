"use client";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import { localBusinessSchema } from "@/lib/schema";
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

const orgSchema: JsonLdGraph = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://numaway.com/#org",
  name: "Numaway Education Services Limited",
  url: "https://numaway.com",
  logo: "https://numaway.com/logo.svg",
  description:
    "Numaway helps African students secure university places, visas, and scholarships with AI-powered guidance and expert counsellors.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mai Kwano Plaza, Zaria Road",
    addressLocality: "Kano",
    postalCode: "700102",
    addressRegion: "Kano State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349065050363",
    contactType: "customer service",
    email: "connect@numaway.com",
    availableLanguage: ["English"],
  },
  areaServed: ["AF", "EU"],
  sameAs: [
    "https://facebook.com/numaway",
    "https://instagram.com/numaway",
    "https://twitter.com/numaway",
    "https://linkedin.com/company/numaway",
  ],
};

const websiteSchema: JsonLdGraph = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://numaway.com/#website",
  name: "Numaway",
  url: "https://numaway.com",
  publisher: { "@id": "https://numaway.com/#org" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://numaway.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const Index = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Study Abroad with AI-Powered Guidance"
        description="Numaway helps African students secure university places, visas, and scholarships with expert counsellors and AI guidance."
        canonical="/"
        jsonLd={[orgSchema, websiteSchema, localBusinessSchema()]}
      />

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

