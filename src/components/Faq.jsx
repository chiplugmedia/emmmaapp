import React, { useState } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is Emmmar Motors?",
    answer:
      "Emmmar Motors is a transportation, logistics, import and export, and vehicle management company committed to delivering reliable commercial solutions while creating investment opportunities for individuals and businesses.",
  },
  {
    id: 2,
    question: "Who can become an investor?",
    answer:
      "Any individual who is at least 18 years old and successfully completes the registration and verification process may apply to become an investor, subject to approval by EMMMAR MOTORS.",
  },
  {
    id: 3,
    question: "How do I create an account?",
    answer:
      "Click the Create Account button on our website, complete the registration form, verify your email or phone number if applicable, and log in to your dashboard.",
  },
  {
    id: 4,
    question: "Do I need to complete my profile after registration?",
    answer:
      "Yes. After creating your account, you will be required to complete your profile by providing the necessary personal, banking, and identity verification information before accessing certain platform features.",
  },
  {
    id: 5,
    question: "Why is identity verification (KYC) required?",
    answer:
      "Identity verification helps protect your account, prevent fraud, comply with applicable regulations, and ensure the security of all investors.",
  },
  {
    id: 6,
    question: "What investment packages are available?",
    answer:
      "EMMMAR MOTORS offers multiple investment packages designed to meet different investment capacities. Full details of each package can be found on the Investment Packages page.",
  },
  {
    id: 7,
    question: "Can I purchase more than one investment package?",
    answer:
      "Yes. Eligible investors may purchase multiple investment packages in accordance with the company's policies and available opportunities.",
  },
  {
    id: 8,
    question: "How do I purchase an investment package?",
    answer:
      "Log in to your account, select your preferred investment package, review the applicable agreement, and complete the payment through our approved payment channels.",
  },
  {
    id: 9,
    question: "How are investment earnings managed?",
    answer:
      "Investment funds are deployed into EMMMAR MOTORS' transportation, logistics, import and export, vehicle management, and other approved commercial operations. Earnings are managed and distributed according to the applicable investment terms.",
  },
  {
    id: 10,
    question: "What payment methods are accepted?",
    answer:
      "EMMMAR MOTORS accepts payments through approved payment methods available on the platform.",
  },
  {
    id: 11,
    question: "How do I request a withdrawal?",
    answer:
      "Log in to your dashboard, navigate to the Withdrawal section, enter your withdrawal request, and submit it for processing.",
  },
  {
    id: 12,
    question: "How long does it take to process withdrawals?",
    answer:
      "Withdrawal requests are processed according to EMMMAR MOTORS' operational schedule, subject to account verification and compliance checks.",
  },
  {
    id: 13,
    question: "Can I request a refund?",
    answer:
      "Yes. Refund requests may be submitted within seven (7) days of making an investment payment, subject to the company's Refund Policy and applicable investment terms.",
  },
  {
    id: 14,
    question: "Can I update my personal information?",
    answer:
      "Yes. Certain profile information can be updated from your account dashboard. Some changes may require additional verification for security purposes.",
  },
  {
    id: 15,
    question: "What happens if I forget my password?",
    answer:
      "Click the Forgot Password option on the login page and follow the instructions to securely reset your password.",
  },
  {
    id: 16,
    question: "Is my personal information secure?",
    answer:
      "Yes. EMMMAR MOTORS is committed to protecting your personal information and maintaining appropriate security measures to safeguard user data.",
  },
  {
    id: 17,
    question: "What should I do if I notice suspicious activity on my account?",
    answer:
      "Immediately contact our customer support team through our official support channels so that appropriate action can be taken to secure your account.",
  },
  {
    id: 18,
    question: "Can I share my account with someone else?",
    answer:
      "No. Every account is personal to the registered user. Sharing login credentials or allowing another person to operate your account is prohibited.",
  },
  {
    id: 19,
    question: "Where can I read the company policies?",
    answer:
      "All company policies, including our Privacy Policy, Refund Policy, Payment & Withdrawal Policy, and other important documents, are available on our website.",
  },
  {
    id: 20,
    question: "How can I contact EMMMAR MOTORS?",
    answer:
      "You can contact our support team through the official communication channels listed on our Contact Us page.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="relative overflow-hidden min-h-screen py-24 sm:py-28 px-5 sm:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />


      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            Help Center
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Frequently Asked{" "}
            <span className="block text-blue-600 dark:text-blue-400">
              Questions
            </span>
          </h1>

          <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Find answers about registration, investments, withdrawals, account
            security, verification, company policies and much more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_DATA.map(({ id, question, answer }) => {
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className={`rounded-3xl overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 dark:border-blue-500/30"
                    : "border-slate-200/80 dark:border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:bg-slate-50/70 dark:hover:bg-white/[0.03] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        isOpen
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {String(id).padStart(2, "0")}
                    </span>
                    <span className="pr-2">{question}</span>
                  </div>

                  <span
                    className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 border-blue-600 text-white rotate-180"
                        : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 dark:border-white/10">
                      <p className="pl-0 sm:pl-[52px] text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
