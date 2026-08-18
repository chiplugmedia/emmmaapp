import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
     
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            Privacy Policy
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Privacy &{" "}
            <em className="font-extrabold italic text-blue-600 dark:text-blue-400">
              Data Protection
            </em>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Learn how EMMMAR MOTORS collects, uses, protects, and manages your
            personal information when you use our platform and services.
          </p>

          {/* Last Updated */}
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-500">
            Last updated: July 21, 2026
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
          POLICY CONTENT
      ====================================================== */}

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <div className="rounded-[2rem] overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 space-y-12 text-slate-600 dark:text-slate-400">
            {/* =====================================================
                SECTION 1
            ====================================================== */}

            <PolicySection number="01" title="Privacy Policy">
              <p>
                EMMMAR MOTORS respects your privacy and is committed to
                protecting the personal information you provide when using our
                website, platform, products, and services.
              </p>

              <p>
                This Privacy Policy explains what information we may collect,
                how we use it, how we protect it, and the circumstances under
                which it may be disclosed.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 2
            ====================================================== */}

            <PolicySection number="02" title="Information We Collect">
              <p>
                We may collect information that you provide directly to us when
                creating an account, completing your profile, contacting
                support, or using our services.
              </p>

              <PolicySubheading>Information may include:</PolicySubheading>

              <PolicyList
                items={[
                  "Full name",
                  "Email address",
                  "Phone number",
                  "Residential or contact information",
                  "Banking and payment information",
                  "National Identification Number (NIN)",
                  "Passport photograph or other identification documents",
                  "Account and transaction information",
                ]}
              />
            </PolicySection>

            {/* =====================================================
                SECTION 3
            ====================================================== */}

            <PolicySection number="03" title="How We Use Your Information">
              <p>
                Information collected through our platform may be used for
                legitimate business and operational purposes.
              </p>

              <PolicySubheading>
                We may use your information for:
              </PolicySubheading>

              <PolicyList
                items={[
                  "Creating and managing your account",
                  "Identity verification and KYC compliance",
                  "Processing payments and transactions",
                  "Processing withdrawals",
                  "Providing customer support",
                  "Improving our services and platform",
                  "Preventing fraud and unauthorized activity",
                  "Maintaining platform security",
                  "Complying with applicable laws and regulations",
                ]}
              />
            </PolicySection>

            {/* =====================================================
                SECTION 4
            ====================================================== */}

            <PolicySection number="04" title="Identity Verification (KYC)">
              <p>
                To protect our users and maintain the security and integrity of
                our platform, certain services may require identity
                verification.
              </p>

              <p>
                Verification may include the submission of identification
                documents and other information necessary to confirm your
                identity.
              </p>

              <p>
                EMMMAR MOTORS may request additional information where
                reasonably necessary for security, compliance, or account
                verification purposes.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 5
            ====================================================== */}

            <PolicySection
              number="05"
              title="Payment & Transaction Information"
            >
              <p>
                When you make payments, deposits, withdrawals, or other
                transactions through our platform, certain transaction
                information may be collected and processed.
              </p>

              <p>
                We use this information to process transactions, maintain
                accurate account records, detect suspicious activity, and
                provide transaction-related support.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 6
            ====================================================== */}

            <PolicySection number="06" title="How We Protect Your Information">
              <p>
                EMMMAR MOTORS takes reasonable administrative, technical, and
                organizational measures to protect personal information against
                unauthorized access, misuse, alteration, disclosure, or
                destruction.
              </p>

              <p>
                However, no method of electronic transmission or storage can be
                guaranteed to be completely secure.
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
                <p className="font-semibold text-blue-700 dark:text-blue-300">
                  EMMMAR MOTORS will never request your password or transaction
                  PIN through unofficial communication channels.
                </p>
              </div>
            </PolicySection>

            {/* =====================================================
                SECTION 7
            ====================================================== */}

            <PolicySection number="07" title="Information Sharing">
              <p>EMMMAR MOTORS does not sell your personal information.</p>

              <p>
                We may share information with trusted service providers,
                financial institutions, technology providers, regulators, law
                enforcement authorities, or other relevant parties where
                necessary to provide services, protect users, prevent fraud, or
                comply with applicable legal requirements.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 8
            ====================================================== */}

            <PolicySection number="08" title="Cookies & Website Usage">
              <p>
                Our website may use cookies and similar technologies to improve
                functionality, understand website usage, maintain sessions, and
                enhance the user experience.
              </p>

              <p>
                You may be able to manage cookie preferences through your
                browser settings, although disabling certain cookies may affect
                some website functionality.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 9
            ====================================================== */}

            <PolicySection number="09" title="Account Security">
              <PolicyList
                items={[
                  "Keep your password and transaction PIN confidential.",
                  "Never share your login credentials with another person.",
                  "Use strong and unique account credentials.",
                  "Report suspected unauthorized access immediately.",
                  "Keep your personal and contact information up to date.",
                ]}
              />

              <p className="font-semibold text-slate-900 dark:text-white">
                You are responsible for maintaining the confidentiality of your
                account credentials and for activity carried out through your
                account.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 10
            ====================================================== */}

            <PolicySection number="10" title="Your Rights & Choices">
              <p>
                Depending on applicable laws and regulations, you may have
                certain rights regarding your personal information.
              </p>

              <PolicyList
                items={[
                  "Request access to certain personal information we hold about you.",
                  "Request correction of inaccurate information.",
                  "Request updates to your personal information.",
                  "Ask questions about how your information is processed.",
                  "Request deletion of information where legally applicable.",
                ]}
              />
            </PolicySection>

            {/* =====================================================
                SECTION 11
            ====================================================== */}

            <PolicySection number="11" title="Data Retention">
              <p>
                We retain personal information for as long as reasonably
                necessary to provide our services, maintain business and
                transaction records, resolve disputes, prevent fraud, and comply
                with applicable legal and regulatory requirements.
              </p>
            </PolicySection>

            {/* =====================================================
                SECTION 12
            ====================================================== */}

            <PolicySection number="12" title="Changes to This Privacy Policy">
              <p>
                EMMMAR MOTORS may update this Privacy Policy from time to time
                to reflect changes in our services, business practices, security
                measures, or applicable legal requirements.
              </p>

              <p>
                Any updated version will be published on this page with the
                corresponding revision date.
              </p>
            </PolicySection>

            {/* =====================================================
                SIGN OFF
            ====================================================== */}

            <div className="pt-10 border-t border-slate-200 dark:border-white/10">
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
      </main>
    </div>
  );
}

/* =========================================================
   REUSABLE POLICY COMPONENTS
========================================================= */

function PolicySection({ number, title, children }) {
  return (
    <section className="relative">
      <div className="flex items-start gap-4 sm:gap-5">

        {/* Number */}
        <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
          {number}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed">
            {children}
          </div>

        </div>
      </div>
    </section>
  );
}

function PolicySubheading({ children }) {
  return (
    <p className="font-semibold text-slate-900 dark:text-slate-200">
      {children}
    </p>
  );
}

function PolicyList({ items }) {
  return (
    <ul className="space-y-3 mt-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
          <span className="mt-1.5 shrink-0 w-4 h-4 rounded-[4px] border border-blue-300 dark:border-blue-500/40 bg-white dark:bg-blue-500/10 flex items-center justify-center">

            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600 dark:text-blue-400"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>

          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}