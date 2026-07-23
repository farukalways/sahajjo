import Link from "next/link";
// import OAuthButtons from "./OAuthButtons";

import SubmitButton from "./SubmitButton";
import { registerUser } from "@/app/actions/authActions";

export const metadata = {
  title: "রেজিস্টার — সাহায্য",
  description: "সাহায্য-তে নতুন অ্যাকাউন্ট তৈরি করুন",
};

const errorMessages = {
  missing: "সব ঘর পূরণ করুন।",
  mismatch: "পাসওয়ার্ড দুটো মিলছে না।",
  weak: "পাসওয়ার্ড কমপক্ষে ৬ ক্যারেক্টার হতে হবে।",
  exists: "এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট আছে।",
};

export default function RegisterForm({ searchParams }) {
  const errorMsg = errorMessages[searchParams?.error];

  return (
    <main className="min-h-screen flex bg-slate-50">
      {/* ===== LEFT — branding panel ===== */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-slate-800 flex-col justify-between p-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-teal-400/15 blur-3xl" />
        </div>

        <Link href="/" className="relative flex items-center gap-2.5 w-fit">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md">
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
          <span className="text-xl font-bold text-white">সাহায্য</span>
        </Link>

        <div className="relative">
          <h1 className="text-3xl xl:text-4xl font-bold text-white leading-snug mb-4">
            আজই যুক্ত হন —{" "}
            <span className="text-amber-300">হাজারো মানুষের পাশে</span> দাঁড়ান
          </h1>
          <p className="text-white/70 leading-relaxed max-w-md">
            অ্যাকাউন্ট তৈরি করলেই পাবেন স্বাগতম কয়েন, donation history ট্র্যাক
            করার সুবিধা এবং প্রতিটি কেসের আপডেট সরাসরি।
          </p>
        </div>

        <div className="relative flex flex-wrap gap-6">
          {[
            { icon: "🔒", text: "SSL সুরক্ষিত" },
            { icon: "✅", text: "১০০% যাচাইকৃত" },
            { icon: "📊", text: "স্বচ্ছ হিসাব" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-white/65 text-sm"
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== RIGHT — form ===== */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="lg:hidden flex items-center gap-2.5 mb-10 w-fit mx-auto"
          >
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

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="mb-7">
              <h2 className="font-bold text-slate-800 text-2xl mb-1">
                অ্যাকাউন্ট তৈরি করুন
              </h2>
              <p className="text-slate-400 text-sm">
                মাত্র কয়েক সেকেন্ডে শুরু করুন
              </p>
            </div>

            {errorMsg && (
              <div className="mb-5 flex items-start gap-2.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                <span>⚠️</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {/* <OAuthButtons /> */}

            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-slate-200 flex-1" />
              <span className="text-slate-400 text-xs font-semibold">অথবা</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <form action={registerUser} className="space-y-5">
              <div>
                <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="মোঃ আব্দুল করিম"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  ইমেইল
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    পাসওয়ার্ড
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    আবার লিখুন
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                </div>
              </div>

              <SubmitButton pendingText="তৈরি হচ্ছে...">
                অ্যাকাউন্ট তৈরি করুন
              </SubmitButton>
            </form>

            <p className="text-center text-slate-500 text-sm mt-7">
              ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/login"
                className="text-teal-600 font-bold hover:underline"
              >
                লগ ইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
