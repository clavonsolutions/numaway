export interface ArticleSection {
  heading: string;
  content: string;
}

export interface ResourceArticle {
  slug: string;
  pillarSlug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  keywords: string[];
  relatedServiceIds: string[];
  relatedCountrySlug?: string;
  sections: ArticleSection[];
}

export interface PillarPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  keywords: string[];
  relatedServiceIds: string[];
  relatedCountrySlug?: string;
  intro: string;
  keyPoints: string[];
  articles: ResourceArticle[];
}

// ─── UK Pillar ────────────────────────────────────────────────────────────────

const ukArticles: ResourceArticle[] = [
  {
    slug: "ucas-application-guide",
    pillarSlug: "study-in-uk",
    title: "How to Apply to UK Universities Through UCAS",
    excerpt: "A step-by-step walkthrough of the UCAS application process for Nigerian and African students, including deadlines, personal statements, and references.",
    category: "Applications",
    publishedAt: "2026-04-01",
    keywords: ["ucas application", "uk university application", "ucas nigeria", "how to apply uk university"],
    relatedServiceIds: ["STU-03"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "What is UCAS?",
        content: "UCAS (Universities and Colleges Admissions Service) is the central platform through which virtually all undergraduate applications to UK universities are made. You can apply to a maximum of five courses in a single application cycle. Applications for entry in September 2026 typically open in May 2025, with the equal-consideration deadline of 29 January 2026 applying to most courses. Medicine, dentistry, veterinary science, and Oxford/Cambridge courses have an earlier deadline of 15 October.",
      },
      {
        heading: "Key Steps in the UCAS Application",
        content: "First, register on the UCAS Hub and fill in your personal details, education history, and English language qualifications. You will need your IELTS or equivalent score ready. Second, write your personal statement: a 4,000-character (roughly 650 words) essay explaining why you want to study your chosen subject and what you bring to the programme. Third, secure a reference from a teacher, head of department, or careers adviser who can speak to your academic ability. Finally, submit and pay the UCAS application fee (currently £27.50 for multiple choices). You will then receive decisions ranging from Unconditional Offer, Conditional Offer, or Rejection from each university.",
      },
      {
        heading: "Tips for Nigerian Applicants",
        content: "UK universities receive thousands of international applications. A strong personal statement that connects your academic background in Nigeria to the UK programme is essential. If you studied under the WAEC or NECO curriculum, universities will convert your grades using their equivalency tables. Most universities expect at least 5 B3 grades at WASSCE (including English and Mathematics) for undergraduate entry. Verify the specific entry requirements on each university's website before applying.",
      },
      {
        heading: "After You Submit",
        content: "Track your application status on the UCAS Hub. Once you receive offers, you must accept one as your Firm choice (CF) and one as your Insurance choice (CI) by the Reply by date. Once you have your final grades, UCAS will confirm whether you have met your Firm offer conditions. If you miss your conditions but meet your Insurance offer, you may still go. If you miss both, UCAS Clearing opens in July and lists courses with remaining places.",
      },
    ],
  },
  {
    slug: "uk-student-visa-guide",
    pillarSlug: "study-in-uk",
    title: "UK Student Visa (Student Route): Complete Guide for Nigerian Students",
    excerpt: "Everything you need to know about the UK Student visa: eligibility, costs, documents, processing times, and what to do if your application is refused.",
    category: "Visas",
    publishedAt: "2026-04-03",
    keywords: ["uk student visa nigeria", "uk student route visa", "uk visa requirements nigeria"],
    relatedServiceIds: ["STU-06"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "Who Needs a UK Student Visa?",
        content: "Nigerian passport holders studying a course longer than six months in the UK must apply for the Student Route visa (formerly Tier 4). You must be sponsored by a UK Visas and Immigration (UKVI)-licensed institution, all major universities are licensed sponsors.",
      },
      {
        heading: "Key Eligibility Requirements",
        content: "You must have an unconditional offer from a licensed sponsor, confirmed by a Confirmation of Acceptance for Studies (CAS) number. You must demonstrate sufficient funds: £1,334 per month for up to 9 months of living costs for studying in London (£1,023 outside London), plus the first year's tuition fees, all held in your account for at least 28 consecutive days before applying. You must meet the English language requirement: typically IELTS 5.5 overall (6.0 for postgraduate). You must pay the Immigration Health Surcharge (currently £776 per year of study) on top of the visa fee (£490 for applications from outside the UK).",
      },
      {
        heading: "Documents Required",
        content: "Your CAS number, a valid passport, bank statements (28-day rule), IELTS certificate, academic transcripts, and the UCAS offer letter or university acceptance letter. If your parents are funding your studies, you may also need a financial sponsorship letter and their bank statements.",
      },
      {
        heading: "Processing Times and Timeline",
        content: "UKVI processes most Student visa applications within 3 weeks if applied from outside the UK. Priority service (approximately £250 extra) reduces this to 5 working days. Apply no earlier than 6 months before your course start date. Book a biometric appointment at a Visa Application Centre (VAC) in Lagos or Abuja early, slots fill quickly in peak season (July–August).",
      },
    ],
  },
  {
    slug: "uk-tuition-living-costs",
    pillarSlug: "study-in-uk",
    title: "UK University Tuition Fees and Living Costs for International Students",
    excerpt: "A realistic breakdown of what studying in the UK costs, from tuition to rent to groceries, to help you plan your budget before you apply.",
    category: "Costs",
    publishedAt: "2026-04-05",
    keywords: ["uk university fees international students", "cost of living uk student", "studying uk cost nigeria"],
    relatedServiceIds: ["STU-01"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "Tuition Fees",
        content: "International student tuition fees at UK universities are not regulated. Undergraduate fees typically range from £11,000 to £26,000 per year, with medicine and engineering at the higher end. Top universities (Russell Group) charge £25,000–£38,000 for postgraduate programmes. London universities typically charge 10–20% more than equivalent institutions outside London.",
      },
      {
        heading: "Accommodation Costs",
        content: "University halls of residence cost £120–£250 per week in London and £100–£180 per week outside London. Private student accommodation and house shares can be cheaper if you shop early. Apply for university accommodation in March or April, most institutions give international students priority in Year 1.",
      },
      {
        heading: "Monthly Living Budget",
        content: "Outside London: roughly £900–£1,200 per month covering rent, food, transport, mobile, and entertainment. In London: £1,300–£1,800 per month. Groceries for a student average £150–£200 per month in a major UK supermarket. A National Railcard (£30/year) gives you one-third off train fares.",
      },
      {
        heading: "Work Rights",
        content: "The UK Student visa allows you to work up to 20 hours per week during term time and full time during holidays. A part-time job at the UK National Living Wage (currently £11.44/hour) can earn approximately £750–£900 per month to offset living costs. You cannot work more than the permitted hours or switch to self-employment on a Student visa.",
      },
    ],
  },
  {
    slug: "best-uk-universities-for-nigerians",
    pillarSlug: "study-in-uk",
    title: "Best UK Universities for Nigerian Students in 2025",
    excerpt: "Which UK universities have strong support systems for Nigerian and African students, generous scholarships, and the right courses for your goals?",
    category: "Universities",
    publishedAt: "2026-04-07",
    keywords: ["best uk university for nigerian students", "uk universities accept nigerian students", "russell group nigeria"],
    relatedServiceIds: ["STU-02"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "What Makes a University Good for Nigerian Students?",
        content: "The factors that matter most to Nigerian students include: recognition of WAEC/NECO qualifications, a sizable Nigerian or African student community, dedicated international student support, scholarship availability, and graduate employment outcomes in sectors that matter for Nigeria-connected careers (finance, law, engineering, health).",
      },
      {
        heading: "Top Choices by Category",
        content: "For prestige and global reputation: University of Oxford, University of Cambridge, Imperial College London, UCL. For strong Nigerian student communities and accessible entry: University of Manchester, University of Nottingham, University of Leicester. For law and business: University of Bristol, University of Birmingham. For engineering and technology: University of Southampton, University of Sheffield. For an affordable city with strong outcomes: Coventry University, University of Bradford.",
      },
      {
        heading: "UCAS Tariff Points and WAEC Equivalency",
        content: "UCAS maps WASSCE grades to its tariff point system. A1 = 56 points, B2 = 48, B3 = 40, C4 = 32, C5 = 24, C6 = 16. Most undergraduate programmes require 112–136 UCAS points. Strong WAEC results (5 distinctions) are equivalent to A-Level BBB–ABB and open most Russell Group doors, though individual universities set their own requirements.",
      },
      {
        heading: "Scholarships Specifically for Nigerian Students",
        content: "The Chevening Scholarship (FCO-funded, fully funded masters) takes 60+ Nigerians per year. The Commonwealth Scholarship targets developing-country students including Nigerians. Many individual universities offer Vice-Chancellor's International Scholarships of £2,000–£10,000 off tuition. Ask each university's international office directly about Nigerian-specific bursaries.",
      },
    ],
  },
  {
    slug: "uk-graduate-route-visa",
    pillarSlug: "study-in-uk",
    title: "UK Graduate Route Visa: Working in the UK After Your Degree",
    excerpt: "The Graduate Route visa lets international graduates work in the UK for 2 years (3 for PhD graduates) after finishing their degree. Here is everything you need to know.",
    category: "Post-Study",
    publishedAt: "2026-04-09",
    keywords: ["uk graduate route visa", "uk post study work visa", "stay in uk after degree"],
    relatedServiceIds: ["STU-09"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "What Is the Graduate Route?",
        content: "Introduced in 2021, the Graduate Route allows international graduates of UK universities to stay and work (or look for work) for 2 years after graduating. PhD graduates get 3 years. There is no job offer required and no salary threshold at entry. You can work in any sector at any level, including self-employment.",
      },
      {
        heading: "Eligibility",
        content: "You must have a Student visa (or Tier 4) at the time of applying. You must have successfully completed a degree-level qualification (bachelor's, master's, or PhD) at a licensed UK higher education provider. You cannot switch to the Graduate Route from outside the UK.",
      },
      {
        heading: "How to Apply",
        content: "Apply from within the UK before your current Student visa expires. The fee is £822 and can be submitted online. Your university will confirm your graduation status with UKVI. You cannot apply before results are officially confirmed, so apply after your university confirms degree completion (typically October–November for summer graduates).",
      },
      {
        heading: "Using the Graduate Route to Progress",
        content: "During the Graduate Route, you can apply for other sponsored routes (Skilled Worker, Health and Care Worker) if you secure an eligible job offer. Many Nigerian graduates use the Graduate Route to gain 1–2 years of UK work experience before either switching to a Skilled Worker visa or returning home with in-demand skills.",
      },
    ],
  },
];

