import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* =====================================================
          BACKGROUND UI DESIGN
      ====================================================== */}

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            Terms &amp; Conditions
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Terms &amp;{" "}
            <em className="font-extrabold italic text-blue-600 dark:text-blue-400">
              Conditions
            </em>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Please read these terms carefully before accessing or using the
            EMMMAR MOTORS platform and its services.
          </p>

          {/* Last Updated */}
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-500">
            Last updated: July 20, 2026
          </p>

          {/* Small UI indicators */}
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            <span className="w-10 h-px bg-slate-300 dark:bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
      ====================================================== */}

      <section
        id="terms"
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-24"
      >
        <div className="rounded-[2rem] overflow-hidden">
          {/* Content */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-10">
            {/* Main Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Terms &amp; Conditions
              </h2>

              <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
                By accessing, registering, or using the EMMMAR MOTORS platform,
                you agree to comply with and be bound by the following Terms
                &amp; Conditions.
              </p>
            </div>

            {/* =====================================================
                SECTION 1
            ====================================================== */}

            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                  01
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Account Registration &amp; Usage
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
                    By creating an account with EMMMAR MOTORS, you agree to the
                    following:
                  </p>

                  <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        All information provided during registration must be
                        accurate and complete.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        Each individual is permitted to operate only one
                        personal account unless otherwise approved by the
                        company.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        Accounts are personal and must not be shared with
                        others.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        Fraudulent activities, impersonation, identity theft, or
                        any attempt to manipulate the platform may result in
                        immediate account suspension or termination.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        Investors are expected to comply with all platform
                        policies and operational guidelines.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* =====================================================
                SECTION 2
            ====================================================== */}

            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                  02
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    General Legal Provisions
                  </h3>

                  <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        EMMMAR MOTORS reserves the right to update, modify, or
                        revise these Terms &amp; Conditions at any time without
                        prior notice. Continued use of the platform constitutes
                        acceptance of any changes.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        EMMMAR MOTORS shall not be held liable for any losses,
                        damages, or claims arising from the use of its services,
                        except as required by applicable law.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        These Terms &amp; Conditions shall be governed by and
                        construed in accordance with the laws of the
                        jurisdiction in which EMMMAR MOTORS operates.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>
                        Any disputes arising from or relating to these Terms
                        &amp; Conditions shall be resolved through amicable
                        negotiation. If unresolved, disputes shall be referred
                        to the appropriate legal authorities.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* =====================================================
                IMPORTANT NOTICE
            ====================================================== */}

            <div className="p-5 sm:p-6 rounded-3xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Important Notice
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    By continuing to use the EMMMAR MOTORS platform, you
                    acknowledge that you have read, understood, and agreed to
                    these Terms &amp; Conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                SIGN OFF
            ====================================================== */}

            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  EMMMAR MOTORS Company Limited
                </h3>

                <p className="mt-2 text-blue-600 dark:text-blue-400 font-semibold">
                  Partner With Confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   CHECK ICON
========================================================= */

function CheckIcon() {
  return (
    <span className="mt-1 shrink-0 w-5 h-5 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">

      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12l4 4L19 6" />
      </svg>

    </span>
  );
}