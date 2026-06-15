import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Stats } from "@/components/home/Stats";
import { Business } from "@/components/home/Business";
import { Efficient } from "@/components/home/Efficient";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hira Electro Smelters — Ferro Alloys Built for the Steel Value Chain" },
      { name: "description", content: "India's leading ferro alloys producer manufacturing Ferro Manganese grades for steelmaking applications." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <Intro />
      <Stats />
      <Business />
      <Efficient />
      <Contact />
      <Footer />
    </div>
  );
}