// ─── Canada Pillar ────────────────────────────────────────────────────────────

const canadaArticles: ResourceArticle[] = [
  {
    slug: "apply-to-canadian-universities",
    pillarSlug: "study-in-canada",
    title: "How to Apply to Canadian Universities as an International Student",
    excerpt: "Canadian universities use direct applications, not a central system like UCAS. Here is how to apply, what documents you need, and when to submit.",
    category: "Applications",
    publishedAt: "2026-04-01",
    keywords: ["how to apply canadian university", "canada university application nigeria", "ontario universities international"],
    relatedServiceIds: ["STU-03"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "No Central System",
        content: "Unlike the UK (UCAS), Canada does not have a single central admissions service for all universities. Each university has its own application portal. Ontario universities are the exception: OUAC (Ontario Universities' Application Centre) handles undergraduate admissions to all 24 Ontario universities through one application.",
      },
      {
        heading: "Key Application Deadlines",
        content: "Most Canadian universities accept applications from October/November for September entry the following year. Competitive programmes (computer science, engineering, nursing) at top schools like University of Toronto, UBC, and McGill can close as early as January. Apply early, some programmes admit on a rolling basis.",
      },
      {
        heading: "Documents Required",
        content: "Academic transcripts (WAEC results, O-level and A-level equivalent, or university transcripts for graduate programmes), English language test scores (IELTS 6.0+ overall for most programmes, 6.5+ for competitive ones), a statement of purpose for graduate programmes, two or three reference letters for graduate applications, and a copy of your passport.",
      },
      {
        heading: "Application Fees and Decisions",
        content: "Most Canadian universities charge an application fee of CAD 50–150. Processing times vary from 4 to 12 weeks. Unlike the UK, acceptance to Canadian universities is direct from the institution without a CAS equivalent, once you receive your Offer of Admission, you use it to apply for your Study Permit.",
      },
    ],
  },
  {
    slug: "canada-study-permit-guide",
    pillarSlug: "study-in-canada",
    title: "Canada Study Permit: Step-by-Step Application Guide",
    excerpt: "How to apply for a Canadian Study Permit online, what documents you need, the SDS (Student Direct Stream) pathway, and typical processing times.",
    category: "Visas",
    publishedAt: "2026-04-03",
    keywords: ["canada study permit", "canada student visa nigeria", "canada sds stream nigeria"],
    relatedServiceIds: ["STU-06"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "Study Permit vs Student Visa",
        content: "Canada issues Study Permits (not student visas) to international students. Nigerian passport holders also need a Temporary Resident Visa (TRV) or Electronic Travel Authorisation (eTA) to enter Canada, both are typically issued at the same time as your Study Permit when you apply online.",
      },
      {
        heading: "Student Direct Stream (SDS)",
        content: "Nigeria is included in the Student Direct Stream (SDS), a faster pathway that processes applications in 20 calendar days if you meet additional requirements. For SDS, you need: an IELTS overall of 6.0 (no band below 6.0), a Guaranteed Investment Certificate (GIC) of CAD 10,000 from a participating Canadian bank, and acceptance of a Designated Learning Institution (DLI).",
      },
      {
        heading: "Required Documents (SDS)",
        content: "Acceptance letter from a DLI, IELTS certificate (6.0+ overall), GIC receipt, academic transcripts, proof of tuition payment (or letter of credit), a completed IMM 1294 study permit form, biometrics, and a valid passport.",
      },
      {
        heading: "Processing Times and Fees",
        content: "SDS processing: 20 calendar days. Regular processing: 8–12 weeks. Study Permit fee: CAD 150. Biometrics: CAD 85. GIC: CAD 10,000 (returned to you in monthly instalments once in Canada). Apply through the IRCC online portal. Nigeria has a Visa Application Centre (VAC) in Lagos (CGI Federal) and Abuja.",
      },
    ],
  },
  {
    slug: "canada-tuition-living-costs",
    pillarSlug: "study-in-canada",
    title: "Cost of Studying in Canada: Tuition, Accommodation and Living Expenses",
    excerpt: "A complete cost breakdown for Nigerian students considering Canada: tuition fees, living costs by city, work rights, and how to manage your budget.",
    category: "Costs",
    publishedAt: "2026-04-05",
    keywords: ["cost of studying canada international student", "canada tuition fees nigeria", "living costs canada student"],
    relatedServiceIds: ["STU-01"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "Tuition Fees",
        content: "Canadian undergraduate fees for international students range from CAD 20,000 to CAD 35,000 per year. Medicine and professional programmes can cost CAD 50,000+. Graduate (master's) programmes vary more widely: CAD 8,000–25,000 per year depending on the programme and province. Quebec universities offer lower fees but require a knowledge of French for many programmes.",
      },
      {
        heading: "Living Costs by City",
        content: "Toronto and Vancouver are the most expensive cities, with monthly living costs (excluding tuition) of CAD 1,800–2,500. Montreal is more affordable at CAD 1,200–1,700. Smaller university cities like Halifax, Saskatoon, and Kingston offer costs of CAD 1,000–1,500 per month. Most students budget CAD 15,000–20,000 per year for living costs.",
      },
      {
        heading: "Work Rights",
        content: "International students in Canada on a valid Study Permit can work up to 24 hours per week off campus during academic sessions and full time during scheduled breaks. On-campus work has no restrictions. The federal minimum wage is CAD 17.30/hour (2024); provincial minimums vary. Part-time work can offset a significant portion of living costs.",
      },
      {
        heading: "Post-Graduation Work Permit (PGWP)",
        content: "After graduating, you can apply for a PGWP that allows you to work full time in Canada for up to 3 years. The PGWP is a critical stepping stone to Canadian Permanent Residency through Express Entry or Provincial Nominee Programs, making Canada one of the best countries for long-term immigration prospects.",
      },
    ],
  },
  {
    slug: "pgwp-canada-guide",
    pillarSlug: "study-in-canada",
    title: "Canada Post-Graduation Work Permit (PGWP): Complete Guide",
    excerpt: "The PGWP lets you work in Canada for up to 3 years after graduation, and it is a major pathway to Canadian Permanent Residency. Here is how it works.",
    category: "Post-Study",
    publishedAt: "2026-04-07",
    keywords: ["pgwp canada", "canada post study work permit", "work in canada after graduation"],
    relatedServiceIds: ["STU-09"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "What Is the PGWP?",
        content: "The Post-Graduation Work Permit (PGWP) is an open work permit issued to international graduates of eligible Canadian institutions. It is 'open' in the sense that it is not tied to a specific employer, you can work for any employer anywhere in Canada. The duration mirrors your study period: 8 months to 3 years maximum for most programmes.",
      },
      {
        heading: "Eligibility",
        content: "You must have completed a full-time programme at a DLI of at least 8 months. Language school programmes are not eligible. The programme must lead to a degree, diploma, or certificate. You must apply within 180 days of receiving your final grades. Your Study Permit must be valid when you apply.",
      },
      {
        heading: "PGWP and Permanent Residency",
        content: "Canadian work experience gained through the PGWP creates eligibility for permanent residency streams: the Canadian Experience Class (CEC) under Express Entry requires 1 year of skilled work in Canada. Provincial Nominee Programs (PNPs) in provinces like Ontario, BC, and Alberta actively target international graduates. Many Nigerian graduates become Canadian permanent residents within 2–3 years of finishing their degree.",
      },
      {
        heading: "How to Apply",
        content: "Apply online through the IRCC portal. The fee is CAD 255. You will need your final transcript, the graduation letter from your institution, your Study Permit, and evidence of your education. Processing times are currently 3–5 months; apply as soon as your results are confirmed to minimise any gap in your authorisation to work.",
      },
    ],
  },
  {
    slug: "top-canadian-universities",
    pillarSlug: "study-in-canada",
    title: "Top Canadian Universities for International Students",
    excerpt: "Which Canadian universities offer the best combination of academic ranking, scholarship opportunities, and post-study career prospects for African students?",
    category: "Universities",
    publishedAt: "2026-04-09",
    keywords: ["top canadian universities international students", "best university canada nigeria", "mcgill toronto ubc"],
    relatedServiceIds: ["STU-02"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "Canada's Research Universities",
        content: "Canada's U15 research universities are its most internationally recognised institutions. The top tier includes University of Toronto, University of British Columbia (UBC), McGill University, and University of Alberta. These appear consistently in global top-100 rankings. They offer the strongest scholarship support and research opportunities for graduate students.",
      },
      {
        heading: "Teaching-Focused and Regional Universities",
        content: "Simon Fraser University (Vancouver), University of Waterloo (tech and co-op programmes), McMaster University (health sciences), University of Ottawa, and Dalhousie University all offer strong programmes with more accessible entry requirements and often lower tuition than the flagship institutions. Queen's University and Western University are prestigious liberal arts-focused universities favoured by law and business applicants.",
      },
      {
        heading: "Colleges and Polytechnics",
        content: "George Brown College, Humber College, Centennial College, and Seneca College in Ontario offer 2-year diploma and certificate programmes at significantly lower tuition (CAD 12,000–18,000/year). Graduates can still qualify for a PGWP if the programme is at least 8 months at an eligible DLI. These are popular with students targeting quick Canadian work experience.",
      },
      {
        heading: "Scholarships for African Students",
        content: "University of Toronto: Lester B. Pearson International Scholarship (full funding, extremely competitive). McGill: McCall MacBain Scholarships (full funding, merit-based). UBC: International Major Entrance Scholarship. Many universities also offer entrance scholarships of CAD 2,000–15,000 automatically on acceptance based on academic results.",
      },
    ],
  },
];

