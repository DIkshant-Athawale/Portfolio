import type { EducationItem } from "@/data/education";

interface TimelineItemProps {
  item: EducationItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-center">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute hidden md:block left-1/2 top-[60px] w-[2px] bg-gradient-to-b from-indigo-500/40 to-transparent -translate-x-1/2 z-0"
          style={{ height: "calc(100% + 4rem)" }}
        />
      )}

      {/* Content row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 w-full items-center">
        {/* Left content */}
        <div
          style={{
            "--reveal-x": isLeft ? "-40px" : "40px",
            "--reveal-y": "0px",
            "--reveal-delay": "0.2s",
          } as React.CSSProperties}
          className={`reveal ${isLeft ? "" : "md:order-3"} ${isLeft ? "md:text-right" : "md:text-left"}`}
        >
          <div className={`p-4 sm:p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-md`}>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: item.color }}
            >
              {item.year}
            </span>
            <h3 className="font-heading font-bold text-primary text-lg mt-2">
              {item.degree}
            </h3>
            <p className="text-secondary text-sm mt-1">{item.institution}</p>
            {item.university && (
              <p className="text-white/30 text-xs mt-1">{item.university}</p>
            )}
            {item.location && (
              <p className="text-white/25 text-xs mt-1">{item.location}</p>
            )}
          </div>
        </div>

        {/* Center dot */}
        <div
          style={{ "--reveal-scale": "0", "--reveal-y": "0px", "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="reveal relative z-10 hidden md:flex items-center justify-center"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-primary"
            style={{ borderColor: item.color }}
          >
            <Icon size={20} style={{ color: item.color }} />
          </div>
          <div
            className="absolute w-12 h-12 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: item.color }}
          />
        </div>

        {/* Right spacer (empty on alternating sides) */}
        <div className={`hidden md:block ${isLeft ? "md:order-3" : ""}`} />
      </div>
    </div>
  );
}
