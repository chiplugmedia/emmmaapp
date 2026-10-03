import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ==========================================================
   ICONS
========================================================== */
const Icon = ({ children, className = "w-4 h-4", ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

const BellIcon = (p) => (
  <Icon {...p}>
    <path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10.3 21a1.9 1.9 0 003.4 0" />
  </Icon>
);
const HelpIcon = (p) => (
  <Icon {...p}>
    <path d="M9.5 9a2.5 2.5 0 114 2c-.9.6-1.5 1.1-1.5 2.2" />
    <path d="M12 17h.01" />
  </Icon>
);
const EyeIcon = (p) => (
  <Icon {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);
const PlusIcon = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);
const ArrowUpRightIcon = (p) => (
  <Icon {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Icon>
);
const ArrowUpIcon = (p) => (
  <Icon {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Icon>
);
const ArrowDownIcon = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </Icon>
);
const SearchIcon = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Icon>
);
const ChevronLeftIcon = (p) => (
  <Icon {...p}>
    <path d="M15 18l-6-6 6-6" />
  </Icon>
);
const ChevronDownIcon = (p) => (
  <Icon {...p}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);
const CalendarIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);
const HomeIcon = (p) => (
  <Icon {...p}>
    <path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2z" />
  </Icon>
);
const LayersIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2l10 5-10 5L2 7z" />
    <path d="M2 12l10 5 10-5M2 17l10 5 10-5" />
  </Icon>
);
const BagIcon = (p) => (
  <Icon {...p}>
    <path d="M6 7h12l1 13H5z" />
    <path d="M9 7a3 3 0 016 0" />
  </Icon>
);
const SwapIcon = (p) => (
  <Icon {...p}>
    <path d="M17 3l4 4-4 4M21 7H8M7 21l-4-4 4-4M3 17h13" />
  </Icon>
);
const UserIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0116 0" />
  </Icon>
);

/* ==========================================================
   PLANS DATA (React conversion of PHP query)
========================================================== */
const INVESTMENT_PLANS = [
  {
    id: 1,
    title: "Starter Fleet",
    description: "Weekly ROI distribution with full capital refund",
    price: 250000,
    daily: 14420,
    firstweek: 14420,
    duration: 26,
    reference: "PLAN-STARTER",
    iconPath: "/emma/img/emmalightmood.png",
  },
  {
    id: 2,
    title: "Growth Fleet",
    description: "Medium tier investment package with steady payout",
    price: 500000,
    daily: 28846,
    firstweek: 28846,
    duration: 26,
    reference: "PLAN-GROWTH",
    iconPath: "/emma/img/emmalightmood.png",
  },
  {
    id: 3,
    title: "Executive Logistics",
    description: "High yields with priority vehicle management",
    price: 1000000,
    daily: 57692,
    firstweek: 57692,
    duration: 26,
    reference: "PLAN-EXEC",
    iconPath: "/emma/img/emmalightmood.png",
  },
  {
    id: 4,
    title: "Enterprise Fleet",
    description: "Maximum returns with maximum asset protection",
    price: 2500000,
    daily: 144230,
    firstweek: 144230,
    duration: 26,
    reference: "PLAN-ENTERPRISE",
    iconPath: "/emma/img/emmalightmood.png",
  },
];