// ─── Scholarships Pillar ─────────────────────────────────────────────────────

const scholarshipsArticles: ResourceArticle[] = [
  {
    slug: "chevening-scholarship-guide",
    pillarSlug: "scholarships-guide",
    title: "Chevening Scholarship: Application Guide for Nigerian Students",
    excerpt: "Chevening is the UK government's global scholarship programme, fully funding Nigerian students for a one-year UK master's degree. Here is how to apply.",
    category: "Scholarships",
    publishedAt: "2026-04-01",
    keywords: ["chevening scholarship nigeria", "chevening application guide", "uk government scholarship nigeria"],
    relatedServiceIds: ["STU-05"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "What Is Chevening?",
        content: "Chevening is funded by the UK Foreign, Commonwealth and Development Office (FCDO). It awards approximately 1,500 scholarships globally each year, with Nigeria receiving 60+ awards annually, making Nigeria one of the largest recipients. Chevening covers full tuition, a monthly living allowance, return flights, and one-off arrival and departure payments.",
      },
      {
        heading: "Eligibility Requirements",
        content: "You must be a Nigerian citizen. You must have at least 2 years of work experience (employment, entrepreneurship, or voluntary work). You must have an undergraduate degree equivalent to a UK second-class honours (2:1) or above. You must return to Nigeria for at least 2 years after your scholarship. Applications open in August each year and close in November.",
      },
      {
        heading: "The Application Process",
        content: "The Chevening application is entirely online. You write four essays (500 words each) on leadership, networking, your career plan, and why you chose your courses. You choose up to three UK master's programmes (you must have an offer from at least one before the interview stage). Shortlisted candidates are interviewed in Nigeria (Abuja/Lagos) between March and May.",
      },
      {
        heading: "What Selectors Look For",
        content: "Chevening is explicitly a leadership programme, they want people with a track record of influencing others and clear plans for using the UK degree to improve Nigeria or their sector. Be specific: vague ambitions are rejected. The strongest applicants have a story that connects their past work experience, the master's programme, and a credible vision for their career in Nigeria after returning.",
      },
    ],
  },
  {
    slug: "commonwealth-scholarship-guide",
    pillarSlug: "scholarships-guide",
    title: "Commonwealth Scholarship: How Nigerian Students Can Apply",
    excerpt: "The Commonwealth Scholarship Commission funds Nigerian students for UK master's and PhD degrees in subjects related to development. Here is a guide to eligibility and the application process.",
    category: "Scholarships",
    publishedAt: "2026-04-03",
    keywords: ["commonwealth scholarship nigeria", "csc scholarship nigeria", "commonwealth masters scholarship"],
    relatedServiceIds: ["STU-05"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "Types of Commonwealth Awards",
        content: "The Commonwealth Scholarship Commission (CSC) offers several award types for Nigerians: the Shared Scholarship (jointly funded with UK universities, for master's degrees), the Distance Learning Scholarship (for part-time UK master's programmes studied from Nigeria), and the PhD Scholarship. All cover full tuition and living costs.",
      },
      {
        heading: "Eligibility",
        content: "Nigerian citizens. An undergraduate degree of upper second class or above (or equivalent). For most awards, you must be committed to returning to Nigeria after the scholarship and contributing to development. Subject priority areas include science and technology, education, health, and agriculture, though other subjects are considered.",
      },
      {
        heading: "Application Timeline",
        content: "Applications typically open in October and close in late January for the following academic year. Applications are managed through the Commonwealth Scholarship Commission's online portal. Your application must be endorsed by a Nominating Agency in Nigeria: typically the Federal Scholarship Board (FSB) under the Federal Ministry of Education.",
      },
      {
        heading: "Key Tips",
        content: "Apply to the Federal Scholarship Board early, they manage Nigeria's CSC nominations and have their own process separate from the CSC portal. Strong applicants demonstrate a link between their field of study, their current role in Nigeria, and a specific development outcome. Competition is intense: in a good year, Nigeria receives 20–30 CSC master's awards.",
      },
    ],
  },
  {
    slug: "daad-scholarship-germany",
    pillarSlug: "scholarships-guide",
    title: "DAAD Scholarship: Study in Germany for Free as a Nigerian Student",
    excerpt: "Germany's DAAD (German Academic Exchange Service) offers funded scholarships for Nigerian graduates to study master's and PhD programmes in Germany, often with no tuition fees.",
    category: "Scholarships",
    publishedAt: "2026-04-05",
    keywords: ["daad scholarship nigeria", "study germany free scholarship", "german scholarship nigeria"],
    relatedServiceIds: ["STU-05"],
    relatedCountrySlug: "germany",
    sections: [
      {
        heading: "Why Germany?",
        content: "Most German public universities charge no tuition fees to international students, only a semester contribution of €150–350. Combined with a DAAD scholarship covering living costs (~€850/month), housing, and travel, a German master's degree can be almost free. Germany also has one of the strongest post-study work permit regimes in Europe.",
      },
      {
        heading: "Types of DAAD Awards for Nigerians",
        content: "The Development-Related Postgraduate Courses (EPOS) programme is specifically for students from developing countries including Nigeria who intend to return and contribute. It covers a full master's degree at a German university. The In-Country/In-Region programme funds master's degrees at African universities with German partnerships. Helmut-Schmidt-Programme scholarships target public management and governance.",
      },
      {
        heading: "Eligibility and Application",
        content: "A bachelor's degree (minimum upper second class). 2 years of post-degree professional experience (for EPOS). Proof of German language proficiency (B1–B2 for German-taught programmes) or English proficiency for English-taught programmes. Applications are submitted through the DAAD portal. Deadlines vary by programme, most fall in October–November for entry the following autumn.",
      },
      {
        heading: "English-Taught Programmes in Germany",
        content: "Over 1,900 master's programmes in Germany are fully taught in English. You do not need German to apply. Subjects popular with Nigerian applicants include engineering, computer science, international development, public policy, and MBA programmes at institutions such as TU Munich, Heidelberg, and Free University Berlin.",
      },
    ],
  },
  {
    slug: "winning-scholarship-essay",
    pillarSlug: "scholarships-guide",
    title: "How to Write a Winning Scholarship Essay or Personal Statement",
    excerpt: "A concrete framework for writing the scholarship essays that win funding, with common mistakes to avoid and examples from successful Nigerian applicants.",
    category: "Applications",
    publishedAt: "2026-04-07",
    keywords: ["scholarship essay tips", "how to write scholarship personal statement", "scholarship application tips nigeria"],
    relatedServiceIds: ["STU-05"],
    sections: [
      {
        heading: "The Core Framework",
        content: "Successful scholarship essays follow a clear arc: the problem or opportunity you identified in your field in Nigeria; your specific response to it (your career so far or your academic work); how the scholarship and programme fill a precise gap in your knowledge or network; and a realistic, specific vision of what you will do differently when you return. Selectors are not looking for ambition, they are looking for specificity.",
      },
      {
        heading: "Common Mistakes",
        content: "Generic openers: 'From a young age I have always been passionate about…', every essay starts this way. Vague goals: 'I hope to contribute to Nigeria's development', which sector, how, by when, with which stakeholders? Underselling your work experience: Nigerian professionals often dismiss what they have done as ordinary; it is not ordinary to selectors reading international applications. Starting too late: Chevening, Commonwealth, and DAAD essays need 6–8 weeks of drafting, feedback, and revision.",
      },
      {
        heading: "Structuring Each Essay Paragraph",
        content: "Use the STAR method for experience-based prompts (Situation, Task, Action, Result). Use the IMRaD structure for research-based prompts (Introduction, Methods, Results, Discussion). For future-vision prompts, anchor your plans in named organisations, initiatives, or policies you intend to engage with, not abstract aspirations.",
      },
      {
        heading: "Getting Feedback",
        content: "Share your draft with a Chevening or Commonwealth alumnus in your network, many are glad to help and their feedback is invaluable. Have a counsellor or mentor who writes professionally review your English usage. Read your essay aloud: awkward sentences become obvious when you hear them. Then cut aggressively, the best scholarship essays are 10–20% shorter than the maximum word count.",
      },
    ],
  },
  {
    slug: "fully-funded-scholarships-african-students",
    pillarSlug: "scholarships-guide",
    title: "Top Fully Funded Scholarships for African Students in 2025",
    excerpt: "A curated list of fully funded scholarships open to Nigerian and African students for master's and PhD programmes in the UK, USA, Germany, and beyond.",
    category: "Scholarships",
    publishedAt: "2026-04-09",
    keywords: ["fully funded scholarships africa", "scholarships for african students 2025", "free master degree africa"],
    relatedServiceIds: ["STU-05"],
    sections: [
      {
        heading: "UK-Based Fully Funded Awards",
        content: "Chevening (1,500 awards globally, 60+ to Nigeria), Commonwealth Scholarship (development-focused, ~20–30 to Nigeria/year), Rhodes Scholarship (to Oxford, extremely competitive, 11 awards per year for Africa at large), Gates Cambridge Scholarship (to Cambridge, unrestricted subject, highly competitive).",
      },
      {
        heading: "USA-Based Awards",
        content: "Fulbright Foreign Student Program (US State Department, covers master's and PhD, competitive for Nigerians), MasterCard Foundation Scholars Program (hosted at African universities and selected US/Canadian institutions), Humphrey Fellowship (professional development, not a degree, but valuable for government professionals).",
      },
      {
        heading: "Germany, Netherlands, and Scandinavia",
        content: "DAAD (Germany, master's and PhD, strong for engineering and development), Erasmus Mundus Joint Masters (EU-funded, joint degrees across European universities), Dutch Orange Tulip Scholarship (Netherlands universities), Swedish Institute Scholarships for Global Professionals.",
      },
      {
        heading: "African-Based Funding",
        content: "Tony Elumelu Foundation Entrepreneurship Programme (not a scholarship but a grant for African entrepreneurs), African Development Bank' Wprogramme for Africa (research fellowships), Ford Foundation International Fellowships Program (for community leaders, managed through Ford's Lagos office).",
      },
    ],
  },
];

