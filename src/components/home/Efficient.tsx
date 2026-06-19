import EfficientDesign from "@/components/home/EfficientDesign/EfficientDesign";
import { efficientDefaults } from "@/components/home/EfficientDesign/efficientData";

export function Efficient() {
  return (
    <EfficientDesign
      title={efficientDefaults.title}
      description={efficientDefaults.description}
      image={efficientDefaults.image}
      imageAlt={efficientDefaults.imageAlt}
      features={efficientDefaults.features}
    />
  );
}
