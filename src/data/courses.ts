export interface Course {
  name: string;
  slug: string;
  level: string;
  duration: string;
  areaOfStudy: string;
  areaSlug: string;
  description: string;
  overview: string;
  careerOutcomes: string[];
  requirements: string[];
  tuitionRange: string;
  countries: string[];
  universities: string[];
  relatedCourses: string[];
}

export interface AreaOfStudy {
  name: string;
  slug: string;
  description: string;
  icon: string;
  courses: number;
  popularCourses: string[];
  topCountries: string[];
  careerPaths: string[];
}

export const areasOfStudy: AreaOfStudy[] = [
  {
    name: "Business & Management",
    slug: "business-management",
    description: "Study business administration, marketing, finance, and leadership to prepare for careers in the corporate world.",
    icon: "💼",
    courses: 150,
    popularCourses: ["MBA", "BSc Business Administration", "MSc Marketing", "MSc Finance"],
    topCountries: ["USA", "UK", "Canada", "Australia"],
    careerPaths: ["Management Consultant", "Marketing Manager", "Financial Analyst", "Entrepreneur"]
  },
  {
    name: "Computer Science & IT",
    slug: "computer-science",
    description: "Explore programming, artificial intelligence, cybersecurity, and software engineering in one of the fastest-growing fields.",
    icon: "💻",
    courses: 200,
    popularCourses: ["BSc Computer Science", "MSc Data Science", "MSc Artificial Intelligence", "MSc Cybersecurity"],
    topCountries: ["USA", "UK", "Canada", "Germany"],
    careerPaths: ["Software Engineer", "Data Scientist", "AI Engineer", "Cybersecurity Analyst"]
  },
  {
    name: "Engineering",
    slug: "engineering",
    description: "From civil to mechanical, electrical to aerospace, engineering programs prepare you to solve real-world problems.",
    icon: "⚙️",
    courses: 180,
    popularCourses: ["BEng Mechanical Engineering", "BEng Electrical Engineering", "MEng Civil Engineering", "MSc Aerospace Engineering"],
    topCountries: ["Germany", "USA", "UK", "Australia"],
    careerPaths: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Project Manager"]
  },
  {
    name: "Health & Medicine",
    slug: "health-medicine",
    description: "Pursue careers in healthcare through medicine, nursing, pharmacy, and public health programs.",
    icon: "🏥",
    courses: 120,
    popularCourses: ["MBBS", "BSc Nursing", "PharmD", "MPH Public Health"],
    topCountries: ["UK", "USA", "Australia", "Ireland"],
    careerPaths: ["Doctor", "Nurse", "Pharmacist", "Public Health Specialist"]
  },
  {
    name: "Law & Legal Studies",
    slug: "law",
    description: "Study law and legal systems to prepare for careers as solicitors, barristers, or legal consultants.",
    icon: "⚖️",
    courses: 60,
    popularCourses: ["LLB", "LLM", "JD", "Bar Professional Training Course"],
    topCountries: ["UK", "USA", "Canada", "Australia"],
    careerPaths: ["Solicitor", "Barrister", "Legal Counsel", "Judge"]
  },
  {
    name: "Arts & Design",
    slug: "arts-design",
    description: "Express creativity through fine arts, graphic design, fashion, and creative media programs.",
    icon: "🎨",
    courses: 90,
    popularCourses: ["BA Fine Art", "BA Graphic Design", "MA Fashion Design", "BA Film Studies"],
    topCountries: ["UK", "Italy", "USA", "France"],
    careerPaths: ["Graphic Designer", "Fashion Designer", "Art Director", "UX Designer"]
  },
  {
    name: "Social Sciences",
    slug: "social-sciences",
    description: "Study human behavior and society through psychology, sociology, political science, and economics.",
    icon: "🌍",
    courses: 100,
    popularCourses: ["BA Psychology", "BA Sociology", "MSc Economics", "MA International Relations"],
    topCountries: ["UK", "USA", "Netherlands", "Canada"],
    careerPaths: ["Psychologist", "Economist", "Policy Analyst", "Social Worker"]
  },
  {
    name: "Natural Sciences",
    slug: "natural-sciences",
    description: "Explore the physical and natural world through biology, chemistry, physics, and environmental science.",
    icon: "🔬",
    courses: 85,
    popularCourses: ["BSc Biology", "BSc Chemistry", "MSc Physics", "BSc Environmental Science"],
    topCountries: ["UK", "USA", "Germany", "Netherlands"],
    careerPaths: ["Research Scientist", "Lab Technician", "Environmental Consultant", "Academic"]
  },
  {
    name: "Hospitality & Tourism",
    slug: "hospitality-tourism",
    description: "Prepare for careers in hotels, restaurants, events, and tourism management.",
    icon: "🏨",
    courses: 50,
    popularCourses: ["BA Hotel Management", "BA Tourism Management", "MSc Hospitality Management"],
    topCountries: ["Switzerland", "UK", "USA", "UAE"],
    careerPaths: ["Hotel Manager", "Event Planner", "Tourism Director", "Restaurant Manager"]
  },
  {
    name: "Education & Teaching",
    slug: "education",
    description: "Train to become educators and make a difference in students' lives.",
    icon: "📚",
    courses: 45,
    popularCourses: ["BA Education", "PGCE", "MEd", "MA TESOL"],
    topCountries: ["UK", "USA", "Australia", "Canada"],
    careerPaths: ["Teacher", "Lecturer", "Education Administrator", "Curriculum Developer"]
  }
];

