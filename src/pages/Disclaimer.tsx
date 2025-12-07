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
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumbs
              items={[{ label: "Disclaimer" }]}
              className="mb-8 justify-center text-primary-foreground/70"
            />
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Disclaimer
            </h1>
            <p className="text-primary-foreground/70">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. General Information</h2>
              <p>
                The information provided on the NUMAWAY website and through our services is for 
                general informational purposes only. While we strive to keep the information 
                up-to-date and accurate, we make no representations or warranties of any kind, 
                express or implied, about the completeness, accuracy, reliability, suitability, 
                or availability of the information, products, services, or related graphics 
                contained on the website.
              </p>

              <h2>2. Educational Guidance</h2>
              <p>
                NUMAWAY provides educational counselling and guidance services. Our recommendations 
                are based on the information you provide and our understanding of various 
                educational institutions and programs. However:
              </p>
              <ul>
                <li>
                  We do not guarantee admission to any university or educational program.
                </li>
                <li>
                  University requirements, fees, and policies can change at any time.
                </li>
                <li>
                  The final decision on admissions rests solely with the respective institutions.
                </li>
                <li>
                  We recommend verifying all information directly with the educational institutions.
                </li>
              </ul>

              <h2>3. Visa and Immigration</h2>
              <p>
                NUMAWAY is not a legal firm and does not provide legal advice. Information 
                provided about visa requirements and immigration processes is for guidance only:
              </p>
              <ul>
                <li>
                  Immigration rules and requirements are subject to change without notice.
                </li>
                <li>
                  Visa approval is at the sole discretion of the respective embassy or immigration authority.
                </li>
                <li>
                  We do not guarantee visa approval.
                </li>
                <li>
                  For specific legal advice, please consult a licensed immigration lawyer.
                </li>
              </ul>

              <h2>4. Financial Information</h2>
              <p>
                All financial information provided, including tuition fees, living costs, 
                and scholarship amounts, are estimates and may vary. We recommend:
              </p>
              <ul>
                <li>
                  Confirming all fees directly with the educational institution.
                </li>
                <li>
                  Budgeting for additional unexpected expenses.
                </li>
                <li>
                  Consulting with a financial advisor for major financial decisions.
                </li>
              </ul>

              <h2>5. Third-Party Links</h2>
              <p>
                Our website may contain links to external websites. We have no control over 
                the content, privacy policies, or practices of these sites and are not 
                responsible for their content or availability.
              </p>

              <h2>6. AI-Powered Features</h2>
              <p>
                NUMAWAY uses AI technology (including NUMAWAY Genie) to provide personalized 
                recommendations. While our AI is designed to be helpful:
              </p>
              <ul>
                <li>
                  AI recommendations should not replace professional advice.
                </li>
                <li>
                  AI may occasionally provide inaccurate or outdated information.
                </li>
                <li>
                  Always verify AI-generated information with official sources.
                </li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall NUMAWAY Education Technology, its directors, employees, 
                or affiliates be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of or related to your use of our services.
              </p>

              <h2>8. Accuracy of Information</h2>
              <p>
                We make every effort to ensure that the information on our website is accurate 
                and up-to-date. However, we cannot guarantee that all information is current 
                at all times. University rankings, fees, requirements, and other details 
                are subject to change.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at:
              </p>
              <ul>
                <li>Email: legal@numaway.com</li>
                <li>Address: 123 Education Street, Victoria Island, Lagos, Nigeria</li>
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
