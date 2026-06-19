import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Linkedin, X } from "lucide-react";
import { HeaderButton } from "@/components/layout/Header/HeaderButton";
import { mobileSocialLinks, navItems } from "@/components/layout/Header/navData";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

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
              {navItems.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-md px-2 py-4 font-display text-lg font-medium text-white transition-colors hover:text-white/80"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-4 w-4 text-white/60" />}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href="#"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-md px-2 py-4 font-display text-lg font-medium text-white transition-colors hover:text-white/80"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-4 w-4 text-white/60" />}
                  </a>
                ),
              )}
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
