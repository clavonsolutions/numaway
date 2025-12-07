import { 
  GraduationCap, 
  FileCheck, 
  Home, 
  CreditCard, 
  Plane, 
  BookOpen,
  Building2, 
  Sparkles
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: any;
  whoIsItFor: string[];
  features: string[];
  howItWorks: { step: number; title: string; description: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    title: "Study Abroad Counselling & Pathway Planning",
    slug: "study-abroad-counselling",
    shortDescription: "We help you move from \"I want to travel\" to a clear, realistic study plan based on your grades, budget and long-term goals.",
    description: "One-to-one counselling to help you choose the right course, university and country based on your background, goals and finances. We don't push schools that are wrong for you.",
    icon: GraduationCap,
    whoIsItFor: [
      "You're interested in studying abroad but not sure where, what or how",
      "You're confused by different options on social media and need clear guidance",
      "You have some ideas (e.g. UK, Canada, USA, Europe) but want to know what's realistic for your profile",
      "You want a structured plan, not random advice"
    ],
    features: [
      "Detailed student profiling (WAEC/NECO, JAMB, degrees, transcripts)",
      "Country & pathway exploration with realistic cost analysis",
      "Course & career direction matching",
      "Personalized written study pathway with timeline",
      "Genie AI-assisted option exploration",
      "Follow-up support and plan adjustments"
    ],
    howItWorks: [
      { step: 1, title: "Online Consultation Form", description: "You fill a structured form so we understand your background before the session." },
      { step: 2, title: "One-to-One Counselling", description: "A NUMAWAY counsellor reviews your profile with you and discusses realistic options." },
      { step: 3, title: "Genie + Human Review", description: "We use Genie (our AI assistant) to explore broad options, then your counsellor refines for accuracy." },
      { step: 4, title: "Written Pathway Summary", description: "You receive a clear, written summary you can always revisit." }
    ],
    outcomes: [
      "Clarity on whether study abroad is realistic for you now or later",
      "A short list of countries and course areas that fit you",
      "A realistic timeline and to-do list",
      "A structured plan you can share with parents/sponsors"
    ],
    faqs: [
      { question: "Is this service free?", answer: "For many students, the initial counselling session is free. In some complex cases, or for special support, we'll explain any fees clearly before you proceed." },
      { question: "Can you tell me exactly which university I will enter?", answer: "We don't promise guarantees. We help you understand your options, build a strategy and then apply to universities where you have a realistic chance." }
    ]
  },
  {
    title: "Application Guidance & Document Support",
    slug: "application-support",
    shortDescription: "We help you turn your plan into strong, organised applications that represent you honestly and professionally.",
    description: "We help you prepare strong applications, organise your documents and submit to multiple universities without losing track. Your documents, your story – we just help you present them better.",
    icon: FileCheck,
    whoIsItFor: [
      "You already have an idea of where/what to study",
      "You're overwhelmed by forms, portals and multiple deadlines",
      "You want help making sure your documents are complete, clear and honest",
      "You don't want to risk errors that could delay or damage your application"
    ],
    features: [
      "Application strategy (ambitious, realistic, safe choices)",
      "Tailored document checklist for each university",
      "Statement of purpose / personal statement coaching",
      "Application form guidance to prevent mistakes",
      "Application tracking via NUMAWAY App",
      "Ongoing updates as decisions come in"
    ],
    howItWorks: [
      { step: 1, title: "Document Folder Preparation", description: "We give you a folder structure and checklist." },
      { step: 2, title: "Upload & Review", description: "You upload documents; we review for completeness and clarity." },
      { step: 3, title: "Application Form Sessions", description: "We guide you step by step through major application forms." },
      { step: 4, title: "Submission & Confirmation", description: "We ensure each application is submitted correctly and confirmation is received." }
    ],
    outcomes: [
      "A set of properly submitted, trackable applications",
      "Organised documents that you can reuse for other processes",
      "Fewer mistakes, delays and \"I didn't know\" shocks"
    ],
    faqs: [
      { question: "Do you guarantee admission if you help with my application?", answer: "No. We help you submit strong, honest applications, but final decisions are made by universities." },
      { question: "Will you write my personal statement for me?", answer: "We don't fabricate stories. We coach you, give structure and help you refine your own writing." }
    ]
  },
  {
    title: "Offer Management & Decision Support",
    slug: "offer-decision-support",
    shortDescription: "We help you compare offers, understand conditions and choose the path that truly fits your life and budget.",
    description: "Got multiple offers? We help you compare them clearly and choose what's right for you, not just what pays us the highest commission.",
    icon: Building2,
    whoIsItFor: [
      "You have one or more offers and feel confused",
      "Different universities are offering different fees, scholarships and locations",
      "You're unsure how to explain options to parents/sponsors",
      "You want a decision that makes sense long-term, not just emotionally"
    ],
    features: [
      "Offer review & explanation (fees, conditions, deadlines)",
      "Side-by-side comparison (cost, location, visa, career)",
      "Decision counselling with family involvement",
      "Scholarship and discount assessment",
      "Next steps planning for acceptance and visa"
    ],
    howItWorks: [
      { step: 1, title: "Upload Your Offers", description: "Upload offer letters/emails into the App or secure channel." },
      { step: 2, title: "Offer Breakdown", description: "We summarise each offer in simple language." },
      { step: 3, title: "Comparison Session", description: "We walk through side-by-side differences." },
      { step: 4, title: "Decision & Transition", description: "You make an informed decision; we transition to visa support." }
    ],
    outcomes: [
      "You understand your offers clearly",
      "You won't choose an option that secretly doesn't fit your budget or goals",
      "Your family/sponsor can see a clear comparison, not guesswork"
    ],
    faqs: [
      { question: "What if I only have one offer?", answer: "We still help you understand the terms, conditions, and what to prepare next." },
      { question: "Do you help negotiate fees?", answer: "We can advise on scholarship applications but universities set their own fees." }
    ]
  },
  {
    title: "Visa Preparation & Document Review",
    slug: "visa-preparation",
    shortDescription: "We help you prepare, organise and review your study visa documents – with clear guidance, not false guarantees.",
    description: "We guide you through the visa process, explain documentation and help you get organised for interviews and submissions. We do not provide legal or immigration advice.",
    icon: Plane,
    whoIsItFor: [
      "You have an offer and want to start your visa process",
      "You're worried about documents, funds, timelines and mistakes",
      "You want a structured checklist and someone to walk you through it"
    ],
    features: [
      "Visa readiness assessment (offer, deposit, passport, funds)",
      "Country-specific document checklist",
      "Document organisation & consistency review",
      "Form & interview preparation guidance",
      "Reminder system for key dates",
      "Final review before submission"
    ],
    howItWorks: [
      { step: 1, title: "Case Intake", description: "We collect details about your chosen country, offer and timeline." },
      { step: 2, title: "Checklist & Planning", description: "You receive a written checklist and timeline." },
      { step: 3, title: "Document Upload & Review", description: "We check for completeness and clarity." },
      { step: 4, title: "Final Review", description: "Before you book biometrics/submit, we do a final organised check." }
    ],
    outcomes: [
      "You know what documents you need and why",
      "Your documents are organised and consistent",
      "You are better prepared, less anxious and less likely to miss important details"
    ],
    faqs: [
      { question: "Do you guarantee visa approval?", answer: "No genuine agency can guarantee visa. We help you prepare properly, but final decisions are made by embassies." },
      { question: "Do you help with visa interviews?", answer: "Yes, we explain common questions and help you practice answering confidently and honestly." }
    ]
  },
  {
    title: "Accommodation & Landing Support",
    slug: "accommodation-landing",
    shortDescription: "We help you understand your housing options, avoid common mistakes and settle in more confidently when you arrive.",
    description: "We support you in exploring safe accommodation options and understanding what to do in your first weeks abroad. No fake listings, no unrealistic promises.",
    icon: Home,
    whoIsItFor: [
      "You've received an offer or visa and are planning your move",
      "You're not sure how to choose safe, realistic accommodation",
      "You want guidance around contracts, deposits and avoiding scams"
    ],
    features: [
      "Accommodation types education (on-campus, private halls, shared flats, homestay)",
      "Budget & expectations setting for your chosen city",
      "Guidance on where to search and red flags to avoid",
      "Landing support tips (packing, first week essentials, SIM, transport)",
      "Support network connections (Nigerian community, student societies)"
    ],
    howItWorks: [
      { step: 1, title: "Accommodation Request", description: "Tell us your destination, timeline and budget." },
      { step: 2, title: "Consultation", description: "We explain realistic options and answer your questions." },
      { step: 3, title: "Search Guidance", description: "We direct you to suitable platforms and what to check." },
      { step: 4, title: "Review", description: "We can review listings you're considering and highlight concerns." }
    ],
    outcomes: [
      "You understand your options and realistic costs",
      "You avoid rushing into unsafe or unsuitable accommodation",
      "Your first weeks abroad are less confusing and more organised"
    ],
    faqs: [
      { question: "Do you book accommodation for me?", answer: "We guide you on options and platforms, but you make and confirm your own bookings." },
      { question: "Can you guarantee safe accommodation?", answer: "We share guidance and trusted platforms, but you must verify any accommodation before paying." }
    ]
  },
  {
    title: "Exams & Test Preparation Support",
    slug: "exams-support",
    shortDescription: "We help you understand which exams you need, what scores are realistic and how to plan your preparation around your application timeline.",
    description: "We clarify IELTS, TOEFL, PTE, GRE, GMAT, SAT and other exams – what they are, what scores you need, and how to prepare strategically.",
    icon: BookOpen,
    whoIsItFor: [
      "You're unsure which exam you need for your destination",
      "You want to understand realistic score targets",
      "You need help planning preparation around your timeline"
    ],
    features: [
      "Exam identification (which ones you actually need)",
      "Format and scoring explanation",
      "Timeline planning (not too early, not too late)",
      "Study planning suggestions and resources",
      "Integration with your overall application timeline"
    ],
    howItWorks: [
      { step: 1, title: "Exam Assessment", description: "We identify which exams are required for your chosen destinations." },
      { step: 2, title: "Score Target Setting", description: "We explain what scores you realistically need." },
      { step: 3, title: "Study Plan", description: "Genie can generate personalised study plans based on your timeline." },
      { step: 4, title: "Progress Integration", description: "We align your exam plan with application deadlines." }
    ],
    outcomes: [
      "Clarity on which exams you need and when to take them",
      "A realistic study plan that fits your schedule",
      "Aligned exam and application timelines"
    ],
    faqs: [
      { question: "Do you provide exam coaching?", answer: "We provide guidance and resource recommendations. For intensive coaching, we may refer you to specialised partners." },
      { question: "What if I fail my exam?", answer: "We help you reassess timing and retake strategy as part of your overall plan." }
    ]
  },
  {
    title: "Scholarship & Funding Guidance",
    slug: "scholarships-funding",
    shortDescription: "We help you understand funding options, where scholarships are realistic and how to present yourself strongly and honestly.",
    description: "We help you identify relevant scholarships and integrate them into your plan. However, scholarships are competitive and depend on your profile and the institution's criteria.",
    icon: CreditCard,
    whoIsItFor: [
      "You need financial support to study abroad",
      "You want to understand what scholarships are realistic for your profile",
      "You need help with scholarship essays and applications"
    ],
    features: [
      "Scholarship type explanation (merit, need-based, country-specific)",
      "Profile-based scholarship matching",
      "Scholarship essay guidance (honest presentation)",
      "Budget planning integration",
      "Alternative funding options discussion"
    ],
    howItWorks: [
      { step: 1, title: "Profile Review", description: "We assess your eligibility for various scholarship types." },
      { step: 2, title: "Opportunity Identification", description: "We identify scholarships realistic for your profile." },
      { step: 3, title: "Application Support", description: "We guide on essays and applications without fabrication." },
      { step: 4, title: "Budget Integration", description: "We help you plan without relying only on scholarships." }
    ],
    outcomes: [
      "Understanding of what funding is realistically available",
      "Stronger scholarship applications",
      "Realistic budget planning"
    ],
    faqs: [
      { question: "Can you guarantee I'll get a scholarship?", answer: "No. Scholarships are competitive. We help you present your genuine achievements strongly." },
      { question: "What if I don't qualify for any scholarships?", answer: "We discuss alternative funding options and help you plan a realistic budget." }
    ]
  },
  {
    title: "AI Genie – Your Study Abroad Assistant",
    slug: "genie",
    shortDescription: "Ask questions, explore options and get structured checklists and timelines – 24/7.",
    description: "Genie is your AI-powered study abroad assistant. It handles quick questions, planning, basic comparisons and reminders – so your human counsellor can focus on complex decisions.",
    icon: Sparkles,
    whoIsItFor: [
      "You want quick answers at any time of day",
      "You're exploring options and need a starting point",
      "You want help organising your timeline and tasks"
    ],
    features: [
      "24/7 availability for quick questions",
      "Country and course suggestions based on your profile",
      "Document checklists and deadline reminders",
      "Study plan generation for exams",
      "First 30 days landing checklist",
      "Seamless handoff to human counsellors for complex issues"
    ],
    howItWorks: [
      { step: 1, title: "Ask Genie", description: "Type your question or describe what you need." },
      { step: 2, title: "AI Analysis", description: "Genie processes your query against study abroad knowledge." },
      { step: 3, title: "Instant Response", description: "Get structured answers, checklists, or suggestions." },
      { step: 4, title: "Human Escalation", description: "Complex issues are routed to a human counsellor." }
    ],
    outcomes: [
      "Quick answers without waiting for office hours",
      "Better organised with AI-generated checklists",
      "Counsellor time focused on what really matters"
    ],
    faqs: [
      { question: "Is Genie replacing human counsellors?", answer: "No. Genie handles quick questions and planning. Humans handle advising, reviewing your profile, and helping with decisions." },
      { question: "How accurate is Genie?", answer: "Genie is trained on study abroad knowledge but always recommends verifying important details with your counsellor." }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};