import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/components/home/BusinessSection/businessData";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";

type ProductCardProps = {
  product: Product;
  isActive: boolean;
  onActivate: () => void;
};

export function ProductCard({ product, isActive, onActivate }: ProductCardProps) {
  const titleContent = product.titleLines ? (
    <>
      {product.titleLines[0]}
      <br />
      {product.titleLines[1]}
      <br />
      {product.titleLines[2]}
    </>
  ) : (
    product.title
  );

  const navigate = useNavigate();

  const handleClick = () => {
    if (isActive && product.link) {
      navigate({ to: product.link });
    } else {
      onActivate();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={product.title}
      aria-pressed={isActive}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      className={cn(
        "relative shrink-0 snap-center overflow-hidden rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer",
        "h-[500px] w-[280px] lg:w-[160px]",
        isActive && "lg:w-[350px]",
      )}
    >
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        width={350}
        height={500}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute inset-[26px] flex flex-col items-center rounded-[8px] bg-[rgba(235,30,40,0.60)] lg:inset-[26px]">
          <div className="flex flex-1 items-center justify-center">
            <div className={cn("flex h-20 w-20 items-center justify-center rounded-[6px] bg-white transition-colors hover:bg-gray-100", product.link ? "cursor-pointer" : "")}>
              <ArrowUpRight className="h-[46px] w-[46px] text-[#EB1E28]" strokeWidth={2} />
            </div>
          </div>

          <div className="mb-6 flex h-[125px] w-[258px] max-w-[calc(100%-24px)] items-center justify-center rounded-[8px] bg-white px-3">
            <p className="text-center font-body text-[20px] leading-[100%] font-bold tracking-normal text-[#111111]">
              {titleContent}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
