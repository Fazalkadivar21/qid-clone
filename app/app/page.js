'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AppDownloadSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-bold text-black mb-8">
            Get the <span className="italic">qid</span> App
          </h2>

            <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className="flex flex-col items-center md:items-start gap-4 mt-8">
            {/* App Store Button */}
            <Link href="https://apps.apple.com/us/app/qid-quick-id/id1629041779/" target="_blank" className="hover:opacity-80 transition">
            <Image
              src="/images/app/apple.png" // Replace with actual App Store badge image
              alt="Download on the App Store"
              width={300}
              height={100}
              className="w-auto h-auto"
            />
            </Link>
            {/* Google Play Button */}
            <Link href="https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid" target="_blank" className="hover:opacity-80 transition">
            <Image
              src="/images/app/gplay.png" // Replace with actual Google Play badge image
              alt="Download on Google Play"
              width={300}
              height={100}
              className="w-auto h-auto"
            />
            </Link>
          </div>

          {/* QR Code */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/app/qr-code.png" // Replace with actual QR code image
              alt="qid QR Code"
              width={250}
              height={250}
              className="w-auto h-auto"
            />
          </div>
          </div>
        </div>

        {/* Right Side - Mobile Mockup */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/app/Asset-16.png" // Replace with actual mobile hand screenshot
            alt="qid App Preview"
            width={400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
