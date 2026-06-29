import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Stats } from "@/components/home/Stats";
import { Business } from "@/components/home/Business";
import { Efficient } from "@/components/home/Efficient";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import globalBg from "@/assets/globalbg.jpg";

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
    <div className="page-shell bg-background">
      <Hero />
      <Intro />
      <Stats />
      <Business />
      <div className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${globalBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/60" aria-hidden />
        <div className="relative z-10">
          <Efficient />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
