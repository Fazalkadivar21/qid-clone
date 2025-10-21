/**
 * SEO Constants and Utilities
 * Centralized place for all SEO-related constants and metadata
 */

export const siteConfig = {
  name: "qid",
  title: "India's #1 ID Gateway - qid",
  description:
    "With qid, sharing your IDs is as easy as sending a text message. Once you've uploaded your government documents to our secure platform, you can share them with anyone in just a few clicks.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://oneqid.com",
  email: "contact@oneqid.com",
  phone: "+91 960 640 640 4",
  keywords: [
    "ID gateway",
    "identity verification",
    "secure document sharing",
    "government ID verification",
    "India ID services",
    "digital identity",
    "QR code check-in",
    "document management",
  ],
  author: "QID Team",
  locale: "en_IN",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://oneqid.com"}/images/og-image.png`,
  twitterHandle: "@oneqid",
};

export const pageMetadata = {
  home: {
    title: "India's #1 ID Gateway - qid",
    description:
      "Share your IDs securely and instantly with qid. Government documents verification made simple and safe.",
    keywords: [
      ...siteConfig.keywords,
      "easy ID sharing",
      "quick document verification",
    ],
  },
  blogs: {
    title: "Latest Articles - qid Blog",
    description:
      "Read our latest articles about identity verification, secure document sharing, and digital identity management.",
    keywords: [
      ...siteConfig.keywords,
      "identity blog",
      "verification guide",
      "document security",
    ],
  },
  contact: {
    title: "Book a Demo - qid",
    description:
      "Schedule a demo with qid team. Discover how to secure your identity management with our innovative platform.",
    keywords: [...siteConfig.keywords, "book demo", "contact us"],
  },
  qrCheckIn: {
    title: "QR Check-In - qid",
    description:
      "Streamline your check-in process with qid's QR code technology. Secure, fast, and efficient attendance tracking.",
    keywords: [
      ...siteConfig.keywords,
      "QR check-in",
      "attendance tracking",
      "event management",
    ],
  },
  cForm: {
    title: "Custom Forms - qid",
    description:
      "Create custom forms with qid for seamless document collection and verification. Build secure forms in minutes.",
    keywords: [
      ...siteConfig.keywords,
      "custom forms",
      "form builder",
      "document collection",
    ],
  },
  bookqid: {
    title: "Book QID - qid",
    description: "Book your QID appointment and complete your identity verification process quickly and securely.",
    keywords: [...siteConfig.keywords, "book appointment", "schedule verification"],
  },
  privacy: {
    title: "Privacy Policy - qid",
    description:
      "Learn about how qid protects and manages your personal data and privacy.",
    keywords: [...siteConfig.keywords, "privacy policy", "data protection"],
  },
  terms: {
    title: "Terms & Conditions - qid",
    description: "Review the terms and conditions for using qid services.",
    keywords: [...siteConfig.keywords, "terms", "conditions", "legal"],
  },
};

/**
 * Generate Open Graph metadata
 */
export const generateOGMetadata = (
  title: string,
  description: string,
  image?: string
) => {
  return {
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: siteConfig.locale,
    },
  };
};

/**
 * Generate Twitter Card metadata
 */
export const generateTwitterMetadata = (title: string, description: string) => {
  return {
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
    },
  };
};

/**
 * Generate base metadata for a page
 */
export const getBaseMetadata = (pageKey: keyof typeof pageMetadata) => {
  const page = pageMetadata[pageKey];
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords.join(", "),
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    canonical: `${siteConfig.url}`,
    ...generateOGMetadata(page.title, page.description),
    ...generateTwitterMetadata(page.title, page.description),
  };
};

/**
 * Organization Schema
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  foundingDate: "2024",
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: siteConfig.phone,
    email: siteConfig.email,
  },
  sameAs: [
    "https://twitter.com/oneqid",
    "https://www.linkedin.com/company/qid",
    "https://www.facebook.com/oneqid",
  ],
};

/**
 * WebSite Schema with search action
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    query: "required name=search_term_string",
  },
};

/**
 * Product Schema for QID
 */
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "Free",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
};

/**
 * Article Schema generator for blog posts
 */
export const generateArticleSchema = (
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified?: string,
  author?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author || siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
};

/**
 * FAQPage Schema
 */
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
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
};
