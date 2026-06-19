import { cn } from "@/lib/utils";

type HeaderButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function HeaderButton({ className, onClick }: HeaderButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "hidden h-[44px] items-center justify-center rounded-[6px] bg-[#EB1E28] px-4 font-body text-[12px] leading-none font-semibold tracking-[1.5px] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff2d38] hover:shadow-[0_8px_24px_rgba(235,30,40,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-flex xl:h-[50px] xl:w-[140px] xl:px-0 xl:text-[14px] xl:tracking-[2px]",
        className,
      )}
    >
      CONTACT US
    </button>
  );
}
