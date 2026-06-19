import { createFileRoute } from "@tanstack/react-router";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessOverview } from "@/components/business/BusinessOverview";
import { ManufacturingEcosystem } from "@/components/business/ManufacturingEcosystem";
import { BusinessStats } from "@/components/business/BusinessStats";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business Overview — Hira Electro Smelters" },
      {
        name: "description",
        content:
          "Powering the foundations of steel with ferro alloys built for the steel value chain.",
      },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <div className="min-h-screen bg-black">
      <BusinessHero />
      <BusinessOverview />
      <ManufacturingEcosystem />
      <BusinessStats />
      <Footer />
    </div>
  );
}
