import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "ConvertX",
  legalName: "ConvertX Media",
  url: "https://convertx.media",
  domain: "convertx.media",
  tagline: "Turn Attention Into Revenue.",
  defaultTitle: "ConvertX | Meta Ads & Performance Marketing Agency in India",
  titleTemplate: "%s | ConvertX",
  description:
    "ConvertX helps businesses grow with Meta Ads, Instagram Ads, WhatsApp Business API, high-converting websites and AI-powered automation.",
  keywords: [
    "Meta Ads Agency India",
    "Facebook Ads Agency India",
    "Instagram Ads Agency India",
    "Performance Marketing Agency India",
    "WhatsApp Business API Agency India",
    "WhatsApp Automation Agency India",
    "Lead Generation Agency India",
    "Website Development Agency India",
    "Landing Page Development India",
    "AI Automation Agency India",
    "Paid Social Media Agency",
    "Verified Agency Accounts",
    "Conversion Rate Optimization",
    "High Converting Landing Pages",
    "Digital Marketing Agency India",
  ],
  locale: "en_IN",
  email: "convertxmediazone@gmail.com",
  phone: "+91 92965 69240",
  phoneRaw: "+919296569240",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export interface PageMetadataProps {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  pathname,
  keywords = [],
  ogType = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const canonicalUrl = `${SITE_CONFIG.url}${cleanPath === "/" ? "" : cleanPath}`;

  const allKeywords = Array.from(
    new Set([...keywords, ...SITE_CONFIG.keywords.slice(0, 8)])
  );

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      images: [
        {
          url: `${SITE_CONFIG.url}/icon.png`,
          width: 512,
          height: 512,
          alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [`${SITE_CONFIG.url}/icon.png`],
    },
  };
}
