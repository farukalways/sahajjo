const CaseCard = ({ caseData }) => {
  const c = caseData;
  const pct = Math.min(Math.round((c.raised / c.target) * 100), 100);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Top / Image Area */}
      <div
        className="relative h-44 bg-cover bg-center flex items-end p-4"
        style={{ backgroundImage: `url(${c.image})` }}
      >
        {c.urgent && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            জরুরি
          </span>
        )}
        <span className="absolute top-4 left-4 bg-black/25 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          ⏳ {c.days} দিন বাকি
        </span>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full bg-white/90 ${c.tagColor?.split(" ")[1] || ""}`}
        >
          {c.tag}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold flex-shrink-0">
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

        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
          {c.story}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-bold text-slate-800 text-sm">
              ৳{c.raised?.toLocaleString("bn-BD")}
            </span>
            <span className="text-slate-400 text-xs">
              লক্ষ্য ৳{c.target?.toLocaleString("bn-BD")}
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
            <span className="text-slate-400 text-xs">{c.donors} জন Donor</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-teal-200 active:scale-95">
          ❤️ সাহায্য করুন
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
