import { useState } from "react";
import { ProductCard } from "@/components/home/BusinessSection/ProductCard";
import { products } from "@/components/home/BusinessSection/businessData";

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="mt-[60px] w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] min-[1326px]:overflow-visible [&::-webkit-scrollbar]:hidden"
      aria-label="Product portfolio showcase"
    >
      <div className="mx-auto flex w-max snap-x snap-mandatory gap-4 min-[1326px]:w-full min-[1326px]:min-w-0 min-[1326px]:justify-center min-[1326px]:snap-none">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
