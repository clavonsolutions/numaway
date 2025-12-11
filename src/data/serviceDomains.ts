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
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface ServiceDomain {
  id: number;
  title: string;
  slug: string;
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
    tagline: "Your Complete Study Abroad Journey",
    description: "From initial counselling to career success abroad — we support every step of your educational journey with personalized guidance and AI-powered tools.",
    icon: GraduationCap,
    image: studentCounsellingImg,
    color: "secondary",
    isFree: true,
    ctaText: "Book Free Consultation",
    ctaLink: "/consultation",
    subServices: [
      {
        title: "Student Profiling & Guidance",
        description: "AI-powered student profiling with personalized country, program, and scholarship recommendations based on your unique profile.",
        icon: Target,
        features: [
          "AI-powered student profiling",
          "Country & program recommendation engine",
          "Budget-based pathway mapping",
          "Academic background evaluation",
          "Visa eligibility evaluation",
          "Scholarship-fit scoring",
          "Personalized study plan development"
        ]
      },
      {
        title: "Program & University Selection",
        description: "Find your perfect university match based on your goals, budget, and career aspirations.",
        icon: School,
        features: [
          "AI-recommended course shortlist",
          "Country comparison advisory",
          "Tuition + cost-of-living comparison",
          "Admission competitiveness insights",
          "University matching based on goals, budget, and career pathways"
        ]
      },
      {
        title: "Application Management",
        description: "End-to-end admissions support from document preparation to offer acceptance.",
        icon: FileCheck,
        features: [
          "End-to-end admissions management",
          "Application packet preparation",
          "SOP/Personal Statement writing support (AI-enhanced + human QC)",
          "Reference letter templates and guidance",
          "Document completeness checks",
          "Application submission and follow-up",
          "Offer acceptance advisory"
        ]
      },
      {
        title: "Scholarship & Funding Services",
        description: "Discover scholarships you qualify for and get expert help with applications.",
        icon: CreditCard,
        features: [
          "Global scholarship discovery engine",
          "Scholarship eligibility assessment",
          "Scholarship application assistance",
          "Financial planning guidance",
          "Payment and tuition structure advisory"
        ]
      },
      {
        title: "Visa & Immigration Support",
        description: "Navigate the visa process with confidence through our compliance-first approach.",
        icon: Plane,
        features: [
          "Visa document builder",
          "Visa checklist generation",
          "Financial proof assessment",
          "Visa interview preparation",
          "Study permit coaching",
          "Sponsorship advisory",
          "Pre-visa QC verification (compliance-first)"
        ]
      },
      {
        title: "Student Readiness & Pre-Departure",
        description: "Prepare for life abroad with comprehensive briefings and planning support.",
        icon: Compass,
        features: [
          "Pre-departure academy",
          "Cultural adaptation briefings",
          "Travel planning",
          "Packing checklist",
          "Airport arrival guidance"
        ]
      },
      {
        title: "Housing & Settlement Services",
        description: "Find safe accommodation and settle smoothly into your new home.",
        icon: Home,
        features: [
          "Accommodation matching",
          "Airport pickup coordination",
          "SIM, transport, and onboarding basics advisory",
          "Local orientation guides"
        ]
      },
      {
        title: "Post-Arrival Support",
        description: "Continued support after you land to help you thrive abroad.",
        icon: HeadphonesIcon,
        features: [
          "Arrival check-ins",
          "Emergency support guidance",
          "Part-time job advisory",
          "Local integration support",
          "University onboarding assistance"
        ]
      },
      {
        title: "Career & Future Pathway Advisory",
        description: "Plan your career progression and immigration pathway for long-term success.",
        icon: Briefcase,
        features: [
          "CV and LinkedIn optimization",
          "Career coaching",
          "Graduate work permit pathways",
          "Migration pathways advisory",
          "Internship and job search strategy"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "University Partnership Services",
    slug: "university-partnerships",
    tagline: "For Institutions Seeking Quality Students",
    description: "Partner with NUMAWAY to access high-quality, verified student pipelines with transparent reporting and fraud-free recruitment.",
    icon: Building2,
    image: universityPartnershipImg,
    color: "accent",
    ctaText: "Partner With Us",
    ctaLink: "/for-institutions",
    subServices: [
      {
        title: "Recruitment & Conversion Services",
        description: "Access high-quality students through AI-powered screening and targeted campaigns.",
        icon: Users,
        features: [
          "High-quality student recruitment",
          "AI-based applicant screening",
          "Yield optimization",
          "Country-specific marketing campaigns",
          "School/university fairs & webinars"
        ]
      },
      {
        title: "Partner Reporting & Compliance",
        description: "Full visibility into your recruitment pipeline with compliance-first processes.",
        icon: LineChart,
        features: [
          "Monthly reporting & analytics",
          "Yield and pipeline visibility",
          "Conversion funnel insights",
          "Compliance checks for admissions",
          "Fraud prevention and verification systems"
        ]
      },
      {
        title: "University Relations Management",
        description: "Strategic partnership development with ongoing performance optimization.",
        icon: HandshakeIcon,
        features: [
          "Partnership acquisition",
          "Partnership negotiation",
          "Tiered partner model execution",
          "Co-branding & co-marketing campaigns",
          "Annual review and performance reporting"
        ]
      },
      {
        title: "Market Intelligence for Universities",
        description: "Data-driven insights to inform your recruitment strategy.",
        icon: TrendingUp,
        features: [
          "Country demand reports",
          "Competitor analysis",
          "Emerging markets advisory",
          "Pricing and scholarship strategy consulting"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Digital & AI-Powered Services",
    slug: "digital-services",
    tagline: "Technology That Empowers Your Journey",
    description: "Experience seamless application tracking, AI-powered recommendations, and intelligent automation through our cutting-edge platform.",
    icon: Laptop,
    image: digitalTechnologyImg,
    color: "primary",
    ctaText: "Try NUMAWAY App",
    ctaLink: "/app",
    subServices: [
      {
        title: "NUMAWAY Web App & Student Portal",
        description: "Track your entire journey from one intelligent dashboard.",
        icon: Laptop,
        features: [
          "Real-time application tracking",
          "Document upload & storage",
          "Chat with advisor",
          "Visa checklist automation",
          "Offer and status notifications"
        ]
      },
      {
        title: "NUMAWAY AI Engines",
        description: "AI that works for you — from profiling to fraud detection.",
        icon: Brain,
        features: [
          "AI student profiling engine",
          "AI program matching",
          "AI scholarship recommender",
          "AI visa readiness checker",
          "AI SOP and essay generator",
          "AI fraud detection (document integrity checks)"
        ]
      },
      {
        title: "NUMAWAY CRM & Automation",
        description: "Intelligent automation that keeps your journey on track.",
        icon: Settings,
        features: [
          "Lead management",
          "Application pipeline automation",
          "Notification system",
          "SLA monitoring",
          "Document QC workflow"
        ]
      },
      {
        title: "NUMAWAY Content & Knowledge Hub",
        description: "Everything you need to know about studying abroad, in one place.",
        icon: BookOpen,
        features: [
          "Country guides",
          "Program guides",
          "Visa rules & updates",
          "Scholarship database",
          "Student success stories"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Compliance & Fraud Prevention",
    slug: "compliance-services",
    tagline: "Trust, Verified",
    description: "NUMAWAY's strongest differentiator — rigorous quality control and fraud prevention that protects students and universities alike.",
    icon: Shield,
    image: complianceImg,
    color: "accent",
    ctaText: "Learn About Our Standards",
    ctaLink: "/consultation",
    subServices: [
      {
        title: "Compliance Services",
        description: "Every document verified, every process compliant.",
        icon: CheckCircle,
        features: [
          "Document authenticity verification",
          "Visa compliance checks",
          "Admission compliance QC",
          "GDPR-compliant data handling"
        ]
      },
      {
        title: "Fraud Prevention",
        description: "Protecting students and partners from bad actors.",
        icon: Shield,
        features: [
          "Document anomaly detection",
          "Financial verification workflow",
          "Anti-fraud SOP enforcement",
          "High-risk case escalation"
        ]
      },
      {
        title: "Quality Control Services",
        description: "Multiple QC checkpoints ensure nothing slips through.",
        icon: Award,
        features: [
          "QC before application submission",
          "QC before visa submission",
          "QC before offer acceptance",
          "QC before travel"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Community, School & Parent Services",
    slug: "community-services",
    tagline: "Supporting Everyone in Your Journey",
    description: "We don't just support students — we engage families, schools, and build lasting communities of success.",
    icon: Heart,
    image: communityImg,
    color: "secondary",
    isFree: true,
    ctaText: "Join Our Community",
    ctaLink: "/consultation",
    subServices: [
      {
        title: "Parent Advisory Services",
        description: "Keep families informed and confident throughout the journey.",
        icon: Users,
        features: [
          "Financial planning guidance",
          "Country and risk briefing",
          "Timeline and milestone updates",
          "Dedicated parent support channel"
        ]
      },
      {
        title: "High School/College Engagement",
        description: "Bringing study abroad awareness to educational institutions.",
        icon: School,
        features: [
          "School visits",
          "Training for counselors",
          "Career and study abroad seminars",
          "NUMAWAY Ambassador Program"
        ]
      },
      {
        title: "NUMAWAY Student Community",
        description: "Connect with peers, alumni, and mentors worldwide.",
        icon: Globe,
        features: [
          "Alumni network",
          "Peer mentorship",
          "Networking groups",
          "Events, workshops, town halls"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Consulting & Advisory Services",
    slug: "consulting-services",
    tagline: "NUMAWAY Insights & Solutions",
    description: "Strategic, data-driven advisory services for governments, schools, and institutions looking to improve their education mobility programs.",
    icon: Briefcase,
    image: consultingImg,
    color: "primary",
    ctaText: "Request Consultation",
    ctaLink: "/contact",
    subServices: [
      {
        title: "Industry Intelligence & Research",
        description: "Data-driven insights for informed decision-making.",
        icon: LineChart,
        features: [
          "Market trend reports",
          "Visa policy insight dashboards",
          "Student movement analytics",
          "Demand forecasting"
        ]
      },
      {
        title: "Policy & Compliance Advisory",
        description: "For governments, schools, and institutions seeking compliance excellence.",
        icon: FileText,
        features: [
          "Anti-fraud framework development",
          "Admissions process auditing",
          "Compliance workflow design",
          "Counselor training programs"
        ]
      },
      {
        title: "Operational Excellence",
        description: "Transform your institution's operations with best practices.",
        icon: Settings,
        features: [
          "CRM implementation",
          "Process automation",
          "SOP creation",
          "Staff training",
          "QC system setup"
        ]
      },
      {
        title: "Digital Transformation",
        description: "Modernize your admissions and student services.",
        icon: Rocket,
        features: [
          "Building internal admissions workflows",
          "AI solutions for institutions",
          "Data analytics and student insights"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Events & Marketing Services",
    slug: "events-services",
    tagline: "Connecting Students with Opportunities",
    description: "From global university fairs to digital content, we create meaningful touchpoints that connect students with their future.",
    icon: Calendar,
    image: eventsImg,
    color: "accent",
    ctaText: "View Upcoming Events",
    ctaLink: "/resources",
    subServices: [
      {
        title: "NUMAWAY Global Events",
        description: "World-class events connecting students with universities.",
        icon: Globe,
        features: [
          "University fairs",
          "Country-specific webinars",
          "Scholarship info sessions",
          "Partner spotlight events"
        ]
      },
      {
        title: "School/College Activations",
        description: "Bringing study abroad directly to students.",
        icon: School,
        features: [
          "Career days",
          "Applicant workshops",
          "Mock visa prep sessions"
        ]
      },
      {
        title: "Digital Content Production",
        description: "Educational content that informs and inspires.",
        icon: Video,
        features: [
          "SEO blogs",
          "Scholarship newsletters",
          "TikTok + Instagram content series",
          "YouTube educational series"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Premium & Specialized Services",
    slug: "premium-services",
    tagline: "Elevated Support for Exceptional Needs",
    description: "For students and families seeking priority handling, dedicated advisors, and comprehensive support packages.",
    icon: Crown,
    image: premiumImg,
    color: "accent",
    ctaText: "Explore VIP Services",
    ctaLink: "/consultation",
    subServices: [
      {
        title: "VIP Student Service",
        description: "Priority access, dedicated advisor, accelerated processing.",
        icon: Star,
        features: [
          "Dedicated senior advisor",
          "Priority application handling",
          "Priority visa preparation",
          "Accelerated processing",
          "Exclusive scholarship checks"
        ]
      },
      {
        title: "Family Relocation Advisory",
        description: "For families planning long-term moves abroad.",
        icon: Home,
        features: [
          "Long-term migration planning",
          "Dependent visa guidance",
          "Family housing advisory"
        ]
      },
      {
        title: "Premium Career Pathway Service",
        description: "Long-term career and immigration planning for ambitious students.",
        icon: TrendingUp,
        features: [
          "Detailed long-term immigration roadmap",
          "Industry-specific job market prep",
          "Professional networking access"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Future Services & Extensions",
    slug: "future-services",
    tagline: "What's Coming Next",
    description: "Continuous innovation to serve you better — from micro-courses to financial ecosystems and alumni networks.",
    icon: Rocket,
    image: futureImg,
    color: "secondary",
    ctaText: "Stay Updated",
    ctaLink: "/contact",
    subServices: [
      {
        title: "NUMAWAY Micro-Courses",
        description: "Bite-sized learning to prepare you for success.",
        icon: BookOpen,
        features: [
          "SOP writing masterclass",
          "Visa interview prep course",
          "Country-specific readiness kits"
        ]
      },
      {
        title: "NUMAWAY Financial Ecosystem",
        description: "Making study abroad financially accessible.",
        icon: Wallet,
        features: [
          "Partnerships with banks",
          "Student loan advisory",
          "Proof-of-funds services (compliant only)"
        ]
      },
      {
        title: "NUMAWAY Travel Services",
        description: "Complete travel support for your journey.",
        icon: PlaneTakeoff,
        features: [
          "Flight booking support",
          "Travel insurance assistance"
        ]
      },
      {
        title: "NUMAWAY Alumni & Referral Engine",
        description: "Rewarding our community for spreading the word.",
        icon: Gift,
        features: [
          "Structured referral rewards",
          "Alumni sponsorship pathways"
        ]
      }
    ]
  }
];

export const getServiceDomainBySlug = (slug: string): ServiceDomain | undefined => {
  return serviceDomains.find(d => d.slug === slug);
};