/* Helper to format currency */
const formatNaira = (num) =>
  new Intl.NumberFormat("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);

/* ==========================================================
   AVAILABLE PLANS COMPONENT (Converted from PHP to React)
========================================================== */
function AvailablePlans({ plans = INVESTMENT_PLANS, onSelectPlan }) {
  return (
    <div id="opportunityContent" className="mt-3.5 px-2.5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900 dark:text-white">
          <span className="w-3.5 h-[2px] bg-blue-600 dark:bg-blue-500 rounded-full" />
          Available Plans
        </h2>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold text-[8.5px] flex items-center gap-0.5"
        >
          Find More →
        </a>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
        {plans.length > 0 ? (
          plans.map((plan) => {
            const totalIncome =
              plan.firstweek + plan.daily * (plan.duration - 1);

            return (
              <button
                key={plan.id || plan.reference}
                type="button"
                onClick={() => onSelectPlan && onSelectPlan(plan)}
                className="text-left block min-w-[200px] max-w-[200px] transition-all bg-white dark:bg-[#0A1128] border border-slate-200 dark:border-blue-900/50 rounded-xl p-3 hover:border-blue-300 dark:hover:border-blue-600 snap-start shrink-0 shadow-sm"
              >
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <span className="w-3 h-[2px] block bg-blue-600 dark:bg-blue-500 rounded-full mb-0.5" />
                    <h2 className="text-[11px] font-extrabold text-slate-900 dark:text-white tracking-tight truncate leading-tight">
                      {plan.title}
                    </h2>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-dashed border-blue-300 dark:border-blue-700 flex items-center justify-center shrink-0 p-1 bg-blue-50/50 dark:bg-blue-950/30">
                    <img
                      src={plan.iconPath}
                      alt="Feature Icon"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="text-[13px] font-extrabold text-slate-900 dark:text-white mt-1.5 mb-2">
                  ₦{formatNaira(plan.price)}
                </p>

                <hr className="border-slate-100 dark:border-blue-900/50 mb-2" />

                <div className="grid grid-cols-2 gap-y-2 gap-x-1 mb-3 text-[7.5px]">
                  <div>
                    <p className="font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                      Weekly ROI
                    </p>
                    <p className="font-bold text-slate-800 dark:text-white">
                      ₦{formatNaira(plan.daily)}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                      First Wk ROI
                    </p>
                    <p className="font-bold text-slate-800 dark:text-white">
                      ₦{formatNaira(plan.firstweek)}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                      Duration
                    </p>
                    <p className="font-bold text-slate-800 dark:text-white">
                      {plan.duration} Weeks
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                      Total Income
                    </p>
                    <p className="font-bold text-slate-800 dark:text-white">
                      ₦{formatNaira(totalIncome)}
                    </p>
                  </div>
                </div>

                <span className="w-full flex items-center justify-center gap-1 border border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-500 font-semibold py-1 rounded-lg text-[8px] hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors">
                  View Details
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            );
          })
        ) : (
          <div className="w-full text-center py-6 bg-white dark:bg-[#0A1128] rounded-xl border border-slate-200 dark:border-blue-900/50">
            <p className="text-slate-500 dark:text-slate-400 text-[9px] font-medium">
              No investment plans available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================
   APP SHOWCASE ANIMATION STYLES
   (unique per-phone entrance + independent float loops)
========================================================== */
function ShowcaseStyles() {
  return (
    <style>{`
      @keyframes emmaFadeInRight {
        0% {
          opacity: 0;
          transform: translate3d(56px, 24px, 0) rotate(2deg) scale(0.94);
          filter: blur(6px);
        }
        60% {
          opacity: 1;
          filter: blur(0px);
        }
        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0) rotate(6deg) scale(1);
          filter: blur(0px);
        }
      }

      @keyframes emmaFadeInLeft {
        0% {
          opacity: 0;
          transform: translate3d(-56px, 36px, 0) rotate(-2deg) scale(0.94);
          filter: blur(6px);
        }
        60% {
          opacity: 1;
          filter: blur(0px);
        }
        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0) rotate(-6deg) scale(1);
          filter: blur(0px);
        }
      }

      @keyframes emmaFloatA {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(6deg); }
        50%      { transform: translate3d(0, -10px, 0) rotate(6.6deg); }
      }

      @keyframes emmaFloatB {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(-6deg); }
        50%      { transform: translate3d(0, -14px, 0) rotate(-5.3deg); }
      }

      @keyframes emmaGlowPulse {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 0.9; }
      }

      .emma-phone-enter {
        opacity: 0;
        will-change: transform, opacity, filter;
      }

      .emma-phone-enter.emma-in-view {
        animation-fill-mode: forwards;
      }

      .emma-phone-back.emma-in-view {
        animation:
          emmaFadeInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both,
          emmaFloatA 6.5s ease-in-out 0.9s infinite;
      }

      .emma-phone-front.emma-in-view {
        animation:
          emmaFadeInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both,
          emmaFloatB 7.5s ease-in-out 1.08s infinite;
      }

      .emma-glow {
        animation: emmaGlowPulse 5s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .emma-phone-enter.emma-in-view,
        .emma-glow {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
        }
      }
    `}</style>
  );
}

/* ==========================================================
   APP SHOWCASE (light + dark mode)
========================================================== */

const card =
  "bg-white dark:bg-[#071f4d]/70 border border-slate-200 dark:border-blue-500/25 shadow-sm dark:shadow-none";

function Phone({ time, className = "", children }) {
  return (
    <div
      className={`absolute w-[260px] h-[540px] rounded-[44px] p-[3px]
        bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400
        dark:from-[#8fa2ff] dark:via-[#3b4bb8] dark:to-[#6d7cf0]
        
        ${className}`}
    >
      <div className="relative h-full w-full rounded-[41px] bg-black p-[5px]">
        <div className="relative h-full w-full rounded-[36px] overflow-hidden bg-slate-50 dark:bg-[#031333] text-slate-900 dark:text-white flex flex-col">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl"
          />

          <div className="relative z-10 flex items-center justify-between px-5 pt-2.5 text-[10px] font-semibold shrink-0">
            <span>{time}</span>
            <div className="flex items-center gap-1">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="0" y="6" width="2" height="3" rx="0.6" />
                <rect x="4" y="4" width="2" height="5" rx="0.6" />
                <rect x="8" y="2" width="2" height="7" rx="0.6" />
                <rect x="12" y="0" width="2" height="9" rx="0.6" />
              </svg>
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="16"
                  height="9"
                  rx="2.5"
                  stroke="currentColor"
                  opacity="0.5"
                />
                <rect
                  x="2"
                  y="2"
                  width="13"
                  height="6"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  x="17.5"
                  y="3"
                  width="2"
                  height="4"
                  rx="1"
                  fill="currentColor"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          <div className="absolute left-1/2 top-2 z-20 h-[16px] w-[70px] -translate-x-1/2 rounded-full bg-black" />

          {children}

          <div className="absolute bottom-1 left-1/2 z-30 h-[3px] w-20 -translate-x-1/2 rounded-full bg-slate-900/70 dark:bg-white/80" />
        </div>
      </div>
    </div>
  );
}

const EXPLORE_ITEMS = [
  { title: "Emmmar Motors HQ", src: "/emma/img/dash001.png" },
  { title: "Our Fleet", src: "/emma/img/dash002.png" },
  { title: "Logistics", src: "/emma/img/dash003.png" },
];

function BottomNav({ items, active }) {
  return (
    <div
      className="mt-auto z-20 bg-white/95 dark:bg-slate-900/95
        backdrop-blur-xl border-t border-slate-200 dark:border-slate-800
        px-2 pt-2 pb-4 shrink-0 shadow-lg"
    >
      <nav className="flex items-start justify-around gap-1">
        {items.map(({ label, Ico }) => {
          const on = label === active;
          return (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`flex flex-1 basis-0 flex-col items-center justify-start gap-0.5 text-center transition-colors duration-200 ${
                on
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <Ico className="h-[18px] w-[18px]" />
              <span className="w-full text-[9px] font-medium leading-tight">
                {label}
              </span>
              <span
                className={`mt-0.5 h-[2px] w-3 rounded-full transition-all ${
                  on ? "bg-blue-600 dark:bg-blue-400" : "bg-transparent"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

/* ---------- Left screen: Home ---------- */
function HomeScreen() {
  const handleSelectPlan = (plan) => {
    console.log("Selected plan:", plan);
  };

  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden pt-1">
      <div className="flex-1 overflow-y-auto pb-6 scrollbar-none">
        {/* Header */}
        <div className="flex items-center gap-2 px-3 pt-2">
          <div className="h-7 w-7 rounded-full bg-slate-900 dark:bg-black ring-2 ring-blue-500/50" />
          <div className="flex-1 leading-tight">
            <p className="text-[10px] font-bold">Hi, Samuel 👋</p>
            <p className="text-[7.5px] text-slate-500 dark:text-blue-200/70">
              Start Saving &amp; Investing
            </p>
          </div>
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#0a2757] border border-slate-200 dark:border-blue-500/25">
            <BellIcon className="w-3 h-3" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[6px] font-bold text-white">
              4
            </span>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#0a2757] border border-slate-200 dark:border-blue-500/25">
            <HelpIcon className="w-3 h-3" />
          </div>
        </div>

        {/* Balance card */}
        <div className="mx-2.5 mt-2.5 rounded-xl p-2.5 text-white bg-gradient-to-br from-[#0a4bd6] via-[#0b3fb0] to-[#06246b] shadow-md border border-white/10">
          <div className="flex items-start justify-between">
            <p className="text-[8.5px] text-blue-100/90">Available balance</p>
            <EyeIcon className="w-3 h-3 text-blue-100" />
          </div>
          <h3 className="mt-1 text-[19px] font-extrabold tracking-tight leading-none">
            ₦41,528,355.00
          </h3>

          <div className="mt-2.5 flex gap-1.5">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-md bg-blue-500 py-1 text-[9px] font-semibold shadow-sm">
              <PlusIcon className="w-2.5 h-2.5" /> Add money
            </button>
            <button className="flex flex-1 items-center justify-center gap-1 rounded-md border border-white/40 py-1 text-[9px] font-semibold">
              <ArrowUpRightIcon className="w-2.5 h-2.5" /> Withdraw
            </button>
          </div>

          <div className="mt-2 rounded bg-black/25 px-1.5 py-0.5 text-[7.5px] text-blue-100">
            EMMMARMOTORSC/O... &nbsp;•&nbsp; 9614283464
          </div>
        </div>

        {/* Stats */}
        <div className="mt-2 grid grid-cols-2 gap-1.5 px-2.5">
          {[
            ["Total Invested", "₦17,500,000.00"],
            ["Total Profit", "₦6,000,450.00"],
          ].map(([label, value]) => (
            <div key={label} className={`${card} rounded-lg p-2`}>
              <p className="text-[7.5px] text-slate-500 dark:text-blue-200/70">
                {label}
              </p>
              <p className="mt-0.5 text-[10px] font-extrabold">{value}</p>
              <p className="mt-0.5 flex items-center gap-0.5 text-[7.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                <ArrowUpIcon className="w-2 h-2" /> 100%
              </p>
            </div>
          ))}
        </div>

        {/* Explore Section */}
        <p className="mt-2.5 px-3 text-[11px] font-bold">Explore</p>
        <div className="mt-1 flex gap-1.5 overflow-x-auto pl-2.5 pr-2.5 scrollbar-none pb-1">
          {EXPLORE_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`relative h-[72px] shrink-0 overflow-hidden rounded-lg border border-slate-200 dark:border-blue-500/25 bg-slate-200 dark:bg-[#0a2757] ${
                i === 0 ? "w-[140px]" : "w-[95px]"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-1.5 pb-1 pt-4">
                <p className="text-[7.5px] font-bold leading-none text-white truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AVAILABLE PLANS (ADDED DIRECTLY BELOW EXPLORE) */}
        {/* <AvailablePlans onSelectPlan={handleSelectPlan} /> */}
      </div>

      <BottomNav
        active="Home"
        items={[
          { label: "Home", Ico: HomeIcon },
          { label: "Units", Ico: LayersIcon },
          { label: "Investments", Ico: BagIcon },
          { label: "Transactions", Ico: SwapIcon },
          { label: "Account", Ico: UserIcon },
        ]}
      />
    </div>
  );
}

/* ---------- Right screen: Transaction History ---------- */
function TxRow({ title, time, amount, type = "Credited" }) {
  return (
    <div className={`${card} flex items-center gap-2 rounded-lg p-2`}>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
        <ArrowDownIcon className="w-2.5 h-2.5" />
      </div>
      <div className="flex-1 leading-tight">
        <p className="text-[9px] font-bold">{title}</p>
        <p className="text-[7.5px] text-slate-500 dark:text-blue-200/70">
          {time}
        </p>
      </div>
      <div className="text-right leading-tight">
        <p className="text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400">
          {amount}
        </p>
        <span className="mt-0.5 inline-block rounded-full bg-emerald-500/15 px-1 py-[1px] text-[6.5px] font-semibold text-emerald-700 dark:text-emerald-300">
          {type}
        </span>
      </div>
    </div>
  );
}

function TransactionsScreen() {
  return (
    <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden pt-1">
      <div className="flex-1 overflow-y-auto pb-6 scrollbar-none">
        <div className="px-3 pt-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
            <ChevronLeftIcon className="w-3 h-3" />
          </div>
          <h3 className="mt-2 text-[14px] font-extrabold leading-tight">
            Transaction History
          </h3>
          <p className="mt-0.5 text-[7.5px] text-slate-500 dark:text-blue-200/70">
            View and filter all your transactions.
          </p>
        </div>

        {/* Search */}
        <div className="px-2.5 mt-2">
          <div
            className={`${card} flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-slate-400 dark:text-blue-200/60`}
          >
            <SearchIcon className="w-2.5 h-2.5" />
            <span className="text-[8px]">Search transactions</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-1.5 flex gap-1.5 px-2.5">
          <div
            className={`${card} flex flex-1 items-center justify-between rounded-md px-1.5 py-1 text-[7.5px] text-slate-500 dark:text-blue-200/70`}
          >
            mm/dd/yyyy <CalendarIcon className="w-2.5 h-2.5" />
          </div>
          <div
            className={`${card} flex flex-1 items-center justify-between rounded-md px-1.5 py-1 text-[7.5px]`}
          >
            All Types <ChevronDownIcon className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* List */}
        <div className="mt-2 space-y-1.5 px-2.5">
          <p className="text-[7.5px] font-semibold text-slate-500 dark:text-blue-200/70">
            THU, SEP 24, 2026
          </p>
          <TxRow title="Wallet Top-up" time="11:15 AM" amount="+₦500,000.00" />

          <p className="pt-1 text-[7.5px] font-semibold text-slate-500 dark:text-blue-200/70">
            THU, SEP 10, 2026
          </p>
          <TxRow title="Weekly ROI" time="9:41 AM" amount="+₦72,115.00" />
          <TxRow
            title="Logistics Payout"
            time="2:30 PM"
            amount="+₦150,000.00"
          />

          <p className="pt-1 text-[7.5px] font-semibold text-slate-500 dark:text-blue-200/70">
            FRI, SEP 4, 2026
          </p>
          <TxRow title="Weekly ROI" time="5:01 PM" amount="+₦288,460.00" />
          <TxRow
            title="Fleet Remittance"
            time="1:12 PM"
            amount="+₦120,000.00"
          />
          <TxRow title="Weekly ROI" time="8:00 AM" amount="+₦95,000.00" />
        </div>
      </div>

      <BottomNav
        active="Transactions"
        items={[
          { label: "Units", Ico: LayersIcon },
          { label: "Investments", Ico: BagIcon },
          { label: "Transactions", Ico: SwapIcon },
          { label: "Account", Ico: UserIcon },
        ]}
      />
    </div>
  );
}

/* ---------- AppShowcase ---------- */
function AppShowcase() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          // reset so the entrance can replay if the user scrolls away and back
          setInView(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center h-[420px] sm:h-[500px] lg:h-[560px]"
    >
      <ShowcaseStyles />

      <div
        aria-hidden="true"
        className={`emma-glow pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 dark:bg-blue-500/25 blur-3xl ${
          inView ? "" : "opacity-0"
        }`}
      />

      <div className="relative w-[460px] h-[540px] shrink-0 scale-[0.68] xs:scale-[0.8] sm:scale-[0.9] lg:scale-100 transition-transform duration-300">
        <Phone
          time="4:21 PM"
          className={`emma-phone-enter emma-phone-back left-[190px] top-[10px] z-10 ${
            inView ? "emma-in-view" : ""
          }`}
        >
          <TransactionsScreen />
        </Phone>

        <Phone
          time="4:02 PM"
          className={`emma-phone-enter emma-phone-front left-[10px] top-[40px] z-20 ${
            inView ? "emma-in-view" : ""
          }`}
        >
          <HomeScreen />
        </Phone>
      </div>
    </div>
  );
}

/* ==========================================================
   MAIN HERO COMPONENT
========================================================== */
export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-28
        pb-16
        lg:pt-36
        lg:pb-24
        px-4
        sm:px-8
        bg-slate-50
        dark:bg-[#05070b]
        transition-colors
        duration-300
      "
    >
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-12
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
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
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-50 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </span>
              Welcome To Emmmar Motors Company
            </span>

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
              <span className="block text-blue-600 dark:text-blue-400">
                Confidence
              </span>
            </h1>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/explores"
                className="
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
                  transition-colors
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
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>

              <a
                href="https://play.google.com/store/apps/details?id=co.median.android.nmnlyyw&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-slate-900
                  hover:bg-slate-800
                  dark:bg-slate-800
                  dark:hover:bg-slate-700
                  text-white
                  px-5
                  py-2.5
                  rounded-xl
                  border
                  border-slate-800
                  dark:border-slate-700
                  shadow-sm
                  transition-colors
                "
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path
                    d="M99.617 8.057a50.091 50.091 0 00-38.867 19.808l232.06 232.06 112.57-112.57L99.617 8.057z"
                    fill="#00e676"
                  />
                  <path
                    d="M60.75 27.865a50.065 50.065 0 00-12.693 33.642v388.986a50.065 50.065 0 0012.693 33.642l232.06-232.06L60.75 27.865z"
                    fill="#00b0ff"
                  />
                  <path
                    d="M99.617 503.943l305.77-139.34-112.57-112.57L60.75 484.093a50.091 50.091 0 0038.867 19.85z"
                    fill="#ff3d00"
                  />
                  <path
                    d="M405.387 364.603l73.49-33.483c21.84-9.95 21.84-42.29 0-52.24l-73.49-33.483-112.57 112.57 112.57 112.57z"
                    fill="#ffc107"
                  />
                </svg>

                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 leading-none">
                    GET IT ON
                  </span>
                  <span className="text-sm font-bold leading-tight mt-0.5">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* TRUST UI */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#05070b] object-cover"
                  src="/emma/img/img100.jpg"
                  alt="African Model 1"
                />

                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#05070b] object-cover"
                  src="/emma/img/img200.png"
                  alt="African Model 2"
                />

                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#05070b] object-cover"
                  src="/emma/img/img004.jpg"
                  alt="African Model 3"
                />

                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#05070b] object-cover"
                  src="/emma/img/img0040.jpg"
                  alt="African Model 4"
                />
              </div>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Trusted by{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  12k+
                </span>{" "}
                investors
              </p>
            </div>
          </div>

          {/* RIGHT SHOWCASE */}
          <div className="relative flex justify-center items-center w-full">
            <AppShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
