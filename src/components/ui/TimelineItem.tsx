import type { EducationItem } from "@/data/education";

interface TimelineItemProps {
  item: EducationItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  /* ── Shared card content ── */
  const cardContent = (
    <>
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
    </>
  );

  return (
    <div className="relative w-full">
      {/* ── Timeline connector lines ── */}
      {!isLast && (
        <>
          {/* Mobile/tablet line — left gutter */}
          <div
            className="absolute lg:hidden left-5 top-5 w-[2px] bg-gradient-to-b from-indigo-500/40 to-transparent z-0"
            style={{ height: "calc(100% + 2rem)" }}
          />
          {/* Desktop line — exact center of container */}
          <div
            className="absolute hidden lg:block left-1/2 top-[60px] w-[2px] bg-gradient-to-b from-indigo-500/40 to-transparent -translate-x-1/2 z-0"
            style={{ height: "calc(100% + 4rem)" }}
          />
        </>
      )}

      {/* ═══ MOBILE / TABLET (< lg): icon + card row ═══ */}
      <div className="flex lg:hidden items-start gap-4">
        {/* Icon on left gutter */}
        <div
          style={{ "--reveal-scale": "0", "--reveal-y": "0px", "--reveal-delay": "0.1s" } as React.CSSProperties}
          className="reveal relative z-10 flex-shrink-0 flex items-center justify-center"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-primary"
            style={{ borderColor: item.color }}
          >
            <Icon size={18} style={{ color: item.color }} />
          </div>
          <div
            className="absolute w-10 h-10 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: item.color }}
          />
        </div>

        {/* Card fills remaining space */}
        <div
          style={{ "--reveal-x": "20px", "--reveal-y": "0px", "--reveal-delay": "0.2s" } as React.CSSProperties}
          className="reveal min-w-0 flex-1"
        >
          <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm">
            {cardContent}
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP (≥ lg): symmetric 3-column alternating layout ═══ */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-12 w-full">
        {/* Column 1 */}
        {isLeft ? (
          <div
            style={{ "--reveal-x": "-40px", "--reveal-y": "0px", "--reveal-delay": "0.2s" } as React.CSSProperties}
            className="reveal flex justify-end"
          >
            <div className="p-6 xl:p-8 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm text-right w-full max-w-md">
              {cardContent}
            </div>
          </div>
        ) : (
          <div />
        )}

        {/* Column 2: center icon */}
        <div className="flex items-center justify-center">
          <div
            style={{ "--reveal-scale": "0", "--reveal-y": "0px", "--reveal-delay": "0.1s" } as React.CSSProperties}
            className="reveal relative z-10 flex items-center justify-center"
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
        </div>

        {/* Column 3 */}
        {isLeft ? (
          <div />
        ) : (
          <div
            style={{ "--reveal-x": "40px", "--reveal-y": "0px", "--reveal-delay": "0.2s" } as React.CSSProperties}
            className="reveal flex justify-start"
          >
            <div className="p-6 xl:p-8 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm text-left w-full max-w-md">
              {cardContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
