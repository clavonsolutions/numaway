import PageHead from "@/components/PageHead";
import type { JsonLdGraph } from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, FileText, Plane, CreditCard, Shield, Bot, Building, Users } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    faqs: [
      { q: "Do you charge students for your services?", a: "For many universities, we are paid by the institution, not by you. In some cases, there may be service fees for specific support (for example, visa or special applications). We explain all costs clearly before you decide." },
      { q: "Can you guarantee admission or visa?", a: "No. No genuine agency can guarantee admission or visa. We help you build strong, honest applications and prepare properly, but final decisions are made by universities and embassies." },
      { q: "When should I start the application process?", a: "Ideally, start 12-18 months before your intended start date to allow time for research, exam preparation, applications, and visa processing." },
      { q: "How long does the entire process take?", a: "The timeline varies by country and program. Generally, expect 6-12 months from initial consultation to enrollment. We provide a personalized timeline during your first session." },
      { q: "What documents do I need to get started?", a: "Basic requirements include academic transcripts, certificates, valid passport, and identification. We'll provide a complete checklist based on your target countries and programs." },
      { q: "Do I need to visit your office in person?", a: "No. We offer fully remote services via video calls, our app, and AI Sage. However, you're welcome to visit our offices in Lagos, Abuja, or Port Harcourt." },
      { q: "What makes NUMAWAY different from other agencies?", a: "We combine human expertise with AI technology (Sage), maintain transparent pricing with no hidden fees, and focus on ethical guidance without false promises." },
    ]
  },
  {
    id: "universities",
    title: "Universities & Programs",
    icon: GraduationCap,
    faqs: [
      { q: "How many universities should I apply to?", a: "We typically recommend applying to 5-8 universities with a mix of ambitious, realistic and safe options. Your counsellor will help you decide based on your profile." },
      { q: "Can you help me choose the right course?", a: "Yes. We assess your interests, career goals, academic background, and budget to recommend suitable programs. Our AI Sage also provides instant course comparisons." },
      { q: "Do you only work with certain universities?", a: "We have partnerships with 500+ universities worldwide, but we can help you apply to any accredited institution. We always prioritize your best fit, not our partnerships." },
      { q: "What if my preferred university isn't in your network?", a: "We'll still help you apply. Our expertise in applications, documentation, and visa preparation applies to any institution." },
      { q: "Can I change my course after admission?", a: "This depends on the university's policies. Some allow changes within the first few weeks, while others require a new application. We advise checking before accepting an offer." },
      { q: "Do you help with foundation or pathway programs?", a: "Yes. For students who don't meet direct entry requirements, we help identify and apply to foundation, pathway, or pre-master's programs." },
      { q: "What about postgraduate programs (Masters/PhD)?", a: "Absolutely. We have specialized counsellors for postgraduate applications, including research proposals for PhD programs." },
      { q: "How do I know if my qualifications are recognized abroad?", a: "We help you verify credential recognition through official bodies like NARIC (UK), WES (USA/Canada), and similar organizations." },
    ]
  },
  {
    id: "applications",
    title: "Applications & Documents",
    icon: FileText,
    faqs: [
      { q: "Do you write my personal statement for me?", a: "No. We coach you, give structure and help you refine your own writing. We never fabricate stories – your personal statement must be authentically yours." },
      { q: "What is a Statement of Purpose (SOP)?", a: "An SOP is a written statement explaining your academic background, career goals, and reasons for choosing a specific program. It's crucial for postgraduate applications." },
      { q: "Can you help with recommendation letters?", a: "We guide you on who to approach and what to include. We do not write recommendations ourselves as they must come from your referees." },
      { q: "How do I track my application status?", a: "Through our NUMAWAY app, you can track all applications in real-time, receive deadline reminders, and get instant updates when decisions are made." },
      { q: "What happens if my application is rejected?", a: "We analyze the rejection, help you understand reasons, and advise on alternatives such as other universities, different programs, or reapplying next cycle." },
      { q: "Can I apply for multiple intakes (September/January)?", a: "Yes. Many universities offer multiple intakes. We help you strategize which intake suits your timeline and goals." },
      { q: "Do you help with portfolio submissions (for creative courses)?", a: "Yes. For art, design, architecture, and similar programs, we provide guidance on portfolio preparation and presentation." },
    ]
  },
  {
    id: "visa",
    title: "Visa & Travel",
    icon: Plane,
    faqs: [
      { q: "Do you help with visa applications?", a: "Yes. We provide comprehensive visa guidance including document preparation, interview coaching, and application review. However, we do not guarantee visa approval." },
      { q: "What if my visa is rejected?", a: "We analyze the rejection reason and help you understand next steps. In many cases, reapplication with a stronger case is possible. We support you throughout." },
      { q: "How much bank balance do I need for a student visa?", a: "Requirements vary by country. For UK, typically 28 days of living costs plus tuition. For USA, proof of full program funding. We provide exact figures based on your destination." },
      { q: "Can I work while studying abroad?", a: "Many countries allow students to work part-time under certain conditions. We provide high-level guidance, but you should always check official government sources for the most current rules." },
      { q: "Do you help with travel arrangements?", a: "We provide guidance on travel booking, airport procedures, and what to expect on arrival. We can also connect you with trusted travel partners." },
      { q: "What is a CAS (for UK) or I-20 (for USA)?", a: "These are official enrollment documents issued by universities required for visa applications. CAS (Confirmation of Acceptance for Studies) is for UK; I-20 is for USA." },
      { q: "How early should I book my flights?", a: "We recommend booking 3-4 weeks before departure once your visa is approved. Earlier bookings may risk changes if visa processing is delayed." },
      { q: "What about airport pickup and initial accommodation?", a: "Many universities offer airport pickup services. We help you arrange these and connect you with accommodation options before you depart." },
    ]
  },
  {
    id: "finance",
    title: "Fees, Funding & Scholarships",
    icon: CreditCard,
    faqs: [
      { q: "Do you help with scholarships?", a: "Yes, we help you identify relevant scholarships and integrate them into your plan. However, scholarships are competitive and depend on your profile and the institution's criteria." },
      { q: "What scholarships are available for Nigerian students?", a: "There are country-specific (Commonwealth, Chevening, Fulbright), university-specific, and merit-based scholarships. We maintain an updated database and match you with suitable options." },
      { q: "Can I get a student loan?", a: "Yes. We partner with education loan providers who cater to Nigerian students. Options include collateral-free loans, co-signer options, and various repayment terms." },
      { q: "How much does studying abroad actually cost?", a: "Costs vary widely. UK undergraduate: £15,000-£30,000/year; USA: $20,000-$50,000/year; Canada: CAD 20,000-40,000/year. We provide detailed cost breakdowns for your specific choices." },
      { q: "Do universities offer payment plans?", a: "Many universities offer installment payment options. We help you negotiate and set up payment plans where available." },
      { q: "What is a financial sponsor letter?", a: "A letter from someone (parent, relative, organization) confirming they will fund your education. Required for visa applications alongside bank statements." },
      { q: "Are there work-study programs available?", a: "Yes. Many countries allow on-campus employment, and some universities offer work-study programs. We guide you on opportunities at your chosen institution." },
    ]
  },
  {
    id: "living-abroad",
    title: "Living Abroad",
    icon: Building,
    faqs: [
      { q: "How do I find accommodation abroad?", a: "We connect you with university accommodation options, private housing platforms, and student housing providers. Our app includes accommodation search tools." },
      { q: "Is student accommodation safe?", a: "University-managed accommodations are generally safe and regulated. For private housing, we advise on verified platforms and what to look for in contracts." },
      { q: "What about healthcare abroad?", a: "Most countries require international students to have health insurance. Some include it in tuition (UK NHS surcharge), while others require separate insurance." },
      { q: "How do I open a bank account abroad?", a: "We provide guides for opening student bank accounts in each country, including digital banks that can be set up before you travel." },
      { q: "What should I pack for studying abroad?", a: "We provide destination-specific packing lists covering essentials, documents, and items difficult to find abroad. Weather considerations are key." },
      { q: "Will I face cultural challenges?", a: "Adjusting to new cultures is normal. We provide pre-departure orientation covering cultural norms, academic expectations, and practical tips for each country." },
      { q: "Can my family visit me while I'm studying?", a: "Yes. Your family can apply for visitor visas. Requirements vary by country, and we can provide general guidance on the process." },
    ]
  },
  {
    id: "sage-ai",
    title: "NUMAWAY Sage (AI)",
    icon: Bot,
    faqs: [
      { q: "What is NUMAWAY Sage?", a: "Sage is our AI-powered assistant that handles quick questions, planning, basic comparisons and reminders 24/7. It complements our human counsellors – when things are complex or high-stakes, we always involve a human expert." },
      { q: "Is Sage a replacement for human counsellors?", a: "No. Sage handles routine queries, provides instant information, and assists with planning. Complex decisions, emotional support, and critical applications always involve human counsellors." },
      { q: "How accurate is Sage's information?", a: "Sage is trained on verified data and updated regularly. However, for official requirements (visa rules, university policies), we always recommend confirming with official sources." },
      { q: "Can Sage help me at any time?", a: "Yes. Sage is available 24/7 through our app and website. For urgent matters outside business hours, Sage can also escalate to on-call human support." },
      { q: "What can I ask Sage?", a: "Course comparisons, deadline reminders, document checklists, country information, application status, general study abroad questions, and more." },
      { q: "Is my conversation with Sage private?", a: "Yes. Conversations are encrypted and only accessible to you and assigned counsellors (with your consent). We never share personal data with third parties." },
    ]
  },
  {
    id: "numaway-services",
    title: "NUMAWAY Services",
    icon: Users,
    faqs: [
      { q: "Do you help with local Nigerian universities?", a: "Yes. Through partner universities in Nigeria, we help you apply using the same NUMAWAY structure and support." },
      { q: "What countries do you support?", a: "We primarily support UK, USA, Canada, Australia, Ireland, Germany, and select European destinations. We're expanding to more countries regularly." },
      { q: "Do you have physical offices?", a: "Yes. We have offices in Lagos, Abuja, and Port Harcourt. You can book appointments online or walk in during business hours." },
      { q: "How do I become a NUMAWAY student?", a: "Start by booking a free consultation on our website or app. After an initial assessment, we'll create your personalized study abroad plan." },
      { q: "Can parents be involved in the process?", a: "Absolutely. We welcome parents in consultations and can include them in communications. Many decisions benefit from family discussions." },
      { q: "Do you help students already abroad?", a: "Yes. We assist with course changes, visa extensions, accommodation issues, and even transfers to different universities." },
      { q: "What if I'm not satisfied with your services?", a: "We have a formal complaints procedure. Contact our support team, and if unresolved, you can escalate through our 4-stage process detailed on our Complaints page." },
    ]
  },
  {
    id: "trust-safety",
    title: "Trust & Safety",
    icon: Shield,
    faqs: [
      { q: "How do I know NUMAWAY is legitimate?", a: "We're registered in Nigeria, maintain transparent pricing, have verifiable partnerships with universities, and never make false promises about admissions or visas." },
      { q: "What guarantees do you offer?", a: "We guarantee honest guidance, transparent pricing, and dedicated support throughout your journey. We do not guarantee admission or visa outcomes as these are beyond our control." },
      { q: "How do you handle my personal data?", a: "We comply with NDPR (Nigeria) and GDPR (for international data). Your data is encrypted, stored securely, and never sold to third parties. See our Privacy Policy for details." },
      { q: "What is your refund policy?", a: "Refunds depend on service type and stage of completion. Initial consultations are typically non-refundable. See our Terms of Service for complete details." },
      { q: "How do I report fraud or suspicious activity?", a: "Report immediately to fraud@numaway.com. We have a zero-tolerance policy for fraud and investigate all reports thoroughly." },
      { q: "Are your partner universities accredited?", a: "Yes. We only partner with recognized, accredited institutions. We verify accreditation status and help you avoid unaccredited or low-quality institutions." },
    ]
  }
];

