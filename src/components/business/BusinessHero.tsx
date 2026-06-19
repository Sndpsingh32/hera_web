import heroFurnace from "@/assets/businesshero.jpg";

export function BusinessHero() {
  return (
    <section className="relative min-h-[560px] h-[min(100svh,1002px)] w-full overflow-hidden">
      <img
        src={heroFurnace}
        alt="Industrial steel production"
        width={1728}
        height={1002}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/[0.31]" />

      <div className="section-container relative flex h-full min-h-[560px] flex-col items-center justify-center pt-[72px] pb-16 text-center text-white lg:pt-[110px] lg:pb-20">
        <h1 className="font-display max-w-[910px] text-[clamp(1.75rem,4.5vw,3.125rem)] font-semibold leading-[110%] tracking-[0.01em]">
          Powering the Foundations of Steel
        </h1>
        <p className="mt-5 max-w-[900px] font-body text-[clamp(0.9375rem,2vw,1.5rem)] font-normal leading-[140%] md:mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since 1966
        </p>
      </div>
    </section>
  );
}
