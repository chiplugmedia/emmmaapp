import React from "react";

export default function AboutSite() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            {/* Left Column: Badge, Heading, and Description */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                </span>
                ABOUT EMMMAR MOTORS
              </span>

              {/* Heading */}
              <h1 className="mt-4 max-w-[720px] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Grow With{" "}
                <em className="font-extrabold italic text-blue-600 dark:text-blue-400">
                  Confidence.
                </em>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-[520px] text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Building opportunities through transportation, logistics,
                vehicle acquisition, fleet operations, import and export, and
                strategic commercial activities focused on creating lasting
                value and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section className="relative py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative">
            {/* Decorative checkbox */}
            <div className="absolute -top-3 -left-3 z-10 w-8 h-8 rounded-lg border border-white/80 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm" />

            <div className="rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1562141961-c0d1f5f3c6c4?auto=format&fit=crop&w=1200&q=80"
                alt="EMMMAR MOTORS Transportation and Logistics"
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              px-4
              py-2
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
              "
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </div>

              <span
                className="
                text-xs
                font-semibold
                tracking-[0.18em]
                uppercase
                text-blue-600
                dark:text-blue-400
              "
              >
                ABOUT US
              </span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              A Business Built on Trust,
              <span className="block text-blue-600 dark:text-blue-400">
                Transparency & Results
              </span>
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              EMMMAR MOTORS COMPANY LTD is a Nigerian transportation and
              commercial operations company with a focus on vehicle acquisition,
              transportation, fleet operations, logistics, import and export,
              and other strategic business activities. Our operations are built
              around real commercial activity, responsible management, and the
              effective utilization of business assets to create sustainable
              value.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              With practical experience across transportation and commercial
              operations, we understand the importance of disciplined execution,
              operational efficiency, accountability, and strong business
              relationships. We remain focused on identifying viable
              opportunities, managing our operations responsibly, and delivering
              results while maintaining the professionalism, integrity, and
              standards that define EMMMAR MOTORS.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VALUES
      ====================================================== */}

      <section className="relative py-20 sm:py-24 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              What Drives Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Our Mission & Values
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              The principles that guide how we operate, serve our partners, and
              build sustainable business relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="group relative overflow-hidden p-8 sm:p-10 rounded-[2rem] bg-white/75 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 transition-all duration-300">
              <div className="absolute top-5 right-5 w-5 h-5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5" />

              <span className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
                </svg>
              </span>

              <p className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Our mission is simple: to provide reliable business
                opportunities while building sustainable growth for everyone
                connected to our company. We strive to create lasting value
                through vehicle acquisition, transportation, fleet operations,
                logistics, import and export, and other commercial business
                activities that deliver measurable results.
              </p>
            </div>

            {/* Values */}
            <div className="group relative overflow-hidden p-8 sm:p-10 rounded-[2rem] bg-white/75 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 dark:shadow-black/10 transition-all duration-300">
              <div className="absolute top-5 right-5 w-5 h-5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5" />

              <span className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </span>

              <p className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                Our Values
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Trust, transparency, professionalism, innovation, and integrity
                guide every decision we make. We are committed to maintaining
                dependable operations, clear communication, and strong
                relationships with our customers, investors, and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    PARTNER MESSAGE WITH IMAGE ON THE LEFT
   ====================================================== */}
      <section className="relative py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-6 h-6 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5" />
            <div className="absolute bottom-6 left-6 w-4 h-4 rounded border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side: Image */}
              <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="EMMMAR MOTORS Partner Community"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="flex flex-col justify-center">
                <div>
                  {/* Badge */}

                  <div
                    className="
              inline-flex
              items-center
              gap-3
              px-4
              py-2
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
              "
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-blue-600 dark:text-blue-400"
                      >
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    </div>

                    <span
                      className="
                text-xs
                font-semibold
                tracking-[0.18em]
                uppercase
                text-blue-600
                dark:text-blue-400
              "
                    >
                      INVESTORS & PARTNERS
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Growing Together
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  <p>
                    EMMMAR MOTORS values the individuals and organizations who
                    choose to build a relationship with our company. Our
                    investors and business partners are an important part of the
                    wider EMMMAR community, and we are committed to building
                    these relationships on trust, transparency, professionalism,
                    and mutual respect.
                  </p>

                  <p>
                    We believe strong relationships are built through clear
                    communication, responsible business practices, and
                    consistent execution. Whether you participate with us as an
                    investor or work with us through a genuine business
                    partnership, we are committed to maintaining professional
                    standards and creating meaningful long-term value.
                  </p>

                  <p>
                    Our goal is to build relationships that go beyond individual
                    transactions — relationships founded on confidence,
                    accountability, and a shared commitment to sustainable
                    growth.
                  </p>
                  <div className="pt-2">
                    <p className="font-bold text-lg text-slate-900 dark:text-white">
                      Together, we move forward with confidence.
                    </p>
                  </div>
                </div>

                {/* Bottom branding */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    EMMMAR MOTORS
                  </h3>
                  <p className="mt-1 text-blue-600 dark:text-blue-400 font-semibold">
                    Grow With Confidence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}