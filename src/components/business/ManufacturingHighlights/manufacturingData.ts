import statPlant from "@/assets/stat-plant.jpg";
import containers from "@/assets/containers.jpg";

export type ManufacturingStatItem = {
  value: string;
  label: string;
  description: string;
};

export type HighlightCardItem = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export const manufacturingStats: ManufacturingStatItem[] = [
  {
    value: "25+",
    label: "Countries Served Globally",
    description:
      "Trusted suppliers ensures consistent raw material quality for stable production",
  },
  {
    value: "83,682 MT",
    label: "Annual Ferro Alloys Manufacturing Capacity",
    description:
      "Large scale manufacturing projects each year with proven delivery timelines",
  },
  {
    value: "5,500+ MT",
    label: "Monthly Export Volume",
    description:
      "Large scale manufacturing projects each year with proven delivery timelines",
  },
];

export const highlightCards: HighlightCardItem[] = [
  {
    title: "Largest Indian Producer",
    subtitle: "of MC & LC FeMn",
    image: statPlant,
    imageAlt: "Steel manufacturing plant aerial view",
  },
  {
    title: "Star Export House",
    subtitle: "Recognised Export Status",
    image: containers,
    imageAlt: "Shipping containers and export yard",
  },
];

export const STAT_ANIMATION_DELAYS = [0.15, 0.25, 0.35] as const;
