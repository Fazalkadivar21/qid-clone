import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.contact.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    images: [siteConfig.ogImage],
  },
};

export default function Contact() {
  return <ContactForm />;
}
