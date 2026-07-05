
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
}

const SITE_NAME = 'Transport Training UK'
const SITE_URL = 'https://www.transporttraininguk.co.uk'
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-default.jpg`

export default function SEOHead({ title, description, canonical, ogImage, ogType = 'website' }: SEOHeadProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const image = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
    </Helmet>
  )
}
