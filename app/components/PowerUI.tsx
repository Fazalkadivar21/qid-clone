import { FC } from "react";

interface InfoProps {
  title: string;
  description: string;
}

const Info: FC<InfoProps> = ({ title, description }) => {
  return (
    <div className="flex w-full md:w-2/3 flex-col items-start raleway-medium justify-around mb-5">
      {/* Info(head,description [tags in first only]) */}
      <h3 className="text-2xl md:text-4xl raleway-semibold py-4">{title}</h3>
      <p className="text-lg md:text-2xl text-[#7a7a7a]">{description}</p>
    </div>
  );
};

const PowerUI: FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-20">
      <div className="raleway-bold w-3/4 mb-10 flex flex-col gap-3">
        <h2 className="text-4xl md:text-8xl">
          Power-Packed <span className="text-purple-500">Forms</span>
        </h2>
        <h3 className="text-3xl md:text-6xl">Quick and Powerfull</h3>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="h-fit flex justify-center gap-5 w-full">
          <div className="w-1 bg-emerald-500"></div>
          <div className="w-3/4 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-5 bg-white p-8 raleway-semibold rounded-2xl text-black border-4 border-emerald-500">
              <p className="text-2xl">Documents to collect</p>
              <ul className="flex flex-col gap-2">
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl flex items-center justify-between">
                  <p>Aadhaar </p>
                  <img
                    src="/images/qr-checkin/correct.svg"
                    alt="correct"
                    className="h-6 w-6"
                  />
                </li>
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl flex items-center justify-between">
                  <p>Driving License</p>
                  <img
                    src="/images/qr-checkin/correct.svg"
                    alt="correct"
                    className="h-6 w-6"
                  />
                </li>
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl">
                  Passport
                </li>
              </ul>
            </div>
            <div className="w-2/3">
            <Info
              title="Identity Documents"
              description="Tired of ID management headaches? Switch to qid's hassle-free, AI-powered ID document collection. Effortlessly verify identities from Aadhar, driver's licenses, passports, and custom documents.

Say goodbye to manual processes and hello to seamless efficiency!"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <p className="text-xl text-[#7b7b7b] border border-white p-2 px-4 rounded-lg shadow-md shadow-white">ID Photo varification</p>
                <p className="text-xl text-[#7b7b7b] border border-white p-2 px-4 rounded-lg shadow-md shadow-white">Face Detection</p>
                <p className="text-xl text-[#7b7b7b] border border-white p-2 px-4 rounded-lg shadow-md shadow-white">OCR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit flex justify-center gap-5 w-full">
          <div className="w-1 bg-[#4558E0]"></div>
          <div className="w-3/4 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-5 bg-white p-8 raleway-semibold rounded-2xl text-black border-4 border-[#4558E0]">
              <p className="text-2xl">Add Form Fields</p>
              <ul className="flex flex-col gap-2">
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl flex items-center justify-between">
                  <p>Area</p>
                  <p className="text-[#7b7b7b] text-sm">Text Area</p>
                </li>
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl flex items-center justify-between">
                  <p>Purpose of visit</p>
                  <p className="text-[#7b7b7b] text-sm">Dropdown</p>
                </li>
                <li className="py-4 px-6 w-full text-xl border border-[#7b7b7b] rounded-2xl flex items-center justify-between">
                  <p>And More </p>
                  <img
                    src="/images/qr-checkin/plus.svg"
                    alt="correct"
                    className="h-6 w-6"
                  />
                </li>
              </ul>
            </div>
            <Info
              title="Form Fields"
              description="With qid's advanced form features, you can collect all necessary details with a new-age UI experience."
            />
          </div>
        </div>
        <div className="h-fit flex justify-center gap-5 w-full">
          <div className="w-1 bg-amber-300"></div>
          <div className="w-3/4 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-5 bg-white p-8 raleway-semibold rounded-2xl text-black border-4 border-amber-300">
              <div className="flex items-center justify-between">
                <p className="text-2xl">Signature</p>{" "}
                <img
                  src="/images/qr-checkin/toggle-switch.jpg"
                  alt=""
                  className="h-14 w-14"
                />
              </div>
              <div className="flex flex-col gap-2 items-center bg-[#cecece] rounded-2xl p-8 ">
                <img
                  src="/images/qr-checkin/signature.png"
                  alt=""
                  className="h-40 w-40"
                />
              </div>
            </div>
            <Info
              title="Signature"
              description="No more scanning, cropping, and pasting signatures on digital records. QID's inbuilt signature pad provides seamless signature collection."
            />
          </div>
        </div>
        <div className="h-fit flex justify-center gap-5 w-full">
          <div className="w-1 bg-emerald-500"></div>
          <div className="w-3/4 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-5 bg-white p-8 raleway-semibold rounded-2xl text-black">
              <p className="text-2xl">Hotel Rules</p>
              <div className="flex flex-col gap-2">
                <div>
                  <p>Check-in: 3:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                  <p>
                    Early check-in/late check-out subject to availability and
                    fees.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-10">
                  <p className="text-2xl">I Agree</p>
                  <img
                    src="/images/qr-checkin/checkbox.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </div>
            <Info
              title="Policies"
              description="Get agreement on your policies and terms right away. Create policies on QID with advanced features like bullet points, full policy redirect links, icons, and more."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerUI;
