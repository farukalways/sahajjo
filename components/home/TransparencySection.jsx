const recentDonations = [
  {
    name: "মোঃ আব্দুল করিম",
    amount: 2000,
    case: "রহিমা বেগম",
    time: "২ ঘণ্টা আগে",
    anon: false,
  },
  {
    name: "Anonymous",
    amount: 5000,
    case: "করিম সাহেব",
    time: "৩ ঘণ্টা আগে",
    anon: true,
  },
  {
    name: "সুমাইয়া আক্তার",
    amount: 1000,
    case: "আল আমিন",
    time: "৫ ঘণ্টা আগে",
    anon: false,
  },
  {
    name: "মোঃ রফিকুল ইসলাম",
    amount: 10000,
    case: "মালেকা বিবি",
    time: "৮ ঘণ্টা আগে",
    anon: false,
  },
  {
    name: "Anonymous",
    amount: 500,
    case: "জামেলা খাতুন",
    time: "১ দিন আগে",
    anon: true,
  },
];

const proofItems = [
  {
    type: "📸",
    label: "ছবি",
    text: "রহিমা বেগমের হাসপাতাল রিপোর্ট",
    date: "আজ",
  },
  {
    type: "📹",
    label: "ভিডিও",
    text: "করিম সাহেবের পরিবারের বার্তা",
    date: "গতকাল",
  },
  {
    type: "📄",
    label: "রিপোর্ট",
    text: "মার্চ মাসের ব্যয় বিবরণী",
    date: "৩ দিন আগে",
  },
  {
    type: "✅",
    label: "আপডেট",
    text: "আল আমিনের অপারেশন সফল হয়েছে",
    date: "১ সপ্তাহ আগে",
  },
];

const fundBreakdown = [
  { label: "সুবিধাভোগীকে প্রদান", pct: 88, color: "bg-teal-500" },
  { label: "প্ল্যাটফর্ম পরিচালনা", pct: 7, color: "bg-blue-400" },
  { label: "যাচাই ও তদারকি", pct: 5, color: "bg-amber-400" },
];

const trustBadges = [
  { icon: "🔒", title: "SSL এনক্রিপ্টেড", desc: "সকল ট্রানজেকশন সুরক্ষিত" },
  { icon: "📋", title: "নিবন্ধিত সংস্থা", desc: "সরকারিভাবে নিবন্ধিত" },
  { icon: "🏦", title: "ব্যাংক ভেরিফাইড", desc: "ব্যাংক একাউন্ট যাচাইকৃত" },
  { icon: "👁️", title: "পাবলিক অডিট", desc: "সবার দেখার সুযোগ আছে" },
];

export default function TransparencySection() {
  return (
    <section id="transparency" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            স্বচ্ছতা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            আমাদের কাছে <span className="text-teal-600">কোনো লুকোচুরি নেই</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            প্রতিটি টাকার হিসাব সবার সামনে। কে দিল, কোথায় গেল — সব কিছু
            পাবলিকলি ট্র্যাক করা যায়।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ===== LEFT ===== */}
          <div className="space-y-8">
            {/* Live donation feed */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <h3 className="font-bold text-slate-800 text-lg">
                  সর্বশেষ Donation (লাইভ)
                </h3>
              </div>

              <div className="space-y-3">
                {recentDonations.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-slate-50 border border-slate-100 hover:border-teal-200 rounded-xl p-4 transition-colors duration-200"
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm ${
                        d.anon
                          ? "bg-slate-300"
                          : "bg-gradient-to-br from-teal-400 to-teal-600"
                      }`}
                    >
                      {d.anon ? "?" : d.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 text-sm truncate">
                        {d.name}
                      </p>
                      <p className="text-slate-400 text-xs truncate">
                        {d.case}-এর জন্য donate করেছেন
                      </p>
                    </div>

                    {/* Amount + time */}
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-teal-600 text-sm">
                        ৳{d.amount.toLocaleString()}
                      </p>
                      <p className="text-slate-400 text-xs">{d.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mt-4 hover:underline"
              >
                সম্পূর্ণ ট্রানজেকশন লিস্ট দেখুন
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

            {/* Fund breakdown */}
            <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6">
              <h4 className="font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span>📊</span> টাকা কোথায় যায়?
              </h4>
              <div className="space-y-4">
                {fundBreakdown.map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-bold text-slate-800">{pct}%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * বার্ষিক অডিট রিপোর্ট ডাউনলোড করুন
              </p>
            </div>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-5">
                কেন আমাদের বিশ্বাস করবেন?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md rounded-2xl p-5 flex items-start gap-3 transition-all duration-200"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        {title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof & updates */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                প্রমাণ ও আপডেট
              </h4>

              <div className="space-y-3">
                {proofItems.map(({ type, label, text, date }) => (
                  <a
                    key={text}
                    href="#"
                    className="flex items-center gap-3 bg-white border border-slate-100 hover:border-teal-300 rounded-xl p-3.5 transition-colors duration-200 group"
                  >
                    <span className="text-xl flex-shrink-0">{type}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded mr-2">
                        {label}
                      </span>
                      <span className="text-sm text-slate-700">{text}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-slate-400">{date}</span>
                      <svg
                        className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Public tracking CTA */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">🔍 নিজেই ট্র্যাক করুন</h4>
              <p className="text-teal-100 text-sm mb-4 leading-relaxed">
                আপনার Donation ID দিয়ে যেকোনো সময় দেখতে পারবেন আপনার টাকা
                কোথায় গেছে।
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Donation ID লিখুন..."
                  className="flex-1 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 text-white placeholder-teal-200 text-sm focus:outline-none focus:border-white/60 transition-colors"
                />
                <button className="bg-white text-teal-700 font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors flex-shrink-0">
                  খুঁজুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
