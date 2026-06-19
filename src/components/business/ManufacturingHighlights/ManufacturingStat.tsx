import { motion } from "framer-motion";
import {
  STAT_ANIMATION_DELAYS,
  type ManufacturingStatItem,
} from "@/components/business/ManufacturingHighlights/manufacturingData";

type ManufacturingStatProps = ManufacturingStatItem & {
  index: number;
};

export function ManufacturingStat({ value, label, description, index }: ManufacturingStatProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay: STAT_ANIMATION_DELAYS[index], ease: "easeOut" }}
      className="flex w-full max-w-full items-start gap-4 md:gap-6"
    >
      <div className="h-[60px] w-[2px] shrink-0 bg-[#EB1E28] md:h-[90px]" aria-hidden />

      <div className="flex flex-col">
        <p className="font-poppins text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[100%] text-white">
          {value}
        </p>
        <p className="mt-2 font-poppins text-lg font-semibold leading-[100%] text-white lg:text-[22px]">
          {label}
        </p>
        <p className="mt-2 max-w-[480px] font-body text-base font-normal leading-[160%] text-white/70 lg:text-lg">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
