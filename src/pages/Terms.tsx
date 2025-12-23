import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumbs
              items={[{ label: "Terms of Service" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Terms of Service
            </h1>
            <p className="text-primary-foreground/70">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                These Terms of Service ("Terms") govern your access to and use of the NUMAWAY Education website, platforms, applications, services, tools, and related offerings (collectively, the "Services"). By accessing or using NUMAWAY, you confirm that you have read, understood, and agreed to be bound by these Terms.
              </p>

              <h2>1. About NUMAWAY Education</h2>
              <p>
                NUMAWAY Education ("NUMAWAY", "we", "our", "us") is an international education advisory and technology-enabled platform that supports students, parents, institutions, and partners in navigating global education pathways.
              </p>
              <p className="font-semibold">
                NUMAWAY does not act as a university, immigration authority, or visa-issuing body.
              </p>

              <h2>2. Scope of Services</h2>
              <p>NUMAWAY provides, among others:</p>
              <ul>
                <li>Education advisory and counselling services</li>
                <li>Program and university matching support</li>
                <li>Application preparation and coordination</li>
                <li>Scholarship discovery guidance</li>
                <li>Visa and immigration guidance (non-legal)</li>
                <li>AI-powered tools for profiling, guidance, and decision support</li>
                <li>Pre-departure and post-arrival support</li>
                <li>Institutional and agent partnership services</li>
              </ul>
              <p>Specific services may vary by country, program, and eligibility.</p>

              <h2>3. Eligibility to Use Our Services</h2>
              <p>You may use NUMAWAY services if:</p>
              <ul>
                <li>You are at least 16 years old, or</li>
                <li>You are under 16 with verified parental or guardian involvement, and</li>
                <li>You provide accurate, truthful, and complete information</li>
              </ul>
              <p>NUMAWAY reserves the right to refuse or discontinue services where eligibility criteria are not met.</p>

              <h2>4. User Responsibilities</h2>
              <p>By using our Services, you agree to:</p>
              <ul>
                <li>Provide accurate, complete, and truthful information</li>
                <li>Submit genuine and verifiable documents only</li>
                <li>Maintain confidentiality of your login credentials</li>
                <li>Use NUMAWAY services solely for lawful purposes</li>
                <li>Comply with all applicable laws, regulations, and institutional rules</li>
              </ul>
              <p className="font-semibold">
                Fraudulent, misleading, or falsified information is strictly prohibited.
              </p>

              <h2>5. AI-Powered Services (NUMAWAY Sage)</h2>
              <p>
                NUMAWAY provides AI-enabled tools (including NUMAWAY Sage) to support guidance, recommendations, and information access.
              </p>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>AI outputs are informational and advisory, not guarantees</li>
                <li>Final decisions rest with universities, institutions, and authorities</li>
                <li>AI tools do not replace human judgement, legal advice, or official guidance</li>
                <li>NUMAWAY is not liable for decisions made solely based on AI outputs</li>
              </ul>

              <h2>6. No Guarantee of Admission, Scholarship, or Visa</h2>
              <p className="font-semibold">NUMAWAY does not guarantee:</p>
              <ul>
                <li>Admission to any institution or program</li>
                <li>Receipt of scholarships or funding</li>
                <li>Approval of visas, permits, or immigration outcomes</li>
                <li>Employment, salary, or post-study outcomes</li>
              </ul>
              <p>All final decisions are made by independent third parties.</p>

              <h2>7. Fees, Payments, and Refunds</h2>
              <p>Where applicable:</p>
              <ul>
                <li>Fees for services will be disclosed clearly before engagement</li>
                <li>Payment terms may vary by service type and region</li>
                <li>Refunds, if any, are governed by the Refund & Cancellation Policy</li>
                <li>Non-refundable services include completed advisory work and submitted applications</li>
              </ul>
              <p>NUMAWAY reserves the right to update pricing structures with notice.</p>

              <h2>8. Third-Party Institutions and Partners</h2>
              <p>NUMAWAY may collaborate with:</p>
              <ul>
                <li>Universities and educational institutions</li>
                <li>Authorized agents and representatives</li>
                <li>Technology and service providers</li>
              </ul>
              <p>NUMAWAY is not responsible for:</p>
              <ul>
                <li>Institutional decisions or policy changes</li>
                <li>Delays caused by third parties</li>
                <li>Actions or omissions of external partners</li>
              </ul>

              <h2>9. Intellectual Property</h2>
              <p>
                All content, systems, designs, tools, branding, and materials on NUMAWAY platforms are protected by intellectual property laws.
              </p>
              <p>You may not:</p>
              <ul>
                <li>Copy, reproduce, modify, or distribute content without permission</li>
                <li>Reverse-engineer or misuse NUMAWAY systems</li>
                <li>Use NUMAWAY branding without authorization</li>
              </ul>

              <h2>10. Confidentiality</h2>
              <p>
                NUMAWAY will treat your personal data and submitted documents in accordance with our Privacy Policy. You agree to treat any proprietary information shared by NUMAWAY as confidential.
              </p>

              <h2>11. Data Protection</h2>
              <p>
                Your use of NUMAWAY services is subject to our Privacy Policy, which explains how we collect, process, and protect your personal data.
              </p>

              <h2>12. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>NUMAWAY shall not be liable for indirect, incidental, or consequential losses</li>
                <li>Liability is limited to the value of services paid</li>
                <li>This includes losses arising from reliance on information, third-party actions, or unforeseen events</li>
              </ul>

              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify and hold NUMAWAY harmless from claims, damages, or expenses arising from your misuse of our services, breach of these Terms, or violation of any law or third-party rights.
              </p>

              <h2>14. Service Availability</h2>
              <p>NUMAWAY aims to maintain platform availability but does not guarantee uninterrupted access. We may:</p>
              <ul>
                <li>Modify, suspend, or discontinue services temporarily or permanently</li>
                <li>Perform scheduled or emergency maintenance</li>
                <li>Update features or tools without prior notice</li>
              </ul>

              <h2>15. Termination</h2>
              <p>We may terminate or suspend access to services if:</p>
              <ul>
                <li>You breach these Terms</li>
                <li>Fraudulent or unethical activity is detected</li>
                <li>Required by law or regulation</li>
              </ul>
              <p>Upon termination, your rights to use the services cease immediately.</p>

              <h2>16. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which NUMAWAY is registered. Disputes will be resolved through applicable legal channels.
              </p>

              <h2>17. Changes to These Terms</h2>
              <p>
                NUMAWAY may update these Terms periodically. Updates will be published on this page with a revised "Last Updated" date. Continued use of services after changes constitutes acceptance.
              </p>

              <h2>18. Contact Us</h2>
              <p>For questions about these Terms:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:legal@numawayeducation.com">legal@numawayeducation.com</a></li>
                <li><strong>Website:</strong> <a href="https://numawayeducation.com">https://numawayeducation.com</a></li>
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

export default Terms;
