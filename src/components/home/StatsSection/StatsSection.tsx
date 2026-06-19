import { motion } from "framer-motion";
import { ImageCard } from "@/components/home/StatsSection/ImageCard";
import { StatItem } from "@/components/home/StatsSection/StatItem";
import {
  IMAGE_CARD_DELAYS,
  STAT_ITEM_DELAYS,
  imageCards,
  statItems,
  statsBackground,
} from "@/components/home/StatsSection/statsData";

export function StatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-label="Industrial statistics and achievements"
      className="relative min-h-0 w-full overflow-hidden py-[60px] md:py-20 lg:min-h-[900px] lg:pt-[120px] lg:pb-[100px]"
    >
      <img
        src={statsBackground}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/75" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(235,30,40,0.25),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.45)]"
        aria-hidden
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-10 xl:gap-[80px]">
          <div
            className="flex flex-col items-center gap-[50px] lg:items-start"
            aria-label="Key statistics"
          >
            {statItems.map((stat, index) => (
              <StatItem
                key={stat.number}
                {...stat}
                index={index}
                delay={STAT_ITEM_DELAYS[index]}
              />
            ))}
          </div>

          <div
            className="flex flex-col items-center gap-[40px]"
            aria-label="Company highlights"
          >
            {imageCards.map((card, index) => (
              <ImageCard
                key={card.title}
                {...card}
                index={index}
                delay={IMAGE_CARD_DELAYS[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
