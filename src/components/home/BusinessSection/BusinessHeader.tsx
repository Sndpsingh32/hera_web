

export function BusinessHeader() {
  return (
    <header className="mx-auto flex max-w-[1060px] flex-col items-center text-center">
      <h2
        id="business-section-heading"
        className="font-poppins text-[clamp(2rem,4vw,3.125rem)] leading-[100%] font-semibold text-white"
      >
        Our Business
      </h2>

      <p className="mt-4 max-w-[1060px] font-body text-[clamp(0.9375rem,2vw,1.5rem)] leading-[160%] font-normal text-white/85 xl:mt-6">
        Our product portfolio is built to serve varied steelmaking requirements, with Ferro
        Manganese grades that support strength, hardness, carbon control, and metallurgical
        consistency.
      </p>


    </header>
  );
}
