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
      {product.titleLines.filter(line => line.trim() !== "").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
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
        "relative shrink-0 snap-center overflow-hidden rounded-[8px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer transition-all duration-500 ease-out",
        "h-[380px] w-[280px] lg:h-[min(420px,calc(100vh-420px))] lg:w-[140px] xl:h-[420px] xl:w-[160px]",
        isActive && "lg:w-[300px] xl:w-[350px]",
      )}
    >
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        width={350}
        height={420}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute inset-[16px] flex flex-col items-center rounded-[8px] bg-[rgba(235,30,40,0.60)] xl:inset-[26px]">
          <div className="flex flex-1 items-center justify-center">
            <div className={cn("flex h-16 w-16 xl:h-20 xl:w-20 items-center justify-center rounded-[6px] bg-white transition-colors hover:bg-gray-100", product.link ? "cursor-pointer" : "")}>
              <ArrowUpRight className="h-[36px] w-[36px] xl:h-[46px] xl:w-[46px] text-[#EB1E28]" strokeWidth={2} />
            </div>
          </div>

          <div className="mb-4 xl:mb-6 flex h-[100px] xl:h-[125px] w-[258px] max-w-[calc(100%-16px)] xl:max-w-[calc(100%-24px)] items-center justify-center rounded-[8px] bg-white px-3 py-2">
            <p className="text-center font-body text-[16px] xl:text-[20px] leading-[130%] font-bold tracking-normal text-[#111111]">
              {titleContent}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
