import { createFileRoute } from "@tanstack/react-router";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessIntro } from "@/components/business/BusinessIntro";
import { ManufacturingHighlights } from "@/components/business/ManufacturingHighlights/ManufacturingHighlights";
import { ManufacturingProcess } from "@/components/business/ManufacturingProcess";
import { BusinessEfficient } from "@/components/business/BusinessEfficient";
import { ProductsSection } from "@/components/business/ProductsSection/ProductsSection";
import { GlobalMarkets } from "@/components/business/GlobalMarkets/GlobalMarkets";

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
    <div className="page-shell bg-black">
      <BusinessHero />
      <BusinessIntro />
      <ManufacturingProcess />
      <ManufacturingHighlights />
      <BusinessEfficient />
      <ProductsSection />
      <GlobalMarkets />
    </div>
  );
}
