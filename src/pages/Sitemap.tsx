import { Link } from "react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { countries } from "@/data/countries";
import { exams } from "@/data/exams";

const breadcrumbSchema: JsonLdGraph = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://numaway.com/" },
    { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://numaway.com/sitemap" },
  ],
};

const NavSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}): JSX.Element => (
  <div>
    <h2 className="font-display font-bold text-base text-foreground border-b border-border pb-2 mb-3">
      {title}
    </h2>
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link to={l.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sitemap = (): JSX.Element => (
  <div className="min-h-screen bg-background">
    <PageHead
      title="Site Map: All Pages on Numaway"
      description="Browse every page on Numaway: services, countries, universities, exam guides, scholarships and legal documents."
      canonical="/sitemap"
      jsonLd={breadcrumbSchema}
    />

    <Header />
    <main className="pt-20">
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container-default text-center">
          <h1 className="text-4xl font-display font-bold mb-2">Sitemap</h1>
          <p className="text-primary-foreground/70 text-lg">Every page on Numaway in one place</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-default">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <NavSection
              title="Main Pages"
              links={[
                { label: "Home", href: "/" },
                { label: "About Numaway", href: "/about" },
                { label: "Our Team", href: "/about/team" },
                { label: "Why Numaway", href: "/about/why-numaway" },
                { label: "Contact", href: "/contact" },
                { label: "Book a Consultation", href: "/consultation" },
                { label: "FAQ", href: "/faq" },
                { label: "Sage AI Guide", href: "/sage" },
                { label: "Search", href: "/search" },
              ]}
            />

            <NavSection
              title="Services"
              links={[
                { label: "All Services", href: "/services" },
                { label: "Student Profiling", href: "/services/student-profiling" },
                { label: "Programme Selection", href: "/services/program-selection" },
                { label: "Application Support", href: "/services/application-support" },
                { label: "Exam Support", href: "/services/exam-support" },
                { label: "Visa Preparation", href: "/services/visa-preparation" },
                { label: "Pre-Departure Prep", href: "/services/pre-departure" },
                { label: "Post-Arrival Support", href: "/services/post-arrival" },
              ]}
            />

            <NavSection
              title="Countries"
              links={[
                { label: "All Countries", href: "/countries" },
                ...countries.slice(0, 10).map((c) => ({
                  label: c.name,
                  href: `/countries/${c.slug}`,
                })),
              ]}
            />

            <NavSection
              title="Universities"
              links={[
                { label: "Browse Universities", href: "/universities" },
                { label: "Compare Universities", href: "/universities/compare" },
              ]}
            />

            <NavSection
              title="Exams"
              links={[
                { label: "Exam Guides Overview", href: "/exams" },
                ...exams.slice(0, 7).map((e) => ({
                  label: e.name,
                  href: `/exams/${e.slug}`,
                })),
              ]}
            />

            <NavSection
              title="Funding & Support"
              links={[
                { label: "Scholarships", href: "/scholarships" },
                { label: "Student Loans", href: "/loans" },
                { label: "Accommodation", href: "/accommodation" },
              ]}
            />

            <NavSection
              title="Audience Pages"
              links={[
                { label: "For Students", href: "/for-students" },
                { label: "For Agents", href: "/for-agents" },
                { label: "For Institutions", href: "/for-institutions" },
              ]}
            />

            <NavSection
              title="Courses & Resources"
              links={[
                { label: "Courses", href: "/courses" },
                { label: "Resources", href: "/resources" },
                { label: "Careers at Numaway", href: "/careers" },
                { label: "Numaway App", href: "/app" },
              ]}
            />

            <NavSection
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Complaints Procedure", href: "/complaints" },
                { label: "Fraud Prevention", href: "/fraud-prevention" },
                { label: "Refunds Policy", href: "/refunds" },
                { label: "Acceptable Use", href: "/acceptable-use" },
                { label: "Accessibility Statement", href: "/accessibility" },
                { label: "Data Processing Agreement", href: "/legal/dpa" },
              ]}
            />

            <NavSection
              title="Other"
              links={[
                { label: "Image Credits", href: "/credits" },
                { label: "XML Sitemaps", href: "/sitemap.xml" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Sitemap;
