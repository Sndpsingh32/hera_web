import React from 'react';
import { Maximize, Boxes } from 'lucide-react';
import rightImage from '@/assets/product.jpg';
import { motion } from 'framer-motion';

const defaultSpecifications = [
  { value: '65% – 78%', label: 'Manganese (Mn)' },
  { value: '6 – 8%', label: 'Carbon (C)' },
  { value: '1% Max', label: 'Silicon (Si)' },
  { value: '0.10 – 0.35%', label: 'Phosphorus (P)' },
  { value: '0.05% Max', label: 'Sulphur (S)' },
];

function SizeCard({ className = '', value = 'As per buyer requirements' }: { className?: string; value?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex min-h-[180px] flex-col justify-between bg-[#000000] p-5 shadow-2xl sm:min-h-[200px] sm:p-6 md:min-h-[246px] md:p-[24px] lg:min-h-[280px] lg:p-[30px] ${className}`}
    >
      <Maximize
        className="h-9 w-9 text-[#EB1E28] sm:h-10 sm:w-10 lg:h-[52px] lg:w-[52px]"
        strokeWidth={1.5}
      />
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-['Montserrat'] text-[22px] font-semibold leading-none text-white sm:text-[26px] lg:text-[34px]">
          Size
        </h3>
        <p className="font-['Montserrat'] text-[15px] font-semibold leading-snug text-white sm:text-[18px] lg:text-[24px]">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function AppearanceCard({ className = '', value = 'Silver or dark grey lumps (10–100mm)' }: { className?: string; value?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className={`flex min-h-[180px] flex-col justify-between bg-[#EB1E28] p-5 shadow-2xl sm:min-h-[200px] sm:p-6 md:min-h-[246px] md:p-[24px] lg:min-h-[280px] lg:p-[30px] ${className}`}
    >
      <Boxes
        className="h-10 w-10 text-white sm:h-12 sm:w-12 lg:h-[68px] lg:w-[76px]"
        strokeWidth={1.5}
      />
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-['Montserrat'] text-[20px] font-semibold leading-tight text-white sm:text-[22px] lg:text-[29px]">
          Physical Appearance
        </h3>
        <p className="font-['Montserrat'] text-[13px] font-semibold leading-snug text-white sm:text-[14px] lg:text-[18px]">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

export function SpecificationSection({ product }: { product?: any }) {
  const specsData = product?.specifications || defaultSpecifications;
  const mainSpecs = specsData.filter((s: any) => s.label !== 'Size' && s.label !== 'Physical Appearance');
  const sizeSpec = specsData.find((s: any) => s.label === 'Size');
  const appearanceSpec = specsData.find((s: any) => s.label === 'Physical Appearance');

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#000000] md:h-[868px] md:flex-row">
      {/* Specifications */}
      <div className="w-full px-5 py-10 md:flex md:w-1/2 md:flex-col md:justify-center md:py-0 md:pl-[60px] lg:pl-[100px] xl:pl-[160px]">
        <div className="w-full max-w-[378px]">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 font-['Montserrat'] text-[28px] font-semibold leading-none text-white sm:text-[32px] md:mb-10 md:text-[50px]"
          >
            Specifications
          </motion.h2>
          <div className="flex flex-col gap-[30px]">
            {mainSpecs.map((spec: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-[20px]"
              >
                <div className="mt-1 h-[42px] w-[2px] shrink-0 bg-[#EB1E28] sm:h-[48px] md:mt-2 md:h-[68px]"></div>
                <div className="flex flex-col justify-center gap-2 md:gap-[8px]">
                  <span className="font-['Montserrat'] text-[20px] font-semibold leading-none text-white sm:text-[24px] md:text-[40px]">
                    {spec.value}
                  </span>
                  <span className="font-['Open_Sans'] text-[14px] font-normal leading-none text-white/90 sm:text-[16px] md:text-[20px]">
                    {spec.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet cards — in document flow */}
      <div className="grid w-full grid-cols-2 gap-3 px-5 pb-6 sm:gap-4 md:hidden">
        {sizeSpec && <SizeCard value={sizeSpec.value} />}
        {appearanceSpec && <AppearanceCard value={appearanceSpec.value} />}
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[240px] w-full sm:h-[320px] md:h-full md:w-1/2"
      >
        <img
          src={rightImage}
          alt="Laboratory analysis"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Desktop floating cards */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-[40%] -translate-y-1/2 flex-col gap-[30px] md:flex">
        {sizeSpec && <SizeCard className="pointer-events-auto w-[250px]" value={sizeSpec.value} />}
        {appearanceSpec && <AppearanceCard className="pointer-events-auto w-[250px]" value={appearanceSpec.value} />}
      </div>
    </section>
  );
}