// ─── English Tests Pillar ─────────────────────────────────────────────────────

const englishTestsArticles: ResourceArticle[] = [
  {
    slug: "ielts-preparation-guide",
    pillarSlug: "english-tests-guide",
    title: "IELTS Preparation: How to Score Band 7+ as a Nigerian Student",
    excerpt: "A structured guide to IELTS preparation for Nigerian students, covering each module, score requirements for UK and Canadian universities, and effective study strategies.",
    category: "Exams",
    publishedAt: "2026-04-01",
    keywords: ["ielts preparation nigeria", "how to score 7 ielts", "ielts study plan"],
    relatedServiceIds: ["STU-04"],
    sections: [
      {
        heading: "Understanding the IELTS Band Scale",
        content: "IELTS scores range from 1–9. UK universities typically require Band 6.0–7.0 overall for undergraduate entry and 6.5–7.5 for master's programmes. A Conditional Offer often allows one band below the overall requirement in one skill area (e.g., overall 6.5 with no band below 6.0). The Student Visa requires IELTS 5.5 overall with no band below 5.5 for undergraduate entry, though university entry requirements are usually higher.",
      },
      {
        heading: "Module-by-Module Strategy",
        content: "Listening (40 questions, 30 minutes plus 10 mins transfer): practice with authentic Cambridge IELTS recordings. Pay attention to British accents and number/letter dictation questions, these cause unnecessary errors. Reading (40 questions, 60 minutes): skim each passage first, locate and highlight keywords, do not re-read entire passages. Writing (60 minutes, two tasks): Task 1 (describe a graph or diagram, 150 words) and Task 2 (essay, 250 words). Task 2 carries more weight. Speaking (11–14 minutes, three parts): the examiner is assessing fluency, vocabulary range, grammar, and pronunciation, not your opinions.",
      },
      {
        heading: "Recommended Study Timeline",
        content: "6-week plan: Week 1–2, diagnostic test to identify weak bands; targeted grammar revision. Week 3–4, one timed full practice test per week; daily listening and reading practice (45 minutes each). Week 5, intensive writing correction; speaking practice with a study partner or tutor. Week 6, two timed tests under exam conditions; rest two days before the test. Most candidates improve 0.5–1.0 bands in 6 weeks of structured preparation.",
      },
      {
        heading: "Where to Register in Nigeria",
        content: "IELTS test centres are operated by British Council and IDP in Lagos, Abuja, Port Harcourt, Kano, and several other cities. Fees are approximately NGN 135,000–150,000 (2024). Book early, popular test dates fill up 4–6 weeks in advance. Academic IELTS is required for university admissions; General Training IELTS is for immigration.",
      },
    ],
  },
  {
    slug: "ielts-vs-toefl",
    pillarSlug: "english-tests-guide",
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    excerpt: "Both IELTS and TOEFL are accepted by universities worldwide, but they test English in different ways. Here is how to choose the right test for your situation.",
    category: "Exams",
    publishedAt: "2026-04-03",
    keywords: ["ielts vs toefl", "which english test should i take", "toefl or ielts for uk"],
    relatedServiceIds: ["STU-04"],
    sections: [
      {
        heading: "Test Format Differences",
        content: "IELTS is paper-based (Academic or General Training) or computer-delivered. It includes a face-to-face speaking interview with a trained examiner. Scores are on a 1–9 band scale. The total test time is approximately 2 hours 45 minutes. TOEFL iBT is entirely computer-based and all four skills (Reading, Listening, Speaking, Writing) are done in one 3-hour sitting. Speaking responses are recorded and scored by AI and human raters. Scores are on a 0–120 scale.",
      },
      {
        heading: "UK, Canada, and USA Acceptance",
        content: "Both are accepted by virtually all major UK, Canadian, and US universities. The UK's Student Route visa accepts IELTS Academic, TOEFL iBT, Pearson PTE Academic, and Cambridge B2 First/C1 Advanced. Canada accepts IELTS, TOEFL, CELPIP, and others. The USA, unlike the UK, uses the Common Application and most US universities list both IELTS and TOEFL as acceptable.",
      },
      {
        heading: "Which Test Suits You?",
        content: "Choose IELTS if: you are more comfortable with British English accents and face-to-face interaction; your target countries are UK or Canada; you want a test with a 13-day score validity turnaround. Choose TOEFL if: you are targeting the USA; you perform better in a computer-based environment; you find writing on a keyboard faster than by hand; you prefer integrated tasks (e.g., listening to a lecture then writing about it).",
      },
      {
        heading: "Score Equivalencies",
        content: "IELTS 6.5 ≈ TOEFL 79–93. IELTS 7.0 ≈ TOEFL 94–101. IELTS 7.5 ≈ TOEFL 102–109. Most university admission pages list both equivalents. Use the ETS official IELTS–TOEFL score comparison table when checking specific programme requirements.",
      },
    ],
  },
  {
    slug: "gre-exam-guide",
    pillarSlug: "english-tests-guide",
    title: "GRE Exam Guide for Nigerian Students Applying to US and UK Graduate Programmes",
    excerpt: "The GRE (Graduate Record Examinations) is required by many US and some UK master's and PhD programmes. Here is a complete guide to the test structure, preparation, and target scores.",
    category: "Exams",
    publishedAt: "2026-04-05",
    keywords: ["gre exam guide nigeria", "gre preparation tips", "gre score requirements"],
    relatedServiceIds: ["STU-04"],
    sections: [
      {
        heading: "GRE Test Structure",
        content: "The GRE General Test (revised in September 2023) is now 1 hour 58 minutes long, significantly shorter than the previous version. It has three sections: Verbal Reasoning (two sections, 27 questions, 41 minutes total), Quantitative Reasoning (two sections, 27 questions, 47 minutes total), and Analytical Writing (one 30-minute essay). Scores: Verbal 130–170, Quantitative 130–170, Writing 0–6.",
      },
      {
        heading: "Who Requires the GRE?",
        content: "Most US graduate programmes in arts, sciences, and social sciences require the GRE. Engineering and technical programmes sometimes accept GRE or GMAT. Many US business schools are now GRE-optional. In the UK, fewer programmes require it, London School of Economics, UCL, and some Imperial departments for PhD applicants are notable exceptions.",
      },
      {
        heading: "Preparation Tips",
        content: "Start with the free PowerPrep tests from ETS to establish your baseline. For Verbal, prioritise high-frequency GRE vocabulary (Magoosh or Manhattan Prep word lists) and practice text completion and reading comprehension. For Quantitative, review algebra, geometry, and statistics up to WAEC Further Maths level, the GRE Quant is not conceptually difficult but requires precision and speed. For AWA, practice writing structured analytical arguments and use concrete evidence.",
      },
      {
        heading: "Registration in Nigeria",
        content: "The GRE is administered by ETS at Prometrics test centres in Lagos, Abuja, and Port Harcourt. Fee: USD 228 (approximately NGN 340,000 at 2024 rates). Scores are valid for 5 years. You can take the GRE up to 5 times per year with a 21-day gap between attempts. Most competitive programmes expect Verbal 155+ and Quantitative 158+ for strong consideration.",
      },
    ],
  },
  {
    slug: "gmat-exam-guide",
    pillarSlug: "english-tests-guide",
    title: "GMAT Focus Edition: Guide for Nigerian Business School Applicants",
    excerpt: "The GMAT Focus Edition is the key admissions test for MBA programmes. This guide covers the new format, score requirements for top business schools, and how to prepare effectively.",
    category: "Exams",
    publishedAt: "2026-04-07",
    keywords: ["gmat exam nigeria", "gmat business school application", "gmat focus edition guide"],
    relatedServiceIds: ["STU-04"],
    sections: [
      {
        heading: "GMAT Focus Edition Format",
        content: "The GMAT Focus Edition (launched 2023) is shorter and fully computer-adaptive. It has three sections: Quantitative Reasoning (21 questions, 45 minutes), Verbal Reasoning (23 questions, 45 minutes), and Data Insights (20 questions, 45 minutes, combining data sufficiency and integrated reasoning). Total: 2 hours 15 minutes. Score range: 205–805.",
      },
      {
        heading: "Target Scores for Top Business Schools",
        content: "Average GMAT scores at leading MBA programmes: INSEAD (730), LBS London Business School (708), Wharton (733), Harvard (740), Oxford Said (694). For strong Nigerian applicants, a score of 680–720+ positions you competitively. Many part-time and specialized master's programmes accept scores of 600–650.",
      },
      {
        heading: "Preparation Strategy",
        content: "Use the Official GMAT Prep from GMAC (free) to establish your baseline. The OG (Official Guide) question bank is the most representative material. For quant: practice Data Sufficiency questions aggressively, they are logic puzzles disguised as maths. For verbal: Critical Reasoning is the highest-weight question type in the new Focus Edition; practice argument analysis. For Data Insights: practice interpreting graphs, tables, and multi-source reasoning under time pressure.",
      },
      {
        heading: "Registration and Logistics",
        content: "Register at mba.com. The test is available at Prometric centres in Lagos and Abuja. Fee: USD 275. Online delivery (at-home proctored) is also available if you have a stable internet connection. Scores are valid for 5 years and can be sent directly to business schools. The GMAT can be taken up to 5 times per year.",
      },
    ],
  },
  {
    slug: "english-language-waivers",
    pillarSlug: "english-tests-guide",
    title: "English Language Waivers: When Nigerian Students Can Skip IELTS or TOEFL",
    excerpt: "Some UK, Canadian, and US universities waive IELTS/TOEFL requirements for Nigerian students under certain conditions. Here is what qualifies and how to claim a waiver.",
    category: "Exams",
    publishedAt: "2026-04-09",
    keywords: ["ielts waiver nigeria", "english language waiver university", "toefl waiver nigeria"],
    relatedServiceIds: ["STU-04"],
    sections: [
      {
        heading: "What Is an English Language Waiver?",
        content: "Some universities waive the requirement for an external English test (IELTS, TOEFL, PTE) if you can demonstrate sufficient English proficiency through other means. This can save you the test fee (NGN 130,000–250,000) and 4–6 weeks of preparation time.",
      },
      {
        heading: "Common Grounds for Waiver",
        content: "Previous university education conducted in English (e.g., a Nigerian undergraduate degree entirely in English, most Nigerian universities qualify). Secondary education completed in an English-medium school in Nigeria. A previous qualification from a UK/US/Australian/Canadian institution. Demonstrated native or near-native proficiency through an admissions interview. Note: WAEC English results alone generally do not qualify for waivers at UK universities.",
      },
      {
        heading: "UK Student Visa and Waivers",
        content: "Even if a university grants you an admission waiver, the UK Student visa still requires an approved Secure English Language Test (SELT), typically IELTS for UKVI, unless you come from a majority-English-speaking country on UKVI's exemption list. Nigeria is not on this list. You will still need to sit IELTS or a SELT-approved alternative for the visa.",
      },
      {
        heading: "How to Check and Apply for a Waiver",
        content: "Check each university's English Language Requirements page, look specifically for 'Exemptions' or 'Waivers'. Contact the admissions office directly and provide evidence of your English-medium education (transcripts, letter from your institution confirming teaching language). Get the waiver decision in writing before you book (and pay for) an IELTS test.",
      },
    ],
  },
];

