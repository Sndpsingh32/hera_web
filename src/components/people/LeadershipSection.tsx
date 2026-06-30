import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DirectorCard } from "./DirectorCard";
import { boardDirectors, seniorManagement } from "@/data/leadershipData";
import bgImage from "@/assets/leaderbg.jpg";
import founderImage from "@/assets/leaderm.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function LeadershipSection() {
  const [activeTab, setActiveTab] = useState<"board" | "committees">("board");

  const currentData = activeTab === "board" ? boardDirectors : seniorManagement;

  return (
    <section className="relative w-full pt-[40px] pb-[80px] lg:pt-[60px] lg:pb-[120px] overflow-hidden bg-black">

      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Subtle radial gradient to match the dark industrial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,50,44,0.05)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col items-center">

        {/* Our Legacy Glass Card */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full bg-white/[0.08] backdrop-blur-[16px] border border-white/[0.08] rounded-[16px] p-[30px] lg:p-[48px] flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] mb-[80px] lg:mb-[100px]"
        >
          {/* Left Side: Founder Image */}
          <div className="flex flex-col flex-shrink-0 items-center lg:items-start">
            <img
              src={founderImage}
              alt="Shri. B.L. Agrawal"
              className="w-[280px] h-[280px] lg:w-[314px] lg:h-[310px] object-cover rounded-[8px] mb-[20px]"
            />
            <h3 className="font-sans font-bold text-[23px] text-white text-center lg:text-left leading-tight">
              Shri. B.L. Agrawal
            </h3>
            <p className="font-sans font-normal text-[16px] text-white/80 text-center lg:text-left mt-[4px]">
              Chairman & Managing Director
            </p>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display font-semibold text-[36px] lg:text-[50px] text-white mb-[24px]">
              Our Legacy
            </h2>
            <p className="font-body text-[16px] lg:text-[20px] leading-[180%] text-white/[0.85]">
              Our leadership carries forward a legacy shaped across three generations. With the experience of Shri Omprakash Agrawal, the active leadership of Mr Rahul Agrawal and Mr Vikas Agrawal and the next-generation outlook represented by Kabir Agrawal, our operations are anchored in continuity while remaining focused on what comes next.
            </p>
          </div>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row p-[10px] border border-white/20 gap-[20px] mb-[60px] lg:mb-[80px] max-w-full overflow-x-auto no-scrollbar"
        >
          <button
            onClick={() => setActiveTab("board")}
            className={`whitespace-nowrap px-[24px] py-[10px] lg:py-[12px] transition-all duration-300 font-display text-[18px] lg:text-[24px] leading-none ${activeTab === "board"
              ? "bg-black/[0.65] text-[#E2322C] font-semibold"
              : "text-white font-medium hover:bg-white/[0.05]"
              }`}
          >
            Key Management
          </button>
          <button
            onClick={() => setActiveTab("committees")}
            className={`whitespace-nowrap px-[24px] py-[10px] lg:py-[12px] transition-all duration-300 font-display text-[18px] lg:text-[24px] leading-none ${activeTab === "committees"
              ? "bg-black/[0.65] text-[#E2322C] font-semibold"
              : "text-white font-medium hover:bg-white/[0.05]"
              }`}
          >
            Senior Management
          </button>
        </motion.div>

        {/* Directors Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Triggers unmount/mount animation on tab change
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            {currentData.map((director) => (
              <motion.div key={director.id} variants={cardFade}>
                <DirectorCard director={director} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
