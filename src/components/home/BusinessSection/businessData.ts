import productHc from "@/assets/product-hc.jpg";
import productCoal from "@/assets/product-coal.jpg";
import productOre from "@/assets/product-ore.jpg";
import productManganese from "@/assets/product-manganese.jpg";
import productSlag from "@/assets/product-slag.jpg";
import productStorage from "@/assets/product-storage.jpg";
import businessBg from "@/assets/business-bg.jpg";

export type Product = {
  id: number;
  title: string;
  titleLines?: [string, string, string];
  image: string;
  link?: string;
};

export const businessBackground = businessBg;

export const products: Product[] = [
  {
    id: 1,
    title: "High Carbon Ferro Manganese (HC FeMn)",
    titleLines: ["High Carbon Ferro", "Manganese", "(HC FeMn)"],
    image: productHc,
    link: "/products/high-carbon-ferro-manganese",
  },
  {
    id: 2,
    title: "Medium Carbon Ferro Manganese",
    image: productCoal,
    link: "/products/medium-carbon-ferro-manganese",
  },
  {
    id: 3,
    title: "Low Carbon Ferro Manganese",
    image: productOre,
    link: "/products/low-carbon-ferro-manganese",
  },
  {
    id: 4,
    title: "Rejected Slag Dust",
    image: productManganese,
    link: "/products/rejected-slag-dust",
  },
  {
    id: 5,
    title: "MOX Dust",
    image: productSlag,
    link: "/products/mox-dust",
  },
  {
    id: 6,
    title: "Ferro Manganese Slag",
    image: productStorage,
    link: "/products/ferro-manganese-slag",
  },
];
