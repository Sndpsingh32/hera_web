import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/components/business/ProductsSection/types";
import { getImageUrl } from "@/data/imageMap";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group relative aspect-square w-full overflow-hidden"
    >
      <img
        src={getImageUrl(product.image)}
        alt={product.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.82)_100%)] transition-opacity duration-[600ms] ease-out group-hover:opacity-100" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-[600ms] ease-out group-hover:bg-black/20" />

      <div className="absolute inset-x-0 bottom-0 pb-[38px] pl-12 pr-10">
        <div className="flex translate-y-3 items-start gap-[18px] transition-transform duration-[600ms] ease-out group-hover:translate-y-0">
          <div className="mt-1 h-[52px] w-[3px] shrink-0 bg-[#E53630]" aria-hidden />

          <div className="min-w-0 flex-1">
            <h3 className="font-poppins text-[24px] font-semibold leading-[100%] text-white">
              {product.title}
            </h3>

            {product.featured && product.description && (
              <p className="mt-[18px] font-poppins text-base font-normal leading-5 text-white/75">
                {product.description}
              </p>
            )}

            {product.featured && (
              <button
                type="button"
                aria-label={`Learn more about ${product.title}`}
                className="mt-[18px] flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#E53630] transition-colors duration-[600ms] ease-out hover:bg-[#c42f2a]"
              >
                <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-[600ms] ease-out group-hover:rotate-45" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
