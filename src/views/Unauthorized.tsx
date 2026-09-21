"use client";
import { Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LogIn, KeyRound } from "lucide-react";

const ICON_STROKE = 1.75;

const Unauthorized = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Session Expired"
        description="Your session has expired or you need to log in to continue. Please sign in to access this page."
        canonical="/401"
        noIndex={true}
      />
      <Header transparent={false} />
      <main className="pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-4 max-w-lg mx-auto">
          <p className="text-8xl font-display font-bold text-primary/20 mb-2 select-none">401</p>
          <h1 className="text-3xl font-display font-bold mb-3">Your session has expired</h1>
          <p className="text-muted-foreground mb-8">
            Please sign in to continue. If you were in the middle of something, your progress
            may have been saved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" asChild>
              <Link to="/login"><LogIn className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Log In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/forgot-password"><KeyRound className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Reset Password</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unauthorized;


