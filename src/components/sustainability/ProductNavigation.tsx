import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import productData from "@/data/products.json";

const { navigation } = productData.highCarbonFerroManganese;

export function ProductNavigation() {
  return (
    <section className="w-full bg-black py-20 lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1728px] px-5 lg:px-[60px] xl:px-[100px]">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-[28px] font-bold text-white md:text-[36px] lg:text-[42px]">
            {navigation.heading}
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="mx-auto mb-16 grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          
          {navigation.links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex min-h-[160px] flex-col justify-center overflow-hidden border border-white/[0.1] bg-[#0A0A0A] p-8 text-left transition-colors duration-300 hover:border-[#EB1E28] hover:bg-[#111111]"
            >
              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#EB1E28] scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100" />
              
              <p className="mb-2 font-display text-[14px] font-medium tracking-wider text-[#EB1E28] uppercase">
                Discover
              </p>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-[20px] font-semibold text-white lg:text-[24px]">
                  {link.title}
                </h3>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-white transition-colors duration-300 group-hover:bg-[#EB1E28]">
                  <ArrowRight size={24} />
                </div>
              </div>
            </motion.a>
          ))}

        </div>

        {/* Back to Business Button */}
        <div className="flex justify-center">
          <motion.a
            href={navigation.backLink.href}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 font-display text-[16px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <ArrowLeft size={20} className=" transition-transform duration-300 group-hover:-translate-x-1" />
            {navigation.backLink.title}
          </motion.a>
        </div>

      </div>
    </section>
  );
}
