import { motion } from "framer-motion";
import Image1 from "@/assets/ab1.jpg";
import Image2 from "@/assets/ab2.jpg";
import Image3 from "@/assets/ab3.jpg";
import Image4 from "@/assets/ab4.jpg";

const timelineData = [
  {
    year: "1956",
    title: "Early Roots as RVR",
    description: "Early foundation of RVR that would later evolve into HESL."
  },
  {
    year: "2007",
    title: "Becoming HESL",
    description: "Acquired by Hira Group from RVR, along with strategic land acquisition at Bobbili Growth Centre."
  },
  {
    year: "2012",
    title: "Smelting Operations Begin",
    description: "Commencement of submerged arc furnace operations and first export shipment to Asian markets."
  },
  {
    year: "2014",
    title: "Public Limited Company",
    description: "Converted into a public limited company, strengthening corporate structure."
  },
  {
    year: "2018",
    title: "Star Export House Recognition",
    description: "Recognition as a Star Export House and expansion into European steel corridors."
  },
  {
    year: "2024",
    title: "Expansion into Refined Grades",
    description: "Expanded operations into Medium Carbon and Low Carbon Ferro Manganese for specialised steelmaking requirements."
  },
  {
    year: "Present",
    title: "Strengthening the Next Phase",
    description: "Focused on integrated operations, efficiency, quality, and reliable supply across domestic and global markets."
  }
];

const galleryImages = [
  Image1,
  Image2,
  Image3,
  Image4
];

// Animations
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const dotReveal = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } }
};

export function JourneySection() {
  return (
    <section className="bg-[#000000] w-full py-[80px] lg:py-[120px] overflow-hidden">
      <div className="w-full max-w-[1728px] mx-auto px-5 lg:px-10">

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_0.9fr] gap-[50px] lg:gap-[60px] items-start">

          {/* Column 1: Story Content (Sticky) */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:sticky lg:top-[50px] z-20"
          >
            <span className="font-display font-semibold text-[16px] lg:text-[20px] text-white uppercase tracking-wider mb-[16px]">
              OUR JOURNEY
            </span>
            <h2 className="font-display font-semibold text-[32px] lg:text-[38px] leading-[1.2] lg:leading-[45px] text-white max-w-[315px] mb-[24px]">
              Forged for the
              <br />
              Steel Value
              <br />
              Chain
            </h2>
            <p className="font-body font-normal text-[16px] lg:text-[20px] leading-[1.6] text-white max-w-[315px]">
              HESL's journey is a story of steady strengthening. Each phase has added a new layer to our capabilities, deepening our manufacturing base, widening our market presence, and sharpening our role in the steel value chain.
            </p>
          </motion.div>

          {/* Column 2: Image Gallery */}
          <div className="flex flex-col items-center gap-[80px] lg:gap-[130px] lg:mt-[45px] z-10">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                className="w-full max-w-[550px] overflow-hidden rounded-[10px]"
              // Parallax margin removed to guarantee 1:1 strict horizontal alignment with timeline
              >
                <img
                  src={src}
                  alt={`Hira Electro Smelters Journey phase ${index + 1}`}
                  className="w-full h-[280px] lg:h-[370px] object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 3: Timeline */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:pl-[20px] lg:pr-[80px] w-full"
          >
            {/* The vertical line container - mathematically sized to exactly match the 4 images (1870px) */}
            <div className="relative border-l-2 border-[#303030] flex flex-col lg:block lg:h-[1870px] py-[20px] lg:py-0">

              {timelineData.map((item, index) => {
                // Exact 250px vertical rhythm to mathematically align with the 500px image rhythm
                const desktopTopClasses = [
                  "lg:top-[0px]",
                  "lg:top-[250px]",
                  "lg:top-[500px]",
                  "lg:top-[750px]",
                  "lg:top-[1000px]",
                  "lg:top-[1250px]",
                  "lg:top-[1500px]"
                ];

                return (
                  <motion.div
                    key={index}
                    className={`relative lg:absolute w-full pl-[40px] lg:pl-[50px] flex flex-col mb-[50px] lg:mb-0 ${desktopTopClasses[index]}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                  >
                    {/* Timeline Dot: detached from the line and acting as a bullet point as per Figma */}
                    <motion.div
                      variants={dotReveal}
                      className="absolute left-[14px] lg:left-[20px] top-[15px] w-[16px] h-[16px] rounded-full border border-white bg-[#000000]"
                    />

                    {/* Content */}
                    <div className="flex flex-col">
                      <span className="font-display font-semibold text-[36px] lg:text-[50px] leading-[1] lg:leading-[45px] text-[#EB1E28] mb-[12px]">
                        {item.year}
                      </span>
                      <h3 className="font-display font-semibold text-[20px] lg:text-[24px] text-white mb-[8px]">
                        {item.title}
                      </h3>
                      <p className="font-body font-normal text-[16px] lg:text-[20px] leading-[1.5] text-white/90">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
