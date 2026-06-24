import { motion } from "framer-motion";
import { Director } from "@/data/leadershipData";

interface DirectorCardProps {
  director: Director;
}

export function DirectorCard({ director }: DirectorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative w-full h-[430px] rounded-[8px] overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={director.image}
        alt={director.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Red Gradient Overlay (Increased height to ensure text readability for long bios) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[70%]"
        style={{
          background: "linear-gradient(to top, rgba(226,50,44,0.95) 0%, rgba(226,50,44,0.7) 40%, rgba(226,50,44,0) 100%)"
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-[32px] flex flex-col justify-end">
        <h3 className="font-display font-bold text-[20px] text-white leading-tight mb-[4px]">
          {director.name}
        </h3>
        <p className="font-body font-semibold text-[16px] text-white mb-[12px]">
          {director.designation}
        </p>
        
        {/* Full Bio visible as per Figma (Only rendered if it exists) */}
        {director.description && (
          <p className="font-body font-semibold text-[16px] text-white/90 leading-none">
            {director.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
