import containers from "@/assets/containers.jpg";

export function BusinessStatsContainersCard() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-[10px] lg:h-[320px]">
      <img
        src={containers}
        alt="Export containers"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
