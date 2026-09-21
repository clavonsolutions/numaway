"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/nap";

const Dpa = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Data Processing Agreement"
        description="Numaway's Data Processing Agreement for institutional partners. NDPA 2023 and GDPR Article 28 compliant."
        canonical="/legal/dpa"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Data Processing Agreement</h1>
            <p className="text-primary-foreground/70">For Institutional Partners</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-prose">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-xl p-5">
                <p className="font-semibold text-destructive mb-1">COUNSEL REVIEW REQUIRED</p>
                <p className="text-sm text-muted-foreground">
                  This DPA is a draft for institutional partners. It requires legal counsel and DPO
                  sign-off before deployment. Not a binding document in its current form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Purpose</h2>
                <p className="text-muted-foreground">
                  This Data Processing Agreement ("DPA") governs the processing of personal data
                  shared between {NAP.businessName} ("Numaway") and institutional partners for
                  student referral and admissions purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Scope of Processing</h2>
                <p className="text-muted-foreground">
                  Applies where Numaway shares student personal data (name, contact details,
                  academic records, study preferences) with a partner institution for the purpose
                  of university admissions assessment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Numaway Obligations</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Process and share data only for agreed admissions purposes</li>
                  <li>Maintain appropriate technical and organisational security measures</li>
                  <li>Notify partner of confirmed data breaches within 72 hours</li>
                  <li>Delete or anonymise data on request or after retention period</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Partner Obligations</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Process student data only for stated admissions purposes</li>
                  <li>Not retain data beyond 12 months post-admissions decision</li>
                  <li>Comply with applicable data protection law in the partner's jurisdiction</li>
                  <li>Report data breaches to Numaway within 48 hours of discovery</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  Nigerian law (NDPA 2023). EU-based partners: GDPR Article 28 compliance
                  provisions apply additionally. Disputes are subject to arbitration in {NAP.jurisdiction}.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <p className="font-semibold mb-2">Institutional Partners Contact</p>
                <p className="text-muted-foreground">{NAP.businessName}</p>
                <p className="text-muted-foreground">{NAP.addressOneLiner}</p>
                <a href={NAP.mailtoUrl} className="text-secondary">{NAP.email}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dpa;

