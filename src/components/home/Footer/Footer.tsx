import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import hiraLogo from "@/assets/hira_logo.jpg";
import { FooterBottom } from "@/components/home/Footer/FooterBottom";
import { FooterColumn } from "@/components/home/Footer/FooterColumn";
import { footerColumns, footerCopy } from "@/components/home/Footer/footerData";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#050505] py-12 text-white lg:pt-[60px] lg:pb-10"
    >
      <div className="section-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[90px]">
          <div className="shrink-0">
            <Link to="/" className="inline-flex" aria-label="HIRA Electro Smelters home">
              <img
                src={hiraLogo}
                alt="HIRA Electro Smelters"
                className="h-auto w-[180px] max-w-full object-contain sm:w-[220px]"
              />
            </Link>
            <p className="mt-6 font-body text-[15px] leading-none font-normal text-white">
              {footerCopy.followPrefix}{" "}
              <a
                href="#"
                className="text-[#EB1E28] transition-colors duration-300 hover:text-[#ff4a52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB1E28]"
              >
                {footerCopy.linkedIn}
              </a>
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[60px]">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <FooterBottom />
      </div>
    </motion.footer>
  );
}
