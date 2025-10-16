import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col items-center border-t border-[#7a7a7a]">
      {/* Main Footer Content */}
      <div className="w-full md:max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="md:col-span-2 flex items-center">
            <h2 className="poppins-bold-italic text-7xl text-[#cecece] tracking-wide">qid</h2>
          </div>

          {/* Download App Section */}
          <div className="raleway-regular flex flex-col gap-5">
            <h3 className="md:text-xl lg:text-2xl font-semibold">Download App</h3>
            <ul className="space-y-4 text-white lg:w-2/3">
              <li>
                <Link href="https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid"  target="_blank" className="hover:text-white transition">Android</Link>
              </li>
              <li>
                <Link href="https://apps.apple.com/us/app/qid-quick-id/id1629041779/"  target="_blank" className="hover:text-white transition">iOS</Link>
              </li>
              <li>
                <Link href="https://chromewebstore.google.com/detail/qid-c-form-pro/afghjacdcfhoikcccemlchhmokfgobpj" target="_blank" className="hover:text-white transition">C-Form Pro Plugin</Link>
              </li>
              <li>
                <Link href="/bookqid" className="hover:text-white transition">Book a Demo</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="raleway-regular flex flex-col gap-5">
            <h3 className="md:text-xl lg:text-2xl font-semibold">Legal</h3>
            <ul className="space-y-4 text-white lg:w-2/3">
              <li>
                <Link href="/Privacy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/Terms" className="hover:text-white transition">Terms of Use</Link>
              </li>
              <li>
                <Link href="/Cancel" className="hover:text-white transition">Cancellation and Refund Policy</Link>
              </li>
              <li>
                <Link href="/Shipping" className="hover:text-white transition">Shipping and Return Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Border */}
      <div className="border-t border-white/20 mb-16 w-full lg:w-[70%]">
        <div className="max-w-6xl mx-auto py-6 flex flex-col-reverse items-center gap-2 md:flex md:flex-row md:items-center md:justify-between">
          <p className="text-sm md:text-xl">Oneqid Technologies Private Limited</p>
          <Link href="https://www.linkedin.com/company/oneqid" target="_blank" className="hover:opacity-80 transition">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* FITT Section */}
      <div className="bg-[#d4d4d4] py-12 w-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-6">
          <Image
            src="/images/home/spark.png"
            alt="FITT IIT Delhi"
            width={140}
            height={140}
            className="object-contain"
          />
          <p className="text-black text-lg font-medium">A FITT, IIT-Delhi Incubated Startup</p>
        </div>
      </div>
    </footer>
  );
}