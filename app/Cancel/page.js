// Privacy Policy page (app router)
// Dark theme cards + subtle grid background to match site style
import React from "react";

// A reusable component for the content sections to keep the code clean
const PolicySection = ({ title, children }) => (
  <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
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

const Terms = () => {
  return (
    // Main container with the dark background and grid pattern
    // The grid pattern is applied via a custom class 'bg-grid' in your global CSS
    <div className="bg-grid min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Cancellation and Refund Policy
          </h1>
        </header>

        {/* Main Content */}
        <main>
          {/* Intro */}
          <PolicySection className="Cancellation and Refund Policy for Subscription-based Services">
            <p>Thank you for choosing our application. This Cancellation and Refund Policy outlines the terms and conditions associated with cancellations and refunds for our subscription-based services.</p>
          </PolicySection><PolicySection className="Subscription Services">
            <p>Our application offers subscription-based services to businesses. These services provide access to premium features and functionalities, with an increased number of scans and accounts available.</p>
          </PolicySection><PolicySection className="Non-subscription services">
            <p>Certain parts of our application are available without a subscription. Users can access these features without any payment. These features include a certain number of scans per month and other basic functionalities.</p>
          </PolicySection><PolicySection className="Refund policy for businesses">
            <p>Subscriptions are provided to businesses based on agreed-upon terms and conditions. Refund policies for businesses may vary according to the specific deal and agreement between the business and our application.</p>
            <p>In general, once a subscription fee is paid by a business, no refunds will be provided. Any exceptions to this policy will be determined based on the terms negotiated in the business agreement.</p>
          </PolicySection><PolicySection className="Cancellation procedure">
            <p>Cancellation of subscription services is not facilitated through an automated platform within the application.</p>
            <p>Businesses wishing to cancel their subscription must submit a cancellation request to our company through support@oneqid.com</p>
            <p>Cancellation requests will be processed per the terms of the business agreement.</p>
          </PolicySection><PolicySection className="Cancellation and Refund for Special Cases">
            <p>In exceptional cases, where there are extenuating circumstances, businesses may contact our customer support to discuss their situation. Our team will review each case individually, and decisions will be made at the discretion of the company.</p>
          </PolicySection><PolicySection className="Policy Updates">
            <p>This policy is subject to change, and any modifications will be communicated to users through the application.</p>
            <p>By using our subscription-based services, businesses and users agree to abide by the terms and conditions outlined in this Cancellation and Refund Policy. If you have any questions or concerns, please contact our customer support team at support@oneqid.com.</p>
            <p>For any questions or concerns regarding our Cancellation and Refund Policy, please contact us at:</p>
            <p>Email: support@oneqid.com</p>
            <p>Phone: +91 9606406404</p>
            <p>This policy is effective from 21-12-2023 and is subject to change without prior notice. Please review our policy periodically for any updates.</p>
          </PolicySection>
        </main>
      </div>
    </div>
  );
};

export default Terms;
