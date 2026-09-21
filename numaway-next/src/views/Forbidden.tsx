"use client";
import { Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, LogIn, Mail } from "lucide-react";
import { NAP } from "@/lib/nap";

const ICON_STROKE = 1.75;

const Forbidden = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Access Denied"
        description="You don't have permission to access this area. Please log in with the correct account or contact support."
        canonical="/403"
        noIndex={true}
      />
      <Header transparent={false} />
      <main className="pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-4 max-w-lg mx-auto">
          <p className="text-8xl font-display font-bold text-primary/20 mb-2 select-none">403</p>
          <h1 className="text-3xl font-display font-bold mb-3">You don't have access to this area</h1>
          <p className="text-muted-foreground mb-8">
            This page is restricted. If you believe this is an error, please log in with the
            correct account or get in touch with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" asChild>
              <Link to="/"><Home className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Return to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login"><LogIn className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Log In</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact"><Mail className="w-4 h-4 mr-2" strokeWidth={ICON_STROKE} />Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Forbidden;


