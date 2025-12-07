import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const articles = [
  { slug: "how-to-choose-a-country", title: "How to Choose the Right Study Destination", excerpt: "A comprehensive guide to selecting the perfect country for your study abroad journey.", category: "Guides", date: "Dec 5, 2024", author: "NUMAWAY Team" },
  { slug: "uk-visa-guide-2025", title: "UK Student Visa Guide 2025", excerpt: "Everything you need to know about applying for a UK student visa in 2025.", category: "Visa", date: "Dec 3, 2024", author: "NUMAWAY Team" },
  { slug: "scholarship-tips", title: "Top 10 Scholarship Application Tips", excerpt: "Expert tips to increase your chances of winning competitive scholarships.", category: "Scholarships", date: "Dec 1, 2024", author: "NUMAWAY Team" },
  { slug: "ielts-preparation", title: "IELTS Preparation: A Complete Guide", excerpt: "Master the IELTS exam with our comprehensive preparation strategies.", category: "Exams", date: "Nov 28, 2024", author: "NUMAWAY Team" },
  { slug: "canada-immigration", title: "Pathways to Canadian Permanent Residency", excerpt: "How studying in Canada can lead to permanent residency.", category: "Immigration", date: "Nov 25, 2024", author: "NUMAWAY Team" },
  { slug: "budgeting-abroad", title: "Budgeting Tips for International Students", excerpt: "Smart money management strategies for students studying abroad.", category: "Lifestyle", date: "Nov 20, 2024", author: "NUMAWAY Team" }
];

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <PageHero
        title="Resources"
        description="Guides, tips, and insights for your study abroad journey"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <ScrollReveal key={article.slug} animation="fade-up" delay={i * 0.08}>
                <a 
                  href={`/resources/${article.slug}`} 
                  className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all overflow-hidden block h-full hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-secondary/20 via-accent/10 to-gold/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">{article.category}</span>
                    <h3 className="text-lg font-display font-semibold mt-3 mb-2 group-hover:text-secondary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Resources;
