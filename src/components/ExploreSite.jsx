import React, { useState } from "react";

export default function ExploreSite() {
  const [darkMode, setDarkMode] = useState(false);

  const services = [
    {
      title: "Transportation",
      description:
        "Commercial transportation services supported by a growing fleet of vehicles serving business and logistics needs.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16V8a2 2 0 012-2h9v10H3zm11-6h4l3 3v3h-7v-6zM6 18a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
      ),
    },
    {
      title: "Fleet Operations",
      description:
        "Acquisition, deployment and day-to-day operation of commercial vehicles for transportation and logistics activities.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 10H21" />
        </svg>
      ),
    },
    {
      title: "Vehicle Acquisition & Management",
      description:
        "Strategic acquisition and management of vehicles for commercial use and business operations.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M5 17h14" />
          <circle cx="8" cy="18" r="2" />
          <circle cx="16" cy="18" r="2" />
        </svg>
      ),
    },
    {
      title: "Logistics",
      description:
        "Transportation and movement of goods through reliable logistics operations designed for efficiency and consistency.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M20 7L12 3 4 7l8 4 8-4z" />
          <path d="M4 7v10l8 4 8-4V7" />
        </svg>
      ),
    },
    {
      title: "Import & Export",
      description:
        "Participation in legitimate vehicle and commercial trade activities involving local and international markets.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18" />
          <path d="M12 3c-3 3-3 15 0 18" />
        </svg>
      ),
    },
    {
      title: "Commercial Trade",
      description:
        "Supporting business growth through transportation-linked commercial trade and investment opportunities.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M12 8v8" />
          <path d="M8 12h8" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            {/* Left Column: Badge, Heading, and Description */}
            <div>
              {/* Heading */}
              <h1 className="mt-4 max-w-[720px] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                About{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  EMMMAR MOTORS
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-[520px] text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Building opportunities through transportation, logistics,
                vehicle acquisition, fleet operations, import and export, and
                other commercial business activities focused on creating lasting
                value and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 px-5 sm:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
              <img
                src="/emma/img/truck.png"
                alt="EMMMAR MOTORS Transportation and Logistics"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#052da7] dark:text-blue-400">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              A Business Built on Trust, Transparency &amp; Results
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              EMMMAR MOTORS COMPANY LTD is a Nigerian transportation and fleet
              operations company focused on vehicle acquisition, commercial
              transportation, fleet operations, logistics, import and export,
              and other commercial business activities.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              We are committed to building sustainable operations, creating
              value through real business activities, and developing long-term
              relationships with our customers, partners and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 px-5 sm:px-8 bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#052DA7]/10 text-[#052DA7] dark:text-[#6B8CFF] text-sm font-semibold">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Driving Growth Through Transportation &amp; Logistics
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              We operate across transportation, logistics, fleet management,
              import &amp; export, and commercial trade, delivering dependable
              solutions that support businesses and economic growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((item, index) => (
              <article
                key={index}
                className="group relative h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] will-change-transform hover:-translate-y-3 hover:border-[#052DA7] dark:hover:border-blue-500 hover:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-5deg)_translateY(-12px)] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-br before:from-[#052DA7]/[0.08] before:to-transparent before:to-45% before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 overflow-hidden"
              >
                {/* Animated Right Line */}
                <div className="absolute top-0 right-0 w-[4px] h-0 transition-all duration-500 ease-in-out rounded-full bg-[#052DA7] dark:bg-blue-500 group-hover:h-full" />

                {/* Card Content Layer */}
                <div className="[transform:translateZ(20px)] relative z-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#052DA7]/10 dark:bg-blue-500/10 text-[#052DA7] dark:text-blue-400 transition-all duration-500 group-hover:bg-[#052DA7] group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ===================== OUR BUSINESS MODEL ===================== */}
      <section className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="max-w-5xl mx-auto text-left sm:text-center">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#052DA7]/10 text-[#052DA7] dark:text-[#6B8CFF] text-sm font-semibold">
            Our Business Model
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Built on Real-World Operations
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl sm:mx-auto">
            EMMMAR generates business value through real-world transportation,
            fleet management, logistics, and commercial business activities. Our
            operations are strategically designed around the acquisition,
            deployment, and productive use of vehicles while supporting
            transportation services, logistics solutions, and other legitimate
            business ventures that contribute to sustainable growth.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="max-w-6xl mx-auto mt-14">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-900/5 dark:border-white/10">
            <img
              src="/emma/img/WhatsA14.jpeg"
              alt="EMMMAR Transportation and Logistics Operations"
              className="w-full h-[320px] sm:h-[380px] lg:h-[500px] object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 lg:left-10 lg:right-auto lg:max-w-lg">
              <div className="backdrop-blur-xl bg-black/30 border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Grow With EMMMAR
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/80 leading-relaxed">
                  EMMMAR provides opportunities for eligible individuals and
                  businesses to participate in qualifying business activities,
                  subject to the applicable terms, requirements and
                  documentation.
                </p>

                {/* CTA Button */}
                <div className="mt-4 sm:mt-5">
                  <a
                    href="register.php"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#052DA7] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#052DA7] hover:text-white hover:shadow-lg"
                  >
                    View Opportunities
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}