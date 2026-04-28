#!/usr/bin/env node
/**
 * Numaway sitemap generator (MRS §14, Phase 6 item 99)
 * Generates root sitemap index + 6 per-section sub-sitemaps.
 * Run: node scripts/generate-sitemap.cjs
 * Wired as postbuild in package.json.
 */

const fs = require('fs');
const path = require('path');

const BASE = 'https://numaway.com';
const NOW = new Date().toISOString().split('T')[0];
const OUT = path.join(__dirname, '..', 'public');

const hreflang = (loc) => `
    <xhtml:link rel="alternate" hreflang="en-NG" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="en-GB" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`;

const url = (loc, freq, priority, includeHreflang = false) =>
  `  <url>
    <loc>${loc}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>${includeHreflang ? hreflang(loc) : ''}
  </url>`;

const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>`;
const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
const urlsetClose = `</urlset>`;

function wrap(urls) {
  return [xmlHeader, urlsetOpen, ...urls, urlsetClose].join('\n');
}

// --- Core / static pages ---
const coreUrls = [
  url(`${BASE}/`, 'weekly', '1.0', true),
  url(`${BASE}/about`, 'monthly', '0.8'),
  url(`${BASE}/about/team`, 'monthly', '0.6'),
  url(`${BASE}/about/why-numaway`, 'monthly', '0.7'),
  url(`${BASE}/contact`, 'monthly', '0.8'),
  url(`${BASE}/consultation`, 'monthly', '0.9'),
  url(`${BASE}/scholarships`, 'weekly', '0.8'),
  url(`${BASE}/accommodation`, 'monthly', '0.7'),
  url(`${BASE}/loans`, 'monthly', '0.7'),
  url(`${BASE}/faq`, 'monthly', '0.8'),
  url(`${BASE}/sage`, 'monthly', '0.8'),
  url(`${BASE}/search`, 'monthly', '0.6'),
  url(`${BASE}/sitemap`, 'monthly', '0.4'),
  url(`${BASE}/credits`, 'yearly', '0.2'),
  url(`${BASE}/for-students`, 'monthly', '0.8'),
  url(`${BASE}/for-agents`, 'monthly', '0.7'),
  url(`${BASE}/for-institutions`, 'monthly', '0.7'),
  url(`${BASE}/resources`, 'weekly', '0.7'),
  url(`${BASE}/careers`, 'monthly', '0.6'),
  // Legal
  url(`${BASE}/privacy-policy`, 'yearly', '0.4'),
  url(`${BASE}/terms`, 'yearly', '0.4'),
  url(`${BASE}/cookies`, 'yearly', '0.3'),
  url(`${BASE}/disclaimer`, 'yearly', '0.3'),
  url(`${BASE}/complaints`, 'yearly', '0.3'),
  url(`${BASE}/fraud-prevention`, 'yearly', '0.3'),
  url(`${BASE}/refunds`, 'yearly', '0.3'),
  url(`${BASE}/acceptable-use`, 'yearly', '0.3'),
  url(`${BASE}/accessibility`, 'yearly', '0.3'),
  url(`${BASE}/legal/dpa`, 'yearly', '0.3'),
];

// --- Services ---
const serviceUrls = [
  url(`${BASE}/services`, 'weekly', '0.9'),
  // STU sub-service pages
  url(`${BASE}/services/student-profiling`, 'monthly', '0.8'),
  url(`${BASE}/services/program-selection`, 'monthly', '0.8'),
  url(`${BASE}/services/application-support`, 'monthly', '0.8'),
  url(`${BASE}/services/exam-support`, 'monthly', '0.7'),
  url(`${BASE}/services/visa-preparation`, 'monthly', '0.8'),
  url(`${BASE}/services/pre-departure`, 'monthly', '0.7'),
  url(`${BASE}/services/post-arrival`, 'monthly', '0.7'),
  // Domain pages
  url(`${BASE}/services/student-services`, 'monthly', '0.8'),
  url(`${BASE}/services/university-partnerships`, 'monthly', '0.7'),
  url(`${BASE}/services/digital-services`, 'monthly', '0.7'),
  url(`${BASE}/services/compliance-services`, 'monthly', '0.6'),
  url(`${BASE}/services/community-services`, 'monthly', '0.6'),
  url(`${BASE}/services/consulting-services`, 'monthly', '0.6'),
  url(`${BASE}/services/events-services`, 'monthly', '0.6'),
  url(`${BASE}/services/premium-services`, 'monthly', '0.6'),
  url(`${BASE}/services/future-services`, 'monthly', '0.5'),
];

// --- Countries (slugs from src/data/countries.ts) ---
const countrySlugs = [
  'united-kingdom', 'united-states', 'canada', 'australia', 'germany',
  'ireland', 'netherlands', 'france', 'uae', 'singapore', 'malaysia',
  'italy', 'spain', 'cyprus', 'china', 'new-zealand', 'sweden',
  'poland', 'japan', 'south-korea', 'switzerland',
];
const topCountries = new Set([
  'united-kingdom', 'united-states', 'canada', 'australia', 'germany', 'ireland',
]);
const countryUrls = [
  url(`${BASE}/countries`, 'weekly', '0.9'),
  ...countrySlugs.map((s) =>
    url(`${BASE}/countries/${s}`, 'monthly', topCountries.has(s) ? '0.8' : '0.7', topCountries.has(s))
  ),
];

// --- Universities (slugs from src/data/universities.ts) ---
const universitySlugs = [
  'university-of-oxford', 'university-of-cambridge', 'imperial-college-london',
  'university-of-manchester', 'university-of-toronto', 'mcgill-university',
  'harvard-university', 'mit', 'university-of-melbourne', 'tu-munich',
];
const universityUrls = [
  url(`${BASE}/universities`, 'weekly', '0.8'),
  url(`${BASE}/universities/compare`, 'monthly', '0.7'),
  ...universitySlugs.map((s) => url(`${BASE}/universities/${s}`, 'monthly', '0.7')),
];

// --- Courses ---
const courseUrls = [
  url(`${BASE}/courses`, 'weekly', '0.8'),
];

// --- Exams ---
const examSlugs = ['ielts', 'toefl', 'gre', 'gmat', 'sat', 'pte', 'det'];
const topExams = new Set(['ielts', 'toefl', 'gre', 'gmat', 'sat']);
const examUrls = [
  url(`${BASE}/exams`, 'monthly', '0.8'),
  ...examSlugs.map((s) =>
    url(`${BASE}/exams/${s}`, 'monthly', topExams.has(s) ? '0.8' : '0.6')
  ),
];

// --- Resources (Phase 7 — pillar pages + 25 cluster articles) ---
const pillarSlugs = [
  'study-in-uk', 'study-in-canada', 'scholarships-guide',
  'english-tests-guide', 'visa-interview-guide',
];

const articlePaths = [
  'study-in-uk/ucas-application-guide',
  'study-in-uk/uk-student-visa-guide',
  'study-in-uk/uk-tuition-living-costs',
  'study-in-uk/best-uk-universities-for-nigerians',
  'study-in-uk/uk-graduate-route-visa',
  'study-in-canada/apply-to-canadian-universities',
  'study-in-canada/canada-study-permit-guide',
  'study-in-canada/canada-tuition-living-costs',
  'study-in-canada/pgwp-canada-guide',
  'study-in-canada/top-canadian-universities',
  'scholarships-guide/chevening-scholarship-guide',
  'scholarships-guide/commonwealth-scholarship-guide',
  'scholarships-guide/daad-scholarship-germany',
  'scholarships-guide/winning-scholarship-essay',
  'scholarships-guide/fully-funded-scholarships-african-students',
  'english-tests-guide/ielts-preparation-guide',
  'english-tests-guide/ielts-vs-toefl',
  'english-tests-guide/gre-exam-guide',
  'english-tests-guide/gmat-exam-guide',
  'english-tests-guide/english-language-waivers',
  'visa-interview-guide/uk-visa-interview-questions',
  'visa-interview-guide/us-f1-visa-interview',
  'visa-interview-guide/canada-study-permit-interview',
  'visa-interview-guide/visa-refusal-appeal-guide',
  'visa-interview-guide/student-visa-document-checklist',
];

const resourceUrls = [
  url(`${BASE}/resources`, 'weekly', '0.7'),
  ...pillarSlugs.map((s) => url(`${BASE}/resources/${s}`, 'monthly', '0.7')),
  ...articlePaths.map((p) => url(`${BASE}/resources/${p}`, 'monthly', '0.6')),
];

// --- Root sitemap index ---
const sitemapFiles = [
  'sitemap-core.xml',
  'sitemap-services.xml',
  'sitemap-countries.xml',
  'sitemap-universities.xml',
  'sitemap-exams.xml',
  'sitemap-resources.xml',
];

const rootIndex = [
  xmlHeader,
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...sitemapFiles.map(
    (f) => `  <sitemap>\n    <loc>${BASE}/${f}</loc>\n    <lastmod>${NOW}</lastmod>\n  </sitemap>`
  ),
  `</sitemapindex>`,
].join('\n');

// --- Write files ---
const files = {
  'sitemap.xml': rootIndex,
  'sitemap-core.xml': wrap(coreUrls),
  'sitemap-services.xml': wrap(serviceUrls),
  'sitemap-countries.xml': wrap(countryUrls),
  'sitemap-universities.xml': wrap(universityUrls),
  'sitemap-exams.xml': wrap(examUrls),
  'sitemap-courses.xml': wrap(courseUrls),
  'sitemap-resources.xml': wrap(resourceUrls),
};

let count = 0;
for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  count++;
  console.log(`  ✓ ${name}`);
}
console.log(`\n▸ Sitemaps generated (${count} files) → public/`);
