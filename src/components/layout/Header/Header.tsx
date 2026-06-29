import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import hiraLogo from "@/assets/hira_logo.jpg";
import { MobileDrawer } from "@/components/layout/Header/MobileDrawer";
import { NavbarDropdown } from "@/components/layout/Header/NavbarDropdown";
import { navItems } from "@/components/layout/Header/navData";
import { useHeaderScroll } from "@/components/layout/Header/useHeaderScroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useHeaderScroll();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isActive = (to?: string) => Boolean(to && pathname === to);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/5 bg-[#050505]/95 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "border-white/5 bg-transparent backdrop-blur-sm",
        )}
      >
        <div className="section-container flex h-[72px] items-center justify-between lg:h-[110px]">
          <Link
            to="/"
            aria-label="HIRA Electro Smelters home"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
            onClick={() => setMobileOpen(false)}
          >
            <motion.img
              animate={{ scale: scrolled ? 0.96 : 1 }}
              transition={{ duration: 0.3 }}
              src={hiraLogo}
              alt="HIRA Electro Smelters"
              width={170}
              height={72}
              className="h-[48px] w-[120px] object-contain object-left sm:h-[60px] sm:w-[150px] lg:h-[72px] lg:w-[170px]"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className={cn(
              "hidden min-w-0 flex-1 items-center justify-center gap-4 transition-opacity duration-300 lg:flex xl:gap-8 2xl:gap-10",
              scrolled ? "opacity-95" : "opacity-100",
            )}
          >
            {navItems.map((item) => (
              <NavbarDropdown key={item.label} item={item} isActive={isActive(item.to)} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3 lg:gap-4">

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
