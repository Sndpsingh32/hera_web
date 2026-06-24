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
import websiteContent from "@/data/websiteContent.json";

const jsonProducts = websiteContent.business.productsList.items;
const jsonCertifications = websiteContent.business.certifications.blocks;

export const products: Product[] = [
  {
    title: jsonProducts[0].title,
    description: jsonProducts[0].description,
    link: jsonProducts[0].link,
    image: productHc,
    featured: true,
  },
  {
    title: jsonProducts[1].title,
    description: jsonProducts[1].description,
    link: jsonProducts[1].link,
    image: productCoal,
  },
  {
    title: jsonProducts[2].title,
    description: jsonProducts[2].description,
    link: jsonProducts[2].link,
    image: productOre,
  },
  {
    title: jsonProducts[3].title,
    description: jsonProducts[3].description,
    link: jsonProducts[3].link,
    image: productSlag,
  },
  {
    title: jsonProducts[4].title,
    description: jsonProducts[4].description,
    link: jsonProducts[4].link,
    image: productManganese,
  },
  {
    title: jsonProducts[5].title,
    description: jsonProducts[5].description,
    link: jsonProducts[5].link,
    image: productStorage,
  },
];

export const quality: QualityItem[] = [
  {
    title: jsonCertifications[0].title,
    description: jsonCertifications[0].description,
    image: iso1,
    imageAlt: "ISO 9001:2015 certification",
  },
  {
    title: jsonCertifications[1].title,
    description: jsonCertifications[1].description,
    image: iso2,
    imageAlt: "Bureau of Indian Standards certification",
  },
  {
    title: jsonCertifications[2].title,
    description: jsonCertifications[2].description,
    image: iso3,
    imageAlt: "In-house quality control laboratory",
  },
];
