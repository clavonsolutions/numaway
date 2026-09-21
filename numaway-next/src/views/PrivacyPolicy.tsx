"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NAP } from "@/lib/nap";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Privacy Policy: How Numaway Handles Your Data"
      description="Numaway's privacy policy explains how we collect, use, and protect your personal data under the Nigerian NDPA and EU GDPR."
      canonical="/privacy-policy"
    />

      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <Breadcrumbs
              items={[{ label: "Privacy Policy" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/70">Effective: {NAP.effectiveDate}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container-prose">
            <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5 mb-8">
              <p className="font-semibold text-secondary mb-1">COUNSEL REVIEW REQUIRED</p>
              <p className="text-sm text-muted-foreground">Draft policy pending legal counsel and DPO sign-off before production deployment.</p>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                {NAP.businessName} ("Numaway", "we", "our", "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our website, services, applications, and platforms.
              </p>

              <h2>1. Who We Are</h2>
              <p>
                {NAP.businessName} is an international education advisory and technology-enabled platform supporting students, parents, institutions, and partners in global education pathways.
              </p>
              <ul>
                <li><strong>Website:</strong> {NAP.canonicalUrl}</li>
                <li><strong>Contact Email:</strong> <a href={NAP.mailtoUrl}>{NAP.email}</a></li>
              </ul>

              <h2>2. Scope of This Policy</h2>
              <p>This policy applies to:</p>
              <ul>
                <li>Website visitors</li>
                <li>Students and applicants</li>
                <li>Parents or guardians</li>
                <li>Partner institutions and agents</li>
                <li>Event participants</li>
                <li>Users of NUMAWAY digital tools, platforms, and AI services</li>
              </ul>

              <h2>3. Personal Data We Collect</h2>
              <h3>3.1 Information You Provide Directly</h3>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Nationality and country of residence</li>
                <li>Academic history and qualifications</li>
                <li>Test scores (IELTS, TOEFL, GRE, etc.)</li>
                <li>Study preferences and career interests</li>
                <li>Uploaded documents (transcripts, passports, CVs, SOPs)</li>
                <li>Communication content (emails, chats, forms)</li>
              </ul>

              <h3>3.2 Automatically Collected Data</h3>
              <ul>
                <li>IP address</li>
                <li>Browser and device information</li>
                <li>Pages visited and interaction data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3>3.3 Third-Party Data</h3>
              <ul>
                <li>Information received from partner institutions (offers, decisions)</li>
                <li>Information provided by authorized agents or representatives</li>
                <li>Analytics and performance data from approved tools</li>
              </ul>

              <h2>4. How We Use Your Data</h2>
              <p>We process personal data only where legally permitted and necessary to:</p>
              <ul>
                <li>Assess eligibility and program fit</li>
                <li>Provide education advisory services</li>
                <li>Manage applications and documentation</li>
                <li>Communicate with institutions and partners on your behalf</li>
                <li>Support visa and compliance guidance (non-legal)</li>
                <li>Improve our services, platforms, and user experience</li>
                <li>Meet legal, regulatory, and audit obligations</li>
                <li>Prevent fraud, misuse, and unethical activity</li>
              </ul>

              <h2>5. Legal Basis for Processing (GDPR)</h2>
              <p>Where applicable, we rely on one or more of the following:</p>
              <ul>
                <li>Your explicit consent</li>
                <li>Performance of a contract or pre-contractual steps</li>
                <li>Legal or regulatory obligations</li>
                <li>Legitimate interests (balanced against your rights)</li>
              </ul>

              <h2>6. Data Sharing & Disclosure</h2>
              <p>We may share your data with:</p>
              <ul>
                <li>Universities and educational institutions</li>
                <li>Official test providers (where required)</li>
                <li>Visa support partners (where authorized)</li>
                <li>Technology service providers (CRM, analytics, hosting)</li>
                <li>Legal or regulatory authorities (where required by law)</li>
              </ul>
              <p className="font-semibold">We do not sell personal data.</p>

              <h2>7. International Data Transfers</h2>
              <p>Your data may be transferred outside your country of residence. Where this occurs, we ensure appropriate safeguards such as:</p>
              <ul>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Data processing agreements</li>
                <li>Secure infrastructure and access controls</li>
              </ul>

              <h2>8. Data Retention</h2>
              <p>We retain personal data only as long as necessary to:</p>
              <ul>
                <li>Fulfil the purpose for which it was collected</li>
                <li>Meet legal, regulatory, or contractual requirements</li>
              </ul>
              <p>When no longer required, data is securely deleted or anonymized.</p>

              <h2>9. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access your data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>Requests can be made via: <a href={NAP.mailtoUrl}>{NAP.email}</a></p>

              <h2>10. Cookies & Tracking</h2>
              <p>We use cookies to:</p>
              <ul>
                <li>Ensure website functionality</li>
                <li>Improve performance and analytics</li>
                <li>Enhance user experience</li>
              </ul>
              <p>For details, see our <a href="/cookies">Cookie Policy</a>.</p>

              <h2>11. Data Security</h2>
              <p>We implement technical and organizational safeguards including:</p>
              <ul>
                <li>Secure hosting environments</li>
                <li>Role-based access controls</li>
                <li>Encryption where appropriate</li>
                <li>Regular system and process reviews</li>
              </ul>

              <h2>12. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 16 without parental or guardian involvement. Where applicable, consent must be provided by a parent or legal guardian.
              </p>

              <h2>13. Changes to This Policy</h2>
              <p>
                We may update this policy periodically. Updates will be published on this page with a revised "Last Updated" date.
              </p>

              <h2>14. Contact Us</h2>
              <p>For privacy-related questions or concerns:</p>
              <ul>
                <li><strong>Email:</strong> <a href={NAP.mailtoUrl}>{NAP.email}</a></li>
                <li><strong>Website:</strong> <a href={NAP.canonicalUrl}>{NAP.canonicalUrl}</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;

