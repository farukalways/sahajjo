// components/home/ActiveCases.js
"use client";
import { useState } from "react";

const cases = [
  {
    id: 1,
    name: "রহিমা বেগম",
    age: 45,
    location: "নোয়াখালী",
    tag: "কিডনি রোগ",
    tagColor: "bg-red-100 text-red-600",
    problem: "কিডনি বিকল — জরুরি ডায়ালাইসিস প্রয়োজন",
    story:
      "তিন সন্তানের মা রহিমা বেগম দুই বছর ধরে কিডনি রোগে ভুগছেন। পরিবারের একমাত্র উপার্জনকারী তার স্বামী দিনমজুর।",
    raised: 68000,
    target: 100000,
    donors: 134,
    days: 12,
    urgent: true,
    gradient: "from-orange-400 to-red-500",
    initial: "র",
  },
  {
    id: 2,
    name: "করিম সাহেব",
    age: 62,
    location: "সিলেট",
    tag: "হৃদরোগ",
    tagColor: "bg-pink-100 text-pink-600",
    problem: "হার্ট অপারেশন — ৩ মাসের মধ্যে না হলে বিপদ",
    story:
      "অবসরপ্রাপ্ত সরকারি কর্মকর্তা করিম সাহেবের হার্টে তিনটি ব্লকেজ। পেনশনের টাকায় এই বিশাল খরচ সম্ভব নয়।",
    raised: 125000,
    target: 250000,
    donors: 287,
    days: 8,
    urgent: true,
    gradient: "from-pink-400 to-rose-500",
    initial: "ক",
  },
  {
    id: 3,
    name: "মালেকা বিবি",
    age: 38,
    location: "রাজশাহী",
    tag: "ক্যান্সার",
    tagColor: "bg-purple-100 text-purple-600",
    problem: "ব্রেস্ট ক্যান্সার — কেমোথেরাপির খরচ",
    story:
      "দুই মেয়ের মা মালেকা ব্রেস্ট ক্যান্সারে আক্রান্ত। ইতিমধ্যে দুটি কেমো হয়েছে, আরও ৬টি বাকি।",
    raised: 45000,
    target: 180000,
    donors: 89,
    days: 25,
    urgent: false,
    gradient: "from-purple-400 to-indigo-500",
    initial: "ম",
  },
  {
    id: 4,
    name: "আল আমিন",
    age: 9,
    location: "ময়মনসিংহ",
    tag: "শিশু রোগ",
    tagColor: "bg-blue-100 text-blue-600",
    problem: "জন্মগত হৃদরোগ — শিশু বিশেষজ্ঞ অপারেশন",
    story:
      "ছোট্ট আল আমিন জন্ম থেকেই হৃদরোগে আক্রান্ত। গরিব কৃষক বাবার পক্ষে এই খরচ বহন সম্ভব নয়।",
    raised: 92000,
    target: 150000,
    donors: 412,
    days: 18,
    urgent: false,
    gradient: "from-blue-400 to-cyan-500",
    initial: "আ",
  },
  {
    id: 5,
    name: "জামেলা খাতুন",
    age: 55,
    location: "বরিশাল",
    tag: "লিভার রোগ",
    tagColor: "bg-yellow-100 text-yellow-700",
    problem: "লিভার সিরোসিস — দীর্ঘমেয়াদি চিকিৎসা",
    story:
      "বিধবা জামেলা খাতুন একা থাকেন। লিভার সিরোসিসে আক্রান্ত হয়ে কাজ করার ক্ষমতা হারিয়েছেন।",
    raised: 28000,
    target: 80000,
    donors: 56,
    days: 30,
    urgent: false,
    gradient: "from-yellow-400 to-amber-500",
    initial: "জ",
  },
  {
    id: 6,
    name: "রফিক মিয়া",
    age: 28,
    location: "চট্টগ্রাম",
    tag: "দুর্ঘটনা",
    tagColor: "bg-green-100 text-green-600",
    problem: "দুর্ঘটনায় মেরুদণ্ড আঘাত — পুনর্বাসন",
    story:
      "কারখানায় দুর্ঘটনায় রফিকের মেরুদণ্ড আঘাতপ্রাপ্ত হয়। নবজাতক শিশু ও স্ত্রীকে নিয়ে পথে বসার অবস্থা।",
    raised: 78000,
    target: 120000,
    donors: 198,
    days: 20,
    urgent: false,
    gradient: "from-green-400 to-teal-500",
    initial: "র",
  },
];

const filters = [
  "সব",
  "জরুরি",
  "কিডনি রোগ",
  "হৃদরোগ",
  "ক্যান্সার",
  "শিশু রোগ",
  "লিভার রোগ",
  "দুর্ঘটনা",
];

export default function ActiveCases() {
  const [activeFilter, setActiveFilter] = useState("সব");

  const filtered =
    activeFilter === "সব"
      ? cases
      : activeFilter === "জরুরি"
        ? cases.filter((c) => c.urgent)
        : cases.filter((c) => c.tag === activeFilter);

  return (
    <section id="cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              সক্রিয় কেস
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              এখন <span className="text-teal-600">সাহায্যের অপেক্ষায়</span>{" "}
              আছেন
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            সকল কেস দেখুন
            <svg
              className="w-4 h-4"
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
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-teal-600 text-white shadow-md shadow-teal-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-teal-600"
              }`}
            >
              {f === "জরুরি" ? "🚨 " : ""}
              {f}
            </button>
          ))}
        </div>

        {/* Cases grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-semibold">এই ক্যাটাগরিতে কোনো কেস নেই</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => {
              const pct = Math.min(
                Math.round((c.raised / c.target) * 100),
                100,
              );
              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Card top / image area */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${c.gradient} flex items-end p-4`}
                  >
                    {/* Urgent badge */}
                    {c.urgent && (
                      <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        জরুরি
                      </span>
                    )}
                    {/* Days left */}
                    <span className="absolute top-4 left-4 bg-black/25 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      ⏳ {c.days} দিন বাকি
                    </span>
                    {/* Tag */}
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full bg-white/90 ${c.tagColor.split(" ")[1]}`}
                    >
                      {c.tag}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Person info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {c.initial}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm leading-tight">
                          {c.name}, {c.age}
                        </p>
                        <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {c.location}
                        </p>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                      {c.story}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-slate-800 text-sm">
                          ৳{c.raised.toLocaleString("bn-BD")}
                        </span>
                        <span className="text-slate-400 text-xs">
                          লক্ষ্য ৳{c.target.toLocaleString("bn-BD")}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-1.5">
                        <span className="text-teal-600 text-xs font-semibold">
                          {pct}% সংগ্রহ
                        </span>
                        <span className="text-slate-400 text-xs">
                          {c.donors} জন Donor
                        </span>
                      </div>
                    </div>

                    {/* Donate button */}
                    <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-teal-200 active:scale-95">
                      ❤️ সাহায্য করুন
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            আরও <span className="font-bold text-slate-700">৩২টি</span> কেস
            অপেক্ষায় আছে
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 font-bold px-8 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-200"
          >
            সকল কেস দেখুন
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}
