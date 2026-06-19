import { motion } from "framer-motion";
import globalBg from "@/assets/globalbg.jpg";
import { ContactSection } from "@/components/shared/ContactSection";
import { WorldMap } from "@/components/business/GlobalMarkets/WorldMap";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";

export function GlobalMarkets() {
  return (
    <>
      <section
        className="relative w-full overflow-hidden py-16 md:min-h-[800px] lg:min-h-[900px] lg:py-0 xl:min-h-[1100px]"
        aria-labelledby="global-markets-heading"
      >
        <img
          src={globalBg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0A0A0A_0%,#000000_100%)] opacity-30" />

        <div className="relative z-10 pb-10 pt-16 lg:pb-16 lg:pt-[110px]">
          <div className="section-container w-full">
            <motion.h2
              id="global-markets-heading"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center font-display text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] text-white"
            >
              Supporting Customers Across Global Markets
            </motion.h2>

            <WorldMap />
          </div>

          <ContactSection embedded overlap />
        </div>
      </section>

      <BusinessFooter />
    </>
  );
}
