import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Factory,
  Flame,
  Layers,
  Building2,
} from "lucide-react";

export type ProcessStep = {
  index: string;
  label: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    label: "Raw Material Receipt & Inspection",
    icon: ClipboardCheck,
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
];

export const businessStatsMetrics = [
  { num: "83,682 MT", label: "Annual Ferro Alloys Manufacturing Capacity" },
  { num: "5,500+ MT", label: "Monthly Export Volume" },
  { num: "90%+", label: "Capacity Utilization" },
];
