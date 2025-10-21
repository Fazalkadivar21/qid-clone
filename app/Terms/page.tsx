import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
  keywords: pageMetadata.terms.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/Terms`,
  },
  openGraph: {
    title: pageMetadata.terms.title,
    description: pageMetadata.terms.description,
    url: `${siteConfig.url}/Terms`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.terms.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.terms.title,
    description: pageMetadata.terms.description,
    images: [siteConfig.ogImage],
  },
};

interface PolicySectionProps {
  title?: string;
  children: ReactNode;
}

const PolicySection: FC<PolicySectionProps> = ({ title, children }) => (
  <div className="mb-8 rounded-2xl raleway-semibold border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
    {title && (
      <h2 className="mb-4 text-xl font-bold uppercase tracking-wider text-gray-900 md:text-2xl">
        {title}
      </h2>
    )}
    <div className="space-y-4 text-lg leading-relaxed text-gray-800 md:text-xl">
      {children}
    </div>
  </div>
);

const Terms: FC = () => {
  return (
    <div className="bg-grid min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Terms and conditions
          </h1>
        </header>

        {/* Main Content */}
        <main>
          {/* Intro */}
          <PolicySection>
            <p>
              By downloading or using the app, these terms will automatically
              apply to you – you should make sure therefore that you read them
              carefully before using the app. You're not allowed to copy or
              modify the app, any part of the app, or our trademarks in any way.
              You're not allowed to attempt to extract the source code of the
              app, and you also shouldn't try to translate the app into other
              languages or make derivative versions. The app itself, and all the
              trademarks, copyright, database rights, and other intellectual
              property rights related to it, still belong to Oneqid Technologies
              PVT. LTD..
            </p>
            <p>
              Oneqid Technologies Pvt. Ltd. is committed to ensuring that the
              app is as useful and efficient as possible. For that reason, we
              reserve the right to make changes to the app or to charge for its
              services, at any time and for any reason. We will never charge you
              for the app or its services without making it very clear to you
              exactly what you're paying for.
            </p>
            <p>
              The QID app stores and processes personal data that you have
              provided to us, to provide our Service. It's your responsibility
              to keep your phone and access to the app secure. We therefore
              recommend that you do not jailbreak or root your phone, which is
              the process of removing software restrictions and limitations
              imposed by the official operating system of your device. It could
              make your phone vulnerable to malware/viruses/malicious programs,
              compromise your phone's security features and it could mean that
              the QID app won't work properly or at all.
            </p>
          </PolicySection>

          {/* INFORMATION COLLECTION AND USE */}
          <PolicySection>
            <p>
              The app does use third-party services that declare their Terms and
              Conditions. Link to Terms and Conditions of third-party service
              providers used by the app:
            </p>
              <ul>
                <li>
                  <a
                    href="https://play.google.com/about/play-terms/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700"
                  >
                    Google Play Services Terms and Conditions
                  </a>
                </li>
              </ul>
          </PolicySection>

          {/* LINKS TO THIRD-PARTY PRIVACY POLICIES */}
          <PolicySection>
            <p>
              You should be aware that there are certain things that Oneqid
              Technologies PVT. LTD. will not take responsibility for. Certain
              functions of the app will require the app to have an active
              internet connection. The connection can be Wi-Fi or provided by
              your mobile network provider, but Oneqid TechnologiesPVT. LTD.
              cannot take responsibility for the app not working at full
              functionality if you don't have access to Wi-Fi, and you don't
              have any of your data allowance left.
            </p>
            <p>
              If you're using the app outside of an area with Wi-Fi, you should
              remember that the terms of the agreement with your mobile network
              provider will still apply. As a result, you may be charged by your
              mobile provider for the cost of data for the duration of the
              connection while accessing the app, or other third-party charges.
              In using the app, you're accepting responsibility for any such
              charges, including roaming data charges if you use the app outside
              of your home territory (i.e. region or country) without turning
              off data roaming. If you are not the bill payer for the device on
              which you're using the app, please be aware that we assume that
              you have received permission from the bill payer for using the
              app.
            </p>
          </PolicySection>

          {/* DATA COLLECTION AND STORAGE */}
          <PolicySection>
            <p>
              Along the same lines, Oneqid Technologies PVT. LTD. cannot always
              take responsibility for the way you use the app i.e. You need to
              make sure that your device stays charged – if it runs out of
              battery and you can't turn it on to avail the Service, Oneqid
              Technologies PVT. LTD. cannot accept responsibility.
            </p>
            <p>
              With respect to Oneqid Technologies PVT. LTD.'s responsibility for
              your use of the app, when you're using the app, it's important to
              bear in mind that although we endeavor to ensure that it is
              updated and correct at all times, we do rely on third parties to
              provide information to us so that we can make it available to you.
              Oneqid Technologies PVT. LTD. accepts no liability for any loss,
              direct or indirect, you experience as a result of relying wholly
              on this functionality of the app.
            </p>
            <p>
              At some point, we may wish to update the app. The app is currently
              available on Android & iOS – the requirements for the both
              systems(and for any additional systems we decide to extend the
              availability of the app to) may change, and you'll need to
              download the updates if you want to keep using the app. Oneqid
              Technologies PVT. LTD. does not promise that it will always update
              the app so that it is relevant to you and/or works with the
              Android & iOS version that you have installed on your device.
              However, you promise to always accept updates to the application
              when offered to you, We may also wish to stop providing the app,
              and may terminate use of it at any time without giving notice of
              termination to you. Unless we tell you otherwise, upon any
              termination, (a) the rights and licenses granted to you in these
              terms will end; (b) you must stop using the app, and (if needed)
              delete it from your device.
            </p>
          </PolicySection>

          {/* DISCLOSURE OF PERSONAL INFORMATION */}
          <PolicySection title="CHANGES TO THIS TERMS AND CONDITIONS">
            <p>
              We may update our Terms and Conditions from time to time. Thus,
              you are advised to review this page periodically for any changes.
              We will notify you of any changes by posting the new Terms and
              Conditions on this page. These terms and conditions are effective
              as of 2022-03-28.
            </p>
          </PolicySection>

          {/* DATA USAGE POLICY */}
          <PolicySection title="CONTACT US">
            <p>
              If you have any questions or suggestions about our Terms and
              Conditions, do not hesitate to contact us at <a href="mailto:support@oneqid.com" className="text-pink-500 hover:text-pink-700">support@oneqid.com</a>.
            </p>
          </PolicySection>
        </main>
      </div>
    </div>
  );
};

export default Terms;
