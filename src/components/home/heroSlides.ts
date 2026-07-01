import heroFurnace from "@/assets/hero-furnace.jpg";
import efficientFurnace from "@/assets/landinghero2nd.JPG";
import plantAerial from "@/assets/plant-aerial.jpg";

export type HeroSlide = {
  image: string;
  imageAlt: string;
  titleLines: [string, string];
  cta: string;
  ctaLink: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: heroFurnace,
    imageAlt: "Ferro alloy furnace",
    titleLines: ["Ferro Alloys Built for the", "Steel Value Chain"],
    cta: "KNOW MORE ABOUT US",
    ctaLink: "/about",
  },
  {
    image: efficientFurnace,
    imageAlt: "Efficient smelting operations",
    titleLines: ["Efficient Manufacturing", "for Global Markets"],
    cta: "EXPLORE OUR BUSINESS",
    ctaLink: "/business",
  },
  {
    image: plantAerial,
    imageAlt: "Hira plant aerial view",
    titleLines: ["India's Leading", "Ferro Alloys Producer"],
    cta: "EXPLORE PRODUCTS",
    ctaLink: "/products/high-carbon-ferro-manganese",
  },
];
