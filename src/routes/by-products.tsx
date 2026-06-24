import { createFileRoute } from "@tanstack/react-router";
import websiteContent from "@/data/websiteContent.json";
import { getImageUrl } from "@/data/imageMap";
import { SustainabilityHero } from "@/components/sustainability/SustainabilityHero";
import { ProductApplications } from "@/components/sustainability/ProductApplications";
import { ContactSection } from "@/components/shared/ContactSection";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/by-products")({
  head: () => ({
    meta: [
      { title: `${websiteContent.byProducts.hero.heading} — Hira Electro Smelters` },
      {
        name: "description",
        content: websiteContent.byProducts.overview.substring(0, 160),
      },
    ],
  }),
  component: ByProductsPage,
});

function ByProductsPage() {
  const data = websiteContent.byProducts;
  
  // Transform byProducts data to fit the SustainabilityHero format
  const heroData = {
    hero: data.hero,
    overview: data.overview,
  };

  return (
    <div className="page-shell bg-black">
      <SustainabilityHero product={heroData} />

      {/* Efficiency Factors Section */}
      <section className="relative w-full bg-[#0A0A0A] py-20 lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1728px] px-5 lg:px-[60px] xl:px-[100px]">
          <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
            <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px] lg:text-[48px]">
              {data.efficiencyFactors.heading}
            </h2>
            <div className="mt-4 h-[3px] w-[60px] bg-[#EB1E28]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.efficiencyFactors.blocks.map((block, idx) => (
              <div key={idx} className="bg-[#111] p-8 border border-white/10 hover:border-[#EB1E28]/50 transition-colors">
                <h3 className="mb-4 font-display text-[20px] font-semibold text-white">{block.title}</h3>
                <p className="font-body text-[15px] leading-[1.6] text-white/70">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro for By Products */}
      <section className="relative w-full bg-[#050505] py-16">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <p className="font-body text-[18px] text-white/80 whitespace-pre-wrap">{data.byProductsIntro}</p>
        </div>
      </section>

      {/* Iterate over By-Products Items */}
      {data.items.map((item, index) => (
        <div key={item.id}>
           {/* Re-use hero layout for each item's intro */}
           <section className="relative min-h-[400px] w-full overflow-hidden flex items-center justify-center">
             <img
               src={getImageUrl(item.image)}
               alt={item.title}
               className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
             />
             <div className="absolute inset-0 bg-black/60" />
             <div className="relative z-10 px-5 text-center max-w-[800px]">
               <h2 className="font-display text-[32px] font-bold text-white mb-6">{item.title}</h2>
               <p className="text-white/80 text-[18px]">{item.intro}</p>
             </div>
           </section>
           
           {/* Re-use ProductApplications for the item's applications */}
           <ProductApplications product={{ applications: item.applications }} />
        </div>
      ))}

      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
