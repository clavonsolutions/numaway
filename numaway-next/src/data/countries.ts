export interface Country {
  name: string;
  slug: string;
  flag: string;
  universities: number;
  students: string;
  description: string;
  whyStudy: string[];
  livingCost: string;
  visaInfo: string;
  workRights: string;
  postStudyVisa: string;
  scholarships: string[];
  topUniversities: string[];
  topCourses: string[];
  applicationSteps: string[];
  featured?: boolean;
}

export const countries: Country[] = [
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    flag: "🇬🇧",
    universities: 150,
    students: "600,000+",
    description: "The UK offers world-renowned education with centuries of academic excellence. Home to Oxford, Cambridge, and many Russell Group universities, it's a top destination for Nigerian students seeking quality education and global career opportunities.",
    whyStudy: [
      "World-class universities with global recognition",
      "Shorter degree programs (3 years undergrad, 1 year masters)",
      "Work while studying up to 20 hours/week",
      "Graduate Route visa for 2 years post-study work",
      "Multicultural environment with strong Nigerian community"
    ],
    livingCost: "£12,000 - £15,000 per year (outside London)",
    visaInfo: "Student visa requires CAS from university, proof of funds (£1,334/month for London, £1,023 elsewhere), and English proficiency.",
    workRights: "20 hours/week during term, full-time during holidays",
    postStudyVisa: "Graduate Route: 2 years (3 years for PhD)",
    scholarships: ["Chevening Scholarship", "Commonwealth Scholarship", "GREAT Scholarships", "University-specific awards"],
    topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL", "University of Manchester"],
    topCourses: ["Business & Management", "Computer Science", "Engineering", "Law", "Medicine"],
    applicationSteps: [
      "Research universities and courses",
      "Prepare required documents (transcripts, personal statement)",
      "Apply via UCAS or directly",
      "Receive offer and pay deposit",
      "Apply for student visa",
      "Arrange accommodation",
      "Pre-departure preparation"
    ],
    featured: true
  },
  {
    name: "United States",
    slug: "united-states",
    flag: "🇺🇸",
    universities: 200,
    students: "1,000,000+",
    description: "The USA hosts the world's largest international student population. With Ivy League institutions and cutting-edge research facilities, American universities offer unparalleled opportunities for academic and professional growth.",
    whyStudy: [
      "Top-ranked universities globally",
      "Flexible curriculum and major/minor system",
      "Extensive research opportunities",
      "OPT allows 1-3 years of post-study work",
      "Strong alumni networks worldwide"
    ],
    livingCost: "$15,000 - $25,000 per year",
    visaInfo: "F-1 student visa requires I-20 from university, SEVIS fee, proof of funds, and visa interview.",
    workRights: "20 hours/week on-campus during term",
    postStudyVisa: "OPT: 12 months (36 months for STEM)",
    scholarships: ["Fulbright Program", "Hubert Humphrey Fellowship", "University merit scholarships", "Athletic scholarships"],
    topUniversities: ["Harvard University", "MIT", "Stanford University", "Yale University", "Princeton University"],
    topCourses: ["Computer Science", "MBA", "Engineering", "Medicine", "Data Science"],
    applicationSteps: [
      "Research universities and programs",
      "Take standardized tests (SAT/GRE/GMAT)",
      "Prepare application materials",
      "Apply to universities",
      "Receive I-20 form",
      "Apply for F-1 visa",
      "Attend visa interview"
    ],
    featured: true
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    universities: 100,
    students: "800,000+",
    description: "Canada is known for its welcoming immigration policies, high quality of life, and affordable education. It's become the preferred destination for Nigerian students seeking a pathway to permanent residency.",
    whyStudy: [
      "Pathway to permanent residency (PR)",
      "Affordable tuition compared to US/UK",
      "Safe and multicultural society",
      "High quality of life",
      "Post-Graduation Work Permit (PGWP) up to 3 years"
    ],
    livingCost: "CAD 15,000 - 20,000 per year",
    visaInfo: "Study permit requires letter of acceptance, proof of funds (CAD 20,635 + tuition), and clean background.",
    workRights: "20 hours/week during term, full-time during breaks",
    postStudyVisa: "PGWP: Up to 3 years based on program length",
    scholarships: ["Vanier Canada Graduate Scholarships", "Ontario Trillium Scholarship", "University-specific awards"],
    topUniversities: ["University of Toronto", "McGill University", "UBC", "University of Waterloo", "McMaster University"],
    topCourses: ["Computer Science", "Business Analytics", "Engineering", "Nursing", "Data Science"],
    applicationSteps: [
      "Research DLI-designated institutions",
      "Apply to universities",
      "Receive letter of acceptance",
      "Apply for study permit",
      "Biometrics appointment",
      "Wait for visa decision",
      "Prepare for departure"
    ],
    featured: true
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    universities: 80,
    students: "700,000+",
    description: "Australia combines excellent education with an incredible lifestyle. Its universities consistently rank among the world's best, and the country offers generous post-study work rights.",
    whyStudy: [
      "High-quality education system",
      "Beautiful climate and lifestyle",
      "Post-study work rights up to 6 years",
      "Strong job market for graduates",
      "Pathway to permanent residency"
    ],
    livingCost: "AUD 21,000 - 25,000 per year",
    visaInfo: "Student visa (subclass 500) requires CoE, GTE statement, proof of funds, and health insurance.",
    workRights: "Unlimited hours from July 2023",
    postStudyVisa: "Temporary Graduate visa: 2-6 years depending on qualification",
    scholarships: ["Australia Awards", "Destination Australia", "Research Training Program", "University scholarships"],
    topUniversities: ["University of Melbourne", "University of Sydney", "UNSW", "ANU", "Monash University"],
    topCourses: ["Engineering", "IT", "Business", "Health Sciences", "Architecture"],
    applicationSteps: [
      "Research courses and universities",
      "Apply to institutions",
      "Receive CoE",
      "Organize health insurance (OSHC)",
      "Apply for student visa",
      "Health examination",
      "Visa decision and travel"
    ],
    featured: true
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    universities: 90,
    students: "400,000+",
    description: "Germany offers tuition-free education at public universities, making it an attractive destination for budget-conscious students. It's Europe's economic powerhouse with excellent career prospects.",
    whyStudy: [
      "Tuition-free at public universities",
      "Strong economy and job market",
      "18-month post-study job search visa",
      "High quality of life",
      "Central European location for travel"
    ],
    livingCost: "€10,000 - €12,000 per year",
    visaInfo: "Student visa requires university admission, blocked account (€11,208/year), and health insurance.",
    workRights: "120 full days or 240 half days per year",
    postStudyVisa: "18 months to find qualified employment",
    scholarships: ["DAAD Scholarships", "Deutschlandstipendium", "Heinrich Böll Foundation", "Erasmus+"],
    topUniversities: ["TU Munich", "LMU Munich", "Heidelberg University", "Humboldt University", "RWTH Aachen"],
    topCourses: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Automotive Engineering"],
    applicationSteps: [
      "Research programs (many in English)",
      "Apply via uni-assist or directly",
      "Receive admission letter",
      "Open blocked account",
      "Apply for student visa",
      "Find accommodation",
      "Register upon arrival"
    ],
    featured: true
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    universities: 40,
    students: "35,000+",
    description: "Ireland is home to major tech companies and offers a friendly, English-speaking environment. Its universities are highly ranked and the country has strong ties to both the UK and EU.",
    whyStudy: [
      "English-speaking country",
      "Tech hub of Europe (Google, Facebook, etc.)",
      "2-year post-study stay back option",
      "Friendly and welcoming culture",
      "Gateway to EU job market"
    ],
    livingCost: "€10,000 - €15,000 per year",
    visaInfo: "Student visa requires admission letter, proof of funds (€10,000), and health insurance.",
    workRights: "20 hours/week during term, 40 hours during holidays",
    postStudyVisa: "Third Level Graduate Scheme: 2 years",
    scholarships: ["Government of Ireland Scholarship", "Irish Research Council", "University scholarships"],
    topUniversities: ["Trinity College Dublin", "UCD", "NUI Galway", "UCC", "DCU"],
    topCourses: ["Computer Science", "Business", "Pharmacy", "Engineering", "Data Analytics"],
    applicationSteps: [
      "Research courses and universities",
      "Apply directly to universities",
      "Receive offer letter",
      "Pay deposit",
      "Apply for student visa",
      "Arrange accommodation",
      "Travel to Ireland"
    ],
    featured: true
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    flag: "🇳🇱",
    universities: 55,
    students: "122,000+",
    description: "The Netherlands offers numerous English-taught programs and a highly international environment. Known for innovation and quality of life, it's a great choice for European studies.",
    whyStudy: [
      "2,100+ English-taught programs",
      "Innovative education approach",
      "Orientation year visa after graduation",
      "Multicultural and international",
      "Central location in Europe"
    ],
    livingCost: "€10,000 - €14,000 per year",
    visaInfo: "MVV visa required, sponsored by university. Proof of funds (€13,000/year) required.",
    workRights: "16 hours/week or full-time in summer",
    postStudyVisa: "Orientation Year: 1 year job search",
    scholarships: ["Holland Scholarship", "Orange Tulip Scholarship", "Erasmus Mundus", "University scholarships"],
    topUniversities: ["University of Amsterdam", "TU Delft", "Leiden University", "Utrecht University", "Erasmus University"],
    topCourses: ["Business", "Engineering", "International Relations", "Law", "Arts & Design"],
    applicationSteps: [
      "Check Studyfinder.nl for programs",
      "Apply via Studielink",
      "Receive admission",
      "University applies for MVV",
      "Collect visa at embassy",
      "Register in Netherlands",
      "Start studies"
    ]
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    universities: 75,
    students: "370,000+",
    description: "France offers prestigious education at affordable rates, with a rich cultural experience. Paris and other cities are hubs for business, fashion, and the arts.",
    whyStudy: [
      "Low tuition fees even for non-EU students",
      "Rich culture and history",
      "Many English-taught programs",
      "Strong research environment",
      "Post-study work options"
    ],
    livingCost: "€10,000 - €15,000 per year",
    visaInfo: "Long-stay student visa via Campus France procedure.",
    workRights: "20 hours/week during studies",
    postStudyVisa: "APS visa: 1 year to seek employment",
    scholarships: ["Eiffel Excellence Scholarship", "Erasmus+", "Campus France scholarships"],
    topUniversities: ["Sorbonne University", "Sciences Po", "HEC Paris", "École Polytechnique", "INSEAD"],
    topCourses: ["Business", "Fashion", "Engineering", "Arts", "Hospitality"],
    applicationSteps: [
      "Apply via Campus France",
      "Choose university and program",
      "Complete Études en France procedure",
      "Attend Campus France interview",
      "Apply for visa",
      "Travel to France"
    ]
  },
  {
    name: "UAE",
    slug: "uae",
    flag: "🇦🇪",
    universities: 30,
    students: "77,000+",
    description: "The UAE, especially Dubai, has emerged as an education hub with branches of top international universities. It offers a tax-free environment and strong career prospects.",
    whyStudy: [
      "Branches of top international universities",
      "Tax-free income after graduation",
      "Strategic location between East and West",
      "Modern infrastructure",
      "Multicultural environment"
    ],
    livingCost: "AED 50,000 - 70,000 per year",
    visaInfo: "Student visa sponsored by university after admission and fee payment.",
    workRights: "Part-time work allowed with permit",
    postStudyVisa: "Seek employment with job visa sponsorship",
    scholarships: ["University merit scholarships", "Government scholarships for specific programs"],
    topUniversities: ["NYU Abu Dhabi", "American University of Sharjah", "University of Wollongong Dubai", "Heriot-Watt Dubai"],
    topCourses: ["Business", "Engineering", "Hospitality", "Architecture", "Finance"],
    applicationSteps: [
      "Apply to university directly",
      "Receive admission letter",
      "Pay tuition deposit",
      "University applies for visa",
      "Travel to UAE",
      "Complete registration"
    ]
  },
  {
    name: "Singapore",
    slug: "singapore",
    flag: "🇸🇬",
    universities: 15,
    students: "60,000+",
    description: "Singapore is a global business hub with world-class universities. Its strategic location in Asia and strong economy make it attractive for ambitious students.",
    whyStudy: [
      "Top-ranked universities in Asia",
      "Global business hub",
      "Safe and clean city-state",
      "English-speaking environment",
      "Gateway to Asian markets"
    ],
    livingCost: "SGD 15,000 - 25,000 per year",
    visaInfo: "Student's Pass required, applied through university via SOLAR system.",
    workRights: "16 hours/week during term at approved institutions",
    postStudyVisa: "Long Term Visit Pass for job search",
    scholarships: ["Singapore Government Scholarships", "University scholarships", "ASEAN scholarships"],
    topUniversities: ["NUS", "NTU", "SMU", "SUTD", "SIM"],
    topCourses: ["Business", "Engineering", "Computer Science", "Finance", "Medicine"],
    applicationSteps: [
      "Apply to university",
      "Receive offer letter",
      "Accept offer and pay fees",
      "Apply for Student's Pass",
      "Travel to Singapore",
      "Complete registration"
    ]
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    flag: "🇲🇾",
    universities: 50,
    students: "170,000+",
    description: "Malaysia offers affordable quality education with many branch campuses of UK and Australian universities. It's a popular choice for budget-conscious students.",
    whyStudy: [
      "Very affordable tuition and living costs",
      "English-taught programs",
      "Branch campuses of top universities",
      "Multicultural environment",
      "Tropical climate"
    ],
    livingCost: "MYR 12,000 - 18,000 per year",
    visaInfo: "Student visa processed by EMGS after university enrollment.",
    workRights: "20 hours/week during holidays only",
    postStudyVisa: "Limited, may require job offer",
    scholarships: ["Malaysian International Scholarship", "University scholarships"],
    topUniversities: ["University of Malaya", "Monash Malaysia", "Nottingham Malaysia", "Taylor's University"],
    topCourses: ["Business", "Engineering", "Medicine", "IT", "Hospitality"],
    applicationSteps: [
      "Apply to university",
      "Receive offer letter",
      "Pay fees",
      "Apply for student visa via EMGS",
      "Wait for visa approval",
      "Travel to Malaysia"
    ]
  },
  {
    name: "Italy",
    slug: "italy",
    flag: "🇮🇹",
    universities: 60,
    students: "110,000+",
    description: "Italy combines rich history and culture with quality education. It's particularly strong in design, architecture, and the arts.",
    whyStudy: [
      "Low or no tuition at public universities",
      "Rich cultural heritage",
      "Strong in design and arts",
      "Central European location",
      "Delicious cuisine and lifestyle"
    ],
    livingCost: "€8,000 - €12,000 per year",
    visaInfo: "Student visa via Universitaly portal and Italian embassy.",
    workRights: "20 hours/week during studies",
    postStudyVisa: "1 year extension to seek employment",
    scholarships: ["Italian Government Scholarships", "Regional scholarships", "University scholarships"],
    topUniversities: ["Politecnico di Milano", "Bocconi University", "University of Bologna", "Sapienza Rome"],
    topCourses: ["Design", "Architecture", "Fashion", "Engineering", "Business"],
    applicationSteps: [
      "Apply via Universitaly",
      "University evaluates application",
      "Receive admission letter",
      "Apply for visa at embassy",
      "Travel to Italy",
      "Register at Questura"
    ]
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    universities: 50,
    students: "125,000+",
    description: "Spain offers a vibrant lifestyle with quality education at affordable prices. Learning Spanish opens doors across Latin America and Spain's growing economy.",
    whyStudy: [
      "Affordable tuition fees",
      "Learn Spanish - 3rd most spoken language",
      "Vibrant culture and nightlife",
      "Growing startup ecosystem",
      "Great weather year-round"
    ],
    livingCost: "€8,000 - €12,000 per year",
    visaInfo: "Student visa required for stays over 90 days.",
    workRights: "20 hours/week with work permit",
    postStudyVisa: "Job search extension possible",
    scholarships: ["Spanish Government Scholarships", "Erasmus+", "University scholarships"],
    topUniversities: ["University of Barcelona", "IE Business School", "ESADE", "Universidad Complutense"],
    topCourses: ["Business", "Spanish Language", "Tourism", "Architecture", "Engineering"],
    applicationSteps: [
      "Apply to university",
      "Receive acceptance",
      "Apply for student visa",
      "Arrange accommodation",
      "Travel to Spain",
      "Register with police"
    ]
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    flag: "🇨🇾",
    universities: 20,
    students: "30,000+",
    description: "Cyprus is an emerging education destination offering affordable European education with a Mediterranean lifestyle. It's becoming popular among Nigerian students.",
    whyStudy: [
      "Affordable EU education",
      "English-taught programs",
      "Mediterranean climate",
      "Safe environment",
      "Growing Nigerian community"
    ],
    livingCost: "€6,000 - €9,000 per year",
    visaInfo: "Student visa application through Cyprus embassy.",
    workRights: "20 hours/week during term",
    postStudyVisa: "Limited post-study options",
    scholarships: ["University scholarships", "Early bird discounts"],
    topUniversities: ["University of Cyprus", "Cyprus University of Technology", "European University Cyprus"],
    topCourses: ["Business", "Medicine", "Engineering", "Hospitality", "Law"],
    applicationSteps: [
      "Apply directly to university",
      "Receive admission letter",
      "Pay deposit",
      "Apply for student visa",
      "Travel to Cyprus"
    ]
  },
  {
    name: "China",
    slug: "china",
    flag: "🇨🇳",
    universities: 100,
    students: "500,000+",
    description: "China has invested heavily in higher education and offers generous scholarships. It's an excellent choice for those interested in Mandarin and the world's second-largest economy.",
    whyStudy: [
      "Generous government scholarships",
      "Affordable education",
      "Learn Mandarin Chinese",
      "Growing global superpower",
      "Modern campuses and facilities"
    ],
    livingCost: "CNY 30,000 - 50,000 per year",
    visaInfo: "X1 or X2 student visa required based on study duration.",
    workRights: "Limited, mainly internships",
    postStudyVisa: "Limited post-study work options",
    scholarships: ["Chinese Government Scholarship (CSC)", "Provincial scholarships", "University scholarships"],
    topUniversities: ["Tsinghua University", "Peking University", "Fudan University", "Zhejiang University"],
    topCourses: ["Engineering", "Medicine", "Chinese Language", "Business", "IT"],
    applicationSteps: [
      "Apply for scholarship (if applicable)",
      "Apply to university",
      "Receive JW201/JW202 form",
      "Apply for X visa",
      "Travel to China",
      "Register with local police"
    ]
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    universities: 25,
    students: "110,000+",
    description: "New Zealand offers world-class education in a stunning natural environment. Known for its welcoming culture and excellent quality of life.",
    whyStudy: [
      "High-quality education system",
      "Beautiful natural environment",
      "Safe and friendly society",
      "Post-study work visa up to 3 years",
      "Pathway to permanent residency"
    ],
    livingCost: "NZD 15,000 - 20,000 per year",
    visaInfo: "Student visa requires offer of place, proof of funds, and health insurance.",
    workRights: "20 hours/week during term, full-time during holidays",
    postStudyVisa: "Post-Study Work Visa: 1-3 years",
    scholarships: ["New Zealand Excellence Awards", "University scholarships"],
    topUniversities: ["University of Auckland", "University of Otago", "Victoria University", "University of Canterbury"],
    topCourses: ["Agriculture", "Environmental Science", "Engineering", "Business", "Tourism"],
    applicationSteps: [
      "Research programs",
      "Apply to university",
      "Receive offer letter",
      "Apply for student visa",
      "Arrange accommodation",
      "Travel to New Zealand"
    ]
  },
  {
    name: "Sweden",
    slug: "sweden",
    flag: "🇸🇪",
    universities: 40,
    students: "40,000+",
    description: "Sweden offers innovative education and a high quality of life. Known for sustainability, technology, and progressive values.",
    whyStudy: [
      "High-quality, innovative education",
      "Many English-taught programs",
      "Strong tech and startup scene",
      "Sustainable living",
      "Work permit extension after studies"
    ],
    livingCost: "SEK 96,000 - 120,000 per year",
    visaInfo: "Residence permit required for studies longer than 3 months.",
    workRights: "No limit during studies",
    postStudyVisa: "6-month extension to seek employment",
    scholarships: ["Swedish Institute Scholarships", "University scholarships"],
    topUniversities: ["KTH Royal Institute", "Lund University", "Uppsala University", "Stockholm University"],
    topCourses: ["Engineering", "IT", "Design", "Business", "Environmental Science"],
    applicationSteps: [
      "Apply via universityadmissions.se",
      "Submit documents",
      "Receive admission",
      "Apply for residence permit",
      "Travel to Sweden"
    ]
  },
  {
    name: "Poland",
    slug: "poland",
    flag: "🇵🇱",
    universities: 70,
    students: "85,000+",
    description: "Poland offers quality European education at very affordable prices. Growing economy and central European location make it attractive.",
    whyStudy: [
      "Very affordable tuition and living",
      "EU member state",
      "Many English-taught programs",
      "Rich culture and history",
      "Growing economy"
    ],
    livingCost: "€5,000 - €8,000 per year",
    visaInfo: "Student visa or national visa required for non-EU students.",
    workRights: "No limit for registered students",
    postStudyVisa: "9 months to seek employment",
    scholarships: ["Polish Government Scholarships", "Erasmus+", "University scholarships"],
    topUniversities: ["University of Warsaw", "Jagiellonian University", "Warsaw University of Technology"],
    topCourses: ["Medicine", "Engineering", "Business", "IT", "Architecture"],
    applicationSteps: [
      "Apply to university",
      "Receive acceptance letter",
      "Apply for student visa",
      "Travel to Poland",
      "Register residence"
    ]
  },
  {
    name: "Japan",
    slug: "japan",
    flag: "🇯🇵",
    universities: 80,
    students: "300,000+",
    description: "Japan combines cutting-edge technology with rich cultural heritage. Excellent for those interested in technology, anime, and Asian culture.",
    whyStudy: [
      "World-class technology and research",
      "Unique cultural experience",
      "Safe and clean environment",
      "Growing English-taught programs",
      "Part-time work opportunities"
    ],
    livingCost: "JPY 1,200,000 - 1,800,000 per year",
    visaInfo: "Student visa (ryugaku) required, sponsored by educational institution.",
    workRights: "28 hours/week with permission",
    postStudyVisa: "Job-seeking visa available",
    scholarships: ["MEXT Scholarship", "JASSO Scholarship", "University scholarships"],
    topUniversities: ["University of Tokyo", "Kyoto University", "Osaka University", "Waseda University"],
    topCourses: ["Engineering", "Technology", "Business", "Japanese Language", "Animation"],
    applicationSteps: [
      "Apply to university or language school",
      "Receive Certificate of Eligibility",
      "Apply for student visa",
      "Travel to Japan",
      "Register residence"
    ]
  },
  {
    name: "South Korea",
    slug: "south-korea",
    flag: "🇰🇷",
    universities: 60,
    students: "160,000+",
    description: "South Korea offers high-quality education and is a hub for technology, K-pop, and innovation. Growing destination for international students.",
    whyStudy: [
      "Top-ranked universities in Asia",
      "Hub for technology and innovation",
      "Affordable compared to Western countries",
      "Rich culture (K-pop, K-drama)",
      "Government scholarships available"
    ],
    livingCost: "KRW 12,000,000 - 18,000,000 per year",
    visaInfo: "D-2 student visa required for degree programs.",
    workRights: "20 hours/week with permission",
    postStudyVisa: "Job-seeking visa (D-10) available",
    scholarships: ["Korean Government Scholarship (KGSP)", "University scholarships"],
    topUniversities: ["Seoul National University", "KAIST", "Yonsei University", "Korea University"],
    topCourses: ["Engineering", "Business", "Korean Language", "IT", "Design"],
    applicationSteps: [
      "Apply to university",
      "Receive admission letter",
      "Apply for D-2 visa",
      "Travel to South Korea",
      "Register with immigration"
    ]
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    flag: "🇨🇭",
    universities: 30,
    students: "50,000+",
    description: "Switzerland is home to world-renowned universities and offers exceptional quality of life. Ideal for finance, hospitality, and research.",
    whyStudy: [
      "Top-ranked universities (ETH Zurich)",
      "Multilingual environment",
      "High quality of life",
      "Strong finance and hospitality sectors",
      "Safe and beautiful country"
    ],
    livingCost: "CHF 20,000 - 28,000 per year",
    visaInfo: "Student visa required for non-EU/EFTA nationals.",
    workRights: "15 hours/week during term",
    postStudyVisa: "6-month extension for job search",
    scholarships: ["Swiss Government Excellence Scholarships", "ETH Zurich scholarships"],
    topUniversities: ["ETH Zurich", "EPFL", "University of Zurich", "University of Geneva"],
    topCourses: ["Finance", "Hospitality", "Engineering", "Business", "Sciences"],
    applicationSteps: [
      "Apply to university",
      "Receive admission",
      "Apply for student visa",
      "Arrange accommodation",
      "Travel to Switzerland"
    ]
  }
];

export const getCountryBySlug = (slug: string): Country | undefined => {
  return countries.find(c => c.slug === slug);
};

export const getFeaturedCountries = (): Country[] => {
  return countries.filter(c => c.featured);
};
