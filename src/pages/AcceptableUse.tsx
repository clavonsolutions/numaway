import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/nap";

const AcceptableUse = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Acceptable Use Policy"
        description="Numaway's acceptable use policy. Permitted and prohibited uses of the Numaway platform, including AI Sage guidelines."
        canonical="/acceptable-use"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Acceptable Use Policy</h1>
            <p className="text-primary-foreground/70">Effective: {NAP.effectiveDate}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-prose">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5">
                <p className="font-semibold text-secondary mb-1">COUNSEL REVIEW REQUIRED</p>
                <p className="text-sm text-muted-foreground">Draft pending legal sign-off.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Permitted Uses</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Researching study abroad options in good faith</li>
                  <li>Communicating genuinely with counsellors</li>
                  <li>Submitting truthful application documents</li>
                  <li>Using Sage AI for legitimate study guidance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Prohibited Uses</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Submitting false, misleading, or fraudulent documents</li>
                  <li>Impersonating another person or organisation</li>
                  <li>Attempting to circumvent platform security or authentication</li>
                  <li>Scraping or bulk-extracting platform data via automated means</li>
                  <li>Using Sage AI to generate fraudulent personal statements or documents</li>
                  <li>Harassing or abusing Numaway staff</li>
                  <li>Any use that violates Nigerian law or the laws of your jurisdiction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Enforcement</h2>
                <p className="text-muted-foreground">
                  Violations may result in account suspension, reporting to relevant authorities
                  (including universities and immigration bodies), and civil or criminal proceedings.
                  Numaway co-operates fully with fraud prevention efforts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Reporting Misuse</h2>
                <p className="text-muted-foreground">
                  Report suspected platform misuse to <a href={NAP.mailtoUrl} className="text-secondary underline">{NAP.email}</a>.
                  All reports are treated confidentially.
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

export default AcceptableUse;
