"use client";
import { useParams, Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { getArticleBySlug, getPillarBySlug } from "@/data/resources";

const ResourceArticle = (): JSX.Element => {
  const { pillarSlug, articleSlug } = useParams();
  const pillar = getPillarBySlug(pillarSlug ?? "");
  const article = getArticleBySlug(pillarSlug ?? "", articleSlug ?? "");

  if (!article || !pillar) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead
          title="Article Not Found"
          description="Browse all Numaway study abroad resources and guides."
          canonical="/resources"
          noIndex={true}
        />
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">That article does not exist.</p>
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
    headline: article.title,
    description: article.excerpt,
    url: `https://numaway.com/resources/${pillarSlug}/${articleSlug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@id": "https://numaway.com/#org" },
    publisher: { "@id": "https://numaway.com/#org" },
    isPartOf: { "@id": `https://numaway.com/resources/${pillarSlug}` },
  };

  const breadcrumbSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://numaway.com/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://numaway.com/resources" },
      { "@type": "ListItem", position: 3, name: pillar.title, item: `https://numaway.com/resources/${pillarSlug}` },
      { "@type": "ListItem", position: 4, name: article.title, item: `https://numaway.com/resources/${pillarSlug}/${articleSlug}` },
    ],
  };

  const currentIndex = pillar.articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? pillar.articles[currentIndex - 1] : undefined;
  const nextArticle = currentIndex < pillar.articles.length - 1 ? pillar.articles[currentIndex + 1] : undefined;

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={article.title}
        description={article.excerpt}
        canonical={`/resources/${pillarSlug}/${articleSlug}`}
        ogType="article"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/about/about-mission.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-default relative z-10">
            <Breadcrumbs
              items={[
                { label: "Resources", href: "/resources" },
                { label: pillar.title, href: `/resources/${pillarSlug}` },
                { label: article.title },
              ]}
              className="mb-6 text-primary-foreground/70"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium mb-4">
                <Tag className="w-3 h-3 inline mr-1" />{article.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
                {article.title}
              </h1>
              <p className="text-primary-foreground/70 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                &nbsp;·&nbsp;Numaway Counselling Team
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article body */}
              <div
                className="lg:col-span-2 space-y-10"
                data-service-id={article.relatedServiceIds[0] ?? undefined}
              >
                <ScrollReveal animation="fade-up">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </ScrollReveal>

                {article.sections.map((section, i) => (
                  <ScrollReveal key={i} animation="fade-up">
                    <h2 className="text-xl font-display font-bold mb-3">{section.heading}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </ScrollReveal>
                ))}

                {/* Prev/Next navigation */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                  {prevArticle && (
                    <Link
                      to={`/resources/${pillarSlug}/${prevArticle.slug}`}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all flex-1 group"
                    >
                      <ArrowLeft className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground mb-1">Previous</div>
                        <div className="font-medium text-sm group-hover:text-secondary transition-colors line-clamp-2">
                          {prevArticle.title}
                        </div>
                      </div>
                    </Link>
                  )}
                  {nextArticle && (
                    <Link
                      to={`/resources/${pillarSlug}/${nextArticle.slug}`}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all flex-1 group text-right"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-xs text-muted-foreground mb-1">Next</div>
                        <div className="font-medium text-sm group-hover:text-secondary transition-colors line-clamp-2">
                          {nextArticle.title}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24 space-y-4">
                  <img
                    src="/images/about/about-team.jpg"
                    alt="Numaway counsellors"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <h3 className="text-lg font-display font-bold">Want Personalised Help?</h3>
                  <p className="text-muted-foreground text-sm">
                    This guide covers the general process. Our counsellors can review your specific situation.
                  </p>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/consultation">
                      Book Free Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/resources/${pillarSlug}`}>
                      Back to {pillar.title}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles from same pillar */}
        {pillar.articles.length > 1 && (
          <section className="py-16 bg-muted/30">
            <div className="container-default">
              <h2 className="text-2xl font-display font-bold mb-6">More in This Guide</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pillar.articles
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 3)
                  .map((a) => (
                    <Link
                      key={a.slug}
                      to={`/resources/${pillarSlug}/${a.slug}`}
                      className="group p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all"
                    >
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full block w-fit mb-2">
                        {a.category}
                      </span>
                      <h3 className="font-display font-semibold text-sm group-hover:text-secondary transition-colors">
                        {a.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ResourceArticle;


