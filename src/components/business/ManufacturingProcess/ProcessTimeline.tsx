import { motion } from "framer-motion";

type ProcessTimelineProps = {
  activeIndex: number;
  total: number;
  mobile?: boolean;
};

export function ProcessTimeline({ activeIndex, total, mobile = false }: ProcessTimelineProps) {
  const progressScale = (activeIndex + 0.5) / total;

  if (mobile) {
    return (
      <div
        className="flex items-center gap-2"
        aria-label={`Step ${activeIndex + 1} of ${total}`}
      >
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            aria-hidden={index !== activeIndex}
            aria-current={index === activeIndex ? "step" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-[#E53630]" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative mt-8 hidden h-px w-full bg-white/30 lg:block"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-full origin-left bg-[#E53630]"
        animate={{ scaleX: progressScale }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