export const courses: Course[] = [
  {
    name: "Master of Business Administration (MBA)",
    slug: "mba",
    level: "Postgraduate",
    duration: "1-2 years",
    areaOfStudy: "Business & Management",
    areaSlug: "business-management",
    description: "The MBA is the most sought-after business degree, preparing professionals for leadership roles across industries.",
    overview: "An MBA provides broad business education covering finance, marketing, operations, strategy, and leadership. Programs often include practical projects and networking opportunities.",
    careerOutcomes: ["CEO/Managing Director", "Management Consultant", "Investment Banker", "Product Manager", "Entrepreneur"],
    requirements: ["Bachelor's degree", "GMAT/GRE (varies)", "Work experience (usually 2-5 years)", "English proficiency"],
    tuitionRange: "$30,000 - $150,000 total",
    countries: ["USA", "UK", "Canada", "France", "Singapore"],
    universities: ["Harvard Business School", "INSEAD", "London Business School", "Wharton", "MIT Sloan"],
    relatedCourses: ["MSc Finance", "MSc Marketing", "Executive MBA"]
  },
  {
    name: "BSc Computer Science",
    slug: "bsc-computer-science",
    level: "Undergraduate",
    duration: "3-4 years",
    areaOfStudy: "Computer Science & IT",
    areaSlug: "computer-science",
    description: "A foundational degree in computing covering programming, algorithms, data structures, and software development.",
    overview: "Computer Science degrees teach problem-solving through programming, covering theoretical foundations and practical applications of computing.",
    careerOutcomes: ["Software Developer", "Systems Analyst", "Web Developer", "Database Administrator", "IT Consultant"],
    requirements: ["High school diploma", "Strong mathematics", "English proficiency"],
    tuitionRange: "$15,000 - $55,000 per year",
    countries: ["USA", "UK", "Canada", "Germany", "Australia"],
    universities: ["MIT", "Stanford", "Cambridge", "ETH Zurich", "Imperial College London"],
    relatedCourses: ["MSc Computer Science", "MSc Data Science", "BSc Software Engineering"]
  },
  {
    name: "MSc Data Science",
    slug: "msc-data-science",
    level: "Postgraduate",
    duration: "1-2 years",
    areaOfStudy: "Computer Science & IT",
    areaSlug: "computer-science",
    description: "Learn to analyze big data, build machine learning models, and derive insights for business decisions.",
    overview: "Data Science programs combine statistics, programming, and domain expertise to extract meaningful insights from data.",
    careerOutcomes: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Business Intelligence Analyst", "AI Researcher"],
    requirements: ["Bachelor's in quantitative field", "Programming knowledge", "Statistics background", "GRE (some programs)"],
    tuitionRange: "$25,000 - $70,000 total",
    countries: ["USA", "UK", "Canada", "Germany", "Netherlands"],
    universities: ["UC Berkeley", "Imperial College London", "ETH Zurich", "University of Toronto"],
    relatedCourses: ["MSc Machine Learning", "MSc Artificial Intelligence", "MSc Business Analytics"]
  },
  {
    name: "BEng Mechanical Engineering",
    slug: "beng-mechanical-engineering",
    level: "Undergraduate",
    duration: "3-4 years",
    areaOfStudy: "Engineering",
    areaSlug: "engineering",
    description: "Design, analyze, and manufacture mechanical systems from engines to robotics.",
    overview: "Mechanical Engineering covers thermodynamics, mechanics, materials science, and design, preparing students to create everything from cars to medical devices.",
    careerOutcomes: ["Mechanical Engineer", "Design Engineer", "Manufacturing Engineer", "Project Engineer", "R&D Engineer"],
    requirements: ["High school diploma with physics and mathematics", "English proficiency"],
    tuitionRange: "$15,000 - $45,000 per year",
    countries: ["Germany", "USA", "UK", "Australia", "Canada"],
    universities: ["TU Munich", "MIT", "Imperial College", "University of Melbourne"],
    relatedCourses: ["MEng Mechanical Engineering", "BEng Aerospace Engineering", "BEng Automotive Engineering"]
  },
  {
    name: "MBBS / MD Medicine",
    slug: "mbbs-medicine",
    level: "Undergraduate/Professional",
    duration: "5-7 years",
    areaOfStudy: "Health & Medicine",
    areaSlug: "health-medicine",
    description: "Train to become a medical doctor with comprehensive clinical and theoretical education.",
    overview: "Medical degrees combine pre-clinical sciences with clinical rotations, preparing students to diagnose and treat patients.",
    careerOutcomes: ["General Practitioner", "Specialist Doctor", "Surgeon", "Medical Researcher", "Hospital Administrator"],
    requirements: ["Excellent academic record", "Science subjects", "Entrance exams (UCAT, BMAT, MCAT)", "Interview"],
    tuitionRange: "$30,000 - $65,000 per year",
    countries: ["UK", "USA", "Australia", "Ireland", "Caribbean"],
    universities: ["University of Oxford", "Harvard Medical School", "University of Melbourne", "Trinity College Dublin"],
    relatedCourses: ["BSc Biomedical Science", "BSc Nursing", "PharmD"]
  },
  {
    name: "LLB Bachelor of Laws",
    slug: "llb-law",
    level: "Undergraduate",
    duration: "3-4 years",
    areaOfStudy: "Law & Legal Studies",
    areaSlug: "law",
    description: "The foundational law degree that qualifies you to pursue a legal career.",
    overview: "LLB programs cover contract law, criminal law, constitutional law, and legal skills needed for practice.",
    careerOutcomes: ["Solicitor", "Barrister", "Legal Counsel", "Legal Consultant", "Compliance Officer"],
    requirements: ["High school diploma", "Strong analytical skills", "LNAT (some UK universities)"],
    tuitionRange: "$20,000 - $45,000 per year",
    countries: ["UK", "Australia", "Canada", "Ireland", "Singapore"],
    universities: ["University of Oxford", "University of Cambridge", "LSE", "University of Sydney"],
    relatedCourses: ["LLM Master of Laws", "JD Juris Doctor", "GDL Graduate Diploma in Law"]
  },
  {
    name: "BSc Nursing",
    slug: "bsc-nursing",
    level: "Undergraduate",
    duration: "3-4 years",
    areaOfStudy: "Health & Medicine",
    areaSlug: "health-medicine",
    description: "Train to become a registered nurse with clinical skills and healthcare knowledge.",
    overview: "Nursing programs combine theoretical learning with extensive clinical placements in hospitals and community settings.",
    careerOutcomes: ["Registered Nurse", "Nurse Practitioner", "Clinical Nurse Specialist", "Nurse Manager", "Healthcare Administrator"],
    requirements: ["High school diploma with science subjects", "English proficiency", "Health clearance"],
    tuitionRange: "$15,000 - $40,000 per year",
    countries: ["UK", "USA", "Canada", "Australia", "Ireland"],
    universities: ["King's College London", "University of Pennsylvania", "University of Toronto"],
    relatedCourses: ["MSc Nursing", "MSc Public Health", "MBBS Medicine"]
  },
  {
    name: "MSc Finance",
    slug: "msc-finance",
    level: "Postgraduate",
    duration: "1-2 years",
    areaOfStudy: "Business & Management",
    areaSlug: "business-management",
    description: "Develop expertise in financial analysis, investment, and corporate finance.",
    overview: "Finance programs cover financial theory, valuation, portfolio management, and risk analysis for careers in banking and investment.",
    careerOutcomes: ["Investment Banker", "Financial Analyst", "Portfolio Manager", "Risk Manager", "CFO"],
    requirements: ["Bachelor's degree", "Quantitative background", "GMAT/GRE (varies)", "Work experience (preferred)"],
    tuitionRange: "$30,000 - $80,000 total",
    countries: ["UK", "USA", "France", "Singapore", "Hong Kong"],
    universities: ["London Business School", "MIT Sloan", "HEC Paris", "Imperial College London"],
    relatedCourses: ["MBA", "MSc Accounting", "MSc Economics"]
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(c => c.slug === slug);
};

export const getCoursesByArea = (areaSlug: string): Course[] => {
  return courses.filter(c => c.areaSlug === areaSlug);
};

export const getAreaBySlug = (slug: string): AreaOfStudy | undefined => {
  return areasOfStudy.find(a => a.slug === slug);
};
