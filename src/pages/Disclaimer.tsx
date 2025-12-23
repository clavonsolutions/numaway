import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumbs
              items={[{ label: "Disclaimer" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Disclaimer
            </h1>
            <p className="text-primary-foreground/70">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                This Disclaimer applies to all users of NUMAWAY Education's website, platforms, applications, services, tools, and related materials (collectively, the "Services"). By accessing or using NUMAWAY, you acknowledge and agree to the terms set out in this Disclaimer.
              </p>

              <h2>1. General Information Only</h2>
              <p>
                All information provided by NUMAWAY Education ("NUMAWAY", "we", "our", "us") is for general informational and advisory purposes only.
              </p>
              <p>While we strive to ensure accuracy and relevance, information may change due to:</p>
              <ul>
                <li>Institutional policy updates</li>
                <li>Government or regulatory changes</li>
                <li>Visa and immigration rule changes</li>
                <li>Scholarship availability and eligibility changes</li>
              </ul>
              <p>NUMAWAY does not warrant that all information is complete, current, or error-free at all times.</p>

              <h2>2. No Guarantee of Outcomes</h2>
              <p className="font-semibold">NUMAWAY does not guarantee:</p>
              <ul>
                <li>Admission to any university, college, or program</li>
                <li>Receipt of scholarships, funding, or financial aid</li>
                <li>Approval of visas, residence permits, or immigration applications</li>
                <li>Academic success, graduation, employment, salary levels, or career outcomes</li>
              </ul>
              <p>All final decisions are made independently by universities, institutions, test providers, and government authorities.</p>

              <h2>3. Admissions & Academic Decisions</h2>
              <p>Universities and educational institutions:</p>
              <ul>
                <li>Set their own eligibility criteria</li>
                <li>Review applications independently</li>
                <li>May change requirements without notice</li>
              </ul>
              <p>NUMAWAY's role is advisory and facilitative. We do not influence or control institutional decisions.</p>

              <h2>4. Visa & Immigration Guidance</h2>
              <p>Any visa or immigration-related guidance provided by NUMAWAY:</p>
              <ul>
                <li>Is non-legal guidance only</li>
                <li>Does not constitute legal advice</li>
                <li>Should not replace official embassy, consulate, or immigration authority information</li>
              </ul>
              <p className="font-semibold">
                Visa decisions are made solely by government authorities. NUMAWAY has no authority over visa approvals or refusals.
              </p>

              <h2>5. Scholarships & Funding</h2>
              <p>Scholarship information is provided based on publicly available or partner-supplied data.</p>
              <ul>
                <li>Availability, eligibility, and deadlines may change</li>
                <li>Scholarships are awarded by third parties</li>
                <li>NUMAWAY does not control selection decisions</li>
              </ul>
              <p>Students are responsible for verifying scholarship details directly with providers.</p>

              <h2>6. AI-Powered Tools & Recommendations (NUMAWAY Sage)</h2>
              <p>
                NUMAWAY uses AI-enabled tools (including NUMAWAY Sage) to support guidance, recommendations, and insights.
              </p>
              <p>You acknowledge that:</p>
              <ul>
                <li>AI outputs are supportive and informational</li>
                <li>AI recommendations are not guarantees or predictions</li>
                <li>Final decisions must be made by the user and third parties</li>
                <li>AI tools do not replace human judgment, official sources, or professional advice</li>
              </ul>
              <p className="font-semibold">
                NUMAWAY is not liable for actions taken solely based on AI-generated outputs.
              </p>

              <h2>7. Third-Party Content & Links</h2>
              <p>NUMAWAY may include links to third-party websites, platforms, or resources.</p>
              <ul>
                <li>Such links are provided for convenience only</li>
                <li>NUMAWAY does not control or endorse third-party content</li>
                <li>We are not responsible for third-party policies, accuracy, or availability</li>
              </ul>
              <p>Users access third-party services at their own risk.</p>

              <h2>8. Testimonials & Success Stories</h2>
              <p>Any testimonials, case studies, or success stories displayed on NUMAWAY platforms:</p>
              <ul>
                <li>Reflect individual experiences</li>
                <li>Do not represent typical or guaranteed outcomes</li>
                <li>Are not promises of future results</li>
              </ul>
              <p>Individual outcomes vary based on multiple factors.</p>

              <h2>9. Financial Information</h2>
              <p>Any cost estimates, tuition ranges, living expense figures, or financial guidance:</p>
              <ul>
                <li>Are indicative only</li>
                <li>May vary by location, institution, and personal circumstances</li>
                <li>Should not be relied upon as exact or binding figures</li>
              </ul>
              <p>Users are responsible for confirming final costs directly with institutions and providers.</p>

              <h2>10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>NUMAWAY shall not be liable for direct, indirect, incidental, or consequential losses</li>
                <li>This includes losses arising from reliance on information, delays, refusals, or third-party actions</li>
                <li>Liability, where applicable, is limited as outlined in our Terms of Service</li>
              </ul>

              <h2>11. Regulatory & Jurisdictional Considerations</h2>
              <p>NUMAWAY operates as an education advisory and technology-enabled platform.</p>
              <ul>
                <li>We are not a government body, accrediting agency, or immigration authority</li>
                <li>Services may vary by country and jurisdiction</li>
                <li>Local laws and regulations may apply depending on user location</li>
              </ul>

              <h2>12. Updates to This Disclaimer</h2>
              <p>NUMAWAY may update this Disclaimer periodically to reflect:</p>
              <ul>
                <li>Legal or regulatory changes</li>
                <li>Service updates</li>
                <li>Operational changes</li>
              </ul>
              <p>Updates will be published on this page with a revised "Last Updated" date.</p>

              <h2>13. Contact Information</h2>
              <p>For questions regarding this Disclaimer:</p>
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

export default Disclaimer;
