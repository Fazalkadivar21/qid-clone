"use client";

export default function BookDemoForm() {
  return (
    <section className="bg-grid text-white md:py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-b from-[#0f0f0f] to-black rounded-2xl p-10 shadow-lg">
        
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-8xl font-bold mb-6">Book a Demo</h2>
          <p className="text-gray-400 text-xl md:text-3xl mt-2 mb-6">
            Discover <span className="italic font-semibold text-white">qid</span> – Your Partner in Secure Identity Management
          </p>
          <p className="text-gray-400 text-lg mb-6 border border-[#7a7a7a] p-2 rounded-2xl inline-block gap-10 mr-4">
            Quick Guest Check-In
          </p>
          <p className="text-gray-400 text-lg mb-6 border border-[#7a7a7a] p-2 rounded-2xl inline-block gap-10 mr-4">
            C-Form Automation
          </p>
          <p className="text-gray-400 text-lg mb-6 border border-[#7a7a7a] p-2 rounded-2xl inline-block gap-10 mr-4">
            Business Analytics
          </p>
          <p className="text-gray-400 text-lg mb-6 border border-[#7a7a7a] p-2 rounded-2xl inline-block gap-10 mr-4">
            QR Based Customer Onboarding
          </p>
          <hr className="border-gray-700 mb-6" />
          <p className="text-blue-500 font-medium text-3xl">Trusted by 50,000+ Users</p>
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
              <label className="block text-lg mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Industry</label>
              <select className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-[#7a7a7a] placeholder-gray-500">
                <option value="Hospitality">Hospitality</option>
                <option value="Software Development">Software Development</option>
                <option value="Education">Education</option>
                <option value="Legal">Legal</option>
                <option value="Finance">Finance</option>
                <option value="Retail">Retail</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Fintech">Fintech</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Book Demo
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
