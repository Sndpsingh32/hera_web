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

      {/* Red Gradient Overlay (Increased height on hover for text readability) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] transition-all duration-500 ease-out group-hover:h-[85%]"
        style={{
          background: "linear-gradient(to top, rgba(226,50,44,0.95) 0%, rgba(226,50,44,0.7) 40%, rgba(226,50,44,0) 100%)"
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-[32px] flex flex-col justify-end">
        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <h3 className="font-display font-bold text-[20px] text-white leading-tight mb-[4px]">
            {director.name}
          </h3>
          <p className="font-body font-semibold text-[16px] text-white">
            {director.designation}
          </p>
        </div>
        
        {/* Full Bio visible on hover */}
        {director.description && (
          <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="overflow-hidden">
              <div className="pt-[12px]">
                <p className="font-body font-normal text-[15px] text-white/90 leading-[1.6]">
                  {director.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
