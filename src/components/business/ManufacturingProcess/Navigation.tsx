import { ChevronLeft, ChevronRight } from "lucide-react";

type NavButtonProps = {
  onClick: () => void;
  disabled: boolean;
  direction: "previous" | "next";
};

type NavigationProps = {
  onPrevious: () => void;
  onNext: () => void;
  canPrevious: boolean;
  canNext: boolean;
  className?: string;
};

function NavButton({
  onClick,
  disabled,
  direction,
  className,
}: NavButtonProps & { className?: string }) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrevious ? "Previous process step" : "Next process step"}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-black transition-all duration-300 hover:bg-[#E53630] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 ${
        isPrevious ? "bg-white/90" : "bg-white"
      } ${className ?? ""}`}
    >
      <Icon
        className={`h-5 w-5 transition-transform duration-300 ${
          isPrevious ? "group-hover:-rotate-12" : "group-hover:rotate-12"
        }`}
      />
    </button>
  );
}

export function NavPrevious({
  onPrevious,
  canPrevious,
  className,
}: Pick<NavigationProps, "onPrevious" | "canPrevious" | "className">) {
  return (
    <NavButton
      direction="previous"
      onClick={onPrevious}
      disabled={!canPrevious}
      className={className}
    />
  );
}

export function NavNext({
  onNext,
  canNext,
  className,
}: Pick<NavigationProps, "onNext" | "canNext" | "className">) {
  return (
    <NavButton direction="next" onClick={onNext} disabled={!canNext} className={className} />
  );
}
