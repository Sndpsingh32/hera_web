import { ArrowUpRight } from "lucide-react";
import productHc from "@/assets/product-hc.jpg";
import productCoal from "@/assets/product-coal.jpg";
import productOre from "@/assets/product-ore.jpg";
import productManganese from "@/assets/product-manganese.jpg";
import productSlag from "@/assets/product-slag.jpg";
import productStorage from "@/assets/product-storage.jpg";
import businessBg from "@/assets/business-bg.jpg";

const products = [
  { name: "High Carbon Ferro Manganese (HC FeMn)", img: productHc },
  { name: "Medium Carbon Ferro Manganese", img: productCoal },
  { name: "Low Carbon Ferro Manganese", img: productOre },
  { name: "Silico Manganese", img: productManganese },
  { name: "Manganese Ore", img: productSlag },
  { name: "Slag & By-products", img: productStorage },
];

export function Business() {
  return (
    <section className="relative py-24 px-6 lg:px-16 text-white overflow-hidden">
      <img src={businessBg} alt="" width={1920} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="relative max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-4xl md:text-5xl">Our Business</h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Our product portfolio is built to serve varied steelmaking requirements, with Ferro Manganese grades that support strength, hardness, carbon control, and metallurgical consistency.
          </p>
          <button className="mt-8 bg-brand text-brand-foreground text-xs font-bold tracking-widest px-6 py-3 rounded-md hover:opacity-90 transition">
            EXPLORE OUR PRODUCTS
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((p, i) => (
            <div key={p.name} className={`relative h-[360px] rounded-sm overflow-hidden group cursor-pointer ${i === 0 ? "ring-2 ring-brand" : ""}`}>
              <img src={p.img} alt={p.name} width={512} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              {i === 0 && <div className="absolute inset-0 bg-brand/60" />}
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
              {i === 0 && (
                <div className="absolute bottom-4 left-4 right-4 bg-white text-foreground p-3 rounded-sm text-center text-xs font-semibold">
                  {p.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
