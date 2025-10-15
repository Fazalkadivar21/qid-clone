import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// Poppins: semi-bold (600), semi-bold italic (600 italic), bold italic (700 italic)
const poppins = Poppins({
  weight: ["600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

// Raleway default usage
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: 'swap',
});

export const metadata = {
  title: "India's #1 ID Gateway - qid",
  description: "With qid, sharing your IDs is as easy as sending a text message. Once you've uploaded your government documents to our secure platform, you can share them with anyone in just a few clicks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
