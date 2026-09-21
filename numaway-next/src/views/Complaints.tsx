"use client";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, AlertTriangle, CheckCircle, Mail, FileText } from "lucide-react";
import { NAP } from "@/lib/nap";

const Complaints = () => {
  const stages = [
    {
      icon: Mail,
      title: "Stage 1, Acknowledgement",
      description: "Complaint acknowledged within 3 business days. Confirmation of receipt and reference number provided."
    },
    {
      icon: FileText,
      title: "Stage 2, Initial Review",
      description: "Reviewed by the assigned NUMAWAY Service or Operations Lead. Assessment of facts, documentation, and applicable policies. Target resolution: within 10 business days."
    },
    {
      icon: AlertTriangle,
      title: "Stage 3, Formal Escalation",
      description: "If not satisfied, complaint is reviewed by Senior Management or Compliance Lead. Independent review with written response. Target resolution: additional 10 business days."
    },
    {
      icon: Shield,
      title: "Stage 4, Executive Review",
      description: "For complex or unresolved cases: reviewed by NUMAWAY Executive Leadership. Final internal determination issued and documented."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
      title="Complaints Procedure: How to Raise a Concern"
      description="If you are dissatisfied with Numaway's services, here is how to raise a formal complaint under our FCCPA-aligned procedure."
      canonical="/complaints"
    />

      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <Breadcrumbs
              items={[{ label: "Complaints & Escalation Policy" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Complaints & Escalation Policy
            </h1>
            <p className="text-primary-foreground/70">Effective: {NAP.effectiveDate}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container-prose">
            <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-5 mb-8">
              <p className="font-semibold text-secondary mb-1">COUNSEL REVIEW REQUIRED</p>
              <p className="text-sm text-muted-foreground">Draft policy pending legal counsel sign-off before production deployment.</p>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-lg text-muted-foreground mb-8">
                {NAP.businessName} ("Numaway", "we", "our", "us") is committed to delivering transparent, professional, and student-first services. We recognize that concerns or complaints may arise and are committed to resolving them fairly, promptly, and consistently.
              </p>

              <h2>1. Scope of This Policy</h2>
              <p>This policy applies to complaints raised by:</p>
              <ul>
                <li>Students and applicants</li>
                <li>Parents or guardians</li>
                <li>Partner institutions</li>
                <li>Authorized agents</li>
                <li>Event participants</li>
                <li>Users of NUMAWAY digital platforms and services</li>
              </ul>
              <p>It covers concerns relating to:</p>
              <ul>
                <li>Advisory or counselling services</li>
                <li>Application handling and communication</li>
                <li>Platform usage or digital tools</li>
                <li>Partner or agent interactions</li>
                <li>Data protection or privacy concerns</li>
                <li>Professional conduct</li>
              </ul>

              <h2>2. What Constitutes a Complaint</h2>
              <p>A complaint is any expression of dissatisfaction regarding:</p>
              <ul>
                <li>Quality of service</li>
                <li>Accuracy of information provided</li>
                <li>Delays or communication issues</li>
                <li>Perceived unfair treatment</li>
                <li>Ethical or professional conduct</li>
                <li>Process transparency</li>
              </ul>
              <p className="text-muted-foreground">
                General inquiries or requests for clarification are not considered complaints.
              </p>

              <h2>3. Guiding Principles</h2>
              <p>NUMAWAY handles complaints in line with the following principles:</p>
              <ul>
                <li><strong>Fairness and impartiality</strong></li>
                <li><strong>Confidentiality</strong></li>
                <li><strong>Transparency</strong></li>
                <li><strong>Timeliness</strong></li>
                <li><strong>Non-retaliation</strong></li>
                <li><strong>Continuous improvement</strong></li>
              </ul>
              <p className="font-semibold">
                Raising a complaint will not negatively affect access to services or future support.
              </p>

              <h2>4. How to Submit a Complaint</h2>
              <p>Complaints should be submitted in writing via:</p>
              <ul>
                <li><strong>Email:</strong> <a href={NAP.mailtoUrl}>{NAP.email}</a> (subject: "Formal Complaint")</li>
              </ul>
              <p>Please include:</p>
              <ul>
                <li>Full name</li>
                <li>Contact details</li>
                <li>Description of the issue</li>
                <li>Relevant dates, documents, or references</li>
                <li>Desired resolution (if applicable)</li>
              </ul>
            </div>

            {/* Process Timeline */}
            <div className="my-12">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">5. Complaint Handling Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {stages.map((stage, index) => (
                  <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-soft transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-2">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>6. Special Cases & Priority Handling</h2>
              <p>Complaints involving any of the following receive priority handling:</p>
              <ul>
                <li>Allegations of fraud or misconduct</li>
                <li>Data protection or privacy breaches</li>
                <li>Safeguarding or welfare concerns</li>
                <li>Reputational or regulatory risk</li>
              </ul>
              <p>Such cases may bypass standard timelines and be escalated immediately.</p>

              <h2>7. Confidentiality</h2>
              <p>All complaints are handled confidentially and shared only with individuals involved in resolution.</p>
              <p>Information may be disclosed where:</p>
              <ul>
                <li>Required by law or regulation</li>
                <li>Necessary to investigate the complaint</li>
                <li>Authorized by the complainant</li>
              </ul>

              <h2>8. External Resolution</h2>
              <p>If internal resolution is exhausted and the complainant remains dissatisfied:</p>
              <ul>
                <li>They may seek independent advice or external dispute resolution where applicable</li>
                <li>This does not limit statutory or legal rights under applicable laws</li>
              </ul>

              <h2>9. Record Keeping & Continuous Improvement</h2>
              <p>NUMAWAY:</p>
              <ul>
                <li>Maintains records of complaints and resolutions</li>
                <li>Reviews complaint trends regularly</li>
                <li>Uses insights to improve services, processes, and training</li>
              </ul>
              <p>Complaints are treated as opportunities to improve quality and trust.</p>

              <h2>10. Non-Retaliation Policy</h2>
              <p className="font-semibold">
                NUMAWAY strictly prohibits retaliation against any individual who raises a complaint in good faith.
              </p>

              <h2>11. Contact Information</h2>
              <p>For complaints or escalation:</p>
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

export default Complaints;

