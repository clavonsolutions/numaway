/**
 * Centralized schema.org JSON-LD factory functions (MRS §14.2, Phase 6 item 100).
 * All public pages should use these helpers rather than inline JSON-LD objects.
 */

import { NAP } from "@/lib/nap";
import type { JsonLdGraph as JsonLdBase } from "@/components/PageHead";

export type JsonLd = JsonLdBase;

const BASE = NAP.canonicalUrl; // https://numaway.com

// ────────────────────────────────────────────────────
// Core org schemas, used on every page via PageHead
// ────────────────────────────────────────────────────

export const orgSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${BASE}/#org`,
  name: NAP.businessName,
  url: BASE,
  logo: `${BASE}/logo.svg`,
  description:
    "Numaway is a Nigerian-born, AI-powered study abroad agency helping African and diaspora students access global universities with expert counsellors and intelligent guidance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    postalCode: NAP.address.postal_code,
    addressRegion: `${NAP.address.lga} LGA`,
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: NAP.phone,
    contactType: "customer service",
    availableLanguage: ["English"],
    areaServed: ["NG", "AF", "EU"],
  },
  areaServed: ["AF", "EU"],
  sameAs: [
    "https://facebook.com/numaway",
    "https://instagram.com/numaway",
    "https://linkedin.com/company/numaway",
    "https://twitter.com/numaway",
  ],
});

export const websiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Numaway",
  publisher: { "@id": `${BASE}/#org` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

// ────────────────────────────────────────────────────
// Page-type schemas
// ────────────────────────────────────────────────────

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  slug: string;
  areaServed?: string;
}

export const serviceSchema = (opts: ServiceSchemaOptions): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  provider: { "@id": `${BASE}/#org` },
  areaServed: opts.areaServed ?? "Worldwide",
  url: `${BASE}/${opts.slug}`,
});

export interface PlaceSchemaOptions {
  name: string;
  description: string;
  slug: string;
}

export const placeSchema = (opts: PlaceSchemaOptions): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Country",
  "@id": `${BASE}/countries/${opts.slug}`,
  name: opts.name,
  description: opts.description,
  url: `${BASE}/countries/${opts.slug}`,
});

export interface UniversitySchemaOptions {
  name: string;
  description: string;
  slug: string;
  country: string;
  url?: string;
  logo?: string;
}

export const universitySchema = (opts: UniversitySchemaOptions): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": `${BASE}/universities/${opts.slug}`,
  name: opts.name,
  description: opts.description,
  url: opts.url ?? `${BASE}/universities/${opts.slug}`,
  logo: opts.logo,
  address: { "@type": "PostalAddress", addressCountry: opts.country },
});

export interface ExamSchemaOptions {
  name: string;
  description: string;
  slug: string;
  inDefinedTermSet?: string;
}

export const examSchema = (opts: ExamSchemaOptions): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": `${BASE}/exams/${opts.slug}`,
  name: opts.name,
  description: opts.description,
  url: `${BASE}/exams/${opts.slug}`,
  inDefinedTermSet: opts.inDefinedTermSet ?? "https://schema.org/EducationalOccupationalCredential",
});

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqPageSchema = (items: FaqItem[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}

export const articleSchema = (opts: ArticleSchemaOptions): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: opts.headline,
  description: opts.description,
  url: `${BASE}/${opts.slug}`,
  datePublished: opts.datePublished,
  dateModified: opts.dateModified ?? opts.datePublished,
  author: { "@id": `${BASE}/#org` },
  publisher: { "@id": `${BASE}/#org` },
  image: opts.imageUrl
    ? { "@type": "ImageObject", url: opts.imageUrl }
    : undefined,
});

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export const breadcrumbSchema = (items: BreadcrumbItem[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.href.startsWith("http") ? item.href : `${BASE}${item.href}`,
  })),
});

export interface ServiceListItem {
  name: string;
  url: string;
}

export const serviceListSchema = (items: ServiceListItem[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Numaway Services",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: item.url.startsWith("http") ? item.url : `${BASE}${item.url}`,
  })),
});

export const localBusinessSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#local`,
  name: NAP.businessName,
  url: BASE,
  telephone: NAP.phone,
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    postalCode: NAP.address.postal_code,
    addressRegion: `${NAP.address.lga} LGA`,
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.9716,
    longitude: 8.5716,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  priceRange: "$$",
  currenciesAccepted: "NGN, USD, GBP, EUR",
  paymentAccepted: "Bank Transfer, Card",
  areaServed: ["NG", "AF", "EU"],
});
