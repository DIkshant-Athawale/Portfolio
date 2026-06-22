"use client";

import { motion } from "framer-motion";

// Static data — defined outside component so they're never recreated
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

const COLOR_MAP: Record<number, string> = {
  0: "bg-white/[0.04]",
  1: "bg-indigo-900/60",
  2: "bg-indigo-700/60",
  3: "bg-indigo-500/70",
  4: "bg-indigo-400/80",
};

// Deterministic seeded contribution data — computed once at module load
function generateContributionData(): number[][] {
  return Array.from({ length: 52 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const seed = (w * 7 + d) * 2654435761;
      const value = ((seed >>> 16) & 0xffff) / 0xffff;
      if (value < 0.3) return 0;
      if (value < 0.55) return 1;
      if (value < 0.75) return 2;
      if (value < 0.9) return 3;
      return 4;
    })
  );
}

const CONTRIBUTION_DATA = generateContributionData();

export default function GitHubGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm overflow-hidden"
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
        <h3 className="font-heading font-semibold text-primary text-base">
          Contribution Activity
        </h3>
        <span className="text-[10px] text-white/30 min-[380px]:ml-auto">Last 12 months</span>
      </div>

      {/* Month labels */}
      <div className="hidden sm:flex gap-0 mb-2">
        {MONTHS.map((m) => (
          <span
            key={m}
            className="text-[10px] text-white/25"
            style={{ width: `${100 / 12}%` }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Graph grid — plain divs, no per-cell Framer Motion */}
      <div className="flex justify-between gap-[2px] sm:gap-[3px]">
        {CONTRIBUTION_DATA.map((week, wi) => (
          <div key={wi} className="hidden odd:flex sm:flex flex-col gap-[2px] sm:gap-[3px]">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-[7px] h-[7px] sm:w-[10px] sm:h-[10px] rounded-[2px] ${COLOR_MAP[level]} transition-colors hover:ring-1 hover:ring-white/20`}
                aria-label={`${level} contribution${level !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 justify-end" aria-hidden="true">
        <span className="text-[10px] text-white/30">Less</span>
        {([0, 1, 2, 3, 4] as const).map((level) => (
          <div
            key={level}
            className={`w-[10px] h-[10px] rounded-[2px] ${COLOR_MAP[level]}`}
          />
        ))}
        <span className="text-[10px] text-white/30">More</span>
      </div>
    </motion.div>
  );
}
