import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  keywords?: string;
}

const BASE_URL = 'https://viato-industrial-solutions.vercel.app';

export default function SEO({ title, description, slug = '', keywords }: SEOProps) {
  const fullTitle = `${title} | Viato Industries`;
  const url = slug ? `${BASE_URL}/${slug}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
