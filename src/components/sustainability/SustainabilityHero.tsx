import { motion } from "framer-motion";

export function SustainabilityHero({ product }: { product?: any }) {
  // Fallback to static imports if no product is passed (for the old sustainability route)
  const defaultImage = "/src/assets/businesshero.jpg";
  const imageSrc = product?.hero?.image || defaultImage;
  const heading = product?.hero?.heading || "High Carbon Ferro Manganese";
  const overview = product?.overview || "The most widely produced ferro alloy globally, High Carbon Ferro Manganese is smelted directly from manganese ore in our Submerged Arc Furnaces. It serves as the primary manganese additive in steelmaking, functioning as a deoxidiser that also enhances hardness, tensile strength, and abrasion resistance in the finished steel.";

  return (
    <section className="relative min-h-[560px] h-[min(100svh,1002px)] w-full overflow-hidden">
      <img
        src={imageSrc}
        alt={heading}
        width={1728}
        height={1002}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/[0.31]" />

      <div className="section-container relative flex h-full min-h-[560px] flex-col items-center justify-center pt-[72px] pb-16 text-center text-white lg:pt-[110px] lg:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display max-w-[910px] text-[clamp(1.75rem,4.5vw,3.125rem)] font-semibold leading-[110%] tracking-[0.01em]"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-5 max-w-[900px] font-body text-[clamp(0.9375rem,2vw,1.25rem)] font-normal leading-[140%] md:mt-6"
        >
          {overview}
        </motion.p>
      </div>
    </section>
  );
}
