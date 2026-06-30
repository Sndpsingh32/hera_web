import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DirectorCard } from "./DirectorCard";
import { boardDirectors, seniorManagement } from "@/data/leadershipData";
import bgImage from "@/assets/leaderbg.jpg";
import omprakashImg from "@/assets/leader/omprakash.jpeg";
import rahulImg from "@/assets/leader/rahulagrawal.png";
import vikasImg from "@/assets/leader/vikasha.jpeg";
import kabirImg from "@/assets/leader/kabir.jpeg";

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

const legacyPersons = [
  {
    name: "Shri Omprakash Agrawal",
    role: "Founder & Promoter",
    image: omprakashImg,
  },
  {
    name: "Mr Vikas Agrawal",
    role: "Director",
    image: vikasImg,
  },
  {
    name: "Mr Rahul Agrawal",
    role: "Chairman & Managing Director",
    image: rahulImg,
  },

  {
    name: "Mr Kabir Agrawal",
    role: "Director",
    image: kabirImg,
  },
];

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
      {/* Subtle radial gradient */}
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
          {/* Left Side: 4 Founder Portraits — 2x2 Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-x-10 lg:gap-y-10 flex-shrink-0 mx-auto lg:mx-0 w-full sm:w-auto">
            {legacyPersons.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Large Avatar with Glow */}
                <div className="relative mb-4 lg:mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#EB1E28]/30 blur-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={person.image}
                    alt={person.name}
                    className="relative w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] rounded-full object-cover object-top border-[3px] border-white/10 group-hover:border-[#EB1E28] group-hover:shadow-[0_0_20px_rgba(235,30,40,0.4)] transition-all duration-500"
                  />
                  {/* Accent Dot */}
                  <span className="absolute bottom-[4px] right-[4px] lg:bottom-[8px] lg:right-[8px] w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] rounded-full bg-[#EB1E28] border-[2px] lg:border-[3px] border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>

                {/* Name */}
                <div className="mt-2">
                  <p className="font-display font-semibold text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-white leading-tight group-hover:text-[#EB1E28] transition-colors duration-300">{person.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider line on desktop */}
          <div className="hidden lg:block w-[1px] self-stretch bg-white/[0.08]" />

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center flex-1">
            <div className="flex items-center gap-3 mb-[20px]">
              <div className="w-[36px] h-[2px] bg-[#EB1E28]" />
              <span className="font-display text-[13px] uppercase tracking-[0.2em] text-[#EB1E28] font-bold">Legacy</span>
            </div>
            <h2 className="font-display font-semibold text-[36px] lg:text-[50px] text-white mb-[20px] leading-[1.1]">
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
            key={activeTab}
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
