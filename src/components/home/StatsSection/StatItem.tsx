import { motion } from "framer-motion";
import type { StatItemData } from "@/components/home/StatsSection/statsData";

type StatItemProps = StatItemData & {
  index: number;
  delay: number;
};

export function StatItem({ number, heading, description, index, delay }: StatItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -40, y: 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
      aria-labelledby={`stat-heading-${index}`}
      className="mx-auto flex w-full max-w-[440px] items-stretch gap-[20px] lg:mx-0"
    >
      <div className="w-[2px] shrink-0 self-stretch bg-[#EB1E28]" aria-hidden />

      <div className="flex flex-col text-center lg:text-left">
        <p className="font-display text-[36px] leading-[100%] font-semibold text-white lg:text-[50px]">
          {number}
        </p>
        <h3
          id={`stat-heading-${index}`}
          className="mt-2 font-body text-[18px] leading-[100%] font-semibold text-white lg:text-[20px]"
        >
          {heading}
        </h3>
        <p className="mt-2 max-w-[440px] font-body text-[15px] leading-[150%] font-normal text-white/80 lg:text-[16px]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
