import { motion } from "framer-motion";
import infoBg from "@/assets/info.jpg";
import { HighlightCard } from "@/components/business/ManufacturingHighlights/HighlightCard";
import { ManufacturingStats } from "@/components/business/ManufacturingHighlights/ManufacturingStats";
import { highlightCards } from "@/components/business/ManufacturingHighlights/manufacturingData";

export function ManufacturingHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden lg:min-h-[900px]"
      aria-labelledby="manufacturing-highlights-heading"
    >
      <img
        src={infoBg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.75)_35%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden
      />

      <div className="section-container relative z-10 py-16 md:py-20 lg:py-[100px]">
        <h2 id="manufacturing-highlights-heading" className="sr-only">
          Manufacturing Excellence
        </h2>

        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-[60px]">
          <ManufacturingStats />

          <div className="flex w-full flex-col items-center gap-10 lg:w-[55%] lg:items-end">
            {highlightCards.map((card, index) => (
              <HighlightCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
