// components/home/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "কিভাবে কাজ করে", href: "#how-it-works" },
    { label: "সক্রিয় কেস", href: "#cases" },
    { label: "স্বচ্ছতা", href: "#transparency" },
    { label: "সাফল্যের গল্প", href: "#stories" },
    { label: "আমাদের সম্পর্কে", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-slate-100"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800">সাহায্য</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.label}
                href={navLink.href}
                className="text-slate-600 hover:text-teal-600 text-sm font-medium transition-colors duration-200"
              >
                {navLink.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
            >
              লগ ইন
            </Link>
            <Link
              href="#cases"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              এখনই Donate করুন
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="মেনু"
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.label}
              href={navLink.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-600 font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {navLink.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
            <Link
              href="/login"
              className="block text-center text-teal-600 font-semibold text-sm py-2.5"
            >
              লগ ইন
            </Link>
            <Link
              href="#cases"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold text-sm py-3 rounded-full"
            >
              ❤️ এখনই Donate করুন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
