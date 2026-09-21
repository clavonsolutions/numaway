"use client";
import { useParams } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ResourceDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Study Abroad Resource Guide - Numaway"
        description="Expert advice and practical guides on studying abroad, university applications, visas, scholarships, and more from Numaway counsellors."
        canonical={`/resources/${slug}`}
      />
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">Guide</span>
            <h1 className="text-3xl lg:text-5xl font-display font-bold mb-4">Resource Article</h1>
            <p className="text-primary-foreground/70">Dec 5, 2024 · NUMAWAY Team</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container-prose">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">This is a placeholder for the article content. In a full implementation, this would be fetched from a CMS or database based on the slug: <strong>{slug}</strong>.</p>
              <p className="text-muted-foreground">The article would include comprehensive information, images, and helpful tips for students.</p>
            </div>
            <div className="mt-12 p-8 bg-card rounded-2xl shadow-soft text-center">
              <h3 className="text-xl font-display font-bold mb-4">Need Personalized Guidance?</h3>
              <p className="text-muted-foreground mb-6">Our counsellors can help you with any questions.</p>
              <Button variant="hero" asChild><a href="/consultation">Book Free Consultation</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetail;


