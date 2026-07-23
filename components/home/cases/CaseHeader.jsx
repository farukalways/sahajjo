const CaseHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          সক্রিয় কেস
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          এখন <span className="text-teal-600">সাহায্যের অপেক্ষায়</span> আছেন
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
  );
};

export default CaseHeader;
