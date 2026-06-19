import { motion } from "framer-motion";
import efficientBg from "@/assets/efcntpg.jpg";
import { EFFICIENT_ANIMATION, EFFICIENT_COPY } from "@/components/business/BusinessEfficient/constants";

const viewport = { once: true, amount: 0.35 } as const;

export function BusinessEfficient() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-16 lg:min-h-[640px] lg:py-0"
      aria-labelledby="efficient-heading"
    >
      <img
        src={efficientBg}
        alt="Steel manufacturing facility with plant engineers"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(15,15,15,0.75)_40%,rgba(0,0,0,0.25)_70%,rgba(0,0,0,0)_100%)] backdrop-blur-[1px]"
        aria-hidden
      />

      <div className="section-container relative z-10 flex h-full min-h-[480px] items-center lg:min-h-[640px]">
        <div className="flex w-full max-w-[663px] flex-col">
          <motion.h2
            id="efficient-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={EFFICIENT_ANIMATION.heading}
            className="font-poppins text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] tracking-normal text-white"
          >
            {EFFICIENT_COPY.heading}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={EFFICIENT_ANIMATION.divider}
            className="mt-3 mb-6 h-px w-[120px] origin-left bg-[#EB1E28] md:w-[470px]"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={EFFICIENT_ANIMATION.paragraph}
            className="max-w-[663px] font-body text-[clamp(0.9375rem,2vw,1.5rem)] font-normal leading-[160%] text-white/90"
          >
            {EFFICIENT_COPY.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={EFFICIENT_ANIMATION.button}
            className="mt-4"
          >
            <button
              type="button"
              className="inline-flex h-[50px] w-full items-center justify-center rounded-[6px] bg-[#EB1E28] px-5 py-[10px] font-display text-xs font-semibold uppercase leading-none tracking-[2px] text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#ff2c3b] hover:shadow-[0_15px_30px_rgba(235,30,40,0.35)] sm:w-auto"
            >
              {EFFICIENT_COPY.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
