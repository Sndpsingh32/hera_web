import { motion } from "framer-motion";
import { Factory, Droplets, ShieldPlus, Cog } from "lucide-react";
import productData from "@/data/products.json";

const { applications } = productData.highCarbonFerroManganese;

// Map icons manually since JSON cannot store React components
const iconMap = [Factory, Droplets, ShieldPlus, Cog];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function ProductApplications({ product }: { product?: any }) {
  const applicationsList = product?.applications || applications;

  return (
    <section className="relative w-full bg-[#050505] py-20 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1728px] px-5 lg:px-[60px] xl:px-[100px]">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px] lg:text-[48px]"
          >
            Applications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-[3px] w-[60px] origin-center bg-[#EB1E28]"
          />
        </div>

        {/* Applications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {applicationsList.map((app: any, idx: number) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative flex flex-col items-start overflow-hidden bg-[#0A0A0A] border border-white/[0.08] p-8 transition-all duration-300 hover:border-[#EB1E28]/50 hover:bg-[#111111]"
              >
                {/* Red subtle glow on hover */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#EB1E28] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-10" />

                <div className="mb-6 rounded-lg bg-white/[0.03] p-4 text-[#EB1E28] transition-colors duration-300 group-hover:bg-[#EB1E28] group-hover:text-white">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 font-display text-[20px] font-semibold text-white lg:text-[22px]">
                  {app.title}
                </h3>

                <p className="font-body text-[15px] leading-[1.6] text-white/70">
                  {app.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
