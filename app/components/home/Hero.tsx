import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src="/images/home/fgh-bg-1.png"
        alt="hero background"
        fill
        className="object-cover"
      />

      {/* Content */}
      <div className="raleway-bold relative z-10 flex flex-col items-start md:items-center  justify-center h-full px-8 w-ful gap-5">
        <h1 className="text-5xl md:text-center md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-none mb-8">
          every person deserves to know and be known by their true identixty
        </h1>
        
        <Link 
          href="/app"
          className="bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Download qid
        </Link>
      </div>
    </div>
  );
};

export default Hero;
