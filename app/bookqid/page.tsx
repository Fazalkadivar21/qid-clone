import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";
import BookDemoForm from "../components/BookDemoForm";

export const metadata: Metadata = {
  title: pageMetadata.bookqid.title,
  description: pageMetadata.bookqid.description,
  keywords: pageMetadata.bookqid.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/bookqid`,
  },
  openGraph: {
    title: pageMetadata.bookqid.title,
    description: pageMetadata.bookqid.description,
    url: `${siteConfig.url}/bookqid`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.bookqid.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.bookqid.title,
    description: pageMetadata.bookqid.description,
    images: [siteConfig.ogImage],
  },
};

export default function BookDemo() {
  return <BookDemoForm />;
}
