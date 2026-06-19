import backgroundImage from "@/assets/hero-furnace1.jpg";
import cardPlant from "@/assets/stat-plant.jpg";
import cardContainers from "@/assets/containers.jpg";

export type StatItemData = {
  number: string;
  heading: string;
  description: string;
};

export type ImageCardData = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

export const statsBackground = backgroundImage;

export const statItems: StatItemData[] = [
  {
    number: "25+",
    heading: "",
    description:
      "Trusted suppliers ensures consistent raw material quality for stable production",
  },
  {
    number: "83,682 MT",
    heading: "Annual Ferro Alloys Manufacturing Capacity",
    description:
      "Large scale manufacturing projects each year with proven delivery timelines",
  },
  {
    number: "5,500+ MT",
    heading: "Monthly Export Volume",
    description:
      "Large scale manufacturing projects each year with proven delivery timelines",
  },
];

export const imageCards: ImageCardData[] = [
  {
    image: cardPlant,
    imageAlt: "Steel manufacturing plant aerial view",
    title: "Largest Indian Producer",
    subtitle: "of MC & LC FeMn",
  },
  {
    image: cardContainers,
    imageAlt: "Shipping containers and export yard",
    title: "Star Export House",
    subtitle: "Recognised Export Status",
  },
];

export const STAT_ITEM_DELAYS = [0, 0.15, 0.3] as const;
export const IMAGE_CARD_DELAYS = [0.2, 0.35] as const;
