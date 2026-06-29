import { motion } from "framer-motion";
import bgImage from "@/assets/containers.jpg";
import leaderImage from "@/assets/ableader.jpg";

const cards = [
  {
    title: "Efficiency",
    description: "We focus on building more value into every stage of production through better resource use, stronger yield, and lower process loss."
  },
  {
    title: "Discipline",
    description: "We ensure our consistency comes from doing the fundamentals well every day, across every stage of manufacturing."
  },
  {
    title: "Quality",
    description: "We treat quality as an operating standard, shaped by controlled processes, testing systems, and attention to product specifications."
  },
  {
    title: "Stakeholder Focus",
    description: "We build trust and value for the people, partners, customers, and communities who are part of our operating ecosystem."
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

export function PhilosophySection() {
  return (
    <section className="relative w-full py-[80px] lg:py-[120px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Dark Overlay (75% opacity as requested) */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Header Block */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="w-full flex flex-col items-center text-center mb-[60px] lg:mb-[80px]"
        >
          <h2 className="font-display font-semibold text-[36px] lg:text-[50px] text-white mb-6">
            Our Philosophy
          </h2>
          <p className="font-body font-normal text-[16px] lg:text-[20px] text-white/90 max-w-[1280px] leading-[160%]">
            We believe that performance is shaped by everyday operating choices. The way materials move, equipment is maintained, quality is monitored, energy is used, and commitments are fulfilled determines the strength of the business over time.
          </p>
        </motion.div>

        {/* Philosophy Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px] lg:mb-[100px]"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              // Premium Glassmorphism styling as requested
              className="group relative bg-[#EB1E28]/50 border-[3px] border-white/50 rounded-[10px] p-[30px] lg:p-[40px] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#EB1E28]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-default"
            >
              <h3 className="font-display font-semibold text-[22px] lg:text-[24px] text-white mb-4">
                {card.title}
              </h3>
              <p className="font-body font-normal text-[15px] lg:text-[16px] text-white/90 leading-[160%]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Thin Divider Line */}
        <div className="w-[90%] mx-auto h-[1px] bg-white/50 mb-[80px] lg:mb-[100px]" />

        {/* Leadership Section */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="w-full flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[100px]"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="font-display font-semibold text-[16px] lg:text-[20px] text-white uppercase tracking-wider mb-[16px] lg:mb-[20px]">
              OUR LEADERSHIP
            </span>
            <h2 className="font-display font-semibold text-[32px] lg:text-[38px] leading-[1.2] lg:leading-[45px] text-white mb-[24px] lg:mb-[30px]">
              Our leadership sets
              <br className="hidden lg:block" />
              the foundation
            </h2>
            <p className="font-body font-normal text-[16px] lg:text-[20px] leading-[160%] text-white mb-[32px] lg:mb-[40px]">
              Our leadership sets the foundation for how HESL grows, operates, and delivers. With a focus on discipline, accountability, and long-term value creation, our management guides us toward stronger systems, sharper execution, and sustainable progress.
            </p>

            {/* Interactive Button */}
            <button className="self-start bg-[#EB1E28] text-white font-display font-semibold text-[14px] px-[20px] py-[10px] rounded-[6px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#c91820] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(235,30,40,0.3)]">
              MEET OUR LEADERSHIP
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[850px] overflow-hidden rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img
                // High quality placeholder for industrial leadership team
                src={leaderImage}
                alt="Hira Electro Smelters Leadership Team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
