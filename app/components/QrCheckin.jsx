"use client";

import Image from "next/image";
import { redirect, usePathname } from "next/navigation";

export default function QrCheckin() {
  const pathname = usePathname();
  const hideLearnMore = pathname.includes("/qr-check-in");
  return (
    <section
      className="relative bg-grid text-white py-16 px-4 md:px-16 overflow-hidden min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-around flex-col md:flex-row gap-10 w-full z-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
            <span className="text-orange-300">Check-In</span> <br/> with{" "}
            <span className="italic font-bold">qid</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg md:text-xl font-medium">
            <span className="inline-block align-middle mr-2">
              {/* QR Image here */}
            </span>
            #1 QR Based Check-In system for your organisation
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button onClick={() => redirect("https://business.oneqid.com/signup")} className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-gray-200 transition flex items-center justify-center gap-2">
              Start for Free{" "}
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
            </button>
            {!hideLearnMore && (
              <button onClick={() => redirect("/qr-check-in")} className="border border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
                Learn More{' '}
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
              </button>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 sm:w-72 md:w-80 lg:w-96">
            <Image
              src="/images/qrcheckin.png" // Replace with your actual image path
              alt="QR Check-In"
              width={400}
              height={600}
              className="w-full h-auto scale-120 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
