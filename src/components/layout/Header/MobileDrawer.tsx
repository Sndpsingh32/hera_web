import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Linkedin, X } from "lucide-react";
import { HeaderButton } from "@/components/layout/Header/HeaderButton";
import { mobileSocialLinks, navItems, type NavItem } from "@/components/layout/Header/navData";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      onClose();
    }
  };

  return (
    <div className="flex flex-col">
      {item.to && !hasDropdown ? (
        <Link
          to={item.to}
          onClick={handleClick}
          className="flex items-center justify-between rounded-md px-2 py-4 font-display text-lg font-medium text-white transition-colors hover:text-white/80"
        >
          {item.label}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="flex items-center justify-between rounded-md px-2 py-4 font-display text-lg font-medium text-white transition-colors hover:text-white/80 w-full text-left"
        >
          {item.label}
          {hasDropdown && (
            <ChevronDown
              className={`h-4 w-4 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </button>
      )}

      {hasDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-2 pl-4 py-2 border-l border-white/10 ml-2 mb-2">
                {item.dropdown!.map((subItem) => (
                  <Link
                    key={subItem.label}
                    to={subItem.href}
                    onClick={onClose}
                    className="font-body text-base text-white/70 hover:text-white py-2"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[360px] flex-col bg-[#050505] px-6 py-8 lg:hidden"
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-2 overflow-y-auto">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} onClose={onClose} />
              ))}
            </nav>

            <HeaderButton className="mt-6 inline-flex w-full" onClick={onClose} />

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              {mobileSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#EB1E28] hover:text-[#EB1E28]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
