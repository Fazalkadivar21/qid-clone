import Image from "next/image";
import Link from "next/link";

const Btn = () => {
  return (
    <Link
      href="https://chromewebstore.google.com/detail/qid-c-form-pro/afghjacdcfhoikcccemlchhmokfgobpj"
      target="_blank"
      className="hover:opacity-80 transition w-full md:w-fit"
    >
      <div className="w-full md:w-80 p-4 border border-white rounded-full flex items-center justify-center gap-4">
        <Image
          src="/images/cform/chrome.svg"
          alt="Chrome"
          width={20}
          height={20}
        />
        <p className="text-xl raleway-semibold">Get Chrome Extension</p>
      </div>
    </Link>
  );
};

const CformImage = () => {
  return (
    <>
      {/* Show on mobile */}
      <Image
        src="/images/cform/c-form-long.png"
        alt="C-Form"
        width={500}
        height={500}
        className="w-full h-auto object-cover md:hidden"
      />
      {/* Show on md screens and up */}
      <Image
        src="/images/cform/c-form-short.png"
        alt="C-Form"
        width={500}
        height={500}
        className="hidden md:block w-full h-auto object-cover"
      />
    </>
  );
};

const OneClick = () => {
  return (
    <div className="container mb-32 md:mb-0 mx-auto px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-52 mt-52">
      <h2 className="text-5xl md:text-6xl lg:text-7xl raleway-bold md:text-left">
        Trust us, it&apos;s truly a matter of just{" "}
        <span className="text-orange-500">one click</span> .
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24 md:mt-36">
        <div className="text-3xl raleway-semibold border border-[#7a7a7a] p-6 rounded-2xl text-white md:text-left">
          <p>Your guests upload photos of their Passport and Visa.</p>
        </div>
        <div className="text-3xl raleway-semibold border border-[#7a7a7a] p-6 rounded-2xl text-white md:text-left">
          <p>
            Qid&apos;s AI engine extracts details like Passport Number, Visa Number,
            Name, Country, and Photos from the images
          </p>
        </div>
        <div className="text-3xl raleway-semibold border border-[#7a7a7a] p-6 rounded-2xl text-white md:text-left">
          <p>
            Go to the C-Form website Open the qid C-Form Pro Chrome plugin.
            Select the guest. Done!
          </p>
        </div>
      </div>
    </div>
  );
};

const Elevate = () => {
  return (
    <div className="text-white py-16 px-4 mt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-6 md:py-0">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl raleway-bold leading-tight">
            Elevate C-Form Processing with{" "}
            <span className="text-white">qid&apos;s</span> State-of-the-Art Chrome
            Extension
          </h2>
          <p className="mt-4 text-xl raleway-semibold text-[#7a7a7a]">
            Simplify C-Form management like never before with qid’s
            revolutionary Chrome extension.
          </p>

          {/* Button */}
          <div className="mt-6 inline-block">
            <Btn />
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/images/cform/ss.png"
            alt="C-Form Pro"
            width={500}
            height={500}
            className="w-fit md:w-2/3 h-auto rounded-xl shadow-xl md:ml-48"
          />
        </div>
      </div>
    </div>
  );
};

const Cinfo = () => {
  return (
    <div className="flex flex-col gap-10 border border-[#7a7a7a] p-6 m-6 rounded-2xl md:w-2/3">
      <h2 className="text-5xl raleway-semibold">What is C-Form?</h2>
      <p className="text-2xl raleway-regular">
        In India, a <a href="https://indianfrro.gov.in/frro/" target="_blank" className="font-extrabold underline">C-Form</a> is a mandatory document required under the
        Foreigners’ Registration Act, 1946.
      </p>
      <p className="text-2xl raleway-regular">
        It serves as a record of the stay of foreign nationals within the
        country.
      </p>
      <p className="text-2xl raleway-regular">
        Hotels, guesthouses, and other accommodation providers are legally
        obligated to submit C-Forms to local authorities for every foreign
        guest’s stay.
      </p>
      <div className="px-6 py-4 text-xl raleway-bold border border-[#7a7a7a] rounded-full w-fit">
        <Link href="/c-form">Read more</Link>
      </div>
    </div>
  );
};

export default function CForm() {
  return (
    <div className="bg-grid">
      <div className="container mb-32 md:mb-0 mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col gap-4 mb-8 mt-16 md:mt-36">
          <h1 className="text-5xl md:text-6xl lg:text-7xl raleway-bold md:text-left">
            <span className="text-orange-500">C-Form</span> Automation
          </h1>
          <p className="text-3xl md:text-4xl raleway-semibold text-[#7a7a7a] md:text-left">
            Say Goodbye to Manual Forms
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/bookqid"
            target="_blank"
            className="hover:opacity-80 transition w-full md:w-fit px-6 py-4 md:px-8 md:py-4 bg-white rounded-full text-lg sm:text-xl text-black raleway-semibold text-center"
          >
            Book a Demo
          </Link>
          <div className="w-auto">
            <Btn />
          </div>
        </div>
      </div>
      <div>
        <CformImage />
      </div>
      <div>
        <OneClick />
      </div>
      <div>
        <Elevate />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Cinfo />
      </div>
    </div>
  );
}
