import { Link } from "@tanstack/react-router";
import { Search, ChevronDown } from "lucide-react";
import hiraLogo from "@/assets/hira_logo.jpg";

const nav = [
  { label: "About us", to: undefined, hasDropdown: true },
  { label: "Business", to: "/business", hasDropdown: true },
  { label: "Sustainability", to: undefined, hasDropdown: false },
  { label: "People", to: undefined, hasDropdown: false },
  { label: "Contact", to: undefined, hasDropdown: false },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-black/30 backdrop-blur-sm">
      <div className="max-w-[1728px] mx-auto px-8 h-[110px] flex items-center justify-between text-white">
        <Link to="/" className="flex shrink-0">
          <img src={hiraLogo} alt="HIRA Electro Smelters" className="h-[40px] md:h-[60px] w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-9 text-[16px] font-medium">
          {nav.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-[10px] hover:text-[#EB1E28] transition-colors"
                activeProps={{ className: "flex items-center gap-[10px] text-[#EB1E28] transition-colors" }}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
            ) : (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-[10px] hover:text-[#EB1E28] transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ),
          )}
          <Search className="w-4 h-4 cursor-pointer hover:text-[#EB1E28] transition-colors" />
        </nav>
        <button className="bg-[#EB1E28] text-white text-[14px] font-medium tracking-wider w-[140px] h-[50px] rounded-[6px] flex items-center justify-center hover:opacity-90 transition">
          CONTACT US
        </button>
      </div>
    </header>
  );
}
