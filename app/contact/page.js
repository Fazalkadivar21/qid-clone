export default function Contact() {
  return (
    <section className="bg-grid text-white md:py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-2xl p-10 shadow-lg">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-8xl font-bold mb-6">Book a Demo</h2>
          <p className="text-gray-400 text-xl md:text-3xl mt-2 mb-6">
            Discover{" "}
            <span className="italic font-semibold text-white">qid</span> – Your
            Partner in Secure Identity Management
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:contact@oneqid.com"
                className="text-white text-2xl hover:text-blue-400 transition-colors"
              >
                contact@oneqid.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+919606406404"
                className="text-white text-2xl hover:text-blue-400 transition-colors"
              >
                +91 960 640 640 4
              </a>
            </div>
          </div>
          <hr className="border-gray-700 mb-6" />
          <p className="text-blue-500 font-medium text-3xl">
            Trusted by 50,000+ Users
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl shadow-xl border border-gray-800">
          <form className="space-y-6 text-xl">
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="123-456-7890"
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2">Message</label>
              <textarea
                placeholder="Message..."
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
