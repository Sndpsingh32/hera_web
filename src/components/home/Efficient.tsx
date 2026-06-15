import { ArrowUpRight, Lightbulb, BarChart3 } from "lucide-react";
import efficientFurnace from "@/assets/efficient-furnace.jpg";

export function Efficient() {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[536fr_794fr] gap-6 lg:gap-8 items-stretch">
        {/* Black info card */}
        <div className="relative bg-black text-white rounded-[10px] p-10 lg:p-12 min-h-[420px] md:min-h-[577px] border border-white/10">
          {/* Red arrow button overlapping top-right */}
          <div className="absolute -top-5 -right-5 bg-brand w-14 h-14 rounded-[10px] flex items-center justify-center border-4 border-white shadow-lg">
            <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>

          <h3 className="font-display text-[28px] font-semibold leading-none pb-5 border-b border-white/30">
            Efficient by Design
          </h3>

          <p className="mt-6 text-white text-[20px] lg:text-[22px] leading-snug font-normal">
            Our manufacturing approach is built around efficient operations, process discipline, and responsible resource use. This enables us to strengthen production consistency, improve operational reliability, and support cost-efficient Ferro Manganese manufacturing.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            {[
              { icon: Lightbulb, label: "Think Long Term" },
              { icon: BarChart3, label: "Our Manufacturing Approach" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand rounded-[8px] flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-base font-semibold text-white">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Furnace image */}
        <div className="relative min-h-[300px] md:min-h-[577px] rounded-[10px] overflow-hidden">
          <img src={efficientFurnace} alt="Efficient furnace" width={794} height={577} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
