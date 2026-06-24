import { createFileRoute } from "@tanstack/react-router";
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";
import { SpecificationSection } from "@/components/sustainability/SpecificationSection";
import { ProductApplications } from "@/components/sustainability/ProductApplications";
import { OurClients } from "@/components/sustainability/OurClients";
import { ContactSection } from "@/components/shared/ContactSection";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "High Carbon Ferro Manganese — Hira Electro Smelters" },
      {
        name: "description",
        content: "High Carbon Ferro Manganese and sustainability practices at Hira Electro Smelters.",
      },
    ],
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <div className="page-shell bg-black">
      <SustainabilityHero />
      <SpecificationSection />
      <ProductApplications />
      <OurClients />
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
