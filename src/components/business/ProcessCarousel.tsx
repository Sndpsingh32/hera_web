import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { processSteps } from "@/components/business/data";
import { ProcessStepCard } from "@/components/business/ProcessStepCard";
import { ProcessProgressBar } from "@/components/business/ProcessProgressBar";

export function ProcessCarousel() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-[1530px]">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="relative w-full"
      >
        <CarouselPrevious className="top-[calc(50%-12px)] h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white text-black shadow-none hover:bg-white/90 disabled:opacity-40 left-0 lg:left-2" />
        <CarouselNext className="top-[calc(50%-12px)] h-10 w-10 -translate-y-1/2 rounded-full border-0 bg-white text-black shadow-none hover:bg-white/90 disabled:opacity-40 right-0 lg:right-2" />

        <div className="mx-auto w-full max-w-[1410px] px-14 lg:px-16">
          <CarouselContent className="-ml-5 p-[10px]">
            {processSteps.map((step) => (
              <CarouselItem key={step.index} className="basis-auto pl-5">
                <ProcessStepCard step={step} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <ProcessProgressBar />
        </div>
      </Carousel>
    </div>
  );
}
