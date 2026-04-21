"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "❤️",
    num: 1247,
    suffix: "+",
    label: "মানুষকে সাহায্য করা হয়েছে",
    sub: "সর্বমোট",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: "💰",
    num: 2.4,
    suffix: " কোটি+",
    prefix: "৳",
    label: "মোট সংগ্রহ",
    sub: "এপর্যন্ত",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "👥",
    num: 3890,
    suffix: "+",
    label: "সক্রিয় Donor",
    sub: "এবং বাড়ছে",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: "🏆",
    num: 98,
    suffix: "%",
    label: "সাফল্যের হার",
    sub: "verified cases",
    color: "from-teal-400 to-emerald-500",
  },
];

const milestones = [
  { year: "২০২০", event: "যাত্রা শুরু", count: "১২ জনকে সাহায্য" },
  { year: "২০২১", event: "প্রথম ১০০", count: "১০০+ কেস সম্পন্ন" },
  { year: "২০২২", event: "ওয়েবসাইট চালু", count: "৩৫০+ কেস সম্পন্ন" },
  { year: "২০২৩", event: "হাজারের মাইলফলক", count: "১,০০০+ কেস সম্পন্ন" },
  { year: "২০২৪", event: "এখন", count: "১,২৪৭+ কেস চলমান" },
];

// Custom hook — count up animation
function useCountUp(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = increment * step;
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(
          isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current),
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

function StatCard({ stat, startCounting }) {
  const count = useCountUp(stat.num, 2000, startCounting);

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {stat.icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 tabular-nums">
        {stat.prefix || ""}
        {count}
        {stat.suffix}
      </div>
      <p className="text-teal-100 text-sm font-medium">{stat.label}</p>
      <p className="text-teal-300/60 text-xs mt-1">{stat.sub}</p>
    </div>
  );
}

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  // Trigger count-up when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-24 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-800 relative overflow-hidden"
    >
      {/* Background dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-teal-200 border border-white/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            আমাদের প্রভাব
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            সংখ্যায় আমাদের গল্প
          </h2>
          <p className="text-teal-200/80 max-w-xl mx-auto">
            প্রতিদিন আরও বেশি মানুষ সাহায্য পাচ্ছেন — এই সংখ্যাগুলো শুধু
            পরিসংখ্যান নয়, এগুলো মানুষের জীবন
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} startCounting={startCounting} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-14" />

        {/* Timeline milestones */}
        <div>
          <h3 className="text-center text-white font-bold text-xl mb-10">
            আমাদের যাত্রার মাইলফলক
          </h3>

          <div className="relative">
            {/* Center line — desktop */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {milestones.map(({ year, event, count }, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center mb-4 z-10 ${
                      i === milestones.length - 1
                        ? "bg-amber-400 border-amber-400"
                        : "bg-teal-700"
                    }`}
                  >
                    {i === milestones.length - 1 ? (
                      <span className="text-white text-xs font-bold">🔥</span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 block" />
                    )}
                  </div>

                  <span
                    className={`text-sm font-bold mb-1 ${
                      i === milestones.length - 1
                        ? "text-amber-300"
                        : "text-teal-300"
                    }`}
                  >
                    {year}
                  </span>
                  <p className="text-white font-semibold text-sm mb-1">
                    {event}
                  </p>
                  <p className="text-teal-200/70 text-xs">{count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold text-xl mb-1">
              আপনিও এই গল্পের অংশ হন
            </h4>
            <p className="text-teal-200/80 text-sm">
              আপনার একটি donation আরেকটি সংখ্যা নয় — একটি পরিবারের হাসি
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#cases"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-bold px-7 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm"
            >
              ❤️ এখনই Donate করুন
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 text-sm"
            >
              কেস দেখুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
