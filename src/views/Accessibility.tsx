"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/nap";

const Accessibility = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Accessibility Statement"
        description="Numaway's commitment to WCAG 2.2 Level AA accessibility. How we make study abroad guidance accessible to everyone."
        canonical="/accessibility"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Accessibility Statement</h1>
            <p className="text-primary-foreground/70">Standard: WCAG 2.2 Level AA</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-prose">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  {NAP.businessName} is committed to making numaway.com accessible to all users, including
                  those with disabilities. We aim to meet WCAG 2.2 Level AA across all public pages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Conformance Status</h2>
                <p className="text-muted-foreground mb-4">
                  We are <strong>partially conformant</strong> with WCAG 2.2 Level AA.
                  Work is ongoing to address all remaining issues.
                </p>
                <div className="bg-card rounded-xl p-5 shadow-soft space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold">In progress:</span>
                    <span className="text-muted-foreground text-sm">Colour contrast audit against brand palette</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold">In progress:</span>
                    <span className="text-muted-foreground text-sm">ARIA labels on all interactive elements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold">In progress:</span>
                    <span className="text-muted-foreground text-sm">Keyboard navigation testing across all pages</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Assistive Technology</h2>
                <p className="text-muted-foreground mb-3">
                  numaway.com is designed to work with:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Screen readers: NVDA, JAWS, VoiceOver (macOS/iOS)</li>
                  <li>Keyboard-only navigation</li>
                  <li>Browser zoom up to 200% without loss of content</li>
                  <li>High-contrast mode</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Feedback and Contact</h2>
                <p className="text-muted-foreground mb-4">
                  If you experience accessibility barriers on numaway.com, please contact us.
                  We aim to respond within 5 business days.
                </p>
                <div className="bg-muted/50 rounded-xl p-5">
                  <p className="font-semibold mb-2">Accessibility Contact</p>
                  <a href={NAP.mailtoUrl} className="text-secondary">{NAP.email}</a>
                  <p className="text-sm text-muted-foreground mt-1">{NAP.businessName}</p>
                  <p className="text-sm text-muted-foreground">{NAP.addressOneLiner}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Technical Specification</h2>
                <p className="text-muted-foreground">
                  numaway.com uses HTML5, React, and TailwindCSS. Pages are prerendered for performance
                  and crawlability. Interactive features are progressive enhancements.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Last accessibility review: {NAP.lastReviewed}. Next review due: {NAP.nextReview}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;

