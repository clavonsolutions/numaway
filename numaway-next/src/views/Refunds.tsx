"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NAP } from "@/lib/nap";

const Refunds = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Refund Policy"
        description={`Numaway's refund policy. ${NAP.refundCoolingOffDays}-day cooling-off period for paid services. FCCPA 2018 compliant.`}
        canonical="/refunds"
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Refund Policy</h1>
            <p className="text-primary-foreground/70">Effective: {NAP.effectiveDate}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-prose">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5">
                <p className="font-semibold text-secondary mb-1">COUNSEL REVIEW REQUIRED</p>
                <p className="text-sm text-muted-foreground">This page is a policy draft pending legal counsel sign-off before production deployment. Content references the FCCPA 2018.</p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Free Services</h2>
                <p className="text-muted-foreground">
                  Many Numaway services are entirely free for students, including initial consultations,
                  platform access, and basic counselling. No refund applies to these services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Paid Services</h2>
                <p className="text-muted-foreground mb-4">
                  Where fees are charged for premium services or applications to non-partner institutions:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">Cooling-off:</span>
                    <span>You may cancel within <strong>{NAP.refundCoolingOffDays} days</strong> of purchase for a full refund, provided the service has not commenced.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">After cooling-off:</span>
                    <span>Refunds are considered on a case-by-case basis. Contact us within 30 days with your order reference.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-foreground min-w-[120px]">Non-refundable:</span>
                    <span>Government and university application fees paid on your behalf are non-refundable once submitted.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">How to Request a Refund</h2>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li>Email <a href={NAP.mailtoUrl} className="text-secondary underline">{NAP.email}</a> with your order reference and reason.</li>
                  <li>We will acknowledge your request within 2 business days.</li>
                  <li>Refunds are processed within <strong>{NAP.complaintResolutionDays} business days</strong> to the original payment method.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Regulatory Compliance</h2>
                <p className="text-muted-foreground">
                  This policy complies with the Nigerian Federal Competition and Consumer Protection Act (FCCPA) 2018.
                  If you are unsatisfied with our response, you may escalate to the Federal Competition and Consumer
                  Protection Commission (FCCPC).
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <p className="font-semibold mb-2">Contact</p>
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

export default Refunds;

