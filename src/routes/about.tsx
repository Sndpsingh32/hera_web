import { createFileRoute } from "@tanstack/react-router";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutUsSection } from "@/components/about/AboutUsSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { JourneySection } from "@/components/about/JourneySection";
import { ContactSection } from "@/components/shared/ContactSection";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Hira Electro Smelters" },
      {
        name: "description",
        content: "Learn more about Hira Electro Smelters.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="page-shell bg-background">
      <AboutHero />
      <AboutUsSection />
      <PhilosophySection />
      <JourneySection />
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
