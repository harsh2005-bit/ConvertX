import { SITE_CONFIG } from "./seo";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/icon.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneRaw,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phoneRaw,
        contactType: "sales",
        email: SITE_CONFIG.email,
        areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.facebook,
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  serviceType,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE_CONFIG.url}${url.startsWith("/") ? url : `/${url}`}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phoneRaw,
      email: SITE_CONFIG.email,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Solutions`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

export interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateFAQSchema({ faqs }: FAQSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  keywords?: string[];
}

export function generateArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "ConvertX Growth Team",
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_CONFIG.url}${url.startsWith("/") ? url : `/${url}`}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${url.startsWith("/") ? url : `/${url}`}`,
    },
  };
}
