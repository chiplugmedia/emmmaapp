import React from "react";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 px-5 sm:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* ================= BACKGROUND UI ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= IMAGE ================= */}
          <div className="relative order-2 lg:order-1">

            
            {/* Image */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-200/80 dark:border-white/10">

              <img
                src="/emma/img/Truckemmar1.jpeg"
                alt="Emmmar Motors vehicle"
                className="w-full h-[360px] sm:h-[450px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent">

                <div className="flex items-center gap-3">
     </div>

              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 order-1 lg:order-2 text-center lg:text-left">

            <div className="space-y-5">

              {/* Label */}
              <p className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-blue-600 dark:text-blue-400">
                EMMMAR MOTORS
              </p>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                Move Forward.
                <br />

                <span className="text-blue-600 dark:text-blue-400">
                  Build With Confidence.
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400">
                Discover reliable vehicles, transportation solutions and
                commercial opportunities designed to help individuals and
                businesses move forward with confidence.
              </p>

            </div>

          

            {/* ================= APP DOWNLOAD ================= */}
            <div className="mt-9">

              <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 mb-4">
                Download Our Mobile App
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">

                {/* Google Play */}
                <a
                  href="#"
                  aria-label="Download Emmmar Motors on Google Play"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white hover:bg-slate-800 transition-all duration-200"
                >

                  {/* Google Play Icon */}
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.5 2.8L13.4 12 3.5 21.2C3.15 20.7 3 20.1 3 19.4V4.6C3 3.9 3.15 3.3 3.5 2.8Z"
                      fill="#4285F4"
                    />

                    <path
                      d="M13.4 12L16.1 9.3L5.2 3.1C4.55 2.72 3.9 2.6 3.5 2.8L13.4 12Z"
                      fill="#34A853"
                    />

                    <path
                      d="M13.4 12L16.1 14.7L5.2 20.9C4.55 21.28 3.9 21.4 3.5 21.2L13.4 12Z"
                      fill="#FBBC04"
                    />

                    <path
                      d="M16.1 9.3L20.1 11.55C21.3 12.2 21.3 13.8 20.1 14.45L16.1 16.7L13.4 14L16.1 12L13.4 10L16.1 9.3Z"
                      fill="#EA4335"
                    />
                  </svg>

                  <span className="text-left leading-tight">
                    <span className="block text-[10px] text-white/70">
                      GET IT ON
                    </span>

                    <span className="block text-base font-semibold">
                      Google Play
                    </span>
                  </span>

                </a>


              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}