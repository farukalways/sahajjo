export default function HowItWorks() {
  const steps = [
    {
      number: "০১",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "কেস যাচাই",
      desc: "প্রতিটি আবেদন সরেজমিন যাচাই করা হয়। ডাক্তারি রিপোর্ট, NID এবং পারিবারিক অবস্থা নিশ্চিত হওয়ার পর কেস অনুমোদন দেওয়া হয়।",
      from: "from-teal-500",
      to: "to-teal-600",
      border: "border-teal-100",
      bg: "bg-teal-50",
      text: "text-teal-600",
    },
    {
      number: "০২",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "ওয়েবসাইটে প্রকাশ",
      desc: "যাচাইকৃত কেস সম্পূর্ণ তথ্যসহ প্রকাশ করা হয় — ছবি, মেডিকেল রিপোর্ট এবং পরিবারের বিস্তারিত সহ।",
      from: "from-blue-500",
      to: "to-blue-600",
      border: "border-blue-100",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      number: "০৩",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "আপনি Donate করুন",
      desc: "bKash, Nagad, কার্ড বা ব্যাংক ট্রান্সফারে নিরাপদে donate করুন। ৳১০০ থেকেই শুরু করা যায়।",
      from: "from-amber-500",
      to: "to-orange-500",
      border: "border-amber-100",
      bg: "bg-amber-50",
      text: "text-amber-600",
    },
    {
      number: "০৪",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "সরাসরি পৌঁছে যায়",
      desc: "সংগৃহীত টাকা সরাসরি হাসপাতাল বা সুবিধাভোগীর কাছে পৌঁছানো হয়। প্রতিটি পদক্ষেপের আপডেট ও প্রমাণ দেওয়া হয়।",
      from: "from-green-500",
      to: "to-emerald-600",
      border: "border-green-100",
      bg: "bg-green-50",
      text: "text-green-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            কিভাবে কাজ করে
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            সহজ, স্বচ্ছ এবং <span className="text-teal-600">বিশ্বস্ত</span>{" "}
            প্রক্রিয়া
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            আমাদের ৪ ধাপের প্রক্রিয়া নিশ্চিত করে যে আপনার সাহায্য সত্যিকারের
            অসহায় মানুষের কাছে পৌঁছায়
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-teal-200 via-blue-200 via-amber-200 to-green-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 bg-white border ${step.border} rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.from} ${step.to} flex items-center justify-center text-white mb-5 shadow-md`}
              >
                {step.icon}
              </div>

              {/* Step badge */}
              <span
                className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-md ${step.bg} ${step.text} mb-3`}
              >
                ধাপ {step.number}
              </span>

              <h3 className="text-base font-bold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Payment methods bar */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-slate-700 mb-0.5">
              গ্রহণযোগ্য পেমেন্ট পদ্ধতি
            </p>
            <p className="text-slate-400 text-sm">
              সকল পেমেন্ট SSL এনক্রিপ্টেড ও সম্পূর্ণ নিরাপদ
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {["bKash", "Nagad", "Rocket", "Visa / MC", "Bank Transfer"].map(
              (m) => (
                <span
                  key={m}
                  className="bg-white border border-slate-200 text-slate-600 text-sm font-semibold px-4 py-2 rounded-xl shadow-sm"
                >
                  {m}
                </span>
              ),
            )}
          </div>

          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-xl flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            SSL Secured
          </div>
        </div>
      </div>
    </section>
  );
}
