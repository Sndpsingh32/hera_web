import { motion } from "framer-motion";
import type { ProcessStep } from "@/components/business/ManufacturingProcess/types";

type ProcessCardProps = {
  step: ProcessStep;
  isActive: boolean;
  index: number;
  onSelect: () => void;
};

export function ProcessCard({ step, isActive, index, onSelect }: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-[220px] w-full shrink-0 flex-col rounded-xl border p-4 text-left transition-colors duration-300 md:h-[270px] md:w-[210px] md:p-6 ${
        isActive
          ? "border-[#E53630]/80 bg-black/70 shadow-[0_0_40px_rgba(255,90,40,0.35)]"
          : "border-white/15 bg-black/55 hover:border-[#E53630] hover:bg-black/65"
      }`}
      aria-pressed={isActive}
      aria-label={step.label}
    >
      {isActive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,100,50,0.18)_0%,transparent_70%)]"
        />
      )}

      <span className="relative font-display text-xs leading-none text-white">
        {"{ "}
        {step.index}
        {" }"}
      </span>

      <div className="relative flex flex-1 items-center justify-center py-4">
        <Icon
          className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-[1.08] md:h-12 md:w-12"
          strokeWidth={1.25}
        />
      </div>

      <p className="relative line-clamp-2 font-body text-sm font-medium leading-snug text-white md:text-base">
        {step.label}
      </p>
    </motion.button>
  );
}
