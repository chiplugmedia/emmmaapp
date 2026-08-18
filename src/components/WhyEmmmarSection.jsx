import React, { useState } from "react";

export default function WhyEmmmarSection() {
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    {
      title: "Real Operations",
      description:
        "Our business is built around transportation, vehicles, fleet operations, logistics, and legitimate commercial activities.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16V8a2 2 0 012-2h9v10H3zm11-6h4l3 3v3h-7v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        "We provide clear information and maintain well-documented business processes across our operations.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l8 4v5c0 5-3 8-8 10-5-2-8-5-8-10V7l8-4z"
          />
        </svg>
      ),
    },
    {
      title: "Accountability",
      description:
        "We maintain structured records, verification procedures, and responsible business practices.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Operational Discipline",
      description:
        "We focus on efficient vehicle deployment, responsible fleet operations, and consistent business processes.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Long-Term Growth",
      description:
        "We are focused on building sustainable operations and creating lasting business value for the future.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4-4 4 4 8-8"
          />
        </svg>
      ),
    },
    {
      title: "Trusted Relationships",
      description:
        "We build strong and lasting relationships with customers, partners, stakeholders, and everyone we do business with.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          />
          <circle cx="9" cy="7" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M23 21v-2a4 4 0 00-3-3.87"
          />
        </svg>
      ),
    },
  ];

  return (
      <div className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen py-20 px-5 sm:px-8">
       

        {/* ===================== WHY EMMMAR ===================== */}
        <section className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl text-left sm:text-center mx-auto">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#052DA7]/10 text-[#052DA7] dark:text-[#6B8CFF] text-sm font-semibold">
              Why EMMMAR
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Built on Trust, Discipline &amp; Real Operations
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              EMMMAR is committed to building a sustainable business ecosystem through
              transportation, logistics, fleet operations, and responsible commercial
              activities. Our approach is guided by transparency, accountability,
              operational excellence, and long-term value creation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-900/5 dark:border-white/10 p-7 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#052DA7] text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-[#042487]">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}