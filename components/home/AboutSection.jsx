const achievements = [
  {
    num: "১,২৪৭+",
    label: "সাহায্যপ্রাপ্ত মানুষ",
    icon: "❤️",
    color: "bg-red-50 border-red-100 text-red-600",
  },
  {
    num: "৫+ বছর",
    label: "অভিজ্ঞতা",
    icon: "⏳",
    color: "bg-amber-50 border-amber-100 text-amber-600",
  },
  {
    num: "৯৮%",
    label: "সাফল্যের হার",
    icon: "🏆",
    color: "bg-green-50 border-green-100 text-green-600",
  },
  {
    num: "৬৪ জেলা",
    label: "সারা বাংলাদেশে",
    icon: "📍",
    color: "bg-blue-50 border-blue-100 text-blue-600",
  },
];

const values = [
  {
    icon: "🤝",
    title: "বিশ্বাসযোগ্যতা",
    desc: "প্রতিটি কেস নিজে যাচাই করি। কোনো compromise নেই।",
  },
  {
    icon: "👁️",
    title: "স্বচ্ছতা",
    desc: "প্রতিটি টাকার হিসাব সবার সামনে। লুকানোর কিছু নেই।",
  },
  {
    icon: "⚡",
    title: "দ্রুততা",
    desc: "জরুরি কেসে ২৪ ঘণ্টার মধ্যে সাহায্য পৌঁছে দেওয়ার চেষ্টা করি।",
  },
  {
    icon: "💛",
    title: "মানবিকতা",
    desc: "সংখ্যার পেছনে মানুষ আছে — এটা কখনো ভুলি না।",
  },
];

