import heroFurnace from "@/assets/hero-furnace.jpg";

export function BusinessHero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[1002px] w-full overflow-hidden">
      <img
        src={heroFurnace}
        alt="Industrial steel production"
        width={1728}
        height={1002}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/0 to-black/[0.31]" />

      <div className="relative flex min-h-[700px] lg:min-h-[1002px] flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="font-display max-w-[910px] text-3xl font-semibold leading-[100%] tracking-[0.01em] md:text-4xl lg:text-[50px]">
          Powering the Foundations of Steel
        </h1>
        <p className="mt-6 max-w-[900px] font-['Open_Sans'] text-base font-normal leading-[100%] md:text-xl lg:text-[24px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since 1966
        </p>
      </div>
    </section>
  );
}
