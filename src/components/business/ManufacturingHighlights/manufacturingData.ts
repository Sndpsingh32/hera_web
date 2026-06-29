import statPlant from "@/assets/stat-plant.jpg";
import containers from "@/assets/containers.jpg";

export type ManufacturingStatItem = {
  value: string;
  label: string;
};

export type HighlightCardItem = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export const manufacturingStats: ManufacturingStatItem[] = [
  {
    value: "83,682 MT",
    label: "Annual Ferro Alloys Manufacturing Capacity",
  },
  {
    value: "5,500+ MT",
    label: "Monthly Export Volume",
  },
  {
    value: "90%+",
    label: "Capacity Utilisation",
  },
  {
    value: "25+ Countries",
    label: "Served Globally",
  },
];

export const highlightCards: HighlightCardItem[] = [
  {
    title: "Largest",
    subtitle: "Indian Producer of MC & LC FeMn",
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

export const STAT_ANIMATION_DELAYS = [0.15, 0.25, 0.35, 0.45] as const;
