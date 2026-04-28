import { useParams, Link } from "react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BookOpen, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { getPillarBySlug } from "@/data/resources";

const PillarPage = (): JSX.Element => {
  const { pillarSlug } = useParams();
  const pillar = getPillarBySlug(pillarSlug ?? "");

  if (!pillar) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead
          title="Resource Not Found"
          description="Browse all Numaway study abroad resources, guides and articles."
          canonical="/resources"
          noIndex={true}
        />
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Guide Not Found</h1>
            <p className="text-muted-foreground mb-8">That resource guide does not exist.</p>
            <Button asChild><Link to="/resources">Browse All Resources</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const articleSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pillar.metaTitle,
    description: pillar.metaDescription,
    url: `https://numaway.com/resources/${pillar.slug}`,
    datePublished: pillar.publishedAt,
    dateModified: pillar.publishedAt,
    author: { "@id": "https://numaway.com/#org" },
    publisher: { "@id": "https://numaway.com/#org" },
  };

  const breadcrumbSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://numaway.com/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://numaway.com/resources" },
      { "@type": "ListItem", position: 3, name: pillar.title, item: `https://numaway.com/resources/${pillar.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={pillar.metaTitle}
        description={pillar.metaDescription}
        canonical={`/resources/${pillar.slug}`}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-hero">
          <div className="absolute inset-0">
            <img
              src="/images/about/about-mission.jpg"
              alt={pillar.title}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container-default relative z-10 py-16">
            <Breadcrumbs
              items={[
                { label: "Resources", href: "/resources" },
                { label: pillar.title },
              ]}
              className="mb-6 text-primary-foreground/70"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4 inline mr-1.5" />Pillar Guide
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                {pillar.title}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-2">{pillar.excerpt}</p>
              <p className="text-sm text-primary-foreground/50 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Updated {new Date(pillar.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-12 bg-secondary/5 border-y border-secondary/20">
          <div className="container-default">
            <h2 className="text-lg font-display font-bold mb-4 text-foreground">Key Takeaways</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pillar.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ScrollReveal animation="fade-up">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {pillar.intro}
                  </p>
                </ScrollReveal>

                {/* Cluster Articles */}
                <ScrollReveal animation="fade-up">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Articles in This Guide
                  </h2>
                  <div className="space-y-4">
                    {pillar.articles.map((article, i) => (
                      <Link
                        key={article.slug}
                        to={`/resources/${pillar.slug}/${article.slug}`}
                        className="group flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all"
                        data-service-id={article.relatedServiceIds[0] ?? undefined}
                      >
                        <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                              {article.category}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-foreground group-hover:text-secondary transition-colors mb-1">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24 space-y-4">
                  <img
                    src="/images/about/about-team.jpg"
                    alt="Numaway counsellors"
                    className="w-full h-36 object-cover rounded-xl"
                  />
                  <h3 className="text-lg font-display font-bold">Need Personalised Advice?</h3>
                  <p className="text-muted-foreground text-sm">
                    These guides give you the information. Our counsellors help you apply it to your specific profile.
                  </p>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/consultation">
                      Book Free Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/resources">All Resources</Link>
                  </Button>
                  {pillar.relatedCountrySlug && (
                    <Button variant="ghost" className="w-full" asChild>
                      <Link to={`/countries/${pillar.relatedCountrySlug}`}>
                        Country Guide
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Act on This Guide?</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Reading is the start. Our counsellors turn information into a personalised plan for your profile.
              </p>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link to="/consultation">
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PillarPage;
