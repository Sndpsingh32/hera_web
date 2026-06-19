import { BusinessStatsMetrics } from "@/components/business/BusinessStatsMetrics";
import { BusinessStatsHighlights } from "@/components/business/BusinessStatsHighlights";

export function BusinessStats() {
  return (
    <section className="bg-black px-6 pb-20 pt-4 lg:pb-28">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <BusinessStatsMetrics />
        <BusinessStatsHighlights />
      </div>
    </section>
  );
}
