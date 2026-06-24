import { useCallback, useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarLink } from "@/components/layout/Header/NavbarLink";
import type { NavItem } from "@/components/layout/Header/navData";
import { cn } from "@/lib/utils";

type NavbarDropdownProps = {
  item: NavItem;
  isActive?: boolean;
};

export function NavbarDropdown({ item, isActive }: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);
  const openMenu = useCallback(() => setOpen(true), []);

  if (!item.dropdown?.length) {
    return <NavbarLink label={item.label} to={item.to} isActive={isActive} />;
  }

  return (
    <div
      className="group relative"
      onMouseEnter={openMenu}
      onMouseLeave={close}
    >
      <div className="relative flex items-center gap-2">
        {item.to ? (
          <Link
            to={item.to}
            className={cn(
              "font-display text-sm font-medium leading-none text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:text-base",
              isActive && "text-[#EB1E28]",
            )}
          >
            {item.label}
          </Link>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="true"
            aria-controls={menuId}
            className={cn(
              "font-display text-sm font-medium leading-none text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:text-base",
              isActive && "text-[#EB1E28]",
            )}
          >
            {item.label}
          </button>
        )}

        <ChevronDown
          className={cn(
            "h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-180",
            open && "rotate-180 text-white",
          )}
          aria-hidden
        />

        {isActive && (
          <motion.span
            layoutId="navbar-active-underline"
            className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#EB1E28]"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+18px)] left-1/2 z-50 min-w-[220px] -translate-x-1/2 rounded-[12px] bg-[#111111] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <ul className="space-y-1">
              {item.dropdown.map((link) => (
                <li key={link.label} role="none">
                  <Link
                    to={link.href}
                    role="menuitem"
                    className="block rounded-[8px] px-3 py-2.5 font-body text-[15px] leading-none font-normal text-white/90 transition-colors duration-200 hover:bg-[rgba(235,30,40,0.12)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#EB1E28]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
