import { useParams, Link } from "react-router-dom";
import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCountryBySlug } from "@/data/countries";
import { getUniversitiesByCountry } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { CheckCircle, GraduationCap, Briefcase, Home, CreditCard, Plane, FileCheck, MapPin, ArrowRight, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const CountryDetail = (): JSX.Element => {
  const { slug } = useParams();
  const country = getCountryBySlug(slug || "");
  const unis = getUniversitiesByCountry(slug || "");

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <PageHead
          title="Country Not Found"
          description="Browse all Numaway study abroad destinations for universities, visa guides, scholarships, and expert counselling."
          canonical="/countries"
          noIndex={true}
        />
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🌍</span>
            <h1 className="text-4xl font-display font-bold mb-4">Country Not Found</h1>
            <p className="text-muted-foreground mb-8">The country you're looking for doesn't exist.</p>
            <Button asChild><Link to="/countries">View All Countries</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const placeSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "Country",
    "@id": `https://numaway.com/countries/${slug}`,
    name: country.name,
    description: country.description,
    url: `https://numaway.com/countries/${slug}`,
  };

  const serviceSchema: JsonLdGraph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Study in ${country.name}: Numaway Guidance`,
    description: `Expert study abroad counselling for students applying to universities in ${country.name}. Visa guidance, scholarship matching, and application support.`,
    provider: { "@id": "https://numaway.com/#org" },
    areaServed: country.name,
    url: `https://numaway.com/countries/${slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={`Study in ${country.name}, Universities, Visas and Scholarships`}
        description={country.description.slice(0, 155)}
        canonical={`/countries/${slug}`}
        jsonLd={[placeSchema, serviceSchema]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/about/about-mission.jpg"
              alt={`Study in ${country.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>

          <div className="container-default relative z-10 py-20">
            <div className="max-w-3xl">
              <Breadcrumbs
                items={[
                  { label: "Countries", href: "/countries" },
                  { label: country.name },
                ]}
                className="mb-6 text-primary-foreground/70"
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl block mb-4"
              >
                {country.flag}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4"
              >
                Study in {country.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-primary-foreground/80 mb-6 max-w-2xl"
              >
                {country.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">{country.universities}+</div>
                  <div className="text-sm text-primary-foreground/60">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">{country.students}</div>
                  <div className="text-sm text-primary-foreground/60">Intl Students</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link to="/consultation">
                    Book Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/universities">Browse Universities</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats banner */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-center">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-secondary" />
                <span className="font-medium">{country.universities}+ Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span className="font-medium">{country.students} Intl Students</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-medium">{country.name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="container-default">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Why Study Here */}
                <ScrollReveal animation="fade-up">
                  <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-secondary" /> Why Study in {country.name}?
                  </h2>
                  <div className="space-y-3">
                    {country.whyStudy.map((w, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-card rounded-lg shadow-soft">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Key Facts */}
                <ScrollReveal animation="fade-up">
                  <h2 className="text-2xl font-display font-bold mb-6">Key Facts</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <Home className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Living Cost</h3>
                      <p className="text-muted-foreground text-sm">{country.livingCost}</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <Briefcase className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Work Rights</h3>
                      <p className="text-muted-foreground text-sm">{country.workRights}</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <Plane className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Post-Study Visa</h3>
                      <p className="text-muted-foreground text-sm">{country.postStudyVisa}</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <FileCheck className="w-8 h-8 text-secondary mb-3" />
                      <h3 className="font-semibold mb-2">Visa Requirements</h3>
                      <p className="text-muted-foreground text-sm">{country.visaInfo}</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Scholarships */}
                <ScrollReveal animation="fade-up">
                  <h2 className="text-2xl font-display font-bold mb-4">
                    <CreditCard className="w-6 h-6 text-secondary inline mr-2" />Scholarships Available
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {country.scholarships.map((s, i) => (
                      <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    These scholarships are competitive. Numaway helps you identify which are realistic for your profile.
                  </p>
                </ScrollReveal>

                {/* Top Courses */}
                {country.topCourses && country.topCourses.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-2xl font-display font-bold mb-4">
                      <BookOpen className="w-6 h-6 text-secondary inline mr-2" />Popular Courses
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {country.topCourses.map((c, i) => (
                        <span key={i} className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>
                )}

                {/* Application Steps */}
                {country.applicationSteps && country.applicationSteps.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-2xl font-display font-bold mb-6">How to Apply</h2>
                    <ol className="space-y-4">
                      {country.applicationSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                          <span className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="mt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </ScrollReveal>
                )}

                {/* Top Universities */}
                {unis.length > 0 && (
                  <ScrollReveal animation="fade-up">
                    <h2 className="text-2xl font-display font-bold mb-6">Top Universities</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {unis.slice(0, 6).map((u) => (
                        <Link
                          key={u.slug}
                          to={`/universities/${u.slug}`}
                          className="p-4 bg-card rounded-lg shadow-soft hover:shadow-card transition-shadow flex items-center gap-3"
                        >
                          {u.logo ? (
                            <div className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center p-1 flex-shrink-0">
                              <img src={u.logo} alt={u.name} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                          )}
                          <span className="font-medium">{u.name}</span>
                        </Link>
                      ))}
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24 space-y-4">
                  <img
                    src="/images/about/about-team.jpg"
                    alt="Numaway counsellors"
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="text-xl font-display font-bold">Ready to Study in {country.name}?</h3>
                  <p className="text-muted-foreground text-sm">
                    Get expert guidance on universities, visas, and scholarships. Free consultation, no pressure.
                  </p>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/consultation">Book Free Consultation</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/universities">Browse All Universities</Link>
                  </Button>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link to="/scholarships">Find Scholarships</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-display font-bold mb-4">Start Your {country.name} Journey</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Our counsellors have helped hundreds of students secure places in {country.name}. Book your free session today.
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

export default CountryDetail;
