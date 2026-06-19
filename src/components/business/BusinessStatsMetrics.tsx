import { businessStatsMetrics } from "@/components/business/data";

export function BusinessStatsMetrics() {
  return (
    <div className="w-full lg:w-[492px]">
      {businessStatsMetrics.map((stat, i) => (
        <div key={stat.num}>
          <div className="py-8 lg:py-10">
            <div className="font-display text-[40px] font-bold leading-none text-white md:text-[50px]">
              {stat.num}
            </div>
            <div className="mt-2 font-['Open_Sans'] text-[16px] font-normal leading-snug text-white md:text-[18px]">
              {stat.label}
            </div>
          </div>
          {i < businessStatsMetrics.length - 1 && (
            <div className="h-[2px] w-full bg-[#EB1E28]" />
          )}
        </div>
      ))}
    </div>
  );
}
