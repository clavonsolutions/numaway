export interface Exam {
  name: string;
  slug: string;
  fullName: string;
  description: string;
  purpose: string;
  sections: { name: string; description: string; duration: string }[];
  scoring: string;
  scoringDetails: string[];
  eligibility: string;
  fees: string;
  validity: string;
  registrationSteps: string[];
  preparationTips: string[];
  acceptedBy: string[];
  faqs: { question: string; answer: string }[];
}

export const exams: Exam[] = [
  {
    name: "IELTS",
    slug: "ielts",
    fullName: "International English Language Testing System",
    description: "IELTS is the world's most popular English language test for higher education and global migration. Accepted by over 11,000 organizations worldwide.",
    purpose: "Measures English proficiency for study, work, and migration",
    sections: [
      { name: "Listening", description: "Four recorded monologues and conversations", duration: "30 minutes" },
      { name: "Reading", description: "Three long reading passages with tasks", duration: "60 minutes" },
      { name: "Writing", description: "Two tasks: description and essay", duration: "60 minutes" },
      { name: "Speaking", description: "Face-to-face interview with examiner", duration: "11-14 minutes" }
    ],
    scoring: "Band score 0-9",
    scoringDetails: [
      "Band 9: Expert user",
      "Band 8: Very good user",
      "Band 7: Good user (most university requirement)",
      "Band 6: Competent user",
      "Band 5: Modest user"
    ],
    eligibility: "No specific eligibility. Open to all ages.",
    fees: "₦80,000 - ₦100,000 (varies by center)",
    validity: "2 years",
    registrationSteps: [
      "Choose between Academic and General Training",
      "Register online at British Council or IDP website",
      "Pay the test fee",
      "Book your preferred test date and location",
      "Attend the test"
    ],
    preparationTips: [
      "Practice with official IELTS materials",
      "Focus on time management",
      "Read English newspapers and academic texts",
      "Practice speaking with native speakers or tutors",
      "Take full practice tests under exam conditions"
    ],
    acceptedBy: ["UK universities", "Australian universities", "Canadian institutions", "Irish universities", "Many US universities"],
    faqs: [
      { question: "Academic vs General Training?", answer: "Academic is for university admission. General Training is for work and migration." },
      { question: "How often can I take IELTS?", answer: "You can take IELTS as often as you want. There's no waiting period between tests." },
      { question: "What score do universities require?", answer: "Most require 6.0-7.0 overall, with no band below 5.5-6.0." }
    ]
  },
  {
    name: "TOEFL",
    slug: "toefl",
    fullName: "Test of English as a Foreign Language",
    description: "TOEFL iBT is the leading English proficiency test accepted by universities worldwide, particularly in North America.",
    purpose: "Academic English proficiency for university admission",
    sections: [
      { name: "Reading", description: "Read passages and answer questions", duration: "54-72 minutes" },
      { name: "Listening", description: "Lectures and conversations", duration: "41-57 minutes" },
      { name: "Speaking", description: "Express opinions on familiar topics", duration: "17 minutes" },
      { name: "Writing", description: "Write essay responses", duration: "50 minutes" }
    ],
    scoring: "0-120 total (30 per section)",
    scoringDetails: [
      "Reading: 0-30",
      "Listening: 0-30",
      "Speaking: 0-30",
      "Writing: 0-30",
      "Most universities require 80-100+"
    ],
    eligibility: "No specific eligibility requirements",
    fees: "US $190-210 (varies by country)",
    validity: "2 years",
    registrationSteps: [
      "Create an ETS account at ets.org",
      "Choose test date and center",
      "Pay the registration fee",
      "Receive confirmation",
      "Attend the test"
    ],
    preparationTips: [
      "Use official ETS preparation materials",
      "Practice typing quickly and accurately",
      "Build academic vocabulary",
      "Listen to TED Talks and podcasts",
      "Take timed practice tests"
    ],
    acceptedBy: ["US universities (primary)", "Canadian universities", "UK universities", "European universities", "Asian universities"],
    faqs: [
      { question: "TOEFL vs IELTS?", answer: "TOEFL is computer-based and preferred in the US. IELTS is paper/computer-based and widely accepted globally." },
      { question: "What's a good TOEFL score?", answer: "90+ is competitive for most universities. Top schools may require 100+." }
    ]
  },
  {
    name: "GRE",
    slug: "gre",
    fullName: "Graduate Record Examination",
    description: "The GRE is a standardized test required for admission to many graduate programs, particularly in the US.",
    purpose: "Graduate school admission, especially for Master's and PhD programs",
    sections: [
      { name: "Verbal Reasoning", description: "Reading comprehension, text completion, sentence equivalence", duration: "60 minutes" },
      { name: "Quantitative Reasoning", description: "Arithmetic, algebra, geometry, data analysis", duration: "70 minutes" },
      { name: "Analytical Writing", description: "Two essays: issue and argument", duration: "60 minutes" }
    ],
    scoring: "Verbal 130-170, Quant 130-170, Writing 0-6",
    scoringDetails: [
      "Verbal: 130-170 (1-point increments)",
      "Quantitative: 130-170 (1-point increments)",
      "Analytical Writing: 0-6 (half-point increments)",
      "Average scores: Verbal 150, Quant 153"
    ],
    eligibility: "No specific eligibility. Typically taken by those applying to graduate school.",
    fees: "US $220",
    validity: "5 years",
    registrationSteps: [
      "Create ETS account",
      "Choose test date and location",
      "Pay registration fee",
      "Schedule your test",
      "Prepare and take the test"
    ],
    preparationTips: [
      "Build strong vocabulary",
      "Review fundamental math concepts",
      "Practice analytical writing",
      "Use official GRE prep materials",
      "Take multiple practice tests"
    ],
    acceptedBy: ["Most US graduate schools", "Many European programs", "Business schools (alongside GMAT)", "Law schools (some)"],
    faqs: [
      { question: "Is GRE required for all graduate programs?", answer: "No. Some programs have waived GRE requirements. Check specific program requirements." },
      { question: "What's a competitive GRE score?", answer: "320+ (combined Verbal and Quant) is competitive for top programs." }
    ]
  },
  {
    name: "GMAT",
    slug: "gmat",
    fullName: "Graduate Management Admission Test",
    description: "The GMAT is the primary entrance exam for MBA and business graduate programs worldwide.",
    purpose: "Business school admission, especially MBA programs",
    sections: [
      { name: "Quantitative Reasoning", description: "Problem solving and data sufficiency", duration: "62 minutes" },
      { name: "Verbal Reasoning", description: "Reading, critical reasoning, sentence correction", duration: "65 minutes" },
      { name: "Integrated Reasoning", description: "Multi-source reasoning, graphics, tables", duration: "30 minutes" },
      { name: "Analytical Writing", description: "Analysis of an argument", duration: "30 minutes" }
    ],
    scoring: "200-800 total",
    scoringDetails: [
      "Total score: 200-800",
      "Average score: ~565",
      "Top MBA programs often want 700+",
      "Integrated Reasoning: 1-8",
      "Analytical Writing: 0-6"
    ],
    eligibility: "No specific eligibility. Must be at least 18 years old.",
    fees: "US $275",
    validity: "5 years",
    registrationSteps: [
      "Create account at mba.com",
      "Choose test date and location",
      "Pay registration fee",
      "Prepare for test",
      "Take the test"
    ],
    preparationTips: [
      "Focus on critical reasoning skills",
      "Master sentence correction rules",
      "Practice data sufficiency questions",
      "Time management is crucial",
      "Take official GMAT prep course"
    ],
    acceptedBy: ["MBA programs worldwide", "Master's in Finance", "Master's in Management", "Executive education programs"],
    faqs: [
      { question: "GMAT vs GRE for MBA?", answer: "Most business schools accept both. GMAT is traditionally preferred but GRE acceptance is growing." },
      { question: "What GMAT score do I need?", answer: "700+ for top 20 programs. 650+ for most competitive programs. 600+ for many good programs." }
    ]
  },
  {
    name: "SAT",
    slug: "sat",
    fullName: "Scholastic Assessment Test",
    description: "The SAT is a standardized test widely used for US undergraduate admissions. Recently became digital.",
    purpose: "Undergraduate college admission, primarily in the US",
    sections: [
      { name: "Reading and Writing", description: "Reading comprehension and writing skills", duration: "64 minutes" },
      { name: "Math", description: "Algebra, problem-solving, advanced math", duration: "70 minutes" }
    ],
    scoring: "400-1600 total",
    scoringDetails: [
      "Evidence-Based Reading and Writing: 200-800",
      "Math: 200-800",
      "Total: 400-1600",
      "Average score: ~1050"
    ],
    eligibility: "Typically high school students. No age restriction.",
    fees: "US $60 (varies by location)",
    validity: "5 years (but recent scores preferred)",
    registrationSteps: [
      "Create College Board account",
      "Register for test date",
      "Upload photo",
      "Pay registration fee",
      "Print admission ticket"
    ],
    preparationTips: [
      "Practice with Khan Academy (free)",
      "Take official practice tests",
      "Focus on weakest areas",
      "Build reading stamina",
      "Learn test-taking strategies"
    ],
    acceptedBy: ["US universities", "Some Canadian universities", "Some UK universities", "International universities"],
    faqs: [
      { question: "Is SAT still required?", answer: "Many US colleges have gone test-optional. Check specific university requirements." },
      { question: "What's a good SAT score?", answer: "1200+ is solid. 1400+ is competitive for top schools. 1500+ is excellent." }
    ]
  },
  {
    name: "PTE Academic",
    slug: "pte",
    fullName: "Pearson Test of English Academic",
    description: "PTE Academic is a computer-based English proficiency test accepted for study abroad and immigration.",
    purpose: "English proficiency for study and migration, popular for Australia",
    sections: [
      { name: "Speaking & Writing", description: "Personal introduction, essays, reading aloud", duration: "77-93 minutes" },
      { name: "Reading", description: "Multiple choice, reorder paragraphs, fill blanks", duration: "32-40 minutes" },
      { name: "Listening", description: "Summarize spoken text, multiple choice, dictation", duration: "45-57 minutes" }
    ],
    scoring: "10-90 overall",
    scoringDetails: [
      "Overall score: 10-90",
      "Communicative skills scores",
      "Enabling skills scores",
      "Most universities require 58-65+"
    ],
    eligibility: "16 years and above",
    fees: "US $210-270 (varies by location)",
    validity: "2 years",
    registrationSteps: [
      "Create Pearson account",
      "Book test date and center",
      "Pay test fee",
      "Take the computer-based test",
      "Receive results in 2 days"
    ],
    preparationTips: [
      "Get familiar with computer-based format",
      "Practice speaking into a microphone",
      "Use official PTE practice materials",
      "Work on integrated skills tasks",
      "Time management is crucial"
    ],
    acceptedBy: ["Australian universities", "New Zealand universities", "UK universities", "Australian immigration", "Many global institutions"],
    faqs: [
      { question: "PTE vs IELTS?", answer: "PTE is fully computer-based with faster results (2 days). IELTS has human interaction in speaking. Both are widely accepted." },
      { question: "What PTE score equals IELTS 7?", answer: "Approximately PTE 65 equals IELTS 7.0." }
    ]
  },
  {
    name: "Duolingo English Test",
    slug: "det",
    fullName: "Duolingo English Test",
    description: "The DET is an affordable, convenient online English proficiency test taken from home. Increasingly accepted post-pandemic.",
    purpose: "English proficiency for university admission",
    sections: [
      { name: "Adaptive Test", description: "Reading, writing, listening, speaking tasks", duration: "45 minutes" },
      { name: "Video Interview", description: "Unscored video responses", duration: "10 minutes" }
    ],
    scoring: "10-160",
    scoringDetails: [
      "Overall score: 10-160",
      "Literacy subscore",
      "Comprehension subscore",
      "Conversation subscore",
      "Production subscore"
    ],
    eligibility: "Anyone with internet and computer",
    fees: "US $59",
    validity: "2 years",
    registrationSteps: [
      "Create Duolingo account",
      "Purchase test credit",
      "Take test at home",
      "Receive results in 2 days",
      "Send scores to universities"
    ],
    preparationTips: [
      "Take free practice tests on Duolingo",
      "Ensure stable internet connection",
      "Practice in a quiet environment",
      "Get comfortable with computer-based testing",
      "Review sample questions"
    ],
    acceptedBy: ["Many US universities", "UK universities", "Canadian universities", "European universities"],
    faqs: [
      { question: "Is DET accepted everywhere?", answer: "Acceptance grew significantly post-COVID. Check with your specific universities." },
      { question: "What DET score equals IELTS 7?", answer: "Approximately DET 115-120 equals IELTS 7.0." }
    ]
  }
];

export const getExamBySlug = (slug: string): Exam | undefined => {
  return exams.find(e => e.slug === slug);
};
