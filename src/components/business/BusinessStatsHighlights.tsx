import { BusinessStatsPlantCard } from "@/components/business/BusinessStatsPlantCard";
import { BusinessStatsContainersCard } from "@/components/business/BusinessStatsContainersCard";

export function BusinessStatsHighlights() {
  return (
    <div className="flex w-full flex-col gap-10 lg:w-[570px]">
      <BusinessStatsPlantCard />
      <BusinessStatsContainersCard />
    </div>
  );
}
