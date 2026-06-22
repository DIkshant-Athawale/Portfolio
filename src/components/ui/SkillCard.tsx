import type { SkillCategory } from "@/data/skills";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCard({ category, index }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <div
      style={{ "--reveal-delay": `${index * 0.1}s`, "--reveal-y": "40px" } as React.CSSProperties}
      className="reveal group relative p-4 sm:p-6 rounded-2xl border border-white/[0.08] bg-card-bg backdrop-blur-sm hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        style={{ backgroundColor: `${category.color}15` }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-2.5 rounded-xl"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <Icon size={22} style={{ color: category.color }} />
        </div>
        <h3 className="font-heading font-semibold text-primary text-lg">
          {category.title}
        </h3>
      </div>

      {/* Skills with progress bars */}
      <div className="space-y-5">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-secondary">{skill.name}</span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  color: category.color,
                  backgroundColor: `${category.color}15`,
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-3 bg-white/[0.06] rounded-full overflow-hidden relative">
              <div
                className="skill-fill h-full rounded-full relative overflow-hidden"
                style={{
                  "--skill-level": `${skill.level}%`,
                  "--skill-delay": `${0.3 + i * 0.1}s`,
                  background: `linear-gradient(90deg, ${category.color}cc, ${category.color})`,
                  boxShadow: `0 0 12px ${category.color}40, 0 0 4px ${category.color}30`,
                } as React.CSSProperties}
              >
                {/* Animated shimmer effect */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                    animation: "shimmer 2s ease-in-out 2",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
