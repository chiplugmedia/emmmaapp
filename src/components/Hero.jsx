import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-32
        pb-20
        lg:pt-40
        lg:pb-28
        px-5
        sm:px-8
        bg-slate-50
        dark:bg-[#05070b]
        transition-colors
        duration-300
      "
    >
      {/* ==========================================================
          BACKGROUND UI DESIGN
      ========================================================== */}

      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[400px]
          rounded-full
          bg-blue-500/[0.07]
          dark:bg-blue-500/[0.08]
          blur-3xl
        "
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,0.9) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Dark-mode grid overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          dark:block
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* ==========================================================
          SUBTLE WHITE CHECKBOX / UI ELEMENTS
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Top right checkbox */}
        <div
          className="
            absolute
            top-28
            right-[7%]
            w-28
            h-28
            rounded-3xl
            border
            border-slate-900/[0.06]
            dark:border-white/[0.06]
          "
        />

        {/* Inner checkbox */}
        <div
          className="
            absolute
            top-36
            right-[8.5%]
            w-14
            h-14
            rounded-2xl
            border
            border-slate-900/[0.05]
            dark:border-white/[0.07]
          "
        />

        {/* Left bottom checkbox */}
        <div
          className="
            absolute
            bottom-16
            left-[4%]
            w-24
            h-24
            rounded-3xl
            border
            border-slate-900/[0.05]
            dark:border-white/[0.06]
          "
        />

        {/* Small floating checkbox */}
        <div
          className="
            absolute
            bottom-28
            left-[8%]
            w-10
            h-10
            rounded-xl
            border
            border-slate-900/[0.05]
            dark:border-white/[0.07]
          "
        />

        {/* Small UI square */}
        <div
          className="
            absolute
            top-[45%]
            right-[45%]
            w-5
            h-5
            rounded-md
            border
            border-slate-900/[0.06]
            dark:border-white/[0.08]
          "
        />
      </div>

      {/* ==========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-16
            items-center
          "
        >
          {/* ======================================================
              LEFT CONTENT
          ====================================================== */}

          <div>
            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                tracking-wide
                uppercase
                text-blue-700
                dark:text-blue-300
                bg-white/80
                dark:bg-white/[0.045]
                backdrop-blur-md
                border
                border-blue-200/70
                dark:border-white/[0.08]
                px-3.5
                py-2
                rounded-full
                shadow-sm
              "
            >
              <span
                className="
                  relative
                  flex
                  w-2
                  h-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-blue-500
                    opacity-50
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    w-2
                    h-2
                    rounded-full
                    bg-blue-600
                    dark:bg-blue-400
                  "
                />
              </span>
              Welcome To Emmmar Motors Company
            </span>

            {/* Heading */}
            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-[3.5rem]
                font-extrabold
                leading-[1.06]
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              Grow With{" "}
              <span
                className="
                  block
                  text-blue-600
                  dark:text-blue-400
                "
              >
                Confidence
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                text-lg
                text-slate-600
                dark:text-slate-400
                max-w-xl
                leading-relaxed
              "
            >
              EMMMAR MOTORS COMPANY LTD is a Nigerian transportation and fleet
              operations company focused on vehicle acquisition, commercial
              transportation, fleet management, logistics, import and export,
              and other commercial business activities. We are committed to
              building sustainable operations, creating value, and delivering
              long-term growth through real business activities.
            </p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-4
              "
            >
              {/* Explore */}
              <Link
                to="/explores"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
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
                  hover:shadow-blue-600/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Explore EMMMAR
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>

              {/* Login */}
              <Link
                to="login.php"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-white/90
                  dark:bg-white/[0.045]
                  backdrop-blur-md
                  text-slate-900
                  dark:text-white
                  font-semibold
                  px-7
                  py-3.5
                  rounded-xl
                  border
                  border-slate-200
                  dark:border-white/[0.1]
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Login
              </Link>
            </div>

            {/* ==================================================
                SMALL TRUST UI
            ================================================== */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-xs
                text-slate-500
                dark:text-slate-500
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    w-6
                    h-6
                    rounded-lg
                    bg-white
                    dark:bg-white/[0.06]
                    border
                    border-slate-200
                    dark:border-white/[0.08]
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
                    strokeWidth="2.4"
                    className="
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                Reliable Operations
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    w-6
                    h-6
                    rounded-lg
                    bg-white
                    dark:bg-white/[0.06]
                    border
                    border-slate-200
                    dark:border-white/[0.08]
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
                    strokeWidth="2.4"
                    className="
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                Business Focused
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT HERO IMAGE
          ====================================================== */}

          <div className="relative">
            {/* Decorative UI frame */}

            <div
              className="
                absolute
                -inset-3
                rounded-[2rem]
                border
                border-slate-900/[0.05]
                dark:border-white/[0.06]
              "
            />

            <div
              className="
                absolute
                -inset-6
                rounded-[2.5rem]
                border
                border-slate-900/[0.025]
                dark:border-white/[0.035]
              "
            />

            {/* Image container */}

            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                border
                border-slate-200/70
                dark:border-white/[0.1]
                bg-white
                dark:bg-slate-900
                shadow-2xl
                shadow-slate-900/10
                dark:shadow-black/40
              "
            >
              <img
                src="/emma/img/Truckemmar1.jpeg"
                alt="Featured Emmmar Motors vehicle"
                className="
                  w-full
                  h-[420px]
                  sm:h-[480px]
                  lg:h-[520px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.025]
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  via-transparent
                  to-transparent
                "
              />

              {/* Image UI card */}

              <div
                className="
                  absolute
                  left-5
                  bottom-5
                  right-5
                  sm:left-6
                  sm:bottom-6
                  sm:right-auto
                  rounded-2xl
                  bg-black/55
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-4
                  py-3
                  text-white
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      rounded-xl
                      bg-white/10
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12L6.5 6.5H17.5L19 12" />
                      <path d="M3 12H21V17H3Z" />
                      <circle cx="7.5" cy="17" r="1.6" />
                      <circle cx="16.5" cy="17" r="1.6" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Emmmar Motors</p>

                    <p className="text-[11px] text-white/60 mt-0.5">
                      Transportation & Fleet Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating checkbox UI */}

            <div
              className="
                absolute
                -top-5
                -right-5
                sm:-right-7
                w-16
                h-16
                rounded-2xl
                bg-white/80
                dark:bg-white/[0.045]
                backdrop-blur-xl
                border
                border-slate-200/70
                dark:border-white/[0.09]
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
                  width="15"
                  height="15"
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
        </div>
      </div>
    </section>
  );
}