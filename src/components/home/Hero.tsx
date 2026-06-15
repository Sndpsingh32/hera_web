import heroFurnace from "@/assets/hero-furnace.jpg";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img src={heroFurnace} alt="Ferro alloy furnace" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/70" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
          Ferro Alloys Built for the<br />Steel Value Chain
        </h1>
        <button className="mt-10 bg-brand text-brand-foreground text-xs font-bold tracking-widest px-6 py-3 rounded-md hover:opacity-90 transition">
          KNOW MORE ABOUT US
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-8 h-1 bg-brand rounded-full" />
        <span className="w-2 h-1 bg-white/50 rounded-full" />
        <span className="w-2 h-1 bg-white/50 rounded-full" />
      </div>
    </section>
  );
}
