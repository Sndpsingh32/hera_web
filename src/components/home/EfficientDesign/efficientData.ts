import { Factory, Award, type LucideIcon } from "lucide-react";
import efficientFurnace from "@/assets/efficient-furnace.jpg";

export type EfficientFeature = {
  icon: LucideIcon;
  title: string;
};

export const efficientFeatures: EfficientFeature[] = [
  { icon: Factory, title: "Think Long Term" },
  { icon: Award, title: "Our Manufacturing Approach" },
];

export const efficientDefaults = {
  title: "Efficient by Design",
  description:
    "Our manufacturing approach is built around efficient operations, process discipline, and responsible resource use. This enables us to strengthen production consistency, improve operational reliability, and support cost-efficient Ferro Manganese manufacturing.",
  image: efficientFurnace,
  imageAlt: "Industrial furnace with molten metal glow",
  features: efficientFeatures,
};
