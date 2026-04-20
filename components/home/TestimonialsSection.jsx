// components/home/TestimonialsSection.js
"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "মোঃ শাহিদুল ইসলাম",
    role: "ব্যবসায়ী",
    location: "ঢাকা",
    quote:
      "প্রতিটি টাকার হিসাব পাচ্ছি। donation করার পর থেকে নিয়মিত আপডেট আসছে — কোথায় গেল, কীভাবে ব্যবহার হলো। এই স্বচ্ছতাই আমাকে বারবার donate করতে অনুপ্রাণিত করে।",
    amount: "৳৫০,০০০+",
    times: "১২ বার",
    rating: 5,
    gradient: "from-teal-400 to-teal-600",
    initial: "শ",
  },
  {
    name: "ডাঃ নাফিসা করিম",
    role: "চিকিৎসক",
    location: "চট্টগ্রাম",
    quote:
      "পেশাদার চিকিৎসক হিসেবে কেস ভেরিফিকেশন প্রক্রিয়া নিজে দেখেছি। সত্যিই যত্নশীলভাবে প্রতিটি কেস যাচাই করা হয়। এই platform কে আমি বিশ্বাস করি এবং সবাইকে recommend করি।",
    amount: "৳৩০,০০০+",
    times: "৮ বার",
    rating: 5,
    gradient: "from-blue-400 to-blue-600",
    initial: "ন",
  },
  {
    name: "আয়েশা সিদ্দিকা",
    role: "গৃহিণী",
    location: "রাজশাহী",
    quote:
      "আমি ছোট ছোট amount দিই, কিন্তু প্রতিবার রিপোর্ট আসে — কোথায় গেল সেই টাকা। মনে হয় আমিও সত্যিকারের কাজের অংশ। এই অনুভূতিটা অনেক মূল্যবান।",
    amount: "৳৮,০০০+",
    times: "১৮ বার",
    rating: 5,
    gradient: "from-purple-400 to-purple-600",
    initial: "আ",
  },
  {
    name: "ইঞ্জিনিয়ার তানভীর আহমেদ",
    role: "সফটওয়্যার ইঞ্জিনিয়ার",
    location: "সিলেট (প্রবাসী)",
    quote:
      "বিদেশ থেকেও card দিয়ে সহজে donate করা যায়। সবচেয়ে ভালো লাগে যে সব কিছু public — কোনো লুকোচুরি নেই। আমার পরিবারকেও এই platform এ যুক্ত করেছি।",
    amount: "৳৮০,০০০+",
    times: "২০ বার",
    rating: 5,
    gradient: "from-amber-400 to-orange-500",
    initial: "ত",
  },
  {
    name: "রাহেলা বেগম",
    role: "স্কুল শিক্ষিকা",
    location: "ময়মনসিংহ",
    quote:
      "আমার ছাত্রছাত্রীদের নিয়ে একবার fundraise করেছিলাম এই platform এ। সহজ প্রক্রিয়া, দ্রুত সাড়া। শিক্ষার্থীরাও শিখেছে কিভাবে মানুষের পাশে দাঁড়াতে হয়।",
    amount: "৳১৫,০০০+",
    times: "৬ বার",
    rating: 5,
    gradient: "from-green-400 to-emerald-600",
    initial: "র",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Show 3 cards on desktop, 1 on mobile
  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Donor অভিজ্ঞতা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            তারা কী <span className="text-teal-600">বলছেন?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            যারা আমাদের সাথে এই যাত্রায় আছেন — তাদের অকপট অভিজ্ঞতা
          </p>
        </div>

        {/* Summary bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          {[
            { num: "৩,৮৯০+", label: "মোট Donor" },
            { num: "৪.৯/৫", label: "গড় রেটিং" },
            { num: "৯৮%", label: "সন্তুষ্ট Donor" },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="text-center bg-slate-50 border border-slate-200 rounded-2xl py-4 px-3"
            >
              <p className="text-xl font-bold text-slate-800">{num}</p>
              <p className="text-slate-500 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Desktop — 3 cards visible */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {getVisible().map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 0;
            return (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
                  isCenter
                    ? "border-teal-200 shadow-lg shadow-teal-100 scale-[1.02]"
                    : "border-slate-100 shadow-sm opacity-80"
                }`}
              >
                {/* Quote mark */}
                <div className="text-5xl font-serif text-teal-100 leading-none mb-2 select-none">
                  &ldquo;
                </div>

                <StarRating count={t.rating} />

                <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-5 flex-1">
                  {t.quote}
                </p>

                {/* Donor stats */}
                <div className="flex gap-3 mb-5">
                  <span className="bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                    {t.amount} দিয়েছেন
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {t.times} donate
                  </span>
                </div>

                {/* Person */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {t.role} · {t.location}
                    </p>
                  </div>
                  {isCenter && (
                    <div className="ml-auto">
                      <span className="bg-green-50 border border-green-100 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                        ✓ যাচাইকৃত
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile — single card */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-2xl p-6 border border-teal-200 shadow-lg shadow-teal-100">
            <div className="text-5xl font-serif text-teal-100 leading-none mb-2 select-none">
              &ldquo;
            </div>
            <StarRating count={testimonials[current].rating} />
            <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-5">
              {testimonials[current].quote}
            </p>
            <div className="flex gap-3 mb-5">
              <span className="bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                {testimonials[current].amount} দিয়েছেন
              </span>
              <span className="bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full">
                {testimonials[current].times} donate
              </span>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}
              >
                {testimonials[current].initial}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">
                  {testimonials[current].name}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {testimonials[current].role} ·{" "}
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-teal-400 hover:bg-teal-50 flex items-center justify-center transition-all duration-200 group"
          >
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-teal-600"
                    : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-teal-400 hover:bg-teal-50 flex items-center justify-center transition-all duration-200 group"
          >
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Bottom trust note */}
        <div className="mt-14 text-center bg-slate-50 border border-slate-200 rounded-2xl py-6 px-8">
          <p className="text-slate-500 text-sm">
            সকল testimonial{" "}
            <span className="font-bold text-slate-700">বাস্তব Donor</span> থেকে
            সংগ্রহ করা।{" "}
            <a href="#" className="text-teal-600 font-semibold hover:underline">
              Google Review দেখুন →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
