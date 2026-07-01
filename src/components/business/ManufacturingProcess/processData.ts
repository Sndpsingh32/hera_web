import type { LucideIcon } from "lucide-react";
import { Building2, Factory, Flame, Layers, Truck, ClipboardCheck, Package } from "lucide-react";

export type ProcessStep = {
  index: string;
  label: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    label: "Raw Material Receipt & Inspection",
    icon: Truck,
  },
  {
    index: "02",
    label: "Material Handling & Batching",
    icon: Factory,
  },
  {
    index: "03",
    label: "Smelting Operations",
    icon: Flame,
  },
  {
    index: "04",
    label: "Metal & Slag Separation",
    icon: Layers,
  },
  {
    index: "05",
    label: "Refining & Decarburisation",
    icon: Building2,
  },
  {
    index: "06",
    label: "Quality Inspection",
    icon: ClipboardCheck,
  },
  {
    index: "07",
    label: "Sizing, Packing & Dispatch",
    icon: Package,
  },
];

export const DEFAULT_ACTIVE_INDEX = 0;