const faqPageSchema: JsonLdGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

const FAQ = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("getting-started");

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Frequently Asked Questions: Study Abroad with Numaway"
        description="Find answers to common questions about studying abroad: applications, visas, scholarships, counselling fees, and more."
        canonical="/faq"
        jsonLd={faqPageSchema}
      />

      <Header />
      <main>
        <PageHero
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know about studying abroad with NUMAWAY. Can't find your answer? Contact us."
        />

        <section className="py-16 lg:py-24">
          <div className="container-default">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Navigation */}
              <ScrollReveal animation="slide-right" className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  <h3 className="font-display font-semibold text-lg mb-4">Categories</h3>
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-card hover:bg-muted text-foreground"
                      }`}
                    >
                      <category.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{category.title}</span>
                      <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted-foreground/10 text-muted-foreground"
                      }`}>
                        {category.faqs.length}
                      </span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                {faqCategories.map((category) => (
                  <div
                    key={category.id}
                    className={activeCategory === category.id ? "block" : "hidden"}
                  >
                    <ScrollReveal animation="fade-up">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-display font-bold">{category.title}</h2>
                          <p className="text-muted-foreground text-sm">{category.faqs.length} questions</p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <Accordion type="single" collapsible className="space-y-3">
                      {category.faqs.map((faq, i) => (
                        <ScrollReveal key={i} animation="fade-up" delay={i * 0.03}>
                          <AccordionItem 
                            value={`faq-${category.id}-${i}`} 
                            className="bg-card rounded-xl shadow-soft px-6 border-none hover:shadow-card transition-shadow"
                          >
                            <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-4">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        </ScrollReveal>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container-default text-center">
            <ScrollReveal animation="fade-up">
              <img
                src="/images/heroes/student-1-600.jpg"
                alt="Student getting answers to their study abroad questions from a Numaway counsellor"
                className="w-full max-w-3xl mx-auto rounded-xl object-cover h-52 mb-10"
                loading="lazy"
                width="800"
                height="208"
              />
              <h2 className="text-2xl font-display font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our team is here to help. Book a free consultation, chat with Sage, or send us a message.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <a href="/consultation" className="gap-2">
                    Book Free Consultation 
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/sage">Ask Sage</a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;