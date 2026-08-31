import React from "react";

const FEATURES = [
  {
  title: "Operational Excellence",
  desc: "We deliver reliable transportation and fleet operations through professional standards, efficient processes, and dependable service.",
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18" />
      <path d="M12 3v18" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
},
{
  title: "Comprehensive Business Capabilities",
  desc: "Our operations cover transportation, logistics, fleet management, import and export, and other commercial activities.",
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M3 17h18" />
    </svg>
  ),
},
{
  title: "Professional Management",
  desc: "We apply structured management and industry experience across our business operations.",
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M4 21a8 8 0 0116 0" />
    </svg>
  ),
},
{
  title: "Dependable Business Support",
  desc: "We provide consistent support and clear communication across our business relationships and operations.",
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
},
];

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "Active", label: "Business Operations" },
  { value: "Diverse", label: "Business Activities" },
  { value: "Weekly", label: "Earnings Distribution Options" },
];

export default function HowItWorks() {
  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-[#05070b] transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[350px]
            bg-blue-500/[0.05]
            dark:bg-blue-500/[0.08]
            rounded-full
            blur-3xl
          "
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.04]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.8) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div
        className="
          hidden
          dark:block
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Floating UI Elements */}
      <div className="absolute top-20 left-[6%] w-20 h-20 rounded-3xl border border-slate-900/[0.05] dark:border-white/[0.06]" />
      <div className="absolute top-28 left-[8%] w-10 h-10 rounded-xl border border-slate-900/[0.05] dark:border-white/[0.08]" />
      <div className="absolute bottom-24 right-[6%] w-24 h-24 rounded-3xl border border-slate-900/[0.05] dark:border-white/[0.06]" />
      <div className="absolute bottom-36 right-[8%] w-12 h-12 rounded-xl border border-slate-900/[0.05] dark:border-white/[0.08]" />

      {/* ==================================== */}
      {/* WHY CHOOSE US */}
      {/* ==================================== */}

      <section className="relative py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2.5
                rounded-full
                bg-white
                dark:bg-white/[0.04]
                backdrop-blur-xl
                border
                border-slate-200
                dark:border-white/[0.08]
                shadow-sm
              "
            >
              <div
                className="
                  w-6
                  h-6
                  rounded-lg
                  bg-blue-50
                  dark:bg-blue-500/10
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  dark:text-blue-400
                  text-xs
                  font-bold
                "
              >
                ✓
              </div>

              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400">
                Why Choose Us
              </span>
            </div>

            <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              The Emmmar Motors Difference
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
              Reliable transportation operations, professional fleet management, diverse commercial activities, and integrated business solutions.

            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  p-7
                  rounded-3xl
                  bg-white/80
                  dark:bg-white/[0.03]
                  backdrop-blur-xl
                  border
                  border-slate-200
                  dark:border-white/[0.08]
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                {/* Top Glow Line */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-blue-500/60
                    to-transparent
                  "
                />

                <span
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    dark:bg-blue-500/10
                    border
                    border-blue-100
                    dark:border-blue-500/20
                    text-blue-600
                    dark:text-blue-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  {feature.icon}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>

                {/* Decorative Checkbox */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-8
                    h-8
                    rounded-lg
                    border
                    border-slate-200
                    dark:border-white/10
                    flex
                    items-center
                    justify-center
                    text-blue-500
                    opacity-60
                  "
                >
                  ✓
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================== */}
      {/* PREMIUM STATS SECTION */}
      {/* ==================================== */}

      <section className="relative py-10 px-4 sm:px-6 overflow-hidden">
        {/* Gradient Background */}
        <div
          className="
      absolute
      inset-0
      bg-gradient-to-br
      from-blue-600
      via-blue-700
      to-indigo-900
    "
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="
            rounded-2xl
            py-4
            px-3
            text-center
          "
              >
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs sm:text-sm font-medium text-blue-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}