import SectionHeading from "@/components/ui/SectionHeading";
import TerminalCard from "@/components/ui/TerminalCard";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="About Me"
          subtitle="Getting to know the developer behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
          {/* Text */}
          <div
            className="reveal space-y-6 sm:space-y-8"
            style={{ "--reveal-x": "-40px", "--reveal-y": "0px" } as React.CSSProperties}
          >
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              {personal.about}
            </p>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:gap-4 mt-7 sm:mt-10">
              {[
                { label: "Location", value: personal.location },
                { label: "Email", value: personal.email },
                { label: "Focus", value: "Full Stack Development" },
                { label: "Status", value: "Open to Work" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="min-w-0 p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-card-bg"
                >
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-primary text-sm font-medium break-words">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div
            className="reveal"
            style={{
              "--reveal-x": "40px",
              "--reveal-y": "0px",
              "--reveal-delay": "0.2s",
            } as React.CSSProperties}
          >
            <TerminalCard
              lines={personal.terminalInfo}
              title="dikshant@dev:~$"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
