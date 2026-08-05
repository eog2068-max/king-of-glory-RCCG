import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { SectionWrapper, SectionTitle } from "./section-wrapper";

const photoSlots = [
  { bg: "from-[#28166F]/15 to-[#28166F]/5", label: "Worship Service" },
  { bg: "from-[#DA251D]/15 to-[#DA251D]/5", label: "Church Events" },
  { bg: "from-[#2E7D32]/15 to-[#2E7D32]/5", label: "Bible Study" },
  { bg: "from-[#3D2080]/15 to-[#3D2080]/5", label: "Youth Activities" },
  { bg: "from-[#C62828]/15 to-[#C62828]/5", label: "Outreach" },
  { bg: "from-[#28166F]/10 to-[#3D2080]/10", label: "Fellowship" },
];

export function PhotoGalleryPreview() {
  return (
    <SectionWrapper className="bg-[#E8E0F0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Photo Gallery" subtitle="Moments from our church family" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoSlots.map((slot, index) => (
            <div
              key={index}
              className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${slot.bg} flex flex-col items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer border border-white/50`}
            >
              <Camera className="size-8 text-gray-400/60" />
              <span className="text-xs text-gray-400 font-medium">{slot.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-[#DA251D] font-semibold hover:gap-2.5 transition-all text-sm"
          >
            View Full Gallery
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}