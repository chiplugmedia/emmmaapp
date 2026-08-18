import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "emmmar_cookie_consent";
const COOKIE_DAYS = 180;

// Helper functions for cookie management
function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function Footer() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  // Check scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check cookie consent on mount
  useEffect(() => {
    const existingChoice = getCookie(COOKIE_NAME);
    if (!existingChoice) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAcceptCookies = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_DAYS);
    setShowCookieBanner(false);
    window.location.reload();
  };

  const handleDeclineCookies = () => {
    setCookie(COOKIE_NAME, "declined", COOKIE_DAYS);
    setShowCookieBanner(false);
  };

  const handleOpenCookieSettings = (e) => {
    e.preventDefault();
    setShowCookieBanner(true);
  };

  return (
    <>
      {/* ===================== FOOTER ===================== */}
      <footer className="bg-slate-950 text-slate-400 px-5 sm:px-8 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/emma/img/emmadarkmood.png"
                alt="Emmmar Motors Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-slate-400">
              At EMMMAR MOTORS, we are committed to delivering reliable
              transportation and commercial solutions through quality vehicles,
              efficient fleet operations, logistics, and responsible business
              practices. We operate with integrity, accountability, and
              reliability across Nigeria.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.5V12H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3v-1.5c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Vehicle Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>14 Independence Avenue, Abuja, Nigeria</li>
              <li>support@emmmar.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Emmmar Motors Company Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={handleOpenCookieSettings}
              className="hover:text-white transition-colors text-left bg-transparent border-0 p-0 text-xs text-slate-400 cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </footer>

      {/* ===================== SCROLL TO TOP BUTTON ===================== */}
      {showScrollBtn && (
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 z-40 w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {/* ===================== COOKIE CONSENT BANNER ===================== */}
      {showCookieBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-slate-950 border-t border-white/10 px-5 sm:px-8 py-5 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            <p className="text-sm text-slate-300 leading-relaxed">
              We use cookies to keep you signed in, remember your preferences,
              and understand how you use Emmmar Motors. Read our{" "}
              <Link to="/privacy" className="underline hover:text-white">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDeclineCookies}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 transition-colors focus:outline-none"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptCookies}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:outline-none"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
