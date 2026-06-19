import type { ProcessStep } from "@/components/business/data";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  const Icon = step.icon;

  return (
    <div className="flex h-[260px] w-[262px] flex-col items-start justify-between rounded-[10px] border-[3px] border-[#3C3C3C] bg-[#111111]/80 p-5">
      <span className="font-display text-[16px] font-semibold leading-[100%] text-white">
        {"{ "}
        {step.index}
        {" }"}
      </span>

      <Icon className="h-[68px] w-[68px] text-white" strokeWidth={1.25} />

      <p className="max-w-[222px] text-left font-display text-[20px] font-semibold leading-[100%] text-white">
        {step.label}
      </p>
    </div>
  );
}
