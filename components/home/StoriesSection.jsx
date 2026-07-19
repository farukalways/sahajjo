// components/home/StoriesSection.js

const stories = [
  {
    name: "আবু রায়হান",
    age: 42,
    location: "কুমিল্লা",
    tag: "কিডনি রোগ",
    tagColor: "text-red-500 bg-red-50 border-red-100",
    before:
      "কিডনির সমস্যায় ঘরে শুয়ে থাকতেন, কাজ করার শক্তি ছিল না। পরিবার দিশেহারা হয়ে পড়েছিল।",
    after: "চিকিৎসার পর এখন সুস্থ। আবার কাজে ফিরেছেন, পরিবার নিয়ে ভালো আছেন।",
    raised: "৳৯৫,০০০",
    donors: 189,
    duration: "৩২ দিন",
    gradient: "from-teal-400 to-teal-600",
    initial: "আ",
  },
  {
    name: "সুমি আক্তার",
    age: 8,
    location: "গাজীপুর",
    tag: "শিশু হৃদরোগ",
    tagColor: "text-pink-500 bg-pink-50 border-pink-100",
    before:
      "জন্মগত হৃদরোগ নিয়ে জন্মেছিল। হাসতে পারত না, খেলতে পারত না। মায়ের চোখে সবসময় জল।",
    after:
      "সফল অপারেশনের পর এখন স্কুলে যায়। দৌড়ায়, হাসে — সম্পূর্ণ সুস্থ শিশু।",
    raised: "৳১,৪০,০০০",
    donors: 412,
    duration: "২৮ দিন",
    gradient: "from-pink-400 to-rose-500",
    initial: "স",
  },
  {
    name: "মকবুল হোসেন",
    age: 35,
    location: "নারায়ণগঞ্জ",
    tag: "দুর্ঘটনা",
    tagColor: "text-amber-600 bg-amber-50 border-amber-100",
    before:
      "কারখানার দুর্ঘটনায় হাত হারিয়েছিলেন। কাজ হারান, পরিবার চালানো অসম্ভব হয়ে পড়ে।",
    after:
      "প্রস্থেটিক হাত লাগানো হয়েছে। নতুন কাজে যোগ দিয়েছেন, আবার স্বনির্ভর।",
    raised: "৳৭৮,০০০",
    donors: 156,
    duration: "২১ দিন",
    gradient: "from-amber-400 to-orange-500",
    initial: "ম",
  },
];

export default function StoriesSection() {
  return (
    <section id="stories" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            সাফল্যের গল্প
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            যাদের জীবন <span className="text-teal-600">বদলে গেছে</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            আপনাদের সাহায্যে যাদের জীবনে আলো ফিরেছে — তাদের বাস্তব গল্প
          </p>
        </div>

        {/* Story cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Top gradient with avatar */}
              <div
                className={`relative h-40 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}
              >
                <div className="w-20 h-20 rounded-full bg-white/25 border-4 border-white/40 flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                  {s.initial}
                </div>
                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full border bg-white/90 ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Name */}
                <div className="mb-5">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-slate-400 text-sm flex items-center gap-1 mt-0.5">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {s.location} · বয়স {s.age}
                  </p>
                </div>

                {/* Before / After */}
                <div className="space-y-3 mb-6 flex-1">
                  <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-red-600 text-xs font-bold uppercase tracking-wide">
                        আগে
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {s.before}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      className="w-5 h-5 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  <div className="rounded-xl border border-green-100 bg-green-50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-green-600 text-xs font-bold uppercase tracking-wide">
                        এখন
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {s.after}
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <p className="font-bold text-teal-600 text-sm">
                      {s.raised}
                    </p>
                    <p className="text-slate-400 text-xs">সংগ্রহ</p>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <p className="font-bold text-slate-700 text-sm">
                      {s.donors}
                    </p>
                    <p className="text-slate-400 text-xs">Donor</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-700 text-sm">
                      {s.duration}
                    </p>
                    <p className="text-slate-400 text-xs">সময়</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className="bg-gradient-to-br from-slate-800 to-teal-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left — video embed placeholder */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-72 flex items-center justify-center bg-black/20">
              {/* Replace this div with actual YouTube iframe */}
              {/* 
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="সাহায্য ভিডিও"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-800/60 to-slate-900/60" />
              <div className="relative text-center px-8">
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mx-auto mb-4 hover:bg-white/30 hover:scale-110 transition-all duration-200 group">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-white font-bold text-lg mb-1">
                  আমাদের ভিডিও দেখুন
                </p>
                <p className="text-white/60 text-sm">YouTube এ সম্পূর্ণ গল্প</p>
              </div>
            </div>

            {/* Right — text content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block bg-white/10 text-teal-200 border border-white/15 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 w-fit">
                ভিডিও গল্প
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                চোখে দেখুন কিভাবে{" "}
                <span className="text-amber-300">সাহায্য পৌঁছায়</span>
              </h3>
              <p className="text-white/65 leading-relaxed mb-8 text-sm">
                শুধু কথায় নয় — আমরা ভিডিওতে দেখাই কিভাবে আপনার donation
                সত্যিকারের মানুষের জীবন বদলে দেয়। সরেজমিন তোলা ভিডিও, পরিবারের
                বার্তা, হাসপাতালের দৃশ্য।
              </p>
              <div className="space-y-3">
                {[
                  "সরেজমিন তোলা ভিডিও ফুটেজ",
                  "পরিবারের সরাসরি বার্তা",
                  "হাসপাতাল ও চিকিৎসার দৃশ্য",
                  "সুস্থ হওয়ার পরের অনুভূতি",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-400/20 border border-teal-400/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/75 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm w-fit"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
                YouTube চ্যানেল দেখুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
