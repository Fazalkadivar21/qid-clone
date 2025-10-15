import Image from "next/image";
import Hero from "./components/home/Hero";
import SecureEasy from "./components/home/SecureEasy";
import ForBusiness from "./components/home/ForBusiness";
import UsedBy from "./components/home/UsedBy";
import QrCheckin from "./components/QrCheckin";
import BookDemo from "./components/BookDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <SecureEasy />
      <ForBusiness/>
      <UsedBy/>
      <QrCheckin/>
      <BookDemo/>
    </>
  );
}
