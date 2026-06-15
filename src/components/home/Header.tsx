import { Search, ChevronDown } from "lucide-react";

const nav = ["About us", "Business", "Sustainability", "People", "Contact"];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-black/30 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 h-[88px] flex items-center justify-between text-white">
        <div className="flex flex-col leading-none">
          <span className="text-3xl font-bold tracking-wider">HIRA</span>
          <span className="text-[10px] tracking-[0.25em] text-white/80 mt-0.5">HIRA ELECTRO SMELTERS</span>
        </div>
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
          {nav.map((n) => (
            <a key={n} href="#" className="flex items-center gap-1 hover:text-brand transition-colors">
              {n}
              {["About us", "Business"].includes(n) && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
          <Search className="w-4 h-4 cursor-pointer" />
        </nav>
        <button className="bg-brand text-brand-foreground text-xs font-semibold tracking-wider px-6 py-3 rounded-md hover:opacity-90 transition">
          CONTACT US
        </button>
      </div>
    </header>
  );
}
