import React from "react";

const BRANDS = [
  "Sinotruk Howo",
  "Shacman",
  "FAW",
  "Mercedes-Benz",
  "MAN",
  "Scania",
  "Isuzu",
  "Mitsubishi Fuso",
];

export default function TasksSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
        border-y
        border-slate-200/70
        dark:border-white/10
        bg-slate-50
        dark:bg-[#05070b]
        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[250px]
            bg-blue-500/[0.05]
            dark:bg-blue-500/[0.08]
            rounded-full
            blur-3xl
          "
        />
      </div>


      <div
        aria-hidden="true"
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
            linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          FLOATING CHECKBOX UI
      ===================================================== */}

      <div
        className="
          absolute
          top-8
          left-[6%]
          w-20
          h-20
          rounded-3xl
          border
          border-slate-900/[0.05]
          dark:border-white/[0.06]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-12
          left-[8%]
          w-10
          h-10
          rounded-xl
          border
          border-slate-900/[0.05]
          dark:border-white/[0.08]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-8
          right-[7%]
          w-24
          h-24
          rounded-3xl
          border
          border-slate-900/[0.05]
          dark:border-white/[0.06]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-14
          right-[9%]
          w-12
          h-12
          rounded-xl
          border
          border-slate-900/[0.05]
          dark:border-white/[0.08]
          pointer-events-none
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex justify-center mb-8">

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2.5
              rounded-full
              bg-white/80
              dark:bg-white/[0.04]
              backdrop-blur-md
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
                border
                border-slate-300
                dark:border-white/15
                flex
                items-center
                justify-center
                bg-white
                dark:bg-white/[0.05]
              "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="
                  text-blue-600
                  dark:text-blue-400
                "
              >
                <path d="M5 12l4 4L19 6" />
              </svg>
            </div>

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-600
                dark:text-slate-300
              "
            >
              Trusted by Nigeria's leading transport companies
            </span>
          </div>

        </div>

        {/* =====================================================
            MARQUEE CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            dark:border-white/[0.08]
            bg-white/70
            dark:bg-white/[0.03]
            backdrop-blur-xl
            py-8
            shadow-sm
          "
        >

          {/* Top Shine */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-slate-300
              dark:via-white/20
              to-transparent
            "
          />

          <div
            className="
              flex
              shrink-0
              gap-16
              items-center
              min-w-full
              select-none
            "
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  whitespace-nowrap
                "
              >
                {/* Small checkbox */}
                <div
                  className="
                    w-7
                    h-7
                    rounded-lg
                    border
                    border-slate-300
                    dark:border-white/15
                    bg-white
                    dark:bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </div>

                <span
                  className="
                    text-lg
                    md:text-xl
                    font-bold
                    text-slate-500
                    dark:text-slate-500
                    hover:text-slate-900
                    dark:hover:text-white
                    transition-colors
                  "
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}