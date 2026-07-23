"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarClient = ({ user, signOutAction }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
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

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.label}
                href={navLink.href}
                className="text-slate-600 hover:text-teal-600 text-sm font-medium transition-colors"
              >
                {navLink.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth / CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              /* --- ইউজার থাকলে --- */
              <div className="flex items-center gap-3">
                {/* 🪙 Coin Balance Badge */}
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-base">🪙</span>
                  <span className="text-sm font-bold text-amber-700">
                    {user.coinBalance !== undefined
                      ? user.coinBalance.toLocaleString("bn-BD") // বাংলায় সংখ্যা ফরম্যাট
                      : 0}
                  </span>
                </div>

                {/* Profile Avatar Button (শুধু ছবি দেখাবে) */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center justify-center focus:outline-none ring-2 ring-transparent hover:ring-teal-500 rounded-full transition-all"
                    title={user.name}
                  >
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={38}
                        height={38}
                        className="rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}
                  </button>

                  {/* Dropdown (নাম, ইমেইল ও লগআউট দেখাবে) */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                      <div className="px-4 py-2.5 border-b border-slate-100">
                        <p className="text-sm font-bold text-slate-800 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <button
                        onClick={() => signOutAction()}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                      >
                        লগ আউট
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* --- ইউজার না থাকলে --- */
              <Link
                href="/login"
                className="text-teal-600 border-teal-500 border px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors"
              >
                লগ ইন
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.label}
              href={navLink.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-600 font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-teal-50"
            >
              {navLink.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
            {user ? (
              <>
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  {/* Mobile Coin Balance */}
                  <div className="flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-full text-xs font-bold text-amber-800">
                    <span>🪙</span>
                    <span>
                      {user.coinBalance !== undefined
                        ? user.coinBalance.toLocaleString("bn-BD")
                        : 0}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => signOutAction()}
                  className="block w-full text-center text-red-600 font-semibold text-sm py-2 bg-red-50 rounded-lg"
                >
                  লগ আউট
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center border-teal-500 text-teal-600 font-semibold text-sm py-2.5"
              >
                লগ ইন
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarClient;
