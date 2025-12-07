import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

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
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Resources</motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Guides, tips, and insights for your study abroad journey</p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.a key={article.slug} href={`/resources/${article.slug}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-card rounded-2xl shadow-soft hover:shadow-card transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20" />
                <div className="p-6">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">{article.category}</span>
                  <h3 className="text-lg font-display font-semibold mt-3 mb-2 group-hover:text-secondary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Resources;