// ─── Visa Interviews Pillar ───────────────────────────────────────────────────

const visaInterviewArticles: ResourceArticle[] = [
  {
    slug: "uk-visa-interview-questions",
    pillarSlug: "visa-interview-guide",
    title: "UK Student Visa Interview: Top Questions and How to Answer Them",
    excerpt: "UK Student Route visas rarely require an interview, but visa officers can request one. Here is how to prepare if you are asked to attend.",
    category: "Visas",
    publishedAt: "2026-04-01",
    keywords: ["uk visa interview questions", "uk student visa interview preparation", "uk visa interview nigeria"],
    relatedServiceIds: ["STU-06"],
    relatedCountrySlug: "united-kingdom",
    sections: [
      {
        heading: "Is a UK Student Visa Interview Required?",
        content: "In most cases, the UK Student Route visa does not require a formal interview. However, UKVI may request an interview at the Visa Application Centre if your application raises questions about your intentions, financial situation, or eligibility. This is more common for applicants with incomplete documents, unusual study choices, or previous visa refusals.",
      },
      {
        heading: "Common Interview Questions",
        content: "Why did you choose this specific university and programme? (Have a specific, research-based answer, not 'it is a good university'.) How will you fund your studies and living costs? (Know your exact financial figures.) What do you plan to do after your studies, will you return to Nigeria? (Your answer should be credible and consistent with your personal and professional ties to Nigeria.) What is your current job / what were your previous responsibilities? (Be ready to explain any employment gaps.) Why this subject? (Demonstrate genuine interest and link it to your previous study or work.)",
      },
      {
        heading: "What to Bring to the Interview",
        content: "Your original Confirmation of Acceptance for Studies (CAS), bank statements showing the required funds, university offer letter, academic transcripts, IELTS certificate, employment letter or payslips if applicable, and proof of accommodation in the UK (if available). Carry originals and photocopies.",
      },
      {
        heading: "Tips for the Day",
        content: "Arrive 30 minutes early. Dress professionally. Speak clearly and concisely. Answer only what is asked, do not volunteer unnecessary information. If you do not understand a question, politely ask for it to be repeated. The interview is not adversarial, the officer is verifying your application. Staying calm and factual is more effective than trying to impress.",
      },
    ],
  },
  {
    slug: "us-f1-visa-interview",
    pillarSlug: "visa-interview-guide",
    title: "US F-1 Student Visa Interview: Complete Preparation Guide",
    excerpt: "Unlike UK and Canadian student visas, the US F-1 requires an in-person interview at the US Embassy. Here is how to prepare thoroughly and avoid common mistakes.",
    category: "Visas",
    publishedAt: "2026-04-03",
    keywords: ["us f1 visa interview nigeria", "f1 visa interview questions", "us embassy interview nigeria"],
    relatedServiceIds: ["STU-06"],
    relatedCountrySlug: "united-states",
    sections: [
      {
        heading: "The F-1 Interview: What to Expect",
        content: "The US F-1 student visa interview is conducted at the US Embassy in Abuja or the Consulate in Lagos. It typically lasts 2–5 minutes. The interview focuses on establishing your intent to return to Nigeria after your studies (non-immigrant intent), your ability to fund your education, and your ties to Nigeria. It is brief and factual, not a long conversation.",
      },
      {
        heading: "Most Common F-1 Interview Questions",
        content: "Which school will you attend? What will you study and why? Who is paying for your education? How much will it cost? What does your sponsor do for a living? What will you do after graduation, do you intend to return to Nigeria? Do you have family in the USA? Have you ever been refused a US visa? What ties do you have to Nigeria (family, property, employment)? Be prepared to answer all of these factually and confidently.",
      },
      {
        heading: "Documents to Bring",
        content: "DS-160 confirmation page, visa application fee receipt (MRV fee), appointment confirmation, valid passport (plus old passports with previous visas), SEVIS fee receipt (Form I-901), university I-20 form, official admission letter, financial evidence (bank statements, loan letters, sponsor affidavit), academic transcripts, and proof of Nigerian ties (employment letter, property documents, family photos).",
      },
      {
        heading: "After the Interview",
        content: "If approved, you will receive your passport with the visa by courier within 5–10 business days. If refused under INA §214(b) (insufficient ties to home country), you can reapply, but you need to address whatever caused the refusal. A stronger financial package, clearer post-study plans, and evidence of Nigerian ties typically resolve the issue.",
      },
    ],
  },
  {
    slug: "canada-study-permit-interview",
    pillarSlug: "visa-interview-guide",
    title: "Canada Study Permit: Do Nigerian Applicants Need an Interview?",
    excerpt: "Most Canadian Study Permit applications for Nigerians are decided without an interview. But IRCC may sometimes request one. Here is what to expect.",
    category: "Visas",
    publishedAt: "2026-04-05",
    keywords: ["canada study permit interview nigeria", "ircc interview", "canada student visa interview"],
    relatedServiceIds: ["STU-06"],
    relatedCountrySlug: "canada",
    sections: [
      {
        heading: "Is a Canadian Study Permit Interview Normal?",
        content: "Under the Student Direct Stream (SDS), IRCC aims to process applications without interviews within 20 days. However, an officer can request additional information or an interview at any stage. This is more likely if: your documents appear inconsistent, your academic history has gaps, you are changing institutions mid-study, or there are concerns about your intent to return to Nigeria.",
      },
      {
        heading: "What Triggers an IRCC Interview?",
        content: "Gaps in employment or academic history without explanation. A previous visa refusal from Canada or another country. Documents that seem inconsistent with each other (e.g., income on bank statements inconsistent with employment letter). Choosing an institution or programme that does not match your academic background (e.g., a mechanical engineer suddenly applying for a hospitality diploma).",
      },
      {
        heading: "Preparing for an IRCC Interview",
        content: "IRCC sends a letter inviting you to attend a virtual or in-person interview. Prepare to explain: your choice of institution and programme, your funding source and financial situation, your study plan, and your ties to Nigeria. Have your documents organised and ready to reference. Be consistent with what is in your application, officers compare your verbal answers to your submitted documents.",
      },
      {
        heading: "What If Your Study Permit Is Refused?",
        content: "You can reapply with strengthened documentation. Common refusal reasons: 'Not satisfied you will leave Canada at the end of your stay' (strengthen ties to Nigeria), 'Purpose of visit not established' (clearer study plan), 'Insufficient funds' (update bank statements or add a co-sponsor). Review the GCMS notes (IRCC's internal notes on your file) via an Access to Information request for specific refusal reasons.",
      },
    ],
  },
  {
    slug: "visa-refusal-appeal-guide",
    pillarSlug: "visa-interview-guide",
    title: "Student Visa Refusal: What to Do If Your Application Is Rejected",
    excerpt: "A student visa refusal is not the end. Here is how to understand refusal reasons, strengthen your reapplication, and navigate the appeals process where it exists.",
    category: "Visas",
    publishedAt: "2026-04-07",
    keywords: ["student visa refusal nigeria", "visa refusal appeal", "reapply after visa refusal"],
    relatedServiceIds: ["STU-06"],
    sections: [
      {
        heading: "Common Reasons for Student Visa Refusal",
        content: "UK: insufficient funds in the account for fewer than 28 consecutive days before the application; CAS expired or incorrect; English language test results not meeting UKVI SELT requirements. USA (F-1): insufficient ties to home country (INA §214(b)); inconsistent or incomplete financial documentation. Canada: not satisfied you will leave Canada at the end of your study period; documents do not support stated purpose.",
      },
      {
        heading: "UK: Refusals and Administrative Review",
        content: "If your UK Student visa is refused, you can request an Administrative Review (AR) within 14 days if you believe the decision is incorrect on the facts or law. AR is not a full appeal, it checks for caseworker errors. If the refusal stands, you can reapply with corrected documents. Most UK student visa refusals are administrative (wrong documents, expired CAS) rather than substantive and resolve on reapplication.",
      },
      {
        heading: "USA: Reapplying After F-1 Refusal",
        content: "There is no formal appeal for F-1 visa refusals, you simply reapply. Before reapplying, identify precisely why you were refused (§214(b) is the most common reason for Nigerians, insufficient ties to home country). Strengthen your application with: a letter from your employer confirming you have a job to return to, a detailed study plan with a clear return narrative, evidence of family in Nigeria, property documents. Consider deferring your US application while you build stronger ties.",
      },
      {
        heading: "Working with a Counsellor on Reapplications",
        content: "If you have been refused more than once or are unsure why you were refused, working with an experienced study abroad counsellor is valuable. Numaway's counsellors review your full application package against the refusal reasons and identify specific documentary or narrative weaknesses before you reapply.",
      },
    ],
  },
  {
    slug: "student-visa-document-checklist",
    pillarSlug: "visa-interview-guide",
    title: "Student Visa Document Checklist: What You Need for UK, Canada, and USA",
    excerpt: "A practical checklist of every document required for UK, Canadian, and US student visa applications, so you can prepare without missing anything.",
    category: "Visas",
    publishedAt: "2026-04-09",
    keywords: ["student visa documents checklist", "uk student visa documents nigeria", "canada study permit documents list"],
    relatedServiceIds: ["STU-06"],
    sections: [
      {
        heading: "UK Student Route Visa Documents",
        content: "Valid passport. CAS reference number. IELTS UKVI or SELT-approved test certificate. Bank statements showing required funds (28-day rule). University offer letter. Completed online application (form VAF1 equivalent online). Immigration Health Surcharge payment receipt. Any previous UK visas (if applicable). Academic transcripts. Passport photographs to VAC specifications.",
      },
      {
        heading: "Canada Study Permit Documents",
        content: "Valid passport. Acceptance letter from a Designated Learning Institution (DLI). IELTS Academic or TOEFL certificate (SDS: 6.0+, no band below 6.0). Guaranteed Investment Certificate (GIC) of CAD 10,000 receipt (for SDS). Proof of tuition payment (or letter of credit). Bank statements (SDS route: GIC plus tuition coverage). Completed IMM 1294 form. Biometric enrolment receipt. Recent passport photographs.",
      },
      {
        heading: "USA F-1 Student Visa Documents",
        content: "Valid passport (minimum 6 months validity beyond planned stay). DS-160 completed and printed confirmation page. MRV fee receipt. SEVIS fee receipt (Form I-901). University I-20 form. Bank statements (3–6 months, showing full funding). Sponsor's employment letter and payslips (if parent/guardian is sponsoring). Proof of accommodation in the USA (if available). Academic transcripts and diplomas.",
      },
      {
        heading: "Document Preparation Tips",
        content: "Keep originals and certified copies of every document in a labelled folder. Bank statements must show the account holder's name, account number, and consistent balance over the relevant period, do not make large unexplained deposits just before applying. Certify translated documents if any are not in English. Start gathering documents at least 8 weeks before your intended application date.",
      },
    ],
  },
];

