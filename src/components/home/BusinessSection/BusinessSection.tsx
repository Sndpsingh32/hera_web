import { BusinessHeader } from "@/components/home/BusinessSection/BusinessHeader";
import { ProductShowcase } from "@/components/home/BusinessSection/ProductShowcase";
import { businessBackground } from "@/components/home/BusinessSection/businessData";

export function BusinessSection() {
  return (
    <section
      aria-labelledby="business-section-heading"
      className="relative w-full overflow-hidden py-[60px] md:py-20 lg:py-[120px]"
    >
      <img
        src={businessBackground}
        alt=""
        loading="lazy"
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.72)]" aria-hidden />

      <div className="section-container relative z-10 w-full">
        <BusinessHeader />
        <ProductShowcase />
      </div>
    </section>
  );
}
