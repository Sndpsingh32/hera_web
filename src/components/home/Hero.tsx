import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/components/home/heroSlides";

const AUTOPLAY_DELAY_MS = 5000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative min-h-[560px] h-[100svh] max-h-[960px] w-full overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-full min-w-0 shrink-0 grow-0 basis-full">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                width={1920}
                height={1080}
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/70" />
              <div className="relative flex h-full flex-col items-center justify-center px-4 pt-[88px] pb-16 text-center text-white sm:px-6 sm:pt-[100px] lg:pt-[120px]">
                <h1 className="font-display mx-auto max-w-[913px] text-[clamp(1.75rem,5vw,4.375rem)] leading-[110%] font-semibold tracking-[0.01em]">
                  {slide.titleLines[0]}
                  <br />
                  {slide.titleLines[1]}
                </h1>
                <Link to={slide.ctaLink} className="mt-6 sm:mt-8 mx-auto flex h-[44px] w-full max-w-[226px] items-center justify-center rounded-[6px] bg-[#EB1E28] font-body text-[13px] leading-[100%] font-semibold tracking-[0.01em] text-white uppercase transition hover:opacity-90 sm:h-[50px] sm:text-[14px]">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8">
        <div className="pointer-events-auto flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-brand" : "w-2 bg-white/50 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
