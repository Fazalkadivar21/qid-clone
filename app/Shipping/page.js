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
            Shipping and Return Policy
          </h1>
        </header>

        {/* Main Content */}
        <main>
          {/* Intro */}
          <PolicySection className="">
            <p>Since QID is a service-based application, there is no shipment and delivery included. There are no policies related to shipping and return for this platform. </p>
          </PolicySection>
        </main>
      </div>
    </div>
  );
};

export default Terms;
