import { ArrowUpRight, Lightbulb, BarChart3 } from "lucide-react";
import efficientFurnace from "@/assets/efficient-furnace.jpg";

export function Efficient() {
  return (
    <section className="py-20 px-6 lg:px-0">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-[70px]">
        {/* Black info card */}
        <div className="relative bg-[#000000] rounded-[10px] p-8 lg:p-[60px] w-full lg:w-[536px] min-h-[420px] md:h-[577px] flex flex-col justify-center shrink-0">
          {/* Red arrow button */}
          <div className="absolute top-0 right-0 bg-[#EB1E28] w-[60px] h-[60px] flex items-center justify-center rounded-tr-[10px] rounded-bl-[10px]">
            <ArrowUpRight className="w-[28px] h-[28px] text-white" strokeWidth={2} />
          </div>

          <h3 className="font-display text-[28px] lg:text-[32px] font-bold text-white leading-tight">
            Efficient by Design
          </h3>

          <p className="mt-6 text-[#D5D5D5] text-[16px] lg:text-[18px] leading-[1.6] font-['Open_Sans'] max-w-[420px]">
            Our manufacturing approach is built around efficient operations, process discipline, and responsible resource use. This enables us to strengthen production consistency, improve operational reliability, and support cost-efficient Ferro Manganese manufacturing.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {[
              { icon: Lightbulb, label: "Think Long Term" },
              { icon: BarChart3, label: "Our Manufacturing Approach" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-4">
                <div className="w-[42px] h-[42px] bg-[#EB1E28] rounded-[6px] flex items-center justify-center shrink-0">
                  <f.icon className="w-[22px] h-[22px] text-white" />
                </div>
                <span className="text-[16px] font-semibold font-['Open_Sans'] text-white">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Furnace image */}
        <div className="w-full lg:w-[794px] h-[300px] md:h-[577px] rounded-[10px] overflow-hidden shrink-0">
          <img src={efficientFurnace} alt="Efficient furnace" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
