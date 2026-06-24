export type NavDropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  to?: string;
  dropdown?: NavDropdownItem[];
};

export const navItems: NavItem[] = [
  {
    label: "About Us",
    to: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Leadership", href: "/people" },
    ],
  },
  {
    label: "Business",
    to: "/business",
    dropdown: [
      { label: "Business Overview", href: "/business" },
      { label: "Our Products", href: "/sustainability" },
    ],
  },
  { label: "Sustainability", to: undefined },
  { label: "People", to: undefined },
  { label: "Contact", to: undefined },
];

export const mobileSocialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
