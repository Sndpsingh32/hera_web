import heroFurnace from "@/assets/hero-furnace.jpg";
import statPlant from "@/assets/stat-plant.jpg";
import containers from "@/assets/containers.jpg";

export function Stats() {
  return (
    <section className="relative bg-surface text-surface-foreground py-20 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={heroFurnace} alt="" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-surface/40" />
      </div>
      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-14">
          {[
            { num: "25+", title: "Countries Served Globally", desc: "Trusted suppliers ensures consistent raw material quality for stable production" },
            { num: "83,682 MT", title: "Annual Ferro Alloys Manufacturing Capacity", desc: "Large scale manufacturing projects each year with proven delivery timelines" },
            { num: "5,500+ MT", title: "Monthly Export Volume", desc: "Large scale manufacturing projects each year with proven delivery timelines" },
          ].map((s) => (
            <div key={s.num} className="border-l-2 border-brand pl-6">
              <div className="text-4xl md:text-5xl font-semibold">{s.num}</div>
              <div className="mt-2 font-medium">{s.title}</div>
              <div className="text-sm text-white/60 mt-1 max-w-md">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {[
            { img: statPlant, title: "Largest Indian Producer", sub: "of MC & LC FeMn" },
            { img: containers, title: "Star Export House", sub: "Recognised Export Status" },
          ].map((c) => (
            <div key={c.title} className="relative h-[200px] rounded-sm overflow-hidden group">
              <img src={c.img} alt={c.title} width={768} height={512} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="text-2xl font-semibold">{c.title}</div>
                <div className="text-sm text-white/80">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
