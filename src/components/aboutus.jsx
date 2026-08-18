import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        px-5
        sm:px-8
        bg-white
        dark:bg-[#05070b]
        transition-colors
        duration-300
      "
    >
      {/* ==========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[350px]
          bg-blue-500/[0.04]
          dark:bg-blue-500/[0.08]
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      
      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ======================================
            IMAGE SIDE
        ====================================== */}

        <div className="relative order-2 lg:order-1">

          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
             
             
            "
          >
            <img
              src="/emma/img/truckemme2.jpeg"
              alt="Emmmar Motors showroom interior"
              className="
                w-full
                h-[420px]
                sm:h-[500px]
                object-cover
                transition-transform
                duration-700
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            />

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                sm:right-auto
                rounded-2xl
                bg-black/60
                backdrop-blur-xl
                border
                border-white/10
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">

               

                
              </div>
            </div>

          </div>

          {/* Floating Check Card */}

          <div
            className="
              absolute
              -top-6
              -right-4
              w-16
              h-16
              rounded-2xl
              bg-white/90
              dark:bg-white/[0.05]
              backdrop-blur-xl
              border
              border-slate-200
              dark:border-white/[0.08]
              shadow-xl
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-7
                h-7
                rounded-lg
                border-2
                border-slate-300
                dark:border-white/20
                flex
                items-center
                justify-center
              "
            >
              <svg
                width="14"
                height="14"
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
          </div>

        </div>

        {/* ======================================
            TEXT CONTENT
        ====================================== */}

        <div className="order-1 lg:order-2">

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
              About Emmmar Motors
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              lg:text-5xl
              font-extrabold
              tracking-tight
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            Built on trust,
            <span className="block text-blue-600 dark:text-blue-400">
              driven by transparency
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            Our mission is simple: to provide reliable
            business opportunities while building
            sustainable growth for everyone connected to
            our company.

            Through our experience in transportation,
            logistics, fleet management, and commercial
            operations, we continuously identify profitable
            opportunities while maintaining professionalism,
            accountability, and integrity.
          </p>

          {/* Features */}

          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            {[
              "Fleet Operations",
              "Commercial Transport",
              "Logistics Services",
              "Business Expansion",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-white/[0.03]
                  border
                  border-slate-200
                  dark:border-white/[0.08]
                "
              >
                <div
                  className="
                    w-8
                    h-8
                    rounded-xl
                    bg-blue-50
                    dark:bg-blue-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </div>

                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}

          </div>

          {/* Button */}

          <div className="mt-10">
            <Link
              to="/about"
              className="
                inline-flex
                items-center
                gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                px-7
                py-3.5
                rounded-xl
                shadow-lg
                shadow-blue-600/20
                hover:-translate-y-1
                transition-all
              "
            >
              Learn More

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}