interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="reveal text-center mb-10 sm:mb-14 lg:mb-20">
      <h2 className="text-[clamp(1.875rem,7vw,3rem)] leading-tight font-bold font-heading text-primary mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-[clamp(0.95rem,2.5vw,1.125rem)] max-w-2xl mx-auto leading-relaxed mt-2 px-1">
          {subtitle}
        </p>
      )}
      <div className="mt-6 sm:mt-8 mx-auto w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
    </div>
  );
}
