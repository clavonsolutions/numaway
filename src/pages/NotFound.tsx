import { Link } from "react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Globe, HelpCircle, Search } from "lucide-react";

const ICON_STROKE = 1.75;

const NotFound = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Numaway to find universities, courses, and scholarships for studying abroad."
        canonical="/404"
        noIndex={true}
      />
      <Header />
      <main className="pt-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center px-4 max-w-xl mx-auto">
          <p className="text-8xl font-display font-bold text-primary/20 mb-2 select-none">404</p>
          <h1 className="text-3xl font-display font-bold mb-3">This page doesn't exist</h1>
          <p className="text-muted-foreground mb-8">
            The link may have changed or the page may have moved. Here are some places to start:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            <Link to="/" className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all text-sm font-medium hover:text-secondary">
              <Home className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
              Home
            </Link>
            <Link to="/services" className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all text-sm font-medium hover:text-secondary">
              <BookOpen className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
              Services
            </Link>
            <Link to="/countries" className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all text-sm font-medium hover:text-secondary">
              <Globe className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
              Countries
            </Link>
            <Link to="/faq" className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all text-sm font-medium hover:text-secondary">
              <HelpCircle className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
              FAQ
            </Link>
            <Link to="/search" className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all text-sm font-medium hover:text-secondary col-span-2 sm:col-span-1">
              <Search className="w-5 h-5 text-secondary" strokeWidth={ICON_STROKE} />
              Search
            </Link>
          </div>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact support</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
