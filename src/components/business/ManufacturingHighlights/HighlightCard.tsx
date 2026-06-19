import { motion } from "framer-motion";
import type { HighlightCardItem } from "@/components/business/ManufacturingHighlights/manufacturingData";

type HighlightCardProps = HighlightCardItem & {
  index: number;
};

export function HighlightCard({ title, subtitle, image, imageAlt, index }: HighlightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="group relative h-[220px] w-full overflow-hidden rounded-xl transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:h-[260px] lg:h-[300px]"
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={570}
        height={300}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_70%,rgba(0,0,0,0.95)_100%)] transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30"
        aria-hidden
      />

      <div className="absolute bottom-6 left-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <h3 className="font-poppins text-[clamp(1.25rem,3vw,2.375rem)] font-semibold leading-[110%] text-white">
          {title}
        </h3>
        <p className="mt-1 font-poppins text-base font-semibold leading-[100%] text-white/90 lg:text-xl">
          {subtitle}
        </p>
      </div>
    </motion.article>
  );
}
