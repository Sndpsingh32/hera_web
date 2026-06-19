import statPlant from "@/assets/stat-plant.jpg";

export function BusinessStatsPlantCard() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-[10px] lg:h-[320px]">
      <img
        src={statPlant}
        alt="Hira plant facility"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div className="font-display text-[26px] font-bold leading-tight lg:text-[32px]">Largest</div>
        <div className="mt-1 font-['Open_Sans'] text-[14px] font-medium text-white/80 lg:text-[16px]">
          Indian Producer of MC &amp; LC FeMn
        </div>
      </div>
    </div>
  );
}
