import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";
import QrCheckin from '../components/QrCheckin';
import BookDemo from '../components/BookDemo';
import PowerUI from '../components/PowerUI';

export const metadata: Metadata = {
  title: pageMetadata.qrCheckIn.title,
  description: pageMetadata.qrCheckIn.description,
  keywords: pageMetadata.qrCheckIn.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/qr-check-in`,
  },
  openGraph: {
    title: pageMetadata.qrCheckIn.title,
    description: pageMetadata.qrCheckIn.description,
    url: `${siteConfig.url}/qr-check-in`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.qrCheckIn.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.qrCheckIn.title,
    description: pageMetadata.qrCheckIn.description,
    images: [siteConfig.ogImage],
  },
};

export default function Page() {
  return (
    <div className='bg-grid'>
      <QrCheckin />
      <PowerUI />
      <BookDemo />
    </div>
  );
}
