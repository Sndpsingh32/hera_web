import businesshero from "@/assets/businesshero.jpg";
import producthc from "@/assets/product-hc.jpg";
import productmanganese from "@/assets/product-manganese.jpg";
import productslag from "@/assets/product-slag.jpg";
import producthero from "@/assets/producthero.jpg";
import efcntpg from "@/assets/efcntpg.jpg";

export const imageMap: Record<string, string> = {
  "/src/assets/businesshero.jpg": businesshero,
  "/src/assets/product-hc.jpg": producthc,
  "/src/assets/product-manganese.jpg": productmanganese,
  "/src/assets/product-slag.jpg": productslag,
  "/src/assets/producthero.jpg": producthero,
  "/src/assets/efcntpg.jpg": efcntpg,
};

export function getImageUrl(path: string | undefined): string {
  if (!path) return "";
  return imageMap[path] || path;
}
