import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, XCircle, CheckCircle, AlertTriangle, Eye, Lock } from "lucide-react";

const FraudPrevention = () => {
  const coreStandards = [
    "Submit falsified or altered documents",
    "Fabricate employment, bank statements, tax documents, or sponsor records",
    "Misrepresent academic history, grades, or institutional attendance",
    "Use \"ghost\" identities, proxies, or unauthorized representatives",
    "Coach or encourage dishonesty in interviews or statements",
    "Engage in bribery, kickbacks, or improper inducements",
    "Mislead students with guaranteed admissions or visas",
    "Engage in exploitative pricing, hidden fees, or coercive practices",
    "Use unethical AI practices (e.g., generating fake documents, impersonation)"
  ];

  const verificationControls = [
    {
      title: "Document Verification",
      items: ["Cross-referencing academic documents", "Verification of test scores via official portals", "Employment and sponsorship checks where required"]
    },
    {
      title: "Identity Verification",
      items: ["Student identity confirmation", "Counsellor assignment accountability", "Agent onboarding checks"]
    },
    {
      title: "AI & System Controls",
      items: ["AI outputs reviewed for accuracy and integrity", "No AI-generated documents submitted as originals", "Logs and audit trails maintained"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumbs
              items={[{ label: "Fraud Prevention & Ethical Standards" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Fraud Prevention & Ethical Standards
            </h1>
            <p className="text-primary-foreground/70">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                NUMAWAY Education operates with <strong>zero tolerance</strong> for fraud, misrepresentation, and unethical conduct. This policy defines our ethical standards, fraud prevention controls, verification measures, escalation routes, and enforcement actions across students, agents, staff, and partner institutions.
              </p>

              <h2>1. Purpose</h2>
              <p>This policy exists to:</p>
              <ul>
                <li>Protect students from harmful or illegal practices</li>
                <li>Protect partner institutions from credibility and compliance risks</li>
                <li>Preserve NUMAWAY's reputation and long-term trust</li>
                <li>Prevent visa refusals, admission bans, blacklisting, and financial losses</li>
                <li>Establish auditable, consistent controls for high-integrity operations</li>
              </ul>

              <h2>2. Scope</h2>
              <p>This policy applies to:</p>
              <ul>
                <li>Students and applicants</li>
                <li>Parents/guardians (where applicable)</li>
                <li>NUMAWAY employees, contractors, and representatives</li>
                <li>Authorized agents and sub-agents</li>
                <li>Partner institutions and third-party vendors</li>
                <li>Users of NUMAWAY Sage and other digital tools</li>
              </ul>
            </div>

            {/* Core Standards Card */}
            <div className="my-12 bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-xl font-display font-bold text-foreground">3. Core Ethical Standards (Non-Negotiables)</h2>
              </div>
              <p className="text-muted-foreground mb-4">NUMAWAY will not:</p>
              <ul className="space-y-2">
                {coreStandards.map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6 font-medium">
                Students and partners must comply with these standards as a condition of engagement.
              </p>
            </div>

            {/* Verification Controls */}
            <div className="my-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">4. Verification Controls</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {verificationControls.map((control, index) => (
                  <div key={index} className="bg-card border border-border/50 rounded-xl p-6">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      {index === 0 && <Eye className="w-5 h-5 text-secondary" />}
                      {index === 1 && <Lock className="w-5 h-5 text-secondary" />}
                      {index === 2 && <Shield className="w-5 h-5 text-secondary" />}
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-3">{control.title}</h3>
                    <ul className="space-y-2">
                      {control.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>5. Escalation Routes</h2>
              <p>Suspected fraud or misconduct may be reported to:</p>
              <ul>
                <li><strong>Internal escalation:</strong> <a href="mailto:compliance@numawayeducation.com">compliance@numawayeducation.com</a></li>
                <li><strong>Anonymous reporting:</strong> Available where legally supported</li>
              </ul>
              <p>All reports are treated confidentially and investigated promptly.</p>

              <h2>6. Enforcement Actions</h2>
              <p>Where fraud or misconduct is confirmed, NUMAWAY may take the following actions:</p>
              <h3>For Students:</h3>
              <ul>
                <li>Immediate service termination</li>
                <li>Notification to affected institutions (where appropriate)</li>
                <li>Permanent ban from NUMAWAY services</li>
              </ul>
              <h3>For Agents/Partners:</h3>
              <ul>
                <li>Contract termination</li>
                <li>Notification to institutional partners</li>
                <li>Legal action where applicable</li>
              </ul>
              <h3>For Staff:</h3>
              <ul>
                <li>Disciplinary action up to and including termination</li>
                <li>Reporting to regulatory authorities where required</li>
              </ul>

              <h2>7. Whistleblower Protection</h2>
              <p>NUMAWAY protects individuals who report suspected fraud or misconduct in good faith.</p>
              <ul>
                <li>No retaliation against whistleblowers</li>
                <li>Confidentiality of reporter identity where legally possible</li>
                <li>Clear investigation and resolution process</li>
              </ul>

              <h2>8. Training & Awareness</h2>
              <p>NUMAWAY provides regular training on:</p>
              <ul>
                <li>Document verification best practices</li>
                <li>Red flags for fraud detection</li>
                <li>Ethical conduct standards</li>
                <li>Escalation procedures</li>
              </ul>

              <h2>9. Policy Updates</h2>
              <p>
                This policy is reviewed annually and updated as needed to reflect regulatory changes, operational improvements, and best practices.
              </p>

              <h2>10. Contact Information</h2>
              <p>For questions or concerns about fraud prevention:</p>
              <ul>
                <li><strong>Compliance Team:</strong> <a href="mailto:compliance@numawayeducation.com">compliance@numawayeducation.com</a></li>
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

export default FraudPrevention;
