import { ArrowUpRight } from "lucide-react";
import type { EfficientFeature } from "@/components/home/EfficientDesign/efficientData";

export type EfficientDesignProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  features: EfficientFeature[];
};

function FeatureRow({ icon: Icon, title }: EfficientFeature) {
  return (
    <li className="flex items-center gap-[18px]">
      <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[8px] bg-[#EB1E28]">
        <Icon className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
      </div>
      <span className="font-body text-[18px] font-semibold leading-none text-white">{title}</span>
    </li>
  );
}

export default function EfficientDesign({
  title,
  description,
  image,
  imageAlt = "Industrial manufacturing furnace",
  features,
}: EfficientDesignProps) {
  return (
    <section
      aria-labelledby="efficient-design-title"
      className="relative pt-[60px] pb-0 md:pt-[80px] lg:pt-[120px] lg:pb-0"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-6 lg:h-[577px] lg:grid-cols-[536px_1fr] lg:gap-[40px]">
          <article className="grid h-auto min-h-[577px] w-full max-w-[536px] grid-rows-[auto_1fr] justify-self-center overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.05)] bg-[#0F0F0F] md:max-w-none md:justify-self-stretch lg:h-[577px] lg:w-[536px]">
            <header className="grid grid-cols-[minmax(0,1fr)_80px]">
              <h2
                id="efficient-design-title"
                className="pt-[36px] pl-[36px] pr-[16px] font-body text-[48px] font-bold leading-none text-white"
              >
                {title}
              </h2>

              <button
                type="button"
                aria-label="Learn more about efficient design"
                className="flex h-[80px] w-[80px] items-center justify-center self-start justify-self-end rounded-[8px] bg-[#EB1E28]"
              >
                <ArrowUpRight className="h-[46px] w-[46px] text-white" strokeWidth={1.5} />
              </button>
            </header>

            <div className="flex flex-col px-[36px] pb-[40px]">
              <div
                className="mb-[28px] mt-[24px] h-px w-full bg-[rgba(255,255,255,0.18)]"
                aria-hidden
              />

              <p className="max-w-[390px] font-body text-[18px] font-normal leading-[180%] text-[rgba(255,255,255,0.82)]">
                {description}
              </p>

              <ul
                className="mt-[50px] flex list-none flex-col gap-[24px]"
                aria-label="Manufacturing principles"
              >
                {features.map((feature) => (
                  <FeatureRow key={feature.title} {...feature} />
                ))}
              </ul>
            </div>
          </article>

          <figure className="relative h-[350px] w-full overflow-hidden rounded-[10px] md:h-[400px] lg:h-[577px]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={794}
              height={577}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
