import plantAerial from "@/assets/plant-aerial.jpg";

export function Intro() {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight">
            <span className="text-brand">India's leading</span>{" "}
            <span className="text-foreground">ferro alloys producers</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hira Electro Smelters Limited is one of India's leading ferro alloys producers, manufacturing various Ferro Manganese grades for steelmaking applications. Backed by the wider Hira Group ecosystem and strategically located near Visakhapatnam Port, we combine integrated manufacturing, process discipline, and export-ready infrastructure to serve customers across India and global markets.
          </p>
          <button className="mt-8 bg-brand text-brand-foreground text-xs font-bold tracking-widest px-6 py-3 rounded-md hover:opacity-90 transition">
            KNOW MORE ABOUT US
          </button>
        </div>
        <div className="relative">
          <img src={plantAerial} alt="Hira plant aerial view" width={1564} height={738} loading="lazy" className="w-full h-[420px] object-cover rounded-sm" />
        </div>
      </div>
    </section>
  );
}
