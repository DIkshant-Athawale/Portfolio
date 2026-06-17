"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function GitHubGraph() {
  // Generate mock contribution data for the last 52 weeks
  const data = useMemo(() => {
    const weeks: number[][] = [];
    for (let w = 0; w < 52; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Simulate realistic contribution patterns
        const rand = Math.random();
        if (rand < 0.3) week.push(0);
        else if (rand < 0.55) week.push(1);
        else if (rand < 0.75) week.push(2);
        else if (rand < 0.9) week.push(3);
        else week.push(4);
      }
      weeks.push(week);
    }
    return weeks;
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "bg-white/[0.04]",
      "bg-indigo-900/60",
      "bg-indigo-700/60",
      "bg-indigo-500/70",
      "bg-indigo-400/80",
    ];
    return colors[level];
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
        <h3 className="font-heading font-semibold text-primary text-base">
          Contribution Activity
        </h3>
        <span className="text-xs text-white/30 ml-auto">Last 12 months</span>
      </div>

      {/* Month labels */}
      <div className="flex gap-0 mb-2 ml-0">
        {months.map((m, i) => (
          <span
            key={i}
            className="text-[10px] text-white/25"
            style={{ width: `${100 / 12}%` }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Graph grid */}
      <div className="flex gap-[3px] overflow-hidden">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <motion.div
                key={`${wi}-${di}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: (wi * 7 + di) * 0.001,
                }}
                className={`w-[10px] h-[10px] rounded-[2px] ${getColor(level)} transition-colors hover:ring-1 hover:ring-white/20`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 justify-end">
        <span className="text-[10px] text-white/30">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-[10px] h-[10px] rounded-[2px] ${getColor(level)}`}
          />
        ))}
        <span className="text-[10px] text-white/30">More</span>
      </div>
    </motion.div>
  );
}
