import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
  const hasSpecs = product.specifications && product.specifications.length > 0;

  return (
    <div className="page-shell bg-black">
      <SustainabilityHero product={product} />
      {hasSpecs ? (
        <SpecificationSection product={product} />
      ) : product.whatItIs ? (
        <section className="relative w-full bg-[#050505] py-20 lg:py-[120px] overflow-hidden flex justify-center">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[800px] bg-[radial-gradient(ellipse_at_center,rgba(226,50,44,0.12)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mx-auto w-full max-w-[1200px] px-5 lg:px-10"
          >
            <div className="bg-white/[0.03] backdrop-blur-[24px] border border-white/[0.08] rounded-[24px] p-[40px] md:p-[60px] lg:p-[80px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
              {/* Inner Red Line accent */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#EB1E28] to-transparent" />
              
              <div className="max-w-[900px]">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-[40px] h-[2px] bg-[#EB1E28]" />
                  <span className="font-display text-[14px] md:text-[16px] uppercase tracking-[0.2em] text-[#EB1E28] font-bold">
                    Material Overview
                  </span>
                </div>
                
                <h2 className="mb-6 font-display text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] md:text-[50px] lg:text-[56px]">
                  {product.whatItIsHeading || "What it is"}
                </h2>
                
                <p className="font-body text-[16px] leading-[1.9] text-white/85 md:text-[20px] lg:text-[22px]">
                  {product.whatItIs}
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      ) : null}
      <ProductApplications product={product} />
      {/* <OurClients /> */}
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
