export type JsonLdGraph = any;

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: string;
  jsonLd?: JsonLdGraph[];
  noIndex?: boolean;
}

const PageHead = ({}: PageHeadProps): JSX.Element | null => {
  return null; // Next.js handles metadata server-side
};

export default PageHead;
