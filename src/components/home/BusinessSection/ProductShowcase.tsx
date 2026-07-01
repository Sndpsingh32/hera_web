import { useState, useRef } from "react";
import { ProductCard } from "@/components/home/BusinessSection/ProductCard";
import { products } from "@/components/home/BusinessSection/businessData";

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // Only apply scroll-based active state on mobile/tablet (below lg breakpoint)
    if (!containerRef.current || window.innerWidth >= 1024) return;
    
    const container = containerRef.current;
    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
    
    let closestIndex = activeIndex;
    let minDistance = Infinity;

    const cards = container.querySelectorAll('[data-product-card]');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="mt-10 w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] min-[1326px]:overflow-visible [&::-webkit-scrollbar]:hidden lg:mt-12"
      aria-label="Product portfolio showcase"
    >
      <div className="mx-auto flex w-max snap-x snap-mandatory gap-4 min-[1326px]:w-full min-[1326px]:min-w-0 min-[1326px]:justify-center min-[1326px]:snap-none px-4 lg:px-0">
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
