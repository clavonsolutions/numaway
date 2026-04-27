import { Link } from "react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { BookOpen, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { pillars } from "@/data/resources";

const resourceListSchema: JsonLdGraph = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Numaway Study Abroad Resources",
  itemListElement: pillars.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    url: `https://numaway.com/resources/${p.slug}`,
  })),
};

const Resources = (): JSX.Element => (
  <div className="min-h-screen bg-background">
    <PageHead
      title="Study Abroad Resources: Guides, Articles and Tips"
      description="Comprehensive study abroad guides for Nigerian students: UK, Canada, scholarships, English tests, and visa interviews, written by Numaway counsellors."
      canonical="/resources"
      jsonLd={resourceListSchema}
    />

    <Header />
    <main>
      <PageHero
        title="Study Abroad Resources"
        description="Expert guides written by counsellors with combined decades of study abroad experience"
      />

      <section className="py-16">
        <div className="container-default">
          {/* Pillar cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.slug} animation="fade-up" delay={i * 0.08}>
                <Link
                  to={`/resources/${pillar.slug}`}
                  className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all overflow-hidden block h-full"
                >
                  <div className="h-36 bg-gradient-to-br from-primary/15 via-secondary/10 to-gold/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/20" />
                    </div>
                    <div className="absolute bottom-3 left-4">
                      <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-medium">
                        {pillar.articles.length} articles
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {pillar.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {pillar.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-secondary text-sm font-medium">
                      Read Guide <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Article index by pillar */}
          <div className="space-y-12">
            {pillars.map((pillar) => (
              <ScrollReveal key={pillar.slug} animation="fade-up">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-display font-bold">{pillar.title}</h2>
                    <Link
                      to={`/resources/${pillar.slug}`}
                      className="text-sm text-secondary hover:underline flex items-center gap-1"
                    >
                      View All <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pillar.articles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/resources/${pillar.slug}/${article.slug}`}
                        className="group flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-card hover:shadow-soft transition-all"
                      >
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                          {article.category}
                        </span>
                        <span className="text-sm font-medium group-hover:text-secondary transition-colors line-clamp-2">
                          {article.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Resources;
