export interface University {
  name: string;
  slug: string;
  country: string;
  countrySlug: string;
  city: string;
  ranking: number;
  rankingSource: string;
  type: string;
  founded: number;
  students: string;
  internationalStudents: string;
  description: string;
  overview: string[];
  tuitionRange: string;
  livingCost: string;
  acceptanceRate: string;
  popularCourses: string[];
  facilities: string[];
  scholarships: string[];
  entryRequirements: string[];
  applicationDeadlines: string;
  image: string;
  logo: string;
  featured?: boolean;
}

export const universities: University[] = [
  {
    name: "University of Oxford",
    slug: "university-of-oxford",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    city: "Oxford",
    ranking: 1,
    rankingSource: "THE World University Rankings 2024",
    type: "Public Research University",
    founded: 1096,
    students: "26,000+",
    internationalStudents: "45%",
    description: "The University of Oxford is the oldest university in the English-speaking world and one of the most prestigious institutions globally.",
    overview: [
      "Oldest university in the English-speaking world",
      "Consistently ranked #1 in the UK",
      "Tutorial-based teaching system",
      "44 colleges and halls",
      "Alumni include 30 world leaders and 55 Nobel laureates"
    ],
    tuitionRange: "£28,950 - £44,240 per year",
    livingCost: "£14,000 - £16,000 per year",
    acceptanceRate: "17%",
    popularCourses: ["PPE", "Law", "Medicine", "Computer Science", "Mathematics"],
    facilities: ["Bodleian Library", "Science labs", "Museums", "Sports facilities"],
    scholarships: ["Rhodes Scholarship", "Clarendon Fund", "Oxford-Nigeria Scholarship"],
    entryRequirements: ["Strong academics (A*A*A)", "Admissions test", "Interview", "Personal statement"],
    applicationDeadlines: "October 15 (UCAS)",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/150px-Oxford-University-Circlet.svg.png",
    featured: true
  },
  {
    name: "University of Cambridge",
    slug: "university-of-cambridge",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    city: "Cambridge",
    ranking: 2,
    rankingSource: "THE World University Rankings 2024",
    type: "Public Research University",
    founded: 1209,
    students: "24,000+",
    internationalStudents: "40%",
    description: "Cambridge is a world-leading university known for its exceptional academic excellence and rich history.",
    overview: [
      "Second-oldest university in the English-speaking world",
      "31 autonomous colleges",
      "121 Nobel Prize affiliates",
      "World-class research output",
      "Beautiful collegiate architecture"
    ],
    tuitionRange: "£24,507 - £63,990 per year",
    livingCost: "£12,000 - £15,000 per year",
    acceptanceRate: "21%",
    popularCourses: ["Natural Sciences", "Engineering", "Economics", "Law", "Medicine"],
    facilities: ["Cambridge University Library", "Museums", "Sports Centre", "Botanic Garden"],
    scholarships: ["Gates Cambridge", "Cambridge Trust", "College scholarships"],
    entryRequirements: ["Excellent grades (A*A*A)", "Admissions assessment", "Interview"],
    applicationDeadlines: "October 15 (UCAS)",
    image: "https://images.unsplash.com/photo-1580491934340-b4e0f20aa75c?w=800",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/150px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png",
    featured: true
  },
  {
    name: "Imperial College London",
    slug: "imperial-college-london",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    city: "London",
    ranking: 6,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1907,
    students: "22,000+",
    internationalStudents: "60%",
    description: "Imperial is a world-leading science and technology university, consistently ranked among the top universities globally.",
    overview: [
      "Focused on science, engineering, medicine and business",
      "Located in central London",
      "Strong industry connections",
      "14 Nobel laureates",
      "Excellent graduate employment"
    ],
    tuitionRange: "£35,100 - £51,450 per year",
    livingCost: "£15,000 - £18,000 per year",
    acceptanceRate: "14%",
    popularCourses: ["Engineering", "Computing", "Medicine", "Physics", "Business"],
    facilities: ["State-of-art labs", "Central Library", "Sports centre", "Innovation hub"],
    scholarships: ["President's Scholarship", "Imperial Bursary", "Department scholarships"],
    entryRequirements: ["A*A*A-AAA", "Relevant subjects", "Personal statement", "Interview (some courses)"],
    applicationDeadlines: "January 31 (UCAS), October 15 (Medicine)",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800",
    logo: "",
    featured: true
  },
  {
    name: "University of Manchester",
    slug: "university-of-manchester",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    city: "Manchester",
    ranking: 32,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1824,
    students: "45,000+",
    internationalStudents: "44%",
    description: "The University of Manchester is one of the UK's largest and most popular universities, known for groundbreaking research.",
    overview: [
      "Largest single-site university in UK",
      "Home to 25 Nobel Prize winners",
      "Russell Group member",
      "Birthplace of the computer and graphene",
      "Excellent student experience"
    ],
    tuitionRange: "£23,500 - £49,000 per year",
    livingCost: "£10,000 - £12,000 per year",
    acceptanceRate: "50%",
    popularCourses: ["Business", "Computer Science", "Engineering", "Law", "Medicine"],
    facilities: ["John Rylands Library", "Sports complex", "Student union", "Research facilities"],
    scholarships: ["Manchester Master's Bursary", "International Excellence Award", "Subject scholarships"],
    entryRequirements: ["AAA-ABB", "GCSE Maths and English", "Personal statement"],
    applicationDeadlines: "January 31 (UCAS)",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800",
    logo: "",
    featured: true
  },
  {
    name: "University of Toronto",
    slug: "university-of-toronto",
    country: "Canada",
    countrySlug: "canada",
    city: "Toronto",
    ranking: 21,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1827,
    students: "97,000+",
    internationalStudents: "26%",
    description: "U of T is Canada's leading institution and a top research university globally, located in the vibrant city of Toronto.",
    overview: [
      "Canada's top-ranked university",
      "Three campuses across Toronto",
      "Strong research output",
      "Gateway to Canadian immigration",
      "Diverse student body"
    ],
    tuitionRange: "CAD 45,000 - 65,000 per year",
    livingCost: "CAD 18,000 - 25,000 per year",
    acceptanceRate: "43%",
    popularCourses: ["Computer Science", "Engineering", "Business", "Life Sciences", "Social Sciences"],
    facilities: ["Robarts Library", "Hart House", "Athletic Centre", "Research labs"],
    scholarships: ["Lester B. Pearson Scholarship", "University of Toronto Scholars", "Faculty awards"],
    entryRequirements: ["Strong academic record", "English proficiency", "Supplemental application (some programs)"],
    applicationDeadlines: "January 15",
    image: "https://images.unsplash.com/photo-1569025591259-6b5f2c7bc8bf?w=800",
    logo: "",
    featured: true
  },
  {
    name: "McGill University",
    slug: "mcgill-university",
    country: "Canada",
    countrySlug: "canada",
    city: "Montreal",
    ranking: 30,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1821,
    students: "40,000+",
    internationalStudents: "30%",
    description: "McGill is one of Canada's oldest and most prestigious universities, located in the bilingual city of Montreal.",
    overview: [
      "Consistently ranked among Canada's top 3",
      "English-language institution in Montreal",
      "12 Nobel laureates",
      "Strong medical school",
      "Affordable compared to other top universities"
    ],
    tuitionRange: "CAD 20,000 - 55,000 per year",
    livingCost: "CAD 15,000 - 20,000 per year",
    acceptanceRate: "46%",
    popularCourses: ["Medicine", "Law", "Engineering", "Business", "Arts"],
    facilities: ["McLennan Library", "McGill Arena", "Research centers"],
    scholarships: ["Entrance Scholarships", "McCall MacBain Scholars", "Faculty scholarships"],
    entryRequirements: ["Strong grades", "English proficiency", "Program-specific requirements"],
    applicationDeadlines: "January 15",
    image: "https://images.unsplash.com/photo-1610901157620-340856d0a50f?w=800",
    logo: "",
    featured: true
  },
  {
    name: "Harvard University",
    slug: "harvard-university",
    country: "United States",
    countrySlug: "united-states",
    city: "Cambridge, MA",
    ranking: 4,
    rankingSource: "QS World University Rankings 2024",
    type: "Private Research University",
    founded: 1636,
    students: "23,000+",
    internationalStudents: "25%",
    description: "Harvard is the oldest institution of higher learning in the United States and one of the most prestigious universities in the world.",
    overview: [
      "Oldest US university (1636)",
      "Largest academic endowment",
      "8 US presidents as alumni",
      "World-class faculty",
      "Unparalleled alumni network"
    ],
    tuitionRange: "$54,000 - $57,000 per year",
    livingCost: "$22,000 - $25,000 per year",
    acceptanceRate: "3.4%",
    popularCourses: ["Economics", "Computer Science", "Political Science", "Biology", "Statistics"],
    facilities: ["Harvard Library", "Museums", "Athletics facilities", "Innovation labs"],
    scholarships: ["Need-based financial aid", "Harvard Scholarships", "External fellowships"],
    entryRequirements: ["Exceptional academics", "SAT/ACT", "Essays", "Recommendations", "Interview"],
    applicationDeadlines: "January 1 (Regular), November 1 (Early Action)",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    logo: "",
    featured: true
  },
  {
    name: "MIT",
    slug: "mit",
    country: "United States",
    countrySlug: "united-states",
    city: "Cambridge, MA",
    ranking: 1,
    rankingSource: "QS World University Rankings 2024",
    type: "Private Research University",
    founded: 1861,
    students: "11,500+",
    internationalStudents: "34%",
    description: "MIT is the world's leading technology and engineering university, known for innovation and entrepreneurship.",
    overview: [
      "#1 in technology and engineering",
      "Cutting-edge research",
      "Strong startup culture",
      "98 Nobel laureates",
      "Hands-on learning approach"
    ],
    tuitionRange: "$57,000 per year",
    livingCost: "$20,000 - $25,000 per year",
    acceptanceRate: "4%",
    popularCourses: ["Computer Science", "Engineering", "Physics", "Mathematics", "Economics"],
    facilities: ["MIT Libraries", "Media Lab", "Lincoln Laboratory", "Sports facilities"],
    scholarships: ["Need-based aid", "MIT Scholarships", "External fellowships"],
    entryRequirements: ["Exceptional academics", "SAT/ACT", "Strong STEM background", "Essays"],
    applicationDeadlines: "January 1 (Regular), November 1 (Early Action)",
    image: "https://images.unsplash.com/photo-1564979395477-c9ea545ce8e8?w=800",
    logo: "",
    featured: true
  },
  {
    name: "University of Melbourne",
    slug: "university-of-melbourne",
    country: "Australia",
    countrySlug: "australia",
    city: "Melbourne",
    ranking: 14,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1853,
    students: "65,000+",
    internationalStudents: "42%",
    description: "The University of Melbourne is Australia's leading university, consistently ranked #1 in the country.",
    overview: [
      "Australia's #1 university",
      "Melbourne Model (broad undergraduate, specialized graduate)",
      "World-class research",
      "Beautiful heritage campus",
      "Strong industry connections"
    ],
    tuitionRange: "AUD 40,000 - 50,000 per year",
    livingCost: "AUD 25,000 - 30,000 per year",
    acceptanceRate: "70%",
    popularCourses: ["Medicine", "Law", "Business", "Engineering", "Arts"],
    facilities: ["Baillieu Library", "Sports Centre", "Research institutes"],
    scholarships: ["Melbourne International Scholarship", "Faculty scholarships"],
    entryRequirements: ["Strong academic record", "English proficiency", "Prerequisites"],
    applicationDeadlines: "October 31 / April 30",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    logo: "",
    featured: true
  },
  {
    name: "TU Munich",
    slug: "tu-munich",
    country: "Germany",
    countrySlug: "germany",
    city: "Munich",
    ranking: 37,
    rankingSource: "QS World University Rankings 2024",
    type: "Public Research University",
    founded: 1868,
    students: "50,000+",
    internationalStudents: "24%",
    description: "TU Munich is Germany's top technical university and one of Europe's most prestigious institutions for engineering and sciences.",
    overview: [
      "Germany's #1 university",
      "Excellence Initiative winner",
      "Strong industry partnerships",
      "No tuition fees",
      "High employability"
    ],
    tuitionRange: "€0 (semester fee ~€150)",
    livingCost: "€10,000 - €12,000 per year",
    acceptanceRate: "10% (varies by program)",
    popularCourses: ["Engineering", "Computer Science", "Physics", "Architecture", "Management"],
    facilities: ["Modern labs", "Libraries", "Sports facilities", "Research centers"],
    scholarships: ["DAAD", "Deutschlandstipendium", "University scholarships"],
    entryRequirements: ["Strong grades", "German/English proficiency", "Program requirements"],
    applicationDeadlines: "May 31 / November 30",
    image: "https://images.unsplash.com/photo-1571659058083-be1f4e5e9cf7?w=800",
    logo: "",
    featured: true
  }
];

export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(u => u.slug === slug);
};

export const getUniversitiesByCountry = (countrySlug: string): University[] => {
  return universities.filter(u => u.countrySlug === countrySlug);
};

export const getFeaturedUniversities = (): University[] => {
  return universities.filter(u => u.featured);
};