// ─── Pillar Definitions ───────────────────────────────────────────────────────

export const pillars: PillarPage[] = [
  {
    slug: "study-in-uk",
    title: "Complete Guide to Studying in the UK",
    metaTitle: "Study in the UK from Nigeria, Complete 2025 Guide",
    metaDescription: "Everything Nigerian students need to know about studying in the UK: UCAS applications, Student visa, tuition costs, scholarships, and the Graduate Route.",
    excerpt: "From your first UCAS application to the Graduate Route visa, the full picture on studying in the United Kingdom as a Nigerian student.",
    publishedAt: "2026-04-15",
    keywords: ["study in uk nigeria", "ucas application nigeria", "uk student visa", "uk graduate route"],
    relatedServiceIds: ["STU-02", "STU-03", "STU-06"],
    relatedCountrySlug: "united-kingdom",
    intro: "The United Kingdom has been the top study abroad destination for Nigerian students for over 30 years. With over 1,500 universities and higher education institutions, world-leading research rankings, a generous post-study work visa, and a long-standing Nigerian diaspora community, the UK offers a compelling combination of academic quality and long-term opportunity. This guide covers everything you need to know, from choosing your programme to life after graduation.",
    keyPoints: [
      "UCAS applications open in May each year; most equal-consideration deadlines fall on 29 January",
      "The UK Student Route visa requires IELTS 5.5+, CAS from a licensed institution, and 28-day funds rule",
      "Tuition ranges from £11,000 to £38,000 per year; living costs are £900–1,800/month depending on location",
      "International students can work 20 hours/week during term; full time during vacations",
      "The Graduate Route visa allows 2 years (3 for PhD) of unrestricted work after graduation",
      "Chevening and Commonwealth scholarships fund 80+ Nigerians each year for UK master's degrees",
    ],
    articles: ukArticles,
  },
  {
    slug: "study-in-canada",
    title: "Complete Guide to Studying in Canada",
    metaTitle: "Study in Canada from Nigeria, Complete 2025 Guide",
    metaDescription: "Nigerian student's guide to Canada: application process, Study Permit via SDS, tuition and living costs, PGWP, and pathways to permanent residency.",
    excerpt: "Canada's Student Direct Stream, pathway to permanent residency, and multicultural cities make it one of the most attractive destinations for Nigerian students.",
    publishedAt: "2026-04-15",
    keywords: ["study in canada nigeria", "canada study permit nigeria", "canada sds", "pgwp canada"],
    relatedServiceIds: ["STU-02", "STU-03", "STU-06"],
    relatedCountrySlug: "canada",
    intro: "Canada is the fastest-growing destination among Nigerian study abroad applicants. Three factors drive this: the Student Direct Stream (SDS) which processes Study Permit applications in just 20 days, generous work rights during and after study, and one of the world's most accessible pathways to permanent residency for international graduates. This guide walks you through every stage of the journey.",
    keyPoints: [
      "Canada has no central admissions system, apply directly to each university (Ontario uses OUAC)",
      "The Student Direct Stream (SDS) processes Nigerian applications in 20 calendar days with IELTS 6.0 and a GIC",
      "Tuition: CAD 20,000–35,000/year for most undergraduate programmes",
      "International students can work 24 hours/week off-campus during term time",
      "The PGWP allows up to 3 years of post-graduation work in Canada",
      "PGWP work experience is the main pathway to Canadian Express Entry Permanent Residency",
    ],
    articles: canadaArticles,
  },
  {
    slug: "scholarships-guide",
    title: "Scholarships Guide for Nigerian Students",
    metaTitle: "Scholarships for Nigerian Students 2025, Complete Guide",
    metaDescription: "Find and apply for scholarships to study in the UK, Germany, Canada and the USA. Covers Chevening, Commonwealth, DAAD, and essay writing tips for Nigerian applicants.",
    excerpt: "Fully funded scholarships exist for Nigerian students, and the competition is less fierce than you think if you know what selectors are looking for.",
    publishedAt: "2026-04-15",
    keywords: ["scholarships nigeria", "chevening scholarship", "commonwealth scholarship nigeria", "fully funded scholarship africa"],
    relatedServiceIds: ["STU-05"],
    intro: "Tuition and living costs abroad are significant, but fully funded scholarships eliminate these barriers for hundreds of Nigerian students every year. Chevening, Commonwealth, DAAD, and institutional awards collectively fund more than 300 Nigerians for overseas study annually. The challenge is knowing which scholarships fit your profile, meeting their eligibility criteria, and crafting essays that reflect what selectors actually want to fund.",
    keyPoints: [
      "Chevening funds 60+ Nigerians per year for one-year UK master's degrees; applications open in August",
      "Commonwealth Scholarship is development-focused; nominations go through Nigeria's Federal Scholarship Board",
      "DAAD covers master's and PhD study in Germany, often at no-tuition public universities",
      "Strong essays are specific, not generic, selectors want a clear connection between your past, the programme, and Nigeria's future",
      "Most institutional scholarships (university-specific) are applied for at the same time as your programme application",
      "Fulbright is the US equivalent of Chevening, Nigerian applications are processed through the US Embassy in Abuja",
    ],
    articles: scholarshipsArticles,
  },
  {
    slug: "english-tests-guide",
    title: "English Language Tests Guide for Nigerian Students",
    metaTitle: "IELTS, TOEFL, GRE, GMAT, English Tests Guide for Nigerian Students",
    metaDescription: "A complete guide to English language and admissions tests for Nigerian students: IELTS, TOEFL, GRE, GMAT, requirements, preparation tips, and where to register.",
    excerpt: "IELTS, TOEFL, GRE, GMAT, everything you need to know about the tests required for university admissions abroad, with preparation strategies for Nigerian students.",
    publishedAt: "2026-04-15",
    keywords: ["ielts preparation nigeria", "toefl vs ielts", "gre exam guide", "gmat nigeria", "english test study abroad"],
    relatedServiceIds: ["STU-04"],
    intro: "English language and admissions tests are often the most intimidating part of the study abroad application process for Nigerian students. Yet many applicants over-prepare for the wrong tests or under-prepare for the right ones. This guide cuts through the confusion: which test you actually need, what score you realistically need, how to prepare efficiently, and when to claim an exemption.",
    keyPoints: [
      "IELTS Academic is accepted by all major UK, Canadian, and Australian universities and required for UK visa",
      "TOEFL iBT is preferred by many US universities and accepted widely in Canada and UK",
      "GRE is required for US master's and PhD programmes in most disciplines; some UK universities also request it",
      "GMAT is the standard test for MBA programmes globally; GMAT Focus Edition (2023) is shorter and computer-adaptive",
      "Nigerian students with a degree taught in English may qualify for university English waivers, but not for the UK Student visa",
      "IELTS test centres operate in Lagos, Abuja, Port Harcourt, and Kano; book early (slots fill 4–6 weeks in advance)",
    ],
    articles: englishTestsArticles,
  },
  {
    slug: "visa-interview-guide",
    title: "Student Visa Interview and Application Guide",
    metaTitle: "Student Visa Interview Guide for Nigerian Students, UK, USA, Canada",
    metaDescription: "Prepare for your student visa interview with expert guidance on UK, US F-1, and Canadian study permit interviews, questions, documents, and what to do if refused.",
    excerpt: "Visa application and interview preparation made clear, from UK Administrative Reviews to US F-1 interview scripts and Canadian Study Permit documentation.",
    publishedAt: "2026-04-15",
    keywords: ["student visa interview nigeria", "uk visa interview", "f1 visa interview nigeria", "canada study permit interview"],
    relatedServiceIds: ["STU-06"],
    intro: "The visa application stage is where many otherwise well-prepared students stumble. A strong academic profile and university offer mean nothing if your visa is refused due to incomplete documents, a failed interview, or an insufficient financial package. This pillar guide covers the visa application and interview process for the three most popular destinations for Nigerian students: the UK, the USA, and Canada.",
    keyPoints: [
      "UK Student Route visas rarely require an interview, most refusals are document-based and resolvable on reapplication",
      "US F-1 visas always require an in-person interview at the US Embassy in Abuja or Consulate in Lagos",
      "Canada Study Permit (SDS) is the fastest pathway for Nigerians, 20-day processing with IELTS 6.0 and a GIC",
      "The most common US F-1 refusal reason (INA §214(b)) relates to insufficient ties to Nigeria, addressable with documentation",
      "For UK visa, the 28-day rule on funds is the single biggest administrative stumbling block",
      "Keep certified copies of all documents and do not submit originals unless specifically requested",
    ],
    articles: visaInterviewArticles,
  },
];

export const getPillarBySlug = (slug: string): PillarPage | undefined =>
  pillars.find((p) => p.slug === slug);

export const getArticleBySlug = (
  pillarSlug: string,
  articleSlug: string
): ResourceArticle | undefined =>
  pillars.find((p) => p.slug === pillarSlug)?.articles.find((a) => a.slug === articleSlug);

export const getAllArticles = (): ResourceArticle[] =>
  pillars.flatMap((p) => p.articles);
