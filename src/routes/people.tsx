import { createFileRoute } from "@tanstack/react-router";
import { PeopleHero } from "@/components/people/PeopleHero";
import { LeadershipSection } from "@/components/people/LeadershipSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { BusinessFooter } from "@/components/business/GlobalMarkets/BusinessFooter";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "Our Leadership — Hira Electro Smelters" },
      {
        name: "description",
        content: "Meet the leadership team behind Hira Electro Smelters.",
      },
    ],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <div className="page-shell bg-black">
      <PeopleHero />
      <LeadershipSection />
      <ContactSection />
      <BusinessFooter />
    </div>
  );
}
