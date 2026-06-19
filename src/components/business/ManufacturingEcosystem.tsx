import businessBg from "@/assets/business-bg.jpg";
import { ManufacturingEcosystemHeader } from "@/components/business/ManufacturingEcosystemHeader";
import { ProcessCarousel } from "@/components/business/ProcessCarousel";

export function ManufacturingEcosystem() {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:min-h-[738px] lg:py-20">
      <img
        src={businessBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-[1728px]">
        <ManufacturingEcosystemHeader />
        <ProcessCarousel />
      </div>
    </section>
  );
}
