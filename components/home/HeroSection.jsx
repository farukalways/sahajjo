import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-slate-800 pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-teal-400/15 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <div
            className={
              "opacity-0 translate-y-8 animate-fadeUp [animation-delay:500ms]"
            }
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-white/90 text-sm font-medium">
                ১,২৪৭ জন মানুষকে সাহায্য করা হয়েছে
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.2] mb-6">
              আপনার ছোট সাহায্য{" "}
              <span className="text-amber-300 relative">
                বদলে দিতে পারে
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                >
                  <path
                    d="M0 6 Q75 0 150 5 Q225 10 300 4"
                    stroke="#FCD34D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              একটি জীবন
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-lg">
              প্রতিটি কেস যাচাই করা হয়, প্রতিটি টাকার হিসাব সবার সামনে থাকে।
              আপনার সাহায্য সরাসরি পৌঁছে যায় অসহায় মানুষের কাছে — কোনো
              লুকোচুরি নেই।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#cases"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Donate Now
              </Link>
              <Link
                href="#cases"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:border-white/50 transition-all duration-200 text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Cases
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: "🔒", text: "SSL সুরক্ষিত পেমেন্ট" },
                { icon: "✅", text: "১০০% যাচাইকৃত কেস" },
                { icon: "📊", text: "সম্পূর্ণ স্বচ্ছ হিসাব" },
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

          {/* ===== RIGHT CARD ===== */}
          <div
            className={
              "opacity-0 translate-y-8 animate-fadeUp [animation-delay:500ms]"
            }
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">
                  আজকের পরিসংখ্যান
                </h3>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  লাইভ
                </span>
              </div>

              {/* Featured case card */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    র
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">
                      রহিমা বেগম, ৪৫
                    </p>
                    <p className="text-white/60 text-xs">
                      কিডনি চিকিৎসা · নোয়াখালী
                    </p>
                  </div>
                  <span className="bg-green-400/20 text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-400/25 flex-shrink-0">
                    সক্রিয়
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/65 mb-1.5">
                    <span>সংগ্রহ: ৳৬৮,০০০</span>
                    <span>লক্ষ্য: ৳১,০০,০০০</span>
                  </div>
                  <div className="h-2 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-teal-300 rounded-full transition-all duration-1000"
                      style={{ width: "68%" }}
                    />
                  </div>
                  <p className="text-white/50 text-xs mt-1.5">
                    ৬৮% · আর মাত্র ৳৩২,০০০ প্রয়োজন
                  </p>
                </div>

                <button className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-2.5 rounded-xl transition-colors text-sm">
                  ❤️ এই কেসে সাহায্য করুন
                </button>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "১,২৪৭", label: "সাহায্যপ্রাপ্ত" },
                  { num: "৩,৮৯০", label: "Donor" },
                  { num: "৯৮%", label: "সাফল্য" },
                ].map(({ num, label }) => (
                  <div
                    key={label}
                    className="bg-white/10 border border-white/10 rounded-xl p-3 text-center"
                  >
                    <p className="text-white font-bold text-lg leading-none mb-1">
                      {num}
                    </p>
                    <p className="text-white/55 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              {/* Recent donors */}
              <div>
                <p className="text-white/55 text-xs mb-2.5">
                  সর্বশেষ donate করেছেন:
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["আ", "ক", "ম", "স", "র", "ন"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: `hsl(${i * 55 + 160}, 60%, 45%)` }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span className="text-white/60 text-xs ml-1">+৪১ জন আজ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 70H1440V35C1200 8 960 0 720 18C480 36 240 55 0 35V70Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
