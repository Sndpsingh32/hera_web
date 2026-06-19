import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import businessBg from "@/assets/business-bg.jpg";
import { ProcessCard } from "@/components/business/ManufacturingProcess/ProcessCard";
import { NavNext, NavPrevious } from "@/components/business/ManufacturingProcess/Navigation";
import { ProcessTimeline } from "@/components/business/ManufacturingProcess/ProcessTimeline";
import {
  DEFAULT_ACTIVE_INDEX,
  processSteps,
} from "@/components/business/ManufacturingProcess/processData";

export function ManufacturingProcess() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(DEFAULT_ACTIVE_INDEX, true);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const canPrevious = activeIndex > 0;
  const canNext = activeIndex < processSteps.length - 1;

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden py-16 md:py-20 lg:py-[120px]"
      aria-labelledby="manufacturing-ecosystem-heading"
    >
      <img
        src={businessBg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,90,40,0.12)_0%,transparent_55%)]" />

      <div className="section-container relative z-10 w-full">
        <motion.h2
          id="manufacturing-ecosystem-heading"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center font-display text-[clamp(1.75rem,4vw,3.125rem)] font-semibold leading-[110%] text-white"
        >
          Our Integrated Manufacturing Ecosystem
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[900px] text-center font-body text-[clamp(0.875rem,2vw,1.5rem)] font-normal leading-[150%] text-white/75 md:mt-5"
        >
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don&apos;t
          look even slightly believable.
        </motion.p>

        <div className="mt-8 md:mt-14">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 lg:gap-6">
            <NavPrevious
              onPrevious={scrollPrev}
              canPrevious={canPrevious}
              className="hidden md:flex"
            />

            <div className="min-w-0 w-full flex-1 overflow-hidden" ref={emblaRef}>
              <div className="flex snap-x snap-mandatory gap-4 md:gap-5 lg:justify-between lg:gap-0">
                {processSteps.map((step, index) => (
                  <div
                    key={step.index}
                    className="min-w-0 shrink-0 grow-0 basis-full snap-center md:basis-[210px]"
                  >
                    <ProcessCard
                      step={step}
                      isActive={activeIndex === index}
                      index={index}
                      onSelect={() => {
                        emblaApi?.scrollTo(index);
                        setActiveIndex(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <NavNext onNext={scrollNext} canNext={canNext} className="hidden md:flex" />
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 md:hidden">
            <NavPrevious onPrevious={scrollPrev} canPrevious={canPrevious} />
            <ProcessTimeline activeIndex={activeIndex} total={processSteps.length} mobile />
            <NavNext onNext={scrollNext} canNext={canNext} />
          </div>

          <ProcessTimeline activeIndex={activeIndex} total={processSteps.length} />
        </div>
      </div>
    </motion.section>
  );
}
