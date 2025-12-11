import { 
  GraduationCap, 
  FileCheck, 
  Home, 
  CreditCard, 
  Plane, 
  BookOpen,
  Building2, 
  Sparkles,
  Users,
  Shield,
  Globe,
  Briefcase,
  Calendar,
  Crown,
  Rocket,
  Brain,
  Heart,
  Target,
  Award,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Laptop,
  HeadphonesIcon,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  UserCheck,
  School,
  Compass,
  HandshakeIcon,
  LineChart,
  Settings,
  Video,
  Megaphone,
  Star,
  Wallet,
  PlaneTakeoff,
  Gift,
  type LucideIcon
} from "lucide-react";

// Import images
import studentCounsellingImg from "@/assets/service-student-counselling.jpg";
import universityPartnershipImg from "@/assets/service-university-partnership.jpg";
import digitalTechnologyImg from "@/assets/service-digital-technology.jpg";
import complianceImg from "@/assets/service-compliance.jpg";
import communityImg from "@/assets/service-community.jpg";
import consultingImg from "@/assets/service-consulting.jpg";
import eventsImg from "@/assets/service-events.jpg";
import premiumImg from "@/assets/service-premium.jpg";
import futureImg from "@/assets/service-future.jpg";

export interface SubService {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  whoItsFor?: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceDomain {
  id: number;
  title: string;
  slug: string;
  header: string;
  subheader: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  color: string;
  subServices: SubService[];
  ctaText: string;
  ctaLink: string;
  isFree?: boolean;
}

export const serviceDomains: ServiceDomain[] = [
  {
    id: 1,
    title: "Student-Focused Services",
    slug: "student-services",
    header: "For Students & Parents",
    subheader: "Clear guidance, intelligent tools, and end-to-end support for your global future.",
    tagline: "Your Complete Study Abroad Journey",
    description: "From initial counselling to career success abroad — we support every step of your educational journey with personalized guidance and AI-powered tools. Our consultation and support are completely free.",
    icon: GraduationCap,
    image: studentCounsellingImg,
    color: "secondary",
    isFree: true,
    ctaText: "Book Free Consultation",
    ctaLink: "/consultation",
    subServices: [
      {
        id: "SS1",
        title: "AI-Powered Student Profiling & Pathway Mapping",
        shortDescription: "Instant, intelligent assessment that identifies the most suitable countries, programs, and pathways based on your goals, grades, and budget.",
        longDescription: "Our AI-powered profiling engine evaluates your academic history, future career goals, financial capacity, and immigration feasibility. The result is a personalized pathway showing the right country, programs, timelines, visa expectations, and scholarship potential.",
        icon: Target,
        features: [
          "AI profiling",
          "Country fit analysis",
          "Program ranking",
          "Budget alignment",
          "Visa likelihood indicators",
          "Scholarship-fit scoring",
          "Personalized study plan development"
        ],
        whoItsFor: "Students, parents, schools",
        ctaText: "Start Your Free Profile",
        ctaLink: "/consultation"
      },
      {
        id: "SS2",
        title: "Program & University Selection Advisory",
        shortDescription: "Expert guidance that helps you choose the right university and program—with full clarity and confidence.",
        longDescription: "Choosing a program is one of the most important decisions in your global journey. NUMAWAY blends AI recommendations with expert advisory sessions to help you pick the most suitable options academically, financially, and professionally.",
        icon: School,
        features: [
          "University shortlist",
          "Academic fit analysis",
          "Tuition vs. budget mapping",
          "Offer competitiveness scoring",
          "University matching based on goals, budget, and career pathways"
        ],
        whoItsFor: "Students seeking clarity on university choices",
        ctaText: "Book Advisory Session",
        ctaLink: "/consultation"
      },
      {
        id: "SS3",
        title: "Application Preparation & Management",
        shortDescription: "Complete, compliant, and high-quality university applications handled for you—end to end.",
        longDescription: "NUMAWAY prepares, reviews, and submits your applications through a structured, quality-controlled process. Every document is checked for accuracy, compliance, and clarity before submission.",
        icon: FileCheck,
        features: [
          "Application form completion",
          "Document verification",
          "Portal submissions",
          "Follow-ups",
          "End-to-end admissions management",
          "Application packet preparation",
          "Offer acceptance advisory"
        ],
        whoItsFor: "Students applying to universities",
        ctaText: "Start Your Application",
        ctaLink: "/consultation"
      },
      {
        id: "SS4",
        title: "SOP & Personal Statement Support",
        shortDescription: "Compelling and authentic statements crafted through AI assistance and expert human review.",
        longDescription: "We guide you through structured storytelling, AI-powered drafting tools, and expert editing to ensure your statement is strong, honest, and aligned with your chosen program.",
        icon: FileText,
        features: [
          "AI-assisted drafts",
          "Review by senior counsellors",
          "Revision support",
          "Reference letter templates and guidance"
        ],
        whoItsFor: "Students needing statement support",
        ctaText: "Improve My SOP",
        ctaLink: "/consultation"
      },
      {
        id: "SS5",
        title: "Scholarship Search & Application Support",
        shortDescription: "Find and apply for scholarships with precision and confidence.",
        longDescription: "NUMAWAY identifies the best scholarship opportunities based on your profile and supports you through the full application process.",
        icon: CreditCard,
        features: [
          "Scholarship engine matching",
          "Application materials review",
          "Essay and document support",
          "Financial planning guidance",
          "Payment and tuition structure advisory"
        ],
        whoItsFor: "Students seeking financial aid",
        ctaText: "Discover Scholarships",
        ctaLink: "/scholarships"
      },
      {
        id: "SS6",
        title: "Visa & Immigration Guidance",
        shortDescription: "Strong, compliant visa applications with structured documentation and interview preparation.",
        longDescription: "Our visa readiness scoring and document builder ensure your submission is complete and aligned to the latest immigration standards.",
        icon: Plane,
        features: [
          "Visa checklist",
          "Document preparation",
          "Interview practice",
          "Proof-of-funds guidance",
          "Study permit coaching",
          "Sponsorship advisory",
          "Pre-visa QC verification (compliance-first)"
        ],
        whoItsFor: "Students preparing for visa applications",
        ctaText: "Prepare for Visa",
        ctaLink: "/consultation"
      },
      {
        id: "SS7",
        title: "Pre-Departure Academy",
        shortDescription: "Everything you need to feel confident before you travel.",
        longDescription: "From cultural orientation to travel planning and academic expectations, NUMAWAY prepares you for a smooth transition.",
        icon: Compass,
        features: [
          "Pre-departure academy",
          "Cultural adaptation briefings",
          "Travel planning",
          "Packing checklist",
          "Airport arrival guidance"
        ],
        whoItsFor: "Students about to travel",
        ctaText: "Join the Academy",
        ctaLink: "/consultation"
      },
      {
        id: "SS8",
        title: "Accommodation & Settlement Support",
        shortDescription: "Trusted guidance to find safe, affordable housing abroad.",
        longDescription: "NUMAWAY provides curated accommodation options and settlement support for early arrival.",
        icon: Home,
        features: [
          "Accommodation matching",
          "Airport pickup coordination",
          "SIM, transport, and onboarding basics advisory",
          "Local orientation guides"
        ],
        whoItsFor: "Students needing housing",
        ctaText: "Find Housing",
        ctaLink: "/accommodation"
      },
      {
        id: "SS9",
        title: "Post-Arrival Support",
        shortDescription: "We stay with you—after you land.",
        longDescription: "NUMAWAY conducts structured check-ins during your first 90 days abroad to ensure safety, comfort, and academic readiness.",
        icon: HeadphonesIcon,
        features: [
          "Arrival check-ins",
          "Emergency support guidance",
          "Part-time job advisory",
          "Local integration support",
          "University onboarding assistance"
        ],
        whoItsFor: "Students who have arrived abroad",
        ctaText: "Access Support",
        ctaLink: "/consultation"
      },
      {
        id: "SS10",
        title: "Career & Long-Term Pathway Coaching",
        shortDescription: "Plan your future—in education, career, and migration.",
        longDescription: "We map your long-term career and post-study pathways, providing structured guidance for work permits, graduate roles, and settlement options.",
        icon: Briefcase,
        features: [
          "CV and LinkedIn optimization",
          "Career coaching",
          "Graduate work permit pathways",
          "Migration pathways advisory",
          "Internship and job search strategy"
        ],
        whoItsFor: "Students planning long-term careers",
        ctaText: "Plan Your Future",
        ctaLink: "/consultation"
      }
    ]
  },
  {
    id: 2,
    title: "University Partnership Services",
    slug: "university-partnerships",
    header: "For Universities & Colleges",
    subheader: "High-quality, compliant, data-driven student recruitment.",
    tagline: "Partner with the Most Trusted Recruitment Network",
    description: "Partner with NUMAWAY to access high-quality, verified student pipelines with transparent reporting and fraud-free recruitment. We help universities reach qualified students who are ready to succeed.",
    icon: Building2,
    image: universityPartnershipImg,
    color: "accent",
    ctaText: "Partner With Us",
    ctaLink: "/for-institutions",
    subServices: [
      {
        id: "US1",
        title: "Structured Student Recruitment",
        shortDescription: "We source, screen, and guide high-intent applicants who match your academic requirements and progression goals.",
        longDescription: "Our recruitment approach focuses on quality over quantity. We pre-screen students for academic fit, financial readiness, and visa eligibility before presenting them to partner institutions.",
        icon: Users,
        features: [
          "High-quality student recruitment",
          "AI-based applicant screening",
          "Yield optimization",
          "Country-specific marketing campaigns",
          "School/university fairs & webinars"
        ],
        whoItsFor: "Universities seeking quality applicants",
        ctaText: "Partner with NUMAWAY",
        ctaLink: "/for-institutions"
      },
      {
        id: "US2",
        title: "AI-Enhanced Applicant Screening",
        shortDescription: "Reduce rejections and visa refusals with pre-screened, visa-ready students.",
        longDescription: "Our AI screening tools evaluate students on multiple criteria including academic readiness, financial capacity, and immigration likelihood to ensure high acceptance and visa success rates.",
        icon: Brain,
        features: [
          "Academic fit scoring",
          "Financial readiness assessment",
          "Visa likelihood prediction",
          "Document authenticity verification",
          "Risk assessment reporting"
        ],
        whoItsFor: "Universities focused on quality intake",
        ctaText: "Learn About Our Screening",
        ctaLink: "/for-institutions"
      },
      {
        id: "US3",
        title: "Performance Reporting & Analytics",
        shortDescription: "Monthly performance dashboards with yield, funnel progression, retention indicators, and market insights.",
        longDescription: "Full transparency into your recruitment pipeline with comprehensive analytics that help you make data-driven decisions.",
        icon: LineChart,
        features: [
          "Monthly reporting & analytics",
          "Yield and pipeline visibility",
          "Conversion funnel insights",
          "Compliance checks for admissions",
          "Fraud prevention and verification systems"
        ],
        whoItsFor: "University admissions teams",
        ctaText: "See Sample Reports",
        ctaLink: "/for-institutions"
      },
      {
        id: "US4",
        title: "Co-Marketing & Visibility Campaigns",
        shortDescription: "Joint fairs, webinars, content, and targeted country campaigns.",
        longDescription: "Amplify your brand presence in key markets through coordinated marketing efforts, virtual events, and targeted content campaigns.",
        icon: Megaphone,
        features: [
          "Co-branding opportunities",
          "Joint webinars and events",
          "Digital content production",
          "Country-specific campaigns",
          "Social media amplification"
        ],
        whoItsFor: "Universities expanding reach",
        ctaText: "Explore Co-Marketing",
        ctaLink: "/for-institutions"
      },
      {
        id: "US5",
        title: "Market Intelligence & Expansion Support",
        shortDescription: "Advisory for universities entering Africa or Europe, including demand analysis and recruitment feasibility.",
        longDescription: "Data-driven insights to inform your recruitment strategy in new markets, including competitor analysis and demand forecasting.",
        icon: TrendingUp,
        features: [
          "Country demand reports",
          "Competitor analysis",
          "Emerging markets advisory",
          "Pricing and scholarship strategy consulting",
          "Market entry planning"
        ],
        whoItsFor: "Universities exploring new markets",
        ctaText: "Request Market Report",
        ctaLink: "/for-institutions"
      }
    ]
  },
  {
    id: 3,
    title: "Digital & AI-Powered Services",
    slug: "digital-services",
    header: "Intelligence That Powers Clarity",
    subheader: "The NUMAWAY digital ecosystem supports students, universities, and internal teams.",
    tagline: "Technology That Empowers Your Journey",
    description: "Experience seamless application tracking, AI-powered recommendations, and intelligent automation through our cutting-edge platform. Every tool is designed to simplify your path to global education.",
    icon: Laptop,
    image: digitalTechnologyImg,
    color: "primary",
    ctaText: "Explore the Platform",
    ctaLink: "/app",
    subServices: [
      {
        id: "DS1",
        title: "NUMAWAY Student Portal",
        shortDescription: "Real-time application tracking, document uploads, notifications, and advisor communication.",
        longDescription: "Track your entire journey from one intelligent dashboard. Upload documents, receive notifications, and communicate with your advisor in real-time.",
        icon: Laptop,
        features: [
          "Real-time application tracking",
          "Document upload & storage",
          "Chat with advisor",
          "Visa checklist automation",
          "Offer and status notifications"
        ],
        whoItsFor: "All students",
        ctaText: "Access Portal",
        ctaLink: "/app"
      },
      {
        id: "DS2",
        title: "AI Student Profiling Engine",
        shortDescription: "Instant program matching and country fit scoring.",
        longDescription: "Our AI evaluates your profile across multiple dimensions to recommend the best-fit programs, countries, and scholarships.",
        icon: Brain,
        features: [
          "AI student profiling engine",
          "AI program matching",
          "AI scholarship recommender",
          "AI visa readiness checker",
          "AI SOP and essay generator",
          "AI fraud detection (document integrity checks)"
        ],
        whoItsFor: "Students seeking intelligent guidance",
        ctaText: "Try AI Profiling",
        ctaLink: "/genie"
      },
      {
        id: "DS3",
        title: "Scholarship Engine",
        shortDescription: "A structured database with AI-powered recommendations.",
        longDescription: "Search, filter, and discover scholarships that match your profile with our intelligent scholarship matching system.",
        icon: Award,
        features: [
          "Comprehensive scholarship database",
          "AI-powered matching",
          "Eligibility checking",
          "Deadline tracking",
          "Application guidance"
        ],
        whoItsFor: "Students seeking funding",
        ctaText: "Search Scholarships",
        ctaLink: "/scholarships"
      },
      {
        id: "DS4",
        title: "Visa Readiness Checker",
        shortDescription: "A smart, eligibility scoring tool to assess visa strength.",
        longDescription: "Get an instant assessment of your visa readiness with specific recommendations for improvement.",
        icon: CheckCircle,
        features: [
          "Document completeness check",
          "Financial proof assessment",
          "Risk scoring",
          "Improvement recommendations",
          "Timeline estimation"
        ],
        whoItsFor: "Students preparing visa applications",
        ctaText: "Check Visa Readiness",
        ctaLink: "/genie"
      },
      {
        id: "DS5",
        title: "AI SOP Generator",
        shortDescription: "Guided, compliant writing assistance.",
        longDescription: "Create compelling statements of purpose with AI assistance that guides you through structured storytelling while maintaining authenticity.",
        icon: FileText,
        features: [
          "Structured prompts",
          "AI writing assistance",
          "Compliance checking",
          "Multiple drafts",
          "Expert review integration"
        ],
        whoItsFor: "Students writing applications",
        ctaText: "Generate SOP",
        ctaLink: "/genie"
      }
    ]
  },
  {
    id: 4,
    title: "Compliance & Fraud Prevention",
    slug: "compliance-services",
    header: "Built on Integrity and Trust",
    subheader: "Protecting students, universities, and governments with uncompromising standards.",
    tagline: "Trust, Verified",
    description: "NUMAWAY's strongest differentiator — rigorous quality control and fraud prevention that protects students and universities alike. We are the most trusted, safe, and university-reliable agency.",
    icon: Shield,
    image: complianceImg,
    color: "accent",
    ctaText: "Learn About Our Standards",
    ctaLink: "/consultation",
    subServices: [
      {
        id: "CF1",
        title: "Document Authenticity Screening",
        shortDescription: "Flagging anomalies, preventing fraud, and safeguarding reputation.",
        longDescription: "Every document is verified for authenticity using advanced screening tools and manual review processes.",
        icon: Shield,
        features: [
          "Document authenticity verification",
          "Visa compliance checks",
          "Admission compliance QC",
          "GDPR-compliant data handling"
        ],
        whoItsFor: "All stakeholders",
        ctaText: "Ensure Compliance",
        ctaLink: "/consultation"
      },
      {
        id: "CF2",
        title: "Application & Visa QC Gates",
        shortDescription: "Mandatory reviews before submission to ensure accuracy and compliance.",
        longDescription: "Multiple quality control checkpoints ensure nothing slips through — protecting both students and institutions.",
        icon: CheckCircle,
        features: [
          "QC before application submission",
          "QC before visa submission",
          "QC before offer acceptance",
          "QC before travel"
        ],
        whoItsFor: "Students and institutions",
        ctaText: "Learn About QC",
        ctaLink: "/consultation"
      },
      {
        id: "CF3",
        title: "Fraud Prevention Systems",
        shortDescription: "Advanced detection and prevention of fraudulent applications.",
        longDescription: "Our fraud prevention systems protect the integrity of the admissions process using AI detection and manual verification.",
        icon: Shield,
        features: [
          "Document anomaly detection",
          "Financial verification workflow",
          "Anti-fraud SOP enforcement",
          "High-risk case escalation"
        ],
        whoItsFor: "Universities and partners",
        ctaText: "Partner with Us",
        ctaLink: "/for-institutions"
      },
      {
        id: "CF4",
        title: "Compliance Framework Advisory (B2B)",
        shortDescription: "Helping institutions construct internal anti-fraud and quality systems.",
        longDescription: "We help other institutions build robust compliance frameworks based on our proven methodologies.",
        icon: Settings,
        features: [
          "Framework design",
          "Process documentation",
          "Staff training",
          "Audit preparation",
          "Continuous improvement"
        ],
        whoItsFor: "Institutions and agencies",
        ctaText: "Request Consultation",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: 5,
    title: "Community, School & Parent Services",
    slug: "community-services",
    header: "Empowering Families, Schools, and Communities",
    subheader: "Supporting everyone in your journey toward global education.",
    tagline: "Supporting Everyone in Your Journey",
    description: "We don't just support students — we engage families, schools, and build lasting communities of success. Parents stay informed, schools get trained, and communities thrive.",
    icon: Heart,
    image: communityImg,
    color: "secondary",
    isFree: true,
    ctaText: "Join Our Community",
    ctaLink: "/consultation",
    subServices: [
      {
        id: "CE1",
        title: "Parent Advisory Solutions",
        shortDescription: "Financial planning, risk guidance, and milestone updates.",
        longDescription: "Keep families informed and confident throughout the journey with regular updates, financial guidance, and dedicated support channels.",
        icon: Users,
        features: [
          "Financial planning guidance",
          "Country and risk briefing",
          "Timeline and milestone updates",
          "Dedicated parent support channel"
        ],
        whoItsFor: "Parents of prospective students",
        ctaText: "Learn More",
        ctaLink: "/consultation"
      },
      {
        id: "CE2",
        title: "School Outreach & Training",
        shortDescription: "Talks, workshops, counselor training, and institutional collaborations.",
        longDescription: "Bringing study abroad awareness to educational institutions through structured programs and professional development.",
        icon: School,
        features: [
          "School visits",
          "Training for counselors",
          "Career and study abroad seminars",
          "Institutional partnerships"
        ],
        whoItsFor: "Schools and colleges",
        ctaText: "Bring NUMAWAY to Your School",
        ctaLink: "/contact"
      },
      {
        id: "CE3",
        title: "NUMAWAY Ambassador Program",
        shortDescription: "A structured network of alumni and student ambassadors.",
        longDescription: "Join our community of successful students who help guide the next generation of global learners.",
        icon: Star,
        features: [
          "Ambassador recruitment",
          "Training and support",
          "Referral rewards",
          "Networking opportunities"
        ],
        whoItsFor: "Students and alumni",
        ctaText: "Become an Ambassador",
        ctaLink: "/consultation"
      },
      {
        id: "CE4",
        title: "NUMAWAY Student Community",
        shortDescription: "Connect with peers, alumni, and mentors worldwide.",
        longDescription: "A global community of students helping students through peer mentorship, networking, and shared experiences.",
        icon: Globe,
        features: [
          "Alumni network",
          "Peer mentorship",
          "Networking groups",
          "Events, workshops, town halls"
        ],
        whoItsFor: "All students",
        ctaText: "Join the Community",
        ctaLink: "/consultation"
      }
    ]
  },
  {
    id: 6,
    title: "Consulting & Advisory Services",
    slug: "consulting-services",
    header: "Industry Intelligence for a Changing World",
    subheader: "Strategic consulting for universities, governments, and institutions.",
    tagline: "NUMAWAY Insights & Solutions",
    description: "Strategic, data-driven advisory services for governments, schools, and institutions looking to improve their education mobility programs. This is the NUMAWAY Insights & Solutions wing.",
    icon: Briefcase,
    image: consultingImg,
    color: "primary",
    ctaText: "Request Proposal",
    ctaLink: "/contact",
    subServices: [
      {
        id: "CA1",
        title: "Market & Policy Intelligence Reports",
        shortDescription: "Analysis of visa changes, recruitment trends, competition, and demographics.",
        longDescription: "Data-driven insights for informed decision-making with comprehensive market analysis and policy tracking.",
        icon: LineChart,
        features: [
          "Market trend reports",
          "Visa policy insight dashboards",
          "Student movement analytics",
          "Demand forecasting"
        ],
        whoItsFor: "Governments and institutions",
        ctaText: "Request Report",
        ctaLink: "/contact"
      },
      {
        id: "CA2",
        title: "Operational Excellence Consulting",
        shortDescription: "Building SOPs, workflows, CRMs, and training programs for agencies/schools.",
        longDescription: "Transform your institution's operations with best practices, process automation, and staff development.",
        icon: Settings,
        features: [
          "CRM implementation",
          "Process automation",
          "SOP creation",
          "Staff training",
          "QC system setup"
        ],
        whoItsFor: "Agencies and schools",
        ctaText: "Get Started",
        ctaLink: "/contact"
      },
      {
        id: "CA3",
        title: "Anti-Fraud & Compliance Frameworks",
        shortDescription: "Designing rigorous systems to prevent fraudulent documents and increase trust.",
        longDescription: "Build robust compliance frameworks based on proven methodologies that protect your institution's reputation.",
        icon: Shield,
        features: [
          "Anti-fraud framework development",
          "Admissions process auditing",
          "Compliance workflow design",
          "Counselor training programs"
        ],
        whoItsFor: "Institutions seeking compliance excellence",
        ctaText: "Request Proposal",
        ctaLink: "/contact"
      },
      {
        id: "CA4",
        title: "Digital Transformation",
        shortDescription: "Modernize your admissions and student services.",
        longDescription: "Building internal admissions workflows, AI solutions for institutions, and data analytics capabilities.",
        icon: Rocket,
        features: [
          "Building internal admissions workflows",
          "AI solutions for institutions",
          "Data analytics and student insights",
          "Technology implementation"
        ],
        whoItsFor: "Institutions modernizing operations",
        ctaText: "Explore Solutions",
        ctaLink: "/contact"
      }
    ]
  },
  {
    id: 7,
    title: "Events & Marketing Services",
    slug: "events-services",
    header: "Connecting Students with Opportunities",
    subheader: "World-class events and content that drive engagement and conversion.",
    tagline: "Where Students Meet Their Future",
    description: "From global university fairs to digital content, we create meaningful touchpoints that connect students with their future. Join our events or partner with us for co-marketing.",
    icon: Calendar,
    image: eventsImg,
    color: "accent",
    ctaText: "Join Our Next Event",
    ctaLink: "/resources",
    subServices: [
      {
        id: "EV1",
        title: "Global Education Fairs",
        shortDescription: "Large-scale recruitment events hosted by NUMAWAY.",
        longDescription: "World-class events connecting students with universities from around the world in structured, high-impact settings.",
        icon: Globe,
        features: [
          "University fairs",
          "Country-specific webinars",
          "Scholarship info sessions",
          "Partner spotlight events"
        ],
        whoItsFor: "Students and universities",
        ctaText: "View Events",
        ctaLink: "/resources"
      },
      {
        id: "EV2",
        title: "Themed Webinars & Student Clinics",
        shortDescription: "Country days, scholarship days, visa webinars.",
        longDescription: "Focused online sessions that address specific topics like scholarships, visa preparation, and country-specific guidance.",
        icon: Video,
        features: [
          "Country days",
          "Scholarship sessions",
          "Visa webinars",
          "Application clinics"
        ],
        whoItsFor: "Prospective students",
        ctaText: "Register Now",
        ctaLink: "/resources"
      },
      {
        id: "EV3",
        title: "School/College Activations",
        shortDescription: "Career days, applicant workshops, mock visa prep sessions.",
        longDescription: "On-campus events that bring study abroad opportunities directly to students at their institutions.",
        icon: School,
        features: [
          "Career days",
          "Applicant workshops",
          "Mock visa prep sessions",
          "Information sessions"
        ],
        whoItsFor: "Schools and colleges",
        ctaText: "Host an Event",
        ctaLink: "/contact"
      },
      {
        id: "EV4",
        title: "Content Co-Production for Partners",
        shortDescription: "Marketing campaigns, ads, and digital storytelling.",
        longDescription: "Collaborative content creation including SEO blogs, newsletters, social media content, and video series.",
        icon: Megaphone,
        features: [
          "SEO blogs",
          "Scholarship newsletters",
          "TikTok + Instagram content series",
          "YouTube educational series"
        ],
        whoItsFor: "Partner institutions",
        ctaText: "Explore Partnership",
        ctaLink: "/for-institutions"
      }
    ]
  },
  {
    id: 8,
    title: "Premium & Specialized Services",
    slug: "premium-services",
    header: "Elevated Support for Discerning Clients",
    subheader: "Priority processing, dedicated advisors, and exclusive access.",
    tagline: "Excellence Without Compromise",
    description: "For students and families seeking the highest level of service, our premium offerings provide dedicated support, priority processing, and exclusive access to opportunities.",
    icon: Crown,
    image: premiumImg,
    color: "accent",
    ctaText: "Upgrade to Premium",
    ctaLink: "/consultation",
    subServices: [
      {
        id: "PR1",
        title: "VIP Student Service",
        shortDescription: "Dedicated senior advisor, priority application handling, accelerated processing.",
        longDescription: "Our VIP service provides the highest level of personalized support with a dedicated senior advisor, priority processing for all applications, and exclusive scholarship checks.",
        icon: Crown,
        features: [
          "Dedicated senior advisor",
          "Priority application handling",
          "Priority visa preparation",
          "Accelerated processing",
          "Exclusive scholarship checks"
        ],
        whoItsFor: "Students seeking premium support",
        ctaText: "Upgrade to VIP",
        ctaLink: "/consultation"
      },
      {
        id: "PR2",
        title: "Family Relocation Advisory",
        shortDescription: "Long-term migration planning for families exploring education-led migration.",
        longDescription: "Comprehensive planning for families considering long-term relocation, including dependent visas, housing, and settlement support.",
        icon: Home,
        features: [
          "Long-term migration planning",
          "Dependent visa guidance",
          "Family housing advisory",
          "Settlement planning"
        ],
        whoItsFor: "Families planning relocation",
        ctaText: "Plan Your Move",
        ctaLink: "/consultation"
      },
      {
        id: "PR3",
        title: "Intensive Career & Pathway Coaching",
        shortDescription: "Career mapping, interviews, employer readiness.",
        longDescription: "Detailed long-term planning including industry-specific job market preparation, professional networking, and immigration roadmap development.",
        icon: Briefcase,
        features: [
          "Detailed long-term immigration roadmap",
          "Industry-specific job market prep",
          "Professional networking access",
          "Interview coaching"
        ],
        whoItsFor: "Career-focused students",
        ctaText: "Start Coaching",
        ctaLink: "/consultation"
      }
    ]
  },
  {
    id: 9,
    title: "Future & Add-On Services",
    slug: "future-services",
    header: "Expanding Horizons",
    subheader: "New services coming soon to enhance your journey.",
    tagline: "What's Next from NUMAWAY",
    description: "We're constantly innovating to serve you better. These upcoming services represent our commitment to providing the most complete education mobility ecosystem.",
    icon: Rocket,
    image: futureImg,
    color: "primary",
    ctaText: "Stay Updated",
    ctaLink: "/consultation",
    subServices: [
      {
        id: "FUT1",
        title: "NUMAWAY Micro-Courses",
        shortDescription: "Visa prep masterclasses, SOP writing, interview drills.",
        longDescription: "Short, focused courses that help you master specific skills needed for your study abroad journey.",
        icon: BookOpen,
        features: [
          "SOP writing masterclass",
          "Visa interview prep course",
          "Country-specific readiness kits",
          "On-demand learning"
        ],
        whoItsFor: "All students",
        ctaText: "Coming Soon",
        ctaLink: "/consultation"
      },
      {
        id: "FUT2",
        title: "Financial Ecosystem Support",
        shortDescription: "Bank partnerships, POF advisory.",
        longDescription: "Partnerships with banks and financial institutions to help students with education loans and proof of funds.",
        icon: Wallet,
        features: [
          "Partnerships with banks",
          "Student loan advisory",
          "Proof-of-funds services (compliant only)"
        ],
        whoItsFor: "Students needing financial support",
        ctaText: "Learn More",
        ctaLink: "/loans"
      },
      {
        id: "FUT3",
        title: "Travel & Insurance Guidance",
        shortDescription: "Flight booking assistance, travel readiness.",
        longDescription: "End-to-end travel support including flight booking assistance and travel insurance guidance.",
        icon: PlaneTakeoff,
        features: [
          "Flight booking support",
          "Travel insurance assistance",
          "Airport assistance",
          "Travel readiness checks"
        ],
        whoItsFor: "Students preparing to travel",
        ctaText: "Coming Soon",
        ctaLink: "/consultation"
      },
      {
        id: "FUT4",
        title: "Referral & Alumni System",
        shortDescription: "Structured reward and community-driven referral engine.",
        longDescription: "A comprehensive referral program that rewards students for helping others discover NUMAWAY.",
        icon: Gift,
        features: [
          "Structured referral rewards",
          "Alumni sponsorship pathways",
          "Community benefits",
          "Networking opportunities"
        ],
        whoItsFor: "Students and alumni",
        ctaText: "Join Waitlist",
        ctaLink: "/consultation"
      }
    ]
  }
];

export const getServiceDomainBySlug = (slug: string): ServiceDomain | undefined => {
  return serviceDomains.find(domain => domain.slug === slug);
};

export const getServiceDomainById = (id: number): ServiceDomain | undefined => {
  return serviceDomains.find(domain => domain.id === id);
};
