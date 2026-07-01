import { Factory, Award, type LucideIcon } from "lucide-react";
import efficientFurnace from "@/assets/efficientby.JPG";

export type EfficientFeature = {
  icon: LucideIcon;
  title: string;
};

export const efficientFeatures: EfficientFeature[] = [
  { icon: Factory, title: "" },
  { icon: Award, title: "" },
];

export const efficientDefaults = {
  title: "Efficient by Design",
  description:
    "Our manufacturing approach is built around efficient operations, process discipline, and responsible resource use. This enables us to strengthen production consistency, improve operational reliability, and support cost-efficient Ferro Manganese manufacturing.",
  image: efficientFurnace,
  imageAlt: "Industrial furnace with molten metal glow",
  features: efficientFeatures,
};
