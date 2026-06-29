import { createFileRoute, notFound } from "@tanstack/react-router";
import websiteContent from "@/data/websiteContent.json";
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";
import { SpecificationSection } from "@/components/sustainability/SpecificationSection";
import { ProductApplications } from "@/components/sustainability/ProductApplications";
import { OurClients } from "@/components/sustainability/OurClients";
import { ContactSection } from "@/components/shared/ContactSection";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = (websiteContent.products as Record<string, any>)[params.productId];
    if (!product) {
      throw notFound();
    }
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.hero.heading} — Hira Electro Smelters` },
      {
        name: "description",
        content: loaderData.overview.substring(0, 160),
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();

  return (
    <div className="page-shell bg-black">
      <SustainabilityHero product={product} />
      <SpecificationSection product={product} />
      <ProductApplications product={product} />
      {/* <OurClients /> */}
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
