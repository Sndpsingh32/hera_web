import { ManufacturingStat } from "@/components/business/ManufacturingHighlights/ManufacturingStat";
import { manufacturingStats } from "@/components/business/ManufacturingHighlights/manufacturingData";

export function ManufacturingStats() {
  return (
    <div
      className="flex w-full flex-col items-center gap-10 md:gap-14 lg:w-[45%] lg:items-start lg:gap-[70px]"
      aria-label="Manufacturing statistics"
    >
      {manufacturingStats.map((stat, index) => (
        <ManufacturingStat key={stat.value} {...stat} index={index} />
      ))}
    </div>
  );
}
