import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function MySEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps): JSX.Element {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Traveler' : ''}`;
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/${image}`
    : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      {pageImage && <meta name="image" content={pageImage} />}

      {/*Caso não queira que a página seja indexada. */}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofllow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#f5f8fa" />
      <meta name="msapplication-TileColor" content="#f5f8fa" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />

      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta property="og:image:secure_url" content={pageImage} />}

      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@traveler_dev" />
      <meta name="twitter:creator" content="@traveler_dev" />
      {pageImage && <meta name="twitter:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image:src" content={pageImage} />}
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
}
