import { motion } from "framer-motion";
import globalBg from "@/assets/globalbg.jpg";

export function BusinessIntro() {
  return (
    <section
      className="relative min-h-[500px] overflow-hidden lg:min-h-[550px]"
      aria-labelledby="business-intro-heading"
    >
      <img
        src={globalBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/96" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,30,40,0.08)_0%,transparent_55%)]" />

      <div className="section-container relative z-10 py-16 text-center md:py-20 lg:py-[90px]">
        <motion.h2
          id="business-intro-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] tracking-normal"
        >
          <span className="block">
            <span className="text-[#EB1E28]">One facility.</span>{" "}
            <span className="text-white">Full integration.</span>
          </span>
          <span className="mt-2 block">
            <span className="text-white">Built to deliver</span>{" "}
            <span className="text-[#EB1E28]">across grades and geographies.</span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-[900px] font-body text-[clamp(0.9375rem,2vw,1.5rem)] font-normal leading-[160%] text-white/[0.85] md:mt-10"
        >
          Hira Electro Smelters Limited (HESL) is an integrated ferro alloys manufacturer
          supplying High Carbon, Medium Carbon, and Low Carbon Ferro Manganese to steel producers
          and industrial consumers across India and 26 countries worldwide. Strategically located
          near Visakhapatnam Port in Andhra Pradesh and backed by the wider Hira Group ecosystem,
          we operate at the intersection of manufacturing scale, metallurgical capability, and
          export-ready infrastructure.
        </motion.p>
      </div>
    </section>
  );
}
