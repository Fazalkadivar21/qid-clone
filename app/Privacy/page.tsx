import { Metadata } from "next";
import { pageMetadata, siteConfig } from "../utils/seo";
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: pageMetadata.privacy.title,
  description: pageMetadata.privacy.description,
  keywords: pageMetadata.privacy.keywords.join(", "),
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: `${siteConfig.url}/Privacy`,
  },
  openGraph: {
    title: pageMetadata.privacy.title,
    description: pageMetadata.privacy.description,
    url: `${siteConfig.url}/Privacy`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.privacy.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.privacy.title,
    description: pageMetadata.privacy.description,
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

const PrivacyPolicy: FC = () => {
  return (
    <div className="bg-grid min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xl md:text-4xl text-neutral-300/90">
            A Pact of Respect & Responsibility
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* Intro */}
          <PolicySection>
            <p>
              This privacy policy applies to QID (&quot;the App&quot;) application available on the Google Play Store and Apple App Store. QID collects and stores user data related to identification for authentication and disclosure purposes. This privacy policy explains how QID collects, uses, stores, and protects user data.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible under Terms and Conditions Section unless otherwise defined in this Privacy Policy.
            </p>
            <p>
              By using our Service, you acknowledge that you have read, understood, and agreed to our Terms and Conditions and this Privacy Policy.
            </p>
          </PolicySection>

          {/* INFORMATION COLLECTION AND USE */}
          <PolicySection title="Information Collection and Use">
            <p>
              For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Email, and Phone. The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
              The app may also use third-party services, which may collect information used to identify you.
            </p>
          </PolicySection>

          {/* LINKS TO THIRD-PARTY PRIVACY POLICIES */}
          <PolicySection title="Links to Third-Party Privacy Policies">
            <p>
              Our Service may contain links to other websites or services that are not operated by us. If you click on a third-party link, you will be directed to that website or service. We strongly advise you to review the Privacy Policy of every website or service you visit.
            </p>
            <p>
              Here are the links to the privacy policies of the third-party service providers used by the app:{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-500"
              >
                Google Play Services
              </a>
            </p>
          </PolicySection>

          {/* DATA COLLECTION AND STORAGE */}
          <PolicySection title="Data Collection and Storage">
            <p>
              The App collects and stores user data related to identification for authentication and disclosure purposes. This includes the user&apos;s government-authorized identity documents and any other necessary information required for the authentication process.
            </p>
            <p>
              We collect this information to verify the identity of our users and to prevent fraudulent activities. This information will be stored securely and will only be used for authentication and disclosure as required by law.
            </p>
          </PolicySection>

          {/* DISCLOSURE OF PERSONAL INFORMATION */}
          <PolicySection title="Disclosure of Personal Information">
            <p>
              We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>
            <p>We may also disclose your personal information in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Comply with a legal obligation;</li>
              <li>Protect and defend our rights or property;</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service;</li>
              <li>Protect the personal safety of users of the Service or the public; or</li>
              <li>Protect against legal liability.</li>
            </ul>
          </PolicySection>

          {/* DATA USAGE POLICY */}
          <PolicySection title="Data Usage Policy">
            <p>
              The App collects user IDs for the sole purpose of identifying users and providing the app&apos;s services. The app will not use user IDs for any other purpose, nor will it disclose user IDs to any third parties, except as required by law or necessary for the operation and maintenance of the app. The app will ensure that user IDs are kept secure and protected from unauthorized access or disclosure, and will comply with all applicable data protection laws and regulations.
            </p>
            <p>
              In the event that the app is required by law to disclose user IDs to third parties, it will do so only to the extent required by law and with appropriate safeguards in place. The app will provide clear and conspicuous notice to users of its data usage practices and will obtain user consent where required by law. Users may request access to their user IDs and may request that their user IDs be deleted or corrected as necessary.
            </p>
          </PolicySection>

          {/* DATA PROTECTION */}
          <PolicySection title="Data Protection">
            <p>
              The App takes appropriate measures to ensure the security of user data, including encryption and secure storage. We maintain reasonable physical, electronic, and procedural safeguards to protect the confidentiality, security, and integrity of your personal information.
            </p>
            <p>
              We use industry-standard encryption protocols to secure the transmission of your personal information over the internet. We also use firewalls and access controls to prevent unauthorized access to our systems.
            </p>
            <p>
              We regularly monitor our systems for any unauthorized access or breaches of security. In the event of any such breach, we will take appropriate action to protect the security of your personal information.
            </p>
            <p>
              While we take all reasonable steps to protect your personal information, we cannot guarantee the security of any information you transmit to us or guarantee that your information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.
            </p>
            <p>
              It is important to note that we employ the best-in-segment Amazon Web Services to reinforce the protection of your personal information. We diligently undertake all reasonable measures to safeguard your personal information but we must clarify that we acknowledge the possibility of unauthorized access, disclosure, alteration, or destruction of such information due to potential breaches not within the limits of our control.
            </p>
          </PolicySection>

          {/* LOG DATA */}
          <PolicySection title="Log Data">
            <p>
              We hereby notify you that in the event of an error occurring in our Service, we may collect data and information from your mobile device, including but not limited to, Log Data, through the use of third-party products. This Log Data may contain but is not limited to, your device&apos;s Internet Protocol (&quot;IP&quot;) address, device name, operating system version, the configuration of the app when using our Service, the date and time of use, and other relevant statistics.
            </p>
            <p>
              By continuing to use our Service, you explicitly consent to the collection, storage, and use of the aforementioned data and information for purposes including, but not limited to, error troubleshooting, Service improvement, and security purposes. You acknowledge that such data and information may be transferred to and stored on servers located in other jurisdictions, including those outside your home country.
            </p>
          </PolicySection>

          {/* COOKIE POLICY */}
          <PolicySection title="Cookie Policy">
            <p>
              This Service acknowledges that cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These cookies are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
            </p>
            <p>
              This Service does not use cookies explicitly. However, the app may incorporate third-party code and libraries that may use cookies to collect information and improve their services. The user has the option to either accept or refuse these cookies and will be notified when a cookie is being sent to their device. If the user chooses to refuse our cookies, it may result in certain portions of the Service being unavailable.
            </p>
            <p>
              By continuing to use our Service, you acknowledge that you have read and understood our Cookie Policy and that you consent to the use of cookies by third-party code and libraries integrated into our app.
            </p>
          </PolicySection>

          {/* NOTICE OF THIRD-PARTY ACCESS TO PERSONAL INFORMATION */}
          <PolicySection title="Notice of Third-Party Access to Personal Information">
            <p>
              This Service may engage third-party companies and individuals for various reasons, including but not limited to facilitating our Service, providing the Service on our behalf, performing Service-related services, or assisting in analyzing how our Service is used.
            </p>
            <p>
              We hereby notify users of this Service that these third parties may have access to their Personal Information for the sole purpose of performing the tasks assigned to them on our behalf. However, these third parties are obligated not to disclose or use such information for any other purpose other than as required by law.
            </p>
            <p>
              By continuing to use our Service, you explicitly consent to the sharing of your Personal Information with third-party companies and individuals engaged by us. You acknowledge that such third parties may be located in other jurisdictions, including those outside your home country.
            </p>
          </PolicySection>

          {/* CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA) DISCLOSURE */}
          <PolicySection title="Children's Online Privacy Protection Act (COPPA) Disclosure">
            <p>
              These Services are not intended for individuals under the age of 13. We do not knowingly collect personally identifiable information from children under the age of 13. If we discover that we have collected such information from a child under 13 years of age, we will immediately take steps to delete such information from our servers.
            </p>
            <p>
              If you are a parent or legal guardian and you believe that your child under the age of 13 has provided personal information to us, please contact us immediately so that we can take appropriate action to delete such information from our servers.
            </p>
            <p>
              We take children&apos;s privacy seriously and comply with the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
          </PolicySection>

          {/* DISCLAIMER OF LIABILITY FOR SECURITY BREACHES */}
          <PolicySection title="Disclaimer of Liability for Security Breaches">
            <p>
              We value your trust in providing us with your Personal Information, and we endeavor to use commercially acceptable means to protect it. However, it is important to note that no method of transmission over the internet, or method of electronic storage is completely secure, and we cannot guarantee its absolute security.
            </p>
            <p>
              We will take all reasonable measures to protect your Personal Information, but we disclaim any liability for any security breaches that result in the unauthorized disclosure or loss of your Personal Information.
            </p>
            <p>
              By using our Service, you acknowledge and accept the inherent risks associated with the transmission and storage of your Personal Information over the internet, and you release us from any and all liability related to any such breaches.
            </p>
          </PolicySection>

          {/* THIRD-PARTY LINKS DISCLAIMER */}
          <PolicySection title="Third-Party Links Disclaimer">
            <p>
              This Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of each website you visit.
            </p>
            <p>
              We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. You acknowledge and agree that we shall not be held responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such third-party sites or services.
            </p>
            <p>
              By using our Service, you agree that you access any such third-party sites or services at your own risk. We encourage you to exercise caution and to read the privacy statements of these websites as their privacy policies may differ from ours.
            </p>
          </PolicySection>

          {/* UPDATES TO PRIVACY POLICY */}
          <PolicySection title="Updates to Privacy Policy">
            <p>
              This privacy policy may be updated from time to time as necessary. Users will be notified of any changes to this policy, and continued use of the App after changes have been made constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

          {/* CONTACT INFORMATION */}
          <PolicySection title="Contact Information">
            <p>
              If you have any questions or concerns about this privacy policy or the App&apos;s handling of user data, please contact us at {" "}
              <a href="mailto:support@oneqid.com" className="text-blue-600 underline hover:text-blue-500">support@oneqid.com</a>.
            </p>
          </PolicySection>

        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
