import plantAerial from "@/assets/plant-aerial.jpg";

export function Intro() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[738px] bg-white overflow-hidden">
      <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 lg:pl-[calc((100vw-1398px)/2)] lg:pr-16 py-20 lg:py-0">
        <div className="max-w-[700px] xl:max-w-[750px]">
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-[50px] leading-[100%] max-w-[524px]">
            <span className="text-[#EB1E28]">India's leading</span>{" "}
            <span className="text-black">ferro<br />alloys producers</span>
          </h2>
          <p className="mt-6 text-black font-['Open_Sans'] text-[16px] md:text-[24px] leading-[100%] max-w-[614px] font-normal">
            Hira Electro Smelters Limited is one of India's leading ferro alloys producers, manufacturing various Ferro Manganese grades for steelmaking applications. Backed by the wider Hira Group ecosystem and strategically located near Visakhapatnam Port, we combine integrated manufacturing, process discipline, and export-ready infrastructure to serve customers across India and global markets.
          </p>
          <button className="mt-10 bg-[#EB1E28] text-white font-['Open_Sans'] text-[14px] font-semibold leading-[100%] tracking-[0.01em] uppercase w-[226px] h-[50px] rounded-[6px] flex items-center justify-center hover:opacity-90 transition">
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
      <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-full">
        <img src={plantAerial} alt="Hira plant aerial view" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}
