import productHc from "@/assets/product-hc.jpg";
import productCoal from "@/assets/product-coal.jpg";
import productOre from "@/assets/product-ore.jpg";
import productSlag from "@/assets/product-slag.jpg";
import productManganese from "@/assets/product-manganese.jpg";
import productStorage from "@/assets/product-storage.jpg";
import iso1 from "@/assets/iso1.png";
import iso2 from "@/assets/iso2.png";
import iso3 from "@/assets/iso3.jpg";
import type { Product, QualityItem } from "@/components/business/ProductsSection/types";

export const products: Product[] = [
  {
    title: "High Carbon Ferro Manganese (HC FeMn)",
    description:
      "The backbone of ferro alloy consumption worldwide and the starting point for manganese addition in steelmaking.",
    image: productHc,
    featured: true,
  },
  {
    title: "Medium Carbon Ferro Manganese (MC FeMn)",
    image: productCoal,
  },
  {
    title: "Low Carbon Ferro Manganese (LC FeMn)",
    image: productOre,
  },
  {
    title: "Ferro Manganese Slag",
    image: productSlag,
  },
  {
    title: "MOX Dust",
    image: productManganese,
  },
  {
    title: "Rejected Slag Dust",
    image: productStorage,
  },
];

export const quality: QualityItem[] = [
  {
    title: "ISO 9001:2015 Certified Operations",
    description:
      "Certified for manufacturing and supply of ferro alloys, supporting consistent quality management across operations.",
    image: iso1,
    imageAlt: "ISO 9001:2015 certification",
  },
  {
    title: "Bureau of Indian Standards (BIS) Certification",
    description:
      "Certified under BIS standards for Ferro Manganese, supporting product quality and compliance across manufacturing operations.",
    image: iso2,
    imageAlt: "Bureau of Indian Standards certification",
  },
  {
    title: "In-House Quality Control Laboratory",
    description:
      "Dedicated laboratory and inspection systems supporting comprehensive quality assurance throughout production stages.",
    image: iso3,
    imageAlt: "In-house quality control laboratory",
  },
];
