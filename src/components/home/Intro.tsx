import { Link } from "@tanstack/react-router";
import plantAerial from "@/assets/plant-aerial.jpg";

export function Intro() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="section-container mx-auto flex w-full flex-col lg:min-h-[calc(100vh-110px)] lg:flex-row">
        <div className="flex w-full flex-col justify-center py-14 sm:py-16 lg:w-7/12 lg:py-10 xl:py-20">
          <div className="mx-auto w-full max-w-[750px] lg:mx-0">
            <h2 className="font-display max-w-[524px] text-[clamp(1.875rem,4vw,3.125rem)] leading-[110%] font-semibold">
              <span className="text-[#EB1E28]">India&apos;s leading</span>{" "}
              <span className="text-black">
                ferro
                <br />
                alloys producers
              </span>
            </h2>
            <p className="mt-5 max-w-[614px] font-body text-[15px] leading-[150%] font-normal text-black sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] xl:leading-[140%]">
              Hira Electro Smelters Limited is one of India&apos;s leading ferro alloys producers,
              manufacturing various Ferro Manganese grades for steelmaking applications. Backed by
              the wider Hira Group ecosystem and strategically located near Visakhapatnam Port, we
              combine integrated manufacturing, process discipline, and export-ready infrastructure
              to serve customers across India and global markets.
            </p>
            <Link to="/about" className="mt-8 flex h-[44px] w-full max-w-[226px] items-center justify-center rounded-[6px] bg-[#EB1E28] font-body text-[13px] leading-[100%] font-semibold tracking-[0.01em] text-white uppercase transition hover:opacity-90 sm:mt-10 sm:h-[50px] sm:text-[14px]">
              KNOW MORE ABOUT US
            </Link>
          </div>
        </div>

        <div className="relative min-h-[280px] w-full sm:min-h-[360px] lg:w-5/12">
          <div className="absolute left-1/2 h-full w-[100vw] -translate-x-1/2 lg:left-0 lg:translate-x-0">
            <img
              src={plantAerial}
              alt="Hira plant aerial view"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
