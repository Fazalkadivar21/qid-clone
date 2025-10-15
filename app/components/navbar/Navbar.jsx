"use client"
import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/20 bg-black">
      <nav className="max-w-6xl mx-auto px-6 h-22 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="inline-block">
            <h1 className="poppins-semi-italic text-4xl text-[#cecece] tracking-wide">qid</h1>
          </Link>
        </div>

        {/* Hamburger Button - Hidden on tablet and up */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#7a7a7a] hover:text-gray-100 transition z-50 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop/Tablet Menu - Hidden on mobile */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 text-md raleway-semibold text-[#7a7a7a]">
            <li>
              <Link href="/app" className="hover:text-gray-100 transition">App</Link>
            </li>
            <li>
              <Link href="/qr-check-in" className="hover:text-gray-100 transition">QR Check-In</Link>
            </li>
            <li>
              <Link href="/c-form" className="hover:text-gray-100 transition">C-Form Pro</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-100 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu - Shown when hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 pt-22">
            <ul className="flex flex-col text-md raleway-semibold bg-black">
              <li className="border-b border-white/20">
                <Link 
                  href="/app" 
                  className="block px-6 py-2 bg-[#4c4c4c] hover:text-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  App
                </Link>
              </li>
              <li className="border-b border-white/20">
                <Link 
                  href="/qr-based-check-in-software" 
                  className="block px-6 py-2 bg-[#4c4c4c] hover:text-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  QR Check-In
                </Link>
              </li>
              <li className="border-b border-white/20">
                <Link 
                  href="/home/c-form-automation-for-hotels" 
                  className="block px-6 py-3 bg-[#4c4c4c] hover:text-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  C-Form Pro
                </Link>
              </li>
              <li className="border-b border-white/20">
                <Link 
                  href="/support" 
                  className="block px-6 py-3 bg-[#4c4c4c] hover:text-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}