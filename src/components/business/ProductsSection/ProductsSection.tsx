import { motion } from "framer-motion";
import { ProductCard } from "@/components/business/ProductsSection/ProductCard";
import { QualityCard } from "@/components/business/ProductsSection/QualityCard";
import { products, quality } from "@/components/business/ProductsSection/data";

export function ProductsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="bg-black py-16 md:py-20 lg:py-[120px]"
      aria-labelledby="products-heading"
    >
      <div className="section-container w-full">
        <div>
          <h2
            id="products-heading"
            className="mb-10 text-center font-poppins text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] text-white md:mb-[60px]"
          >
            Our Products
          </h2>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[33px]">
            {products.map((product, index) => (
              <li key={product.title}>
                <ProductCard product={product} index={index} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 md:mt-[120px]">
          <h2 className="mb-10 text-center font-poppins text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] text-white md:mb-[60px]">
            Built Around Quality
          </h2>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {quality.map((item, index) => (
              <li key={item.title}>
                <QualityCard item={item} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
