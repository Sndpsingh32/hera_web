import { motion } from "framer-motion";
import mapImage from "@/assets/map.png";

export function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="relative mx-auto mt-10 w-full md:mt-[60px]"
    >
      <img
        src={mapImage}
        alt="World map showing Hira customer locations across global markets"
        loading="lazy"
        className="mx-auto h-auto w-full object-contain"
      />
    </motion.div>
  );
}
