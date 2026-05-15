import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  children?: ReactNode;
}

const BASE_URL = 'https://viato-industrial-solutions.lovable.app';
const BRAND = 'Viato Industries';

function buildTitle(title: string) {
  // Avoid "Viato Industries | Viato Industries" duplicates
  const hasBrand = title.toLowerCase().includes(BRAND.toLowerCase());
  let full = hasBrand ? title : `${title} | ${BRAND}`;
  if (full.length > 60) {
    // Trim safely; prefer shorter base title without suffix when possible
    full = title.length <= 60 ? title : title.slice(0, 57).trimEnd() + '…';
  }
  return full;
}

function trimDesc(desc: string) {
  if (desc.length <= 160) return desc;
  return desc.slice(0, 157).trimEnd() + '…';
}

export default function SEO({
  title,
  description,
  slug = '',
  keywords,
  ogType = 'website',
  ogImage,
  children,
}: SEOProps) {
  const fullTitle = buildTitle(title);
  const desc = trimDesc(description);
  const path = slug.startsWith('/') ? slug : `/${slug}`;
  const url = slug ? `${BASE_URL}${path}` : `${BASE_URL}/`;
  const image = ogImage ?? `${BASE_URL}/og-image.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      {children}
    </Helmet>
  );
}
