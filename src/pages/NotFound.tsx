import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-4">
          <span className="text-8xl mb-6 block">🔍</span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="/">Return to Home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
