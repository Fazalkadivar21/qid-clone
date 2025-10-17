import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const IdentityEcosystem: FC = () => {
  return (
    <>
      {/* Secure Easy Section */}
      <div className="relative w-full bg-grid py-20 px-4 overflow-hidden">
        {/* Background grid image */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Secure</span>, easy,{" "}
              <br className="hidden sm:block" />
              and always{" "}
              <br className="hidden sm:block" />
              with you.
            </h2>
            
            <Link 
              href="/app"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Create free account
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
            </Link>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-start lg:justify-end">
            <Image
              src="/images/home/fsgdh.png"
              alt="qid app interface showing secure identity management"
              width={600}
              height={700}
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-12 mb-16 items-start">
            {/* Left side - Main heading */}
            <div className="">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Two Base elements of Identity ecosystem
              </h2>
            </div>

            {/* Right side - Feature cards */}
            <div className="relative flex gap-6 ">
              {/* Decorative lines */}
              {/* Card 1 - Managing */}
              <div className="flex md:flex-col items-center md:block bg-green-900/20 border border-green-700/50 rounded-3xl p-8 backdrop-blur-sm relative gap-2">
                <h3 className="text-green-600 text-2xl md:text-3xl font-bold mb-3">1 </h3>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3"> Managing</h3>
                <p className="hidden md:block text-gray-400 text-base leading-relaxed">
                  Consolidate all your IDs securely in one place with qid, making them easily accessible whenever you need them
                </p>
              </div>

              {/* Card 2 - Sharing */}
              <div className="flex md:flex-col items-center md:block bg-yellow-900/20 border border-yellow-700/50 rounded-3xl p-8 backdrop-blur-sm relative gap-2">
                <h3 className="text-yellow-600 text-2xl md:text-3xl font-bold mb-3">2 </h3>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3"> Sharing</h3>
                <p className="hidden md:block text-gray-400 text-base leading-relaxed">
                  Experience lightening-fast and traceable ID sharing with qid, ensuring seamless and efficient communication
                </p>
              </div>
            </div>
          </div>

          {/* Bottom sections */}
          <div className="space-y-12">
            {/* Section 1 - Your true identity */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-3xl md:text-5xl raleway-bold pb-5 font-bold text-white mb-4">
                Your true identity,{" "}
                <span className="text-green-500">managed</span> with ease.
              </h3>
              <p className="text-gray-400 text-lg md:text-2xl leading-[1.1] raleway-semibold">
                With qid, managing your IDs has never been easier. You can store and access all your IDs in one place, share them securely with others, and even get them verified with just a few clicks. Say goodbye to the hassle of carrying physical IDs or struggling with tedious verification processes, and hello to the convenience and simplicity of qid.
              </p>
            </div>

            {/* Section 2 - Share your identity */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-3xl md:text-5xl raleway-bold pb-5 font-bold text-white mb-4">
                <span className="text-orange-500">Share</span> your identity with ease,{" "}
                <br className="hidden sm:block" />
                qid has got you covered!
              </h3>
              <p className="text-gray-400 text-lg md:text-2xl leading-[1.1] raleway-semibold">
                Sharing IDs with qid is simple and convenient. Just add the ID to your qid profile and share it with anyone, anytime, anywhere. No need to carry physical IDs or worry about losing them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentityEcosystem;
