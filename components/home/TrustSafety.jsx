// components/home/TrustSafety.js

const verificationSteps = [
  {
    step: "০১",
    title: "আবেদন গ্রহণ",
    desc: "অনলাইন ফর্মের মাধ্যমে আবেদন জমা নেওয়া হয়। প্রাথমিক তথ্য যাচাই করা হয়।",
    icon: (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    done: true,
  },
  {
    step: "০২",
    title: "প্রাথমিক স্ক্রিনিং",
    desc: "আবেদনকারীর সাথে ফোনে যোগাযোগ করা হয়। মূল তথ্য যাচাই করা হয়।",
    icon: (
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    done: true,
  },
  {
    step: "০৩",
    title: "সরেজমিন যাচাই",
    desc: "আমাদের টিম সরাসরি গিয়ে রোগী ও পরিবারের অবস্থা দেখে আসে।",
    icon: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    done: true,
  },
  {
    step: "০৪",
    title: "ডকুমেন্ট পর্যালোচনা",
    desc: "NID, মেডিকেল রিপোর্ট, প্রেসক্রিপশন, হাসপাতালের কাগজ সব যাচাই করা হয়।",
    icon: (
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    done: true,
  },
  {
    step: "০৫",
    title: "চূড়ান্ত অনুমোদন",
    desc: "সব যাচাই শেষে কেস অনুমোদন দেওয়া হয় এবং website এ publish করা হয়।",
    icon: (
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    done: false,
  },
];

const fraudMethods = [
  {
    icon: "🔍",
    title: "সরেজমিন যাচাই",
    desc: "প্রতিটি কেসে আমাদের টিম সরাসরি গিয়ে রোগী ও পরিবারের অবস্থা দেখে আসে। শুধু কাগজ দেখেই সিদ্ধান্ত নেওয়া হয় না।",
  },
  {
    icon: "🏥",
    title: "হাসপাতাল যোগাযোগ",
    desc: "সংশ্লিষ্ট হাসপাতালের ডাক্তার ও কর্তৃপক্ষের সাথে সরাসরি যোগাযোগ করে রোগীর অবস্থা নিশ্চিত করা হয়।",
  },
  {
    icon: "📵",
    title: "তাৎক্ষণিক সাসপেনশন",
    desc: "যেকোনো সন্দেহজনক কেস বা অভিযোগ পাওয়া মাত্র সাসপেন্ড করা হয় এবং তদন্ত শুরু হয়।",
  },
  {
    icon: "🔄",
    title: "Refund গ্যারান্টি",
    desc: "যদি কোনো কেস ভুয়া প্রমাণিত হয়, তাহলে সকল donor কে সম্পূর্ণ টাকা ফেরত দেওয়া হয়।",
  },
];

const paymentSecurity = [
  { label: "SSL 256-bit এনক্রিপশন", icon: "🔒" },
  { label: "PCI DSS কমপ্লায়েন্ট", icon: "✅" },
  { label: "কোনো কার্ড ডেটা সংরক্ষণ নেই", icon: "🚫" },
  { label: "২৪/৭ ফ্রড মনিটরিং", icon: "👁️" },
  { label: "Two-factor authentication", icon: "🔑" },
  { label: "Encrypted data transfer", icon: "🛡️" },
];

const paymentMethods = [
  "bKash",
  "Nagad",
  "Rocket",
  "Visa",
  "Mastercard",
  "Bank Transfer",
];

export default function TrustSafety() {
  return (
    <section id="trust" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            বিশ্বাস ও নিরাপত্তা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            আপনার টাকা <span className="text-teal-600">সঠিক মানুষের কাছে</span>{" "}
            যাবেই
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            আমরা বিশ্বাস করি দাতব্য কাজে স্বচ্ছতা সবচেয়ে বড় গুণ। তাই আমাদের
            প্রতিটি পদক্ষেপ পাবলিক এবং যাচাইযোগ্য।
          </p>
        </div>

        {/* Top grid — verification steps + fraud prevention */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {/* ===== Verification steps ===== */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-bold text-slate-800 text-xl mb-7 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              কেস অনুমোদনের প্রক্রিয়া
            </h3>

            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-[1.1rem] top-6 bottom-6 w-px bg-gradient-to-b from-teal-400 via-teal-300 to-slate-200" />

              <div className="space-y-5">
                {verificationSteps.map((s, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {/* Step dot */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2 ${
                        s.done
                          ? "bg-teal-500 border-teal-500 text-white"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      {s.done ? (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        s.icon
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 pb-5 ${i === verificationSteps.length - 1 ? "pb-0" : ""}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">
                          ধাপ {s.step}
                        </span>
                        {i === verificationSteps.length - 1 && (
                          <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-200">
                            চূড়ান্ত
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-slate-800 text-sm mb-0.5">
                        {s.title}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time indicator */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-500 text-xs">গড় যাচাই সময়</span>
              <span className="font-bold text-teal-600 text-sm">
                ৪৮–৭২ ঘণ্টা
              </span>
            </div>
          </div>

          {/* ===== Fraud prevention ===== */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-xl mb-2">
              ফ্রড প্রতিরোধে আমরা কী করি?
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              আমাদের মাল্টি-লেয়ার যাচাই প্রক্রিয়া নিশ্চিত করে যে কোনো ভুয়া
              কেস platform এ আসতে পারবে না।
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {fraudMethods.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md rounded-2xl p-5 transition-all duration-200"
                >
                  <span className="text-3xl mb-3 block">{icon}</span>
                  <h4 className="font-bold text-slate-800 text-sm mb-2">
                    {title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Report fraud CTA */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-start gap-4 mt-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 text-xl">
                🚨
              </div>
              <div className="flex-1">
                <p className="font-bold text-red-700 text-sm mb-1">
                  সন্দেহজনক কেস রিপোর্ট করুন
                </p>
                <p className="text-red-600/70 text-xs leading-relaxed mb-3">
                  কোনো কেস নিয়ে সন্দেহ হলে আমাদের জানান। আমরা ২৪ ঘণ্টার মধ্যে
                  তদন্ত করব।
                </p>
                <a
                  href="mailto:report@sahayta.com.bd"
                  className="inline-flex items-center gap-1.5 text-red-600 font-bold text-xs hover:underline"
                >
                  report@sahayta.com.bd
                  <svg
                    className="w-3.5 h-3.5"
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
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — payment security */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-xl">
                  🔒
                </div>
                <h3 className="font-bold text-white text-xl">
                  নিরাপদ পেমেন্ট গ্যারান্টি
                </h3>
              </div>
              <p className="text-teal-200/80 text-sm leading-relaxed mb-6">
                আপনার প্রতিটি payment সর্বোচ্চ নিরাপত্তায় প্রক্রিয়া করা হয়।
                আমরা কোনো আর্থিক তথ্য সংরক্ষণ করি না।
              </p>

              <div className="grid grid-cols-2 gap-3">
                {paymentSecurity.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-base flex-shrink-0">{icon}</span>
                    <span className="text-teal-100 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-teal-200/70 text-sm font-semibold mb-4 uppercase tracking-widest ">
                গ্রহণযোগ্য পেমেন্ট পদ্ধতি
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {paymentMethods.map((m) => (
                  <span
                    key={m}
                    className="bg-white/15 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-xl"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* SSL badge */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-400/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    SSL Secured & Encrypted
                  </p>
                  <p className="text-teal-200/70 text-xs mt-0.5">
                    আপনার তথ্য সম্পূর্ণ এনক্রিপ্টেড এবং সুরক্ষিত
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center gap-1.5 bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
