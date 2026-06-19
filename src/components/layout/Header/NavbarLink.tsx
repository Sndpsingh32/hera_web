import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavbarLinkProps = {
  label: string;
  to?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
};

export function NavbarLink({ label, to, isActive, className, onClick }: NavbarLinkProps) {
  const sharedClassName = cn(
    "relative font-display text-sm font-medium leading-none text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:text-base",
    isActive && "text-[#EB1E28]",
    className,
  );

  const underline = isActive ? (
    <motion.span
      layoutId="navbar-active-underline"
      className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#EB1E28]"
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  ) : null;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={sharedClassName}>
        {label}
        {underline}
      </Link>
    );
  }

  return (
    <a href="#" onClick={onClick} className={sharedClassName}>
      {label}
      {underline}
    </a>
  );
}
