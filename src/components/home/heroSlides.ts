import heroFurnace from "@/assets/hero-furnace.jpg";
import efficientFurnace from "@/assets/efficient-furnace.jpg";
import plantAerial from "@/assets/plant-aerial.jpg";

export type HeroSlide = {
  image: string;
  imageAlt: string;
  titleLines: [string, string];
  cta: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: heroFurnace,
    imageAlt: "Ferro alloy furnace",
    titleLines: ["Ferro Alloys Built for the", "Steel Value Chain"],
    cta: "KNOW MORE ABOUT US",
  },
  {
    image: efficientFurnace,
    imageAlt: "Efficient smelting operations",
    titleLines: ["Efficient Manufacturing", "for Global Markets"],
    cta: "EXPLORE OUR BUSINESS",
  },
  {
    image: plantAerial,
    imageAlt: "Hira plant aerial view",
    titleLines: ["India's Leading", "Ferro Alloys Producer"],
    cta: "KNOW MORE ABOUT US",
  },
];
