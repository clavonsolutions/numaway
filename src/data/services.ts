import { 
  GraduationCap, 
  FileCheck, 
  Home, 
  CreditCard, 
  Plane, 
  Users, 
  Building2, 
  Sparkles,
  Handshake,
  HeartHandshake
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: any;
  features: string[];
  howItWorks: { step: number; title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    title: "Admissions Counselling",
    slug: "admissions-counselling",
    shortDescription: "Expert guidance for admission to top universities worldwide.",
    description: "Our expert counsellors help you navigate the complex university admissions process. From selecting the right universities to crafting compelling applications, we're with you every step of the way.",
    icon: GraduationCap,
    features: [
      "University shortlisting based on profile",
      "Personal statement review and editing",
      "Application form assistance",
      "Interview preparation",
      "Offer evaluation guidance",
      "Scholarship application support"
    ],
    howItWorks: [
      { step: 1, title: "Profile Assessment", description: "We analyze your academic background, interests, and career goals." },
      { step: 2, title: "University Matching", description: "We recommend universities that match your profile and aspirations." },
      { step: 3, title: "Application Support", description: "We help you craft compelling applications and essays." },
      { step: 4, title: "Offer & Enrollment", description: "We guide you through offer acceptance and enrollment." }
    ],
    benefits: [
      "Higher acceptance rates with expert guidance",
      "Save time with streamlined application process",
      "Access to 500+ partner universities",
      "Personalized university recommendations"
    ],
    faqs: [
      { question: "When should I start the application process?", answer: "Ideally, start 12-18 months before your intended start date to allow time for research, test preparation, and applications." },
      { question: "How many universities should I apply to?", answer: "We typically recommend applying to 5-8 universities with a mix of reach, match, and safety options." }
    ]
  },
  {
    title: "Visa Support",
    slug: "visa-support",
    shortDescription: "End-to-end visa support with high approval success rates.",
    description: "Navigate the visa process with confidence. Our visa experts have helped thousands of students secure their student visas with a success rate above 95%.",
    icon: FileCheck,
    features: [
      "Visa document checklist",
      "Application form filling",
      "Financial documentation review",
      "Mock visa interview preparation",
      "Visa appointment booking assistance",
      "Post-decision support"
    ],
    howItWorks: [
      { step: 1, title: "Document Collection", description: "We provide a comprehensive checklist and help gather all required documents." },
      { step: 2, title: "Application Preparation", description: "We review and organize your documents for submission." },
      { step: 3, title: "Interview Prep", description: "Mock interviews and guidance for embassy appointments." },
      { step: 4, title: "Submission & Follow-up", description: "We assist with submission and track your application status." }
    ],
    benefits: [
      "95%+ visa success rate",
      "Expert knowledge of visa requirements",
      "Reduced stress and anxiety",
      "Quick turnaround on applications"
    ],
    faqs: [
      { question: "What if my visa is rejected?", answer: "We analyze the rejection reason and help you reapply with a stronger application. Our track record shows most reapplications are successful." },
      { question: "How early should I apply for my visa?", answer: "Apply as soon as you receive your admission letter, typically 3-4 months before your course start date." }
    ]
  },
  {
    title: "Scholarship Guidance",
    slug: "scholarships-guidance",
    shortDescription: "Access funding opportunities and scholarship applications.",
    description: "Don't let finances hold you back. We help you identify and apply for scholarships that can significantly reduce your education costs.",
    icon: CreditCard,
    features: [
      "Scholarship matching based on profile",
      "Application assistance",
      "Essay review and editing",
      "Documentation support",
      "Deadline tracking",
      "Alternative funding options"
    ],
    howItWorks: [
      { step: 1, title: "Profile Analysis", description: "We assess your eligibility for various scholarships." },
      { step: 2, title: "Scholarship Matching", description: "We identify scholarships you qualify for." },
      { step: 3, title: "Application Support", description: "We help craft winning scholarship applications." },
      { step: 4, title: "Follow-up", description: "We track applications and assist with interviews if required." }
    ],
    benefits: [
      "Access to comprehensive scholarship database",
      "Expert essay writing support",
      "Higher success rates",
      "Alternative funding guidance"
    ],
    faqs: [
      { question: "What scholarships are available for Nigerian students?", answer: "There are many including Chevening, Commonwealth, DAAD, Fulbright, and numerous university-specific scholarships." },
      { question: "Can I get a full scholarship?", answer: "Yes, full scholarships exist though they're competitive. We'll help you identify and apply for the best opportunities for your profile." }
    ]
  },
  {
    title: "Accommodation Support",
    slug: "accommodation-support",
    shortDescription: "Find safe, comfortable housing near your campus.",
    description: "Finding the right accommodation in a new country can be challenging. We connect you with verified housing options that suit your budget and preferences.",
    icon: Home,
    features: [
      "University accommodation guidance",
      "Private housing options",
      "Student housing partners",
      "Virtual tours available",
      "Lease review support",
      "Roommate matching"
    ],
    howItWorks: [
      { step: 1, title: "Requirements Assessment", description: "We understand your budget, preferences, and location needs." },
      { step: 2, title: "Options Presentation", description: "We provide verified accommodation options." },
      { step: 3, title: "Booking Support", description: "We assist with applications and payments." },
      { step: 4, title: "Move-in Preparation", description: "Guidance for your arrival and settlement." }
    ],
    benefits: [
      "Verified and safe options",
      "Budget-friendly choices",
      "Near campus locations",
      "No hidden fees"
    ],
    faqs: [
      { question: "Should I choose university or private accommodation?", answer: "University accommodation offers convenience and social opportunities but may have waiting lists. Private housing offers more independence and sometimes lower costs." },
      { question: "When should I book my accommodation?", answer: "Book as soon as you confirm your admission, ideally 3-6 months before arrival." }
    ]
  },
  {
    title: "Pre-Departure Support",
    slug: "pre-departure",
    shortDescription: "Everything you need to know before you travel.",
    description: "Prepare for your journey with our comprehensive pre-departure support. From packing tips to cultural preparation, we ensure you arrive ready to succeed.",
    icon: Plane,
    features: [
      "Pre-departure orientation sessions",
      "Packing guidelines",
      "Travel booking assistance",
      "Airport pickup arrangement",
      "Banking setup guidance",
      "Cultural preparation"
    ],
    howItWorks: [
      { step: 1, title: "Orientation Session", description: "Join our comprehensive pre-departure briefing." },
      { step: 2, title: "Travel Preparation", description: "Guidance on flights, packing, and essentials." },
      { step: 3, title: "Documentation Check", description: "Final review of all required documents." },
      { step: 4, title: "Arrival Prep", description: "Setup for airport pickup and initial days." }
    ],
    benefits: [
      "Stress-free departure",
      "Know what to expect",
      "Connect with other students",
      "Smooth arrival experience"
    ],
    faqs: [
      { question: "What documents should I carry with me?", answer: "Passport, visa, admission letter, accommodation proof, financial documents, and copies of all important papers." },
      { question: "How much cash should I bring?", answer: "Bring enough for 1-2 weeks of expenses. Most costs can be paid by card once you set up local banking." }
    ]
  },
  {
    title: "Parent Advisory",
    slug: "parents-support",
    shortDescription: "Support and guidance for parents of prospective students.",
    description: "We understand that sending your child abroad is a big decision. Our parent advisory service ensures families are informed and confident throughout the journey.",
    icon: Users,
    features: [
      "Dedicated parent consultations",
      "Safety and security briefings",
      "Financial planning guidance",
      "Regular updates and communication",
      "Emergency contact protocols",
      "Parent community access"
    ],
    howItWorks: [
      { step: 1, title: "Family Consultation", description: "We meet with parents to address concerns and questions." },
      { step: 2, title: "Information Sessions", description: "Regular updates on the application and preparation process." },
      { step: 3, title: "Safety Briefing", description: "Comprehensive information on student safety abroad." },
      { step: 4, title: "Ongoing Support", description: "Continued communication throughout the student's journey." }
    ],
    benefits: [
      "Peace of mind for families",
      "Direct communication channel",
      "Financial planning support",
      "Community of other parents"
    ],
    faqs: [
      { question: "How will I know my child is safe?", answer: "We provide emergency contacts, help set up communication channels, and stay in touch with students during their first months abroad." },
      { question: "Can parents attend counselling sessions?", answer: "Absolutely! We encourage parents to join initial consultations and key decision-making sessions." }
    ]
  },
  {
    title: "AI-Powered Profiling",
    slug: "ai-powered-profiling",
    shortDescription: "Smart matching with our AI Genie counsellor.",
    description: "Our AI-powered Genie analyzes your profile to recommend the best universities and courses, answer your questions 24/7, and guide your journey.",
    icon: Sparkles,
    features: [
      "Instant profile assessment",
      "University matching algorithm",
      "Course recommendations",
      "Document evaluation",
      "24/7 availability",
      "Personalized guidance"
    ],
    howItWorks: [
      { step: 1, title: "Profile Input", description: "Share your academic background and preferences with Genie." },
      { step: 2, title: "AI Analysis", description: "Our AI analyzes thousands of data points to match you." },
      { step: 3, title: "Recommendations", description: "Receive personalized university and course suggestions." },
      { step: 4, title: "Human Verification", description: "Expert counsellors review and refine AI recommendations." }
    ],
    benefits: [
      "Instant responses 24/7",
      "Data-driven recommendations",
      "Personalized guidance",
      "Complements human expertise"
    ],
    faqs: [
      { question: "Is the AI replacing human counsellors?", answer: "No, Genie complements our human counsellors. AI handles instant queries while our experts handle complex decisions and personal guidance." },
      { question: "How accurate are AI recommendations?", answer: "Our AI is trained on successful applications and continuously improves. All recommendations are reviewed by human experts." }
    ]
  },
  {
    title: "University Partnerships",
    slug: "university-partnerships",
    shortDescription: "Access exclusive partnerships with top universities.",
    description: "NUMAWAY has established partnerships with leading universities worldwide, giving our students priority access, exclusive scholarships, and streamlined applications.",
    icon: Building2,
    features: [
      "Priority application processing",
      "Exclusive scholarships",
      "Direct university contacts",
      "Fee waivers available",
      "Guaranteed interviews",
      "Articulation agreements"
    ],
    howItWorks: [
      { step: 1, title: "Partner Introduction", description: "We connect you with our partner universities." },
      { step: 2, title: "Priority Processing", description: "Your application gets fast-tracked." },
      { step: 3, title: "Exclusive Benefits", description: "Access partner-only scholarships and fee waivers." },
      { step: 4, title: "Direct Support", description: "Get support from university representatives." }
    ],
    benefits: [
      "Faster application processing",
      "Exclusive financial benefits",
      "Direct university relationships",
      "Higher acceptance chances"
    ],
    faqs: [
      { question: "Which universities are NUMAWAY partners?", answer: "We partner with 100+ universities across UK, USA, Canada, Australia, and Europe. Speak with a counsellor for the current list." },
      { question: "Are partner universities lower quality?", answer: "Not at all. Our partners include top-ranked universities. Partnerships are based on quality and student outcomes." }
    ]
  },
  {
    title: "Agency Partnerships",
    slug: "agency-partnerships",
    shortDescription: "B2B partnerships for education agencies.",
    description: "Partner with NUMAWAY to expand your services. We provide training, resources, and support for education agencies looking to grow their international student placement.",
    icon: Handshake,
    features: [
      "Agent training programs",
      "Marketing resources",
      "Technology platform access",
      "Commission structures",
      "Joint marketing opportunities",
      "Quality assurance support"
    ],
    howItWorks: [
      { step: 1, title: "Partnership Application", description: "Apply to join our partner network." },
      { step: 2, title: "Onboarding & Training", description: "Complete our partner certification program." },
      { step: 3, title: "Access & Resources", description: "Get access to our platform and materials." },
      { step: 4, title: "Ongoing Support", description: "Receive continuous training and support." }
    ],
    benefits: [
      "Expand your service offering",
      "Access to technology platform",
      "Competitive commissions",
      "Training and certification"
    ],
    faqs: [
      { question: "What are the requirements to become a partner?", answer: "We look for agencies with experience in student counselling, commitment to ethical practices, and proper registration." },
      { question: "What training is provided?", answer: "We offer comprehensive training on destinations, visa processes, application procedures, and using our technology platform." }
    ]
  },
  {
    title: "Post-Arrival Support",
    slug: "post-arrival-support",
    shortDescription: "Continued support after you land abroad.",
    description: "Our support doesn't end when you arrive. We continue to assist with your settlement, academic integration, and any challenges you may face in your new country.",
    icon: HeartHandshake,
    features: [
      "Airport pickup service",
      "Initial settlement guidance",
      "Bank account setup",
      "SIM card and essentials",
      "Local orientation",
      "Student community access"
    ],
    howItWorks: [
      { step: 1, title: "Arrival Coordination", description: "We arrange pickup and initial accommodation check-in." },
      { step: 2, title: "Essential Setup", description: "Assistance with bank account, phone, and utilities." },
      { step: 3, title: "Local Orientation", description: "Introduction to your new city and campus." },
      { step: 4, title: "Community Connection", description: "Connect with other Nigerian students and support networks." }
    ],
    benefits: [
      "Smooth transition",
      "Local support contacts",
      "Student community",
      "Emergency assistance"
    ],
    faqs: [
      { question: "How long does post-arrival support last?", answer: "We provide intensive support for the first month and remain available throughout your studies for any challenges." },
      { question: "Is there a Nigerian student community?", answer: "Yes, we connect you with Nigerian student associations and communities in most major study destinations." }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};
