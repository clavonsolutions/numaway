"use client";
import { Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NAP } from "@/lib/nap";
import { Home, MessageCircle } from "lucide-react";

const ICON_STROKE = 1.75;

const ServerError = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Something Went Wrong"
        description="We encountered an unexpected error. Our team has been notified. Please try again or contact us if the problem persists."
        canonical="/500"
        noIndex={true}
      />
      <Header transparent={false} />
      <main className="pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-4 max-w-lg mx-auto">
          <p className="text-8xl font-display font-bold text-primary/20 mb-2 select-none">500</p>
          <h1 className="text-3xl font-display font-bold mb-3">Something went wrong on our side</h1>
          <p className="text-muted-foreground mb-8">
            We encountered an unexpected error. Our team has been notified and is working on it.
            Please try again in a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" asChild>
              <Link to="/"><Home className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Return to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServerError;


