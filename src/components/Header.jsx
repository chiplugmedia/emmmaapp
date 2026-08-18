import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const SERVICES_ITEMS = [
  {
    href: "/services#sales",
    title: "New & Used Cars",
    desc: "Browse our inspected inventory",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12L6.5 6.5H17.5L19 12" />
        <path d="M3 12H21V17H3Z" />
        <circle cx="7.5" cy="17" r="1.6" />
        <circle cx="16.5" cy="17" r="1.6" />
      </svg>
    ),
  },

  {
    href: "/services#maintenance",
    title: "Maintenance & Repair",
    desc: "Certified technicians, quick turnaround",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.5 2.5-2-2Z" />
      </svg>
    ),
  },

  {
    href: "/services#financing",
    title: "Financing",
    desc: "Flexible plans, fast approval",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10H21" />
        <path d="M7 15H11" />
      </svg>
    ),
  },

  {
    href: "/services#tradein",
    title: "Trade-In",
    desc: "Get an instant valuation",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 2L21 6L17 10" />
        <path d="M3 6H21" />
        <path d="M7 22L3 18L7 14" />
        <path d="M21 18H3" />
      </svg>
    ),
  },
];

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  /* ============================================================
     STATES
  ============================================================ */

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") === "dark";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  /* ============================================================
     LIGHT / DARK MODE
  ============================================================ */

  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  /* ============================================================
     NAVIGATION CLASSES
  ============================================================ */

  const getNavLinkClass = (path) => {
    const isActive = currentPath === path;

    const base =
      "px-3.5 py-2 rounded-xl transition-colors " +
      "hover:text-blue-600 dark:hover:text-blue-400 " +
      "hover:bg-blue-50 dark:hover:bg-white/5";

    const active =
      "text-blue-600 dark:text-blue-400 " +
      "bg-blue-50 dark:bg-white/5 font-semibold";

    return `${base} ${isActive ? active : ""}`;
  };

  const getMobileNavLinkClass = (path) => {
    const isActive = currentPath === path;

    const active =
      "text-blue-600 dark:text-blue-400 " +
      "bg-blue-50 dark:bg-white/5 font-semibold";

    const inactive =
      "hover:bg-blue-50 dark:hover:bg-white/5";

    return `block px-3 py-2.5 rounded-xl ${
      isActive ? active : inactive
    }`;
  };

  /* ============================================================
     CLOSE MOBILE MENU
  ============================================================ */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  /* ============================================================
     HEADER
  ============================================================ */

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-4 lg:px-6">
      <div
        className="
          max-w-7xl mx-auto
          bg-white/95 dark:bg-slate-900/95
          backdrop-blur-md
          border border-slate-200 dark:border-white/10
          rounded-2xl
          shadow-md
        "
      >
        <nav
          className="
            h-[72px]
            px-4 sm:px-6 lg:px-8
            flex items-center
            justify-between
            gap-4
          "
        >

          {/* ======================================================
             LOGO
          ====================================================== */}

          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Emmmar Motors home"
          >
            {/* Light mode logo */}
            <img
              src='/emma/img/emmalightmood.png'
              alt="Emmmar Motors"
              className="h-10 lg:h-11 w-auto dark:hidden"
            />

            {/* Dark mode logo */}
            <img
              src="/emma/img/emmadarkmood.png"
              alt="Emmmar Motors"
              className="h-10 lg:h-11 w-auto hidden dark:block"
            />
          </Link>

          {/* ======================================================
             DESKTOP NAVIGATION
          ====================================================== */}

          <ul
            className="
              hidden lg:flex
              items-center gap-1
              text-sm font-medium
              text-slate-700
              dark:text-slate-300
            "
          >
            {/* HOME */}

            <li>
              <Link
                to="/"
                className={getNavLinkClass("/")}
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li>
              <Link
                to="/about"
                className={getNavLinkClass("/about")}
              >
                About Us
              </Link>
            </li>


            {/* CONTACT */}

            <li>
              <Link
                to="/contact"
                className={getNavLinkClass("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ======================================================
             RIGHT CONTROLS
          ====================================================== */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* ==================================================
               LIGHT / DARK SWITCH
            ================================================== */}

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={isDarkMode}
              className="
                relative
                w-12 h-7
                rounded-full
                bg-slate-200
                dark:bg-slate-800
                border
                border-slate-300
                dark:border-white/10
                flex items-center
                px-1
                transition-colors
                shrink-0
              "
            >
              <span
                className={`
                  w-5 h-5
                  rounded-full
                  bg-white
                  dark:bg-blue-500
                  shadow-md
                  flex items-center
                  justify-center
                  transition-all
                  duration-300
                  ${
                    isDarkMode
                      ? "translate-x-5"
                      : "translate-x-0"
                  }
                `}
              >
                {isDarkMode ? (
                  /* MOON ICON */

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3A7 7 0 0 0 21 12.8Z" />
                  </svg>
                ) : (
                  /* SUN ICON */

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <path d="M12 2V4" />
                    <path d="M12 20V22" />
                    <path d="M4.93 4.93L6.34 6.34" />
                    <path d="M17.66 17.66L19.07 19.07" />
                    <path d="M2 12H4" />
                    <path d="M20 12H22" />
                    <path d="M4.93 19.07L6.34 17.66" />
                    <path d="M17.66 6.34L19.07 4.93" />
                  </svg>
                )}
              </span>
            </button>

            {/* SIGN IN */}

            <Link
              to="/login"
              className="
                hidden md:inline-flex
                text-sm font-medium
                text-slate-700
                dark:text-slate-300
                hover:text-blue-600
                dark:hover:text-blue-400
                transition-colors
                px-2
              "
            >
              Sign in
            </Link>

            {/* GET STARTED */}

            <Link
              to="/register"
              className="
                hidden md:inline-flex
                items-center gap-1.5
                bg-blue-600
                hover:bg-blue-700
                text-white
                text-sm
                font-semibold
                px-5 py-2.5
                rounded-xl
                shadow-md
                transition-colors
              "
            >
              Get Started →
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen(
                  (previous) => !previous
                )
              }
              className="
                lg:hidden
                inline-flex
                items-center
                justify-center
                w-10 h-10
                rounded-xl
                hover:bg-blue-50
                dark:hover:bg-white/5
                transition-colors
                text-slate-700
                dark:text-slate-300
              "
            >
              {mobileMenuOpen ? (
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
                  <path d="M6 6L18 18" />
                  <path d="M6 18L18 6" />
                </svg>
              ) : (
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
                  <path d="M4 7H20" />
                  <path d="M4 12H20" />
                  <path d="M4 17H20" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ========================================================
           MOBILE NAVIGATION
        ======================================================== */}

        {mobileMenuOpen && (
          <div
            className="
              lg:hidden
              border-t
              border-slate-200
              dark:border-white/10
              px-4 py-3
            "
          >
            <ul
              className="
                flex flex-col
                text-sm
                font-medium
                text-slate-700
                dark:text-slate-300
                gap-1
              "
            >

              {/* HOME */}

              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={getMobileNavLinkClass("/")}
                >
                  Home
                </Link>
              </li>

              {/* ABOUT */}

              <li>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className={getMobileNavLinkClass(
                    "/about"
                  )}
                >
                  About Us
                </Link>
              </li>

              {/* SERVICES */}

              <li>
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(
                      (previous) => !previous
                    )
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    justify-between
                    px-3 py-2.5
                    rounded-xl
                    hover:bg-blue-50
                    dark:hover:bg-white/5
                    ${
                      currentPath.startsWith(
                        "/services"
                      )
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : ""
                    }
                  `}
                >
                  <span>Services</span>

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`
                      transition-transform
                      duration-300
                      ${
                        mobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-3 pb-1">
                    {SERVICES_ITEMS.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="
                          block
                          px-3 py-2
                          rounded-xl
                          text-sm
                          hover:bg-blue-50
                          dark:hover:bg-white/5
                        "
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* CONTACT */}

              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={getMobileNavLinkClass(
                    "/contact"
                  )}
                >
                  Contact
                </Link>
              </li>

              {/* MOBILE AUTH */}

              <li className="pt-2 flex gap-2">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="
                    flex-1
                    text-center
                    px-3 py-2.5
                    rounded-xl
                    border
                    border-slate-200
                    dark:border-white/10
                    font-semibold
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="
                    flex-1
                    text-center
                    px-3 py-2.5
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-semibold
                    shadow-sm
                  "
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
