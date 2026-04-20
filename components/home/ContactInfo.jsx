// components/home/ContactSection.js
"use client";
import { useState } from "react";

const contactInfo = [
  {
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
    label: "ফোন",
    value: "+880 1700-000000",
    sub: "সকাল ৯টা – রাত ১০টা",
    href: "tel:+8801700000000",
    color: "bg-teal-50 border-teal-100 text-teal-600",
    hoverBorder: "hover:border-teal-300",
  },
  {
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "ইমেইল",
    value: "help@sahayta.com.bd",
    sub: "২৪ ঘণ্টার মধ্যে উত্তর",
    href: "mailto:help@sahayta.com.bd",
    color: "bg-blue-50 border-blue-100 text-blue-600",
    hoverBorder: "hover:border-blue-300",
  },
  {
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    label: "জরুরি যোগাযোগ",
    value: "+880 1800-000000",
    sub: "২৪/৭ সবসময় উপলব্ধ",
    href: "tel:+8801800000000",
    color: "bg-red-50 border-red-100 text-red-500",
    hoverBorder: "hover:border-red-300",
  },
  {
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
    label: "ঠিকানা",
    value: "মিরপুর ১০, ঢাকা ১২১৬",
    sub: "সরাসরি দেখা করতে পারেন",
    href: "https://maps.google.com",
    color: "bg-amber-50 border-amber-100 text-amber-600",
    hoverBorder: "hover:border-amber-300",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    color: "bg-blue-500 hover:bg-blue-600",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    color: "bg-red-500 hover:bg-red-600",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801700000000",
    color: "bg-green-500 hover:bg-green-600",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    color: "bg-pink-500 hover:bg-pink-600",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const subjects = [
  "সাহায্যের আবেদন",
  "Donation সংক্রান্ত প্রশ্ন",
  "কেস ভেরিফিকেশন",
  "স্বেচ্ছাসেবী হতে চাই",
  "মিডিয়া / প্রেস",
  "অন্যান্য",
];

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission logic
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-600 border border-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            যোগাযোগ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            আমাদের সাথে <span className="text-teal-600">কথা বলুন</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            সাহায্যের আবেদন, donate সংক্রান্ত প্রশ্ন বা যেকোনো বিষয়ে আমরা
            সবসময় আছি
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* ===== Left — contact info ===== */}
          <div>
            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map(
                ({ icon, label, value, sub, href, color, hoverBorder }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`flex items-center gap-4 bg-white border rounded-2xl p-4 transition-all duration-200 hover:shadow-md ${hoverBorder} group`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 ${color}`}
                    >
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-400 text-xs mb-0.5">{label}</p>
                      <p className="font-bold text-slate-800 text-sm truncate">
                        {value}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors flex-shrink-0"
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
                ),
              )}
            </div>

            {/* Social links */}
            <div className="mb-10">
              <p className="text-slate-500 text-sm font-semibold mb-4">
                সোশ্যাল মিডিয়ায় আমরা:
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${color}`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Office hours */}
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                যোগাযোগের সময়
              </h4>
              <div className="space-y-2.5">
                {[
                  {
                    day: "শনিবার – বৃহস্পতিবার",
                    time: "সকাল ৯:০০ – দুপুর ১২:০০",
                  },
                  { day: "শুক্রবার", time: "দুপুর ২:০০ – রাত ১০:০০" },
                  {
                    day: "জরুরি (যেকোনো সময়)",
                    time: "+880 1800-000000",
                    emergency: true,
                  },
                ].map(({ day, time, emergency }) => (
                  <div
                    key={day}
                    className={`flex items-center justify-between py-2 ${emergency ? "" : "border-b border-slate-100 last:border-0"}`}
                  >
                    <span
                      className={`text-sm ${emergency ? "text-red-500 font-semibold" : "text-slate-500"}`}
                    >
                      {emergency && "🚨 "}
                      {day}
                    </span>
                    <span
                      className={`text-sm font-semibold ${emergency ? "text-red-500" : "text-slate-700"}`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right — contact form ===== */}
          <div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              {submitted ? (
                /* Success state */
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
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
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    বার্তা পাঠানো হয়েছে! ✅
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    ধন্যবাদ আপনার বার্তার জন্য। আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে
                    যোগাযোগ করব।
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-teal-600 font-semibold text-sm hover:underline"
                  >
                    আরেকটি বার্তা পাঠান →
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-800 text-xl mb-1">
                      বার্তা পাঠান
                    </h3>
                    <p className="text-slate-400 text-sm">
                      সব প্রশ্নের উত্তর দেওয়া আমাদের দায়িত্ব
                    </p>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        আপনার নাম <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="মোঃ আব্দুল করিম"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        ফোন নম্বর <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="01700-000000"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      ইমেইল
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      বিষয় <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all bg-white"
                    >
                      <option value="" disabled>
                        বিষয় বেছে নিন
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      বার্তা <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-teal-200 active:scale-[0.98] text-sm"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        পাঠানো হচ্ছে...
                      </>
                    ) : (
                      <>
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        বার্তা পাঠান
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-xs">
                    আমরা সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দিই
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
