import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CertCard from "@/components/ui/CertCard";
import { certifications, activities } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications & Activities"
          subtitle="Continuous learning and community involvement"
        />

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Activities */}
        <div className="reveal max-w-2xl mx-auto">
          <h3 className="font-heading font-semibold text-primary text-lg sm:text-xl text-center mb-7 sm:mb-10 pt-6 md:pt-10 border-t border-white/[0.06]">
            Extra-Curricular Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {activities.map((activity, i) => (
              <div
                key={i}
                style={{
                  "--reveal-x": "-20px",
                  "--reveal-y": "0px",
                  "--reveal-delay": `${i * 0.1}s`,
                } as React.CSSProperties}
                className="reveal flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-card-bg"
              >
                <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-secondary text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
