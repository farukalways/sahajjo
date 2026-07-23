"use client";
import { useState } from "react";
import CaseHeader from "./CaseHeader";
import FilterTabs from "./FilterTabs";
import EmptyState from "./EmptyState";
import CaseCard from "./CaseCard";

const FILTERS = [
  "সব",
  "জরুরি",
  "কিডনি রোগ",
  "হৃদরোগ",
  "ক্যান্সার",
  "শিশু রোগ",
  "লিভার রোগ",
  "দুর্ঘটনা",
];

const ActiveCasesGrid = ({ initialCases = [] }) => {
  const [cases] = useState(initialCases);
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
        <CaseHeader />

        {/* Filter Tabs */}
        <FilterTabs
          filters={FILTERS}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* Cases Grid / Empty State */}
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CaseCard key={c._id || c.id} caseData={c} />
            ))}
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
};

export default ActiveCasesGrid;
