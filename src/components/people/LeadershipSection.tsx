import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DirectorCard } from "./DirectorCard";
import { boardDirectors, seniorManagement } from "@/data/leadershipData";
import bgImage from "@/assets/leaderbg.jpg";
import founderImage from "@/assets/leaderm.png";
import rahulImg from "@/assets/leader/DSCF102.jpeg";
import vikasImg from "@/assets/leader/vikasha.jpeg";

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

// The 3 legacy persons — swap image/name/role as needed
const legacyPersons = [
  {
    name: "Shri. B.L. Agrawal",
    role: "Founder & Promoter",
    image: founderImage,
  },
  {
    name: "Rahul Agrawal",
    role: "Chairman & Managing Director",
    image: rahulImg,
  },
  {
    name: "Vikas Agrawal",
    role: "Director",
    image: vikasImg,
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
          {/* Left Side: 3 Founder Portraits — stacked vertically on desktop */}
          <div className="flex flex-shrink-0 flex-row justify-center lg:flex-col gap-5 lg:gap-6 lg:justify-start lg:items-start items-center">
            {legacyPersons.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: "easeOut" }}
                className="flex items-center gap-4 group"
              >
                {/* Avatar with red glow on hover */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#EB1E28]/25 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={person.image}
                    alt={person.name}
                    className="relative w-[72px] h-[72px] lg:w-[84px] lg:h-[84px] rounded-full object-cover object-top border-2 border-white/10 group-hover:border-[#EB1E28]/60 transition-all duration-300"
                  />
                  {/* Red dot accent */}
                  <span className="absolute bottom-[2px] right-[2px] w-[12px] h-[12px] rounded-full bg-[#EB1E28] border-2 border-black" />
                </div>

                {/* Name + Designation — shown only on desktop beside avatar */}
                <div className="hidden lg:block">
                  <p className="font-display font-semibold text-[15px] text-white leading-tight">{person.name}</p>
                  <p className="font-body text-[13px] text-white/55 mt-[4px]">{person.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Mobile: names below portraits */}
            <div className="flex lg:hidden flex-col gap-1 text-center mt-2">
              {legacyPersons.map((person) => (
                <p key={person.name} className="font-body text-[12px] text-white/60">{person.name}</p>
              ))}
            </div>
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
