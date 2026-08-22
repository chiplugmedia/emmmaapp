import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [genMsg, setGenMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setGenMsg("Thank you! Your message has been sent successfully.");
  };

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              {/* Heading */}
              <h1 className="mt-4 max-w-[720px] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Contact{" "}
                <em className="font-extrabold italic text-[#052da7] dark:text-blue-400 not-italic">
                  Us
                </em>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-[520px] text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Have a question about a vehicle, a partnership package, or your
                account? Send us a message and our team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT GRID
      ====================================================== */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ============ CONTACT INFO ============ */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-6 space-y-6 shadow-sm">
             

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#052da7]/10 dark:bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#052da7] dark:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2 7 12 13 22 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">
                    support@emmmar.com
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#052da7]/10 dark:bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#052da7] dark:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Business Hours
                  </p>
                  <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">
                    Monday – Friday: 8:00 AM – 6:00 PM
                    <br />
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                </div>
              </div> */}
            </div>

            {/* Social links */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-6 shadow-sm">
              <p className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook",
                    path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.5V12H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3v-1.5c0-.6.4-1 1-1z",
                  },
                  {
                    name: "Instagram",
                    custom: (
                      <g stroke="currentColor" strokeWidth="2" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="3.5" />
                        <circle cx="17.2" cy="6.8" r="1" />
                      </g>
                    ),
                  },
                  {
                    name: "X",
                    path: "M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6z",
                  },
                  {
                    name: "LinkedIn",
                    path: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-slate-800 hover:bg-[#052da7] dark:hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-700 dark:text-slate-300"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {social.custom || <path d={social.path} />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ============ CONTACT FORM ============ */}
          {/* <div className="lg:col-span-3">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
              {genMsg && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {genMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#052da7] dark:focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#052da7] dark:focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number{" "}
                      <span className="text-slate-400 dark:text-slate-500 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#052da7] dark:focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#052da7] dark:focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#052da7] dark:focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#052da7] dark:bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#041f74] dark:hover:bg-blue-500 active:scale-95 shadow-md shadow-blue-900/10"
                >
                  Send Message
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