const timeline = [
  {
    year: "২০১৯",
    title: "প্রথম সাহায্য",
    desc: "রাস্তায় অসুস্থ একজন মানুষকে দেখে সাহায্য করতে গিয়ে বুঝলাম — অনেক মানুষ শুধু সাহায্যের অভাবে ঝরে যাচ্ছেন।",
  },
  {
    year: "২০২০",
    title: "যাত্রা শুরু",
    desc: "ছোট পরিসরে শুরু করলাম। Facebook এ পোস্ট দিয়ে প্রথম ১২ জনের জন্য ফান্ড সংগ্রহ করলাম।",
  },
  {
    year: "২০২২",
    title: "ওয়েবসাইট চালু",
    desc: "স্বচ্ছতার জন্য ওয়েবসাইট তৈরি করলাম যেখানে প্রতিটি donation publicly trackable।",
  },
  {
    year: "২০২৪",
    title: "এখন",
    desc: "১,২৪৭+ মানুষকে সাহায্য করা হয়েছে। কিন্তু থামার সময় নেই — আরও অনেক মানুষ অপেক্ষায়।",
    current: true,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            আমাদের সম্পর্কে
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            একজন মানুষের গল্প থেকে{" "}
            <span className="text-teal-600">হাজারের পরিবর্তন</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            মানুষ platform এর চেয়ে মানুষকে বেশি বিশ্বাস করে। তাই আমরা আড়ালে
            থাকি না।
          </p>
        </div>

        {/* Main content — photo + story */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* ===== Left — Photo + achievements ===== */}
          <div>
            {/* Photo card */}
            <div className="relative mb-8">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-teal-100 via-teal-50 to-slate-100 flex items-center justify-center overflow-hidden relative">
                {/* Replace below div with actual <Image> component */}
                {/*
                  <Image
                    src="/images/founder.jpg"
                    alt="মিজানুর রহমান"
                    fill
                    className="object-cover"
                  />
                */}
                <div className="text-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-6xl font-bold mx-auto mb-4 shadow-xl">
                    মি
                  </div>
                  <p className="text-slate-400 text-sm">আপনার ছবি এখানে বসান</p>
                </div>

                {/* Floating badge — top right */}
                <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
                  <p className="font-bold text-slate-800 text-sm leading-tight">
                    মিজানুর রহমান
                  </p>
                  <p className="text-teal-600 text-xs mt-0.5">
                    প্রতিষ্ঠাতা, সাহায্য
                  </p>
                </div>

                {/* Floating badge — bottom left */}
                <div className="absolute bottom-5 left-5 bg-amber-400 rounded-2xl shadow-lg px-4 py-3">
                  <p className="font-bold text-white text-lg leading-none">
                    ৫+
                  </p>
                  <p className="text-white/80 text-xs mt-0.5">বছরের অভিজ্ঞতা</p>
                </div>
              </div>
            </div>

            {/* Achievement grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map(({ num, label, icon, color }) => (
                <div
                  key={label}
                  className={`border rounded-2xl px-5 py-4 flex items-center gap-3 ${color.split(" ").slice(0, 2).join(" ")} border-${color.split(" ")[1]}`}
                >
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p
                      className={`font-bold text-lg leading-tight ${color.split(" ")[2]}`}
                    >
                      {num}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Right — Story + values ===== */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-snug">
              আমি মিজানুর রহমান —{" "}
              <span className="text-teal-600">
                একজন রাইডার যে মানুষের পাশে দাঁড়াতে চেয়েছিল
              </span>
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                ঢাকায় ডেলিভারি রাইডার হিসেবে কাজ করার সময় রাস্তায় অসুস্থ একজন
                মানুষকে সাহায্য করতে গিয়ে বুঝলাম — অনেক মানুষ শুধু সাহায্যের
                অভাবে ঝরে যাচ্ছেন।
              </p>
              <p>
                টাকা নেই, পরিচয় নেই, কেউ জানে না — এই তিনটি কারণে প্রতিদিন অনেক
                মানুষ বিনা চিকিৎসায় কষ্ট পাচ্ছেন। আমি ভাবলাম, যদি একটি বিশ্বস্ত
                মাধ্যম থাকত যেখানে মানুষ নিশ্চিন্তে সাহায্য করতে পারত?
              </p>
              <p>
                ২০২০ সালে ছোট পরিসরে শুরু করেছিলাম। আজ ১,২৪৭+ মানুষকে সাহায্য
                করতে পেরেছি। প্রতিটি কেস আমি নিজে যাচাই করি, প্রতিটি টাকার হিসাব
                রাখি।
              </p>
              <p className="font-semibold text-slate-700">
                আমার বিশ্বাস — মানুষ মানুষের জন্য। শুধু দরকার একটি বিশ্বস্ত
                মাধ্যম।
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-teal-300 hover:bg-teal-50/50 transition-all duration-200"
                >
                  <span className="text-2xl mb-2 block">{icon}</span>
                  <p className="font-bold text-slate-800 text-sm mb-1">
                    {title}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact founder */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook এ দেখুন
              </a>
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                সরাসরি কথা বলুন
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
          <h3 className="font-bold text-slate-800 text-xl mb-10 text-center">
            আমাদের যাত্রার গল্প
          </h3>

          <div className="relative">
            {/* Horizontal line — desktop */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map(({ year, title, desc, current }, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center md:items-center text-center"
                >
                  {/* Dot */}
                  <div
                    className={`w-10 h-10 rounded-full border-4 flex items-center justify-center mb-4 z-10 flex-shrink-0 ${
                      current
                        ? "bg-amber-400 border-amber-300 shadow-lg shadow-amber-200"
                        : "bg-teal-500 border-teal-300"
                    }`}
                  >
                    {current ? (
                      <span className="text-white text-sm">🔥</span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <span
                    className={`text-sm font-bold mb-1 ${current ? "text-amber-500" : "text-teal-600"}`}
                  >
                    {year}
                  </span>
                  <p className="font-bold text-slate-800 text-sm mb-2">
                    {title}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {desc}
                  </p>

                  {current && (
                    <span className="mt-3 inline-block bg-amber-100 text-amber-600 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full">
                      চলমান
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
