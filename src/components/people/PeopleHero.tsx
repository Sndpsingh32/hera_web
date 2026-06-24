import { motion } from "framer-motion";
import bgImage from "@/assets/ableader.jpg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function PeopleHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] h-[min(100svh,1002px)] w-full overflow-hidden">
        <img
          src={bgImage}
          alt="Our Leadership"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/[0.31]" />

        <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display max-w-[910px] text-[clamp(1.75rem,4.5vw,3.125rem)] font-semibold leading-[110%] tracking-[0.01em]"
          >
            Our Leadership
          </motion.h1>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="w-full bg-[#000000] py-[80px] lg:py-[120px]">
        <div className="w-full max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col items-center text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Main Title */}
            <h2 className="font-display font-semibold text-[36px] lg:text-[48px] leading-[1.2] text-white mb-[24px]">
              <span className="text-[#EB1E28]">The Foundation</span> Behind Our Progress
            </h2>
            
            {/* Subtext */}
            <p className="font-body font-normal text-[16px] lg:text-[20px] leading-[1.6] text-white/90 max-w-[1000px]">
              Every strong business is shaped by the people who set its direction. At HESL, our leadership provides the foundation for disciplined operations, stronger governance, and steady progress. Their role is to guide the company with clarity, build confidence across stakeholders, and prepare the organisation for its next phase of growth.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
