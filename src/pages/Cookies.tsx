import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NAP } from "@/lib/nap";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Cookie Policy: Numaway Website"
      description="Numaway's cookie policy explains which cookies we set, why, and how to manage your consent preferences."
      canonical="/cookies"
    />

      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <Breadcrumbs
              items={[{ label: "Cookie Policy" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Cookie Policy
            </h1>
            <p className="text-primary-foreground/70">Effective: {NAP.effectiveDate}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container-prose">
            <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5 mb-8">
              <p className="font-semibold text-secondary mb-1">COUNSEL REVIEW REQUIRED</p>
              <p className="text-sm text-muted-foreground">Draft cookie policy pending legal counsel sign-off before production deployment.</p>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                This Cookie Policy explains how {NAP.businessName} ("Numaway", "we", "our", "us") uses cookies and similar technologies on our website. It describes what cookies are, how we use them, and your choices regarding their use.
              </p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function properly, remember your preferences, and provide useful information to website owners.
              </p>
              <p>Cookies may be:</p>
              <ul>
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Stored for a defined period</li>
              </ul>

              <h2>2. Why We Use Cookies</h2>
              <p>NUMAWAY uses cookies to:</p>
              <ul>
                <li>Ensure core website functionality</li>
                <li>Enhance user experience and navigation</li>
                <li>Understand how users interact with our website</li>
                <li>Improve performance and content relevance</li>
                <li>Support security and fraud prevention</li>
                <li>Enable analytics and service optimization</li>
                <li>Support future personalization and AI-driven features (without profiling misuse)</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              
              <h3>3.1 Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function and cannot be switched off.
              </p>
              <p>Examples include:</p>
              <ul>
                <li>Page navigation</li>
                <li>Form submission</li>
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Accessibility preferences</li>
              </ul>
              <p><strong>Legal basis:</strong> Legitimate interest / necessary for service delivery</p>
              <p><strong>Consent required:</strong> No</p>

              <h3>3.2 Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization.
              </p>
              <p>Examples include:</p>
              <ul>
                <li>Language preferences</li>
                <li>Region or country selection</li>
                <li>Remembering form inputs</li>
                <li>User preference settings</li>
              </ul>
              <p><strong>Legal basis:</strong> Consent</p>
              <p><strong>Consent required:</strong> Yes</p>

              <h3>3.3 Performance & Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors use our website so we can improve performance and usability.
              </p>
              <p>Examples include:</p>
              <ul>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Click behavior</li>
                <li>Traffic sources</li>
                <li>Error tracking</li>
              </ul>
              <p>Analytics data is aggregated and anonymized where possible.</p>
              <p><strong>Legal basis:</strong> Consent</p>
              <p><strong>Consent required:</strong> Yes</p>

              <h3>3.4 Targeting & Marketing Cookies (If/When Used)</h3>
              <p>These cookies may be used to:</p>
              <ul>
                <li>Measure campaign effectiveness</li>
                <li>Deliver relevant content</li>
                <li>Avoid showing irrelevant or repetitive information</li>
              </ul>
              <p className="font-semibold">
                NUMAWAY does not sell personal data and does not engage in intrusive ad tracking.
              </p>
              <p><strong>Legal basis:</strong> Consent</p>
              <p><strong>Consent required:</strong> Yes</p>

              <h2>4. Third-Party Cookies</h2>
              <p>
                We may use approved third-party services for analytics, performance monitoring, or platform functionality. These third parties may place cookies on your device in accordance with their own privacy policies.
              </p>
              <p>Examples (current or future):</p>
              <ul>
                <li>Website analytics tools</li>
                <li>Performance monitoring tools</li>
                <li>Secure hosting and infrastructure services</li>
              </ul>
              <p>NUMAWAY ensures appropriate data protection agreements are in place where required.</p>

              <h2>5. Cookie Consent & Preferences</h2>
              <p>When you visit our website, you will be presented with a cookie consent banner allowing you to:</p>
              <ul>
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize cookie preferences by category</li>
              </ul>
              <p>
                You may change or withdraw your consent at any time through the cookie settings link available on our website.
              </p>

              <h2>6. How to Manage Cookies via Your Browser</h2>
              <p>You can also control cookies through your browser settings, including:</p>
              <ul>
                <li>Blocking all cookies</li>
                <li>Deleting stored cookies</li>
                <li>Receiving notifications before cookies are placed</li>
              </ul>
              <p className="text-muted-foreground">
                Please note that disabling certain cookies may affect website functionality.
              </p>

              <h2>7. Data Protection & Privacy</h2>
              <p>
                Information collected through cookies may be considered personal data under applicable laws. Such data is processed in accordance with our <a href="/privacy-policy">Privacy Policy</a> and applicable data protection regulations, including GDPR.
              </p>

              <h2>8. Updates to This Cookie Policy</h2>
              <p>We may update this Cookie Policy periodically to reflect:</p>
              <ul>
                <li>Changes in law or regulation</li>
                <li>Updates to our website or services</li>
                <li>Changes in cookie usage</li>
              </ul>
              <p>Updates will be posted on this page with a revised "Last Updated" date.</p>

              <h2>9. Contact Us</h2>
              <p>For questions about cookies or data protection:</p>
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

export default Cookies;
