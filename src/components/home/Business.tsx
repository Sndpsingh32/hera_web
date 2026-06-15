import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 px-6 lg:px-16 text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <img src={businessBg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative z-10 max-w-[1420px] mx-auto">
        <div className="text-center max-w-[1061px] mx-auto flex flex-col items-center">
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[56px] leading-[1.1]">Our Business</h2>
          <p className="mt-6 text-white text-[16px] lg:text-[24px] font-['Open_Sans'] leading-[1.4] lg:leading-[100%] text-center max-w-[900px]">
            Our product portfolio is built to serve varied steelmaking requirements, with Ferro Manganese grades that support strength, hardness, carbon control, and metallurgical consistency.
          </p>
          <button className="mt-10 bg-[#EB1E28] text-white font-['Open_Sans'] text-[14px] font-semibold leading-[100%] tracking-[0.01em] uppercase px-8 h-[50px] rounded-[6px] flex items-center justify-center hover:opacity-90 transition">
            EXPLORE OUR PRODUCTS
          </button>
        </div>

        {/* Carousel / Grid */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-[20px] p-[10px] w-full mx-auto">
          {products.map((p, i) => {
            const isActive = i === activeIndex;
            return (
              <div 
                key={p.name} 
                onClick={() => setActiveIndex(i)}
                className={`relative rounded-[10px] overflow-hidden shrink-0 transition-all duration-500 ease-in-out cursor-pointer shadow-lg
                  ${isActive ? 'w-full lg:w-[350px] h-[500px]' : 'w-full lg:w-[190px] h-[300px] lg:h-[500px] hover:opacity-80'}`}
              >
                <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* Overlay for inactive cards (optional slight dimming) */}
                {!isActive && <div className="absolute inset-0 bg-black/20" />}

                {/* Active Card Content */}
                {isActive && (
                  <div className="absolute inset-[26px] bg-[#EB1E28]/60 flex flex-col items-center justify-between transition-opacity duration-500">
                    <div className="flex-1 flex items-center justify-center w-full">
                       <div className="w-[50px] h-[50px] bg-white rounded-sm flex items-center justify-center text-[#EB1E28] shadow-md">
                         <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
                       </div>
                    </div>
                    <div className="w-[calc(100%-40px)] bg-white text-black py-4 px-2 mb-[20px] text-center text-[14px] font-bold font-['Open_Sans'] rounded-sm shadow-md leading-snug">
                      {p.name}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
