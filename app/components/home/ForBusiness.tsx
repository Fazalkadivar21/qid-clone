import { FC } from "react";

const ForBusiness: FC = () => {
  return (
    <div className="relative w-full h-fit bg-grid overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
        
        {/* Heading */}
        <div className="text-center absolute top-0 mt-40 max-w-4xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white italic">qid</span>
            <span className="text-gray-400"> for business</span>
          </h2>
          <p className="text-white text-xl md:text-2xl font-light">
            manage all your IDs with one QR
          </p>
        </div>

        {/* Main Image - Full width display */}
        
          <img 
            src="/images/home/qd-ffvc-2-sdf.png" 
            alt="QID for Business - Manage all IDs with one QR" 
            className="w-full h-screen md:h-auto object-cover"
          />

          {/* Cards + Analytics */}
          <section className="w-full max-w-6xl mx-auto mt-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* QR Card */}
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <div className="bg-white rounded-xl aspect-square flex items-center justify-center">
                  <img src="/images/home/qr-code.png" alt="QR" className="rounded-xl object-contain" />
                </div>
                <h3 className="text-white text-2xl font-bold mt-6">Collect IDs with QR</h3>
                <p className="text-gray-400 mt-2">Easy to setup QR code stand</p>
              </div>

              {/* Analytics Panel - span 2 cols on large */}
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6 lg:col-span-2 backdrop-blur-sm">
                <h3 className="text-white text-2xl font-bold mb-4">Business Analytics</h3>
                <img src="/images/home/Asset-7.png" alt="Business Analytics" className="w-full h-auto" />
                <p className="text-gray-400 mt-4">Unlock the power of data with qid – your ultimate tool for comprehensive business analytics.</p>
              </div>

              {/* Customized Interface */}
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-white text-2xl font-bold">Customized Interface</h3>
                <p className="text-gray-400 mt-2">Tailor qid's interface to perfectly align with your brand, creating a seamless and personalized user experience.</p>
              </div>

              {/* Developer APIs */}
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-white text-2xl font-bold">Developer APIs</h3>
                <p className="text-gray-400 mt-2">Supercharge your applications with qid's robust developer APIs, enabling you to effortlessly leverage the full potential of our platform and create unique, personalized experiences for your users.</p>
              </div>

              {/* One-Click C-Form */}
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-white text-2xl font-bold">One-Click C-Form</h3>
                <p className="text-gray-400 mt-2">Simplify C-Form filling with qid's 1-Click solution, automating the process and saving you time while ensuring compliance.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-10">
              <a href="https://business.oneqid.com/signup" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition">
                Create Business Account
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          </section>
      </div>
    </div>
  );
};

export default ForBusiness;
