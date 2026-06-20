import React from 'react';
import { motion } from 'framer-motion';
import img1 from '@/assets/product-coal.jpg';
import img2 from '@/assets/product-hc.jpg';
import img3 from '@/assets/product-manganese.jpg';
import img4 from '@/assets/product-ore.jpg';

const clients = [
  {
    title: "Steel\nManufacturing",
    description: "Used across carbon steel and alloy steel manufacturing processes.",
    image: img1
  },
  {
    title: "Deoxidation",
    description: "Supports the removal of oxygen during steelmaking operations.",
    image: img2
  },
  {
    title: "Alloy\nStrengthening",
    description: "Improves the hardness, strength, and wear resistance of steel.",
    image: img3
  },
  {
    title: "Industrial Steel\nApplications",
    description: "Used across infrastructure, engineering, automotive, and industrial steel segments.",
    image: img4
  }
];

export function OurClients() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full h-auto xl:h-[450px]">
        {clients.map((client, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            className="relative w-full h-[450px] overflow-hidden group cursor-pointer"
          >
            <img 
              src={client.image} 
              alt={client.title.replace('\n', ' ')} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[#000000]/[0.55] group-hover:bg-[#000000]/[0.35] transition-colors duration-300 z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
              <h3 className="font-['Montserrat'] font-semibold text-[32px] xl:text-[40px] leading-none text-[#FFFFFF] whitespace-pre-line transition-transform duration-300 group-hover:-translate-y-[10px]">
                {client.title}
              </h3>
              <p className="font-['Open_Sans'] font-normal text-[16px] xl:text-[20px] leading-none text-[#FFFFFF]/90 w-[328px] max-w-[90%] mt-[28px] transition-transform duration-300 group-hover:-translate-y-[10px]">
                {client.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
