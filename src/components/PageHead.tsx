import { Helmet } from "react-helmet-async";

const SITE_NAME = "Numaway";
const BASE_URL = "https://numaway.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/default.png`;

export interface JsonLdGraph {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

interface PageHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: JsonLdGraph | JsonLdGraph[];
}

const PageHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  jsonLd,
}: PageHeadProps): JSX.Element => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonical}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Hreflang (ADR-014, MRS §14.3) */}
      <link rel="alternate" hrefLang="en-NG" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-GB" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      {/* French locales provisioned, content deferred to Phase 7+ */}
      <link rel="alternate" hrefLang="fr-CA" href={`${BASE_URL}/fr-ca${canonical}`} />
      <link rel="alternate" hrefLang="fr-FR" href={`${BASE_URL}/fr-fr${canonical}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@numaway" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* schema.org JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default PageHead;
