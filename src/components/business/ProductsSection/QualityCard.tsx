import { motion } from "framer-motion";
import type { QualityItem } from "@/components/business/ProductsSection/types";

type QualityCardProps = {
  item: QualityItem;
  index: number;
};

export function QualityCard({ item, index }: QualityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
      className="flex h-auto min-h-[420px] flex-col items-center bg-[#090909] p-10 md:h-[420px]"
    >
      <div className="flex h-[170px] w-[170px] shrink-0 items-center justify-center bg-white p-4">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-8 text-center font-poppins text-[22px] font-semibold leading-[100%] text-white">
        {item.title}
      </h3>

      <p className="mt-[18px] max-w-[320px] text-center font-poppins text-[15px] font-normal leading-6 text-white/[0.72]">
        {item.description}
      </p>
    </motion.article>
  );
}
