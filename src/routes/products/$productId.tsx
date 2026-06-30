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
        <section className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden border-t border-white/5">
          {/* Subtle Grid Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}
          />

          {/* Subtle Red Glow Top Right */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EB1E28]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/2" />

          <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-[60px] xl:px-[100px] relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-24">

              {/* Left Side: Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/3 lg:pt-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[2px] bg-[#EB1E28]" />
                  <span className="font-display text-[14px] md:text-[16px] uppercase tracking-[0.25em] text-[#EB1E28] font-bold">
                    Overview
                  </span>
                </div>
              </motion.div>

              {/* Right Side: Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full lg:w-2/3"
              >
                <h2 className="mb-8 font-display text-[36px] font-bold leading-[1.1] text-white sm:text-[48px] md:text-[60px]">
                  {product.whatItIsHeading || "What it is"}
                </h2>

                <div className="space-y-6">
                  {product.whatItIs.split('\n').map((paragraph: string, idx: number) => (
                    paragraph.trim() && (
                      <p key={idx} className="font-body text-[18px] leading-[1.9] text-white/70 md:text-[22px] font-light max-w-[850px]">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      ) : null}
      <ProductApplications product={product} />
      {/* <OurClients /> */}
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
