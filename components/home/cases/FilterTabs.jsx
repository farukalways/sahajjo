const FilterTabs = ({ filters, activeFilter, onSelectFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelectFilter(f)}
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
  );
};

export default FilterTabs;
