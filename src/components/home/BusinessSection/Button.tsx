type ButtonProps = {
  label: string;
  "aria-label"?: string;
};

export function Button({ label, "aria-label": ariaLabel }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel ?? label}
      className="inline-flex h-[52px] items-center justify-center rounded-[6px] bg-[#EB1E28] px-8 font-body text-[14px] leading-[100%] font-semibold tracking-[0.01em] text-white uppercase transition-colors duration-300 hover:bg-[#c91922] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
    </button>
  );
}
