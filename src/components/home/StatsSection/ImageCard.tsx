import { motion } from "framer-motion";
import type { ImageCardData } from "@/components/home/StatsSection/statsData";

type ImageCardProps = ImageCardData & {
  index: number;
  delay: number;
};

export function ImageCard({ image, imageAlt, title, subtitle, index, delay }: ImageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
      aria-labelledby={`card-title-${index}`}
      className="group relative mx-auto h-[220px] w-full overflow-hidden rounded-[10px] transition-transform duration-700 ease-out hover:-translate-y-2 sm:h-[260px] lg:mx-0 lg:h-[300px]"
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={570}
        height={300}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)]"
        aria-hidden
      />

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3
          id={`card-title-${index}`}
          className="font-poppins text-[18px] leading-[100%] font-semibold lg:text-[26px]"
        >
          {title}
        </h3>
        <p className="mt-1 font-poppins text-[18px] leading-[100%] font-semibold lg:text-[26px]">
          {subtitle}
        </p>
      </div>
    </motion.article>
  );
}
