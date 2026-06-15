import heroFurnace from "@/assets/hero-furnace1.jpg";
import statPlant from "@/assets/stat-plant.jpg";
import containers from "@/assets/containers.jpg";

export function Stats() {
  return (
    <section className="relative w-full min-h-[900px] flex items-center justify-center py-20 lg:py-0 overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-black">
        <img src={heroFurnace} alt="Background" loading="lazy" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1418px] mx-auto px-6 xl:px-0 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-0">

        {/* Left Stats Column */}
        <div className="w-full lg:w-[492px] flex flex-col gap-[50px] lg:mt-10">
          {[
            { num: "25+", title: "Countries Served Globally", desc: "Trusted suppliers ensures consistent raw material quality for stable production" },
            { num: "83,682 MT", title: "Annual Ferro Alloys Manufacturing Capacity", desc: "Large scale manufacturing projects each year with proven delivery timelines" },
            { num: "5,500+ MT", title: "Monthly Export Volume", desc: "Large scale manufacturing projects each year with proven delivery timelines" },
          ].map((s) => (
            <div key={s.num} className="border-l-2 border-[#EB1E28] pl-[20px] flex flex-col gap-[8px]">
              <div className="text-[40px] md:text-[50px] font-bold text-white leading-none">{s.num}</div>
              <div className="text-[16px] md:text-[18px] font-semibold text-white leading-snug">{s.title}</div>
              <div className="text-[14px] text-white/70 max-w-[400px] leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Right Images Column */}
        <div className="w-full lg:w-[570px] flex flex-col gap-[40px]">
          {[
            { img: statPlant, title: "Largest Indian Producer", sub: "of MC & LC FeMn" },
            { img: containers, title: "Star Export House", sub: "Recognised Export Status" },
          ].map((c) => (
            <div key={c.title} className="relative w-full lg:w-[570px] h-[300px] rounded-[10px] overflow-hidden group">
              <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-[26px] lg:text-[32px] font-bold leading-tight">{c.title}</div>
                <div className="text-[14px] lg:text-[16px] font-medium text-white/80 mt-1">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
