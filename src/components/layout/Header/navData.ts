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
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "High Carbon Ferro Manganese", href: "/products/high-carbon-ferro-manganese" },
      { label: "Medium Carbon Ferro Manganese", href: "/products/medium-carbon-ferro-manganese" },
      { label: "Low Carbon Ferro Manganese", href: "/products/low-carbon-ferro-manganese" },
    ],
  },
  { label: "Sustainability", to: undefined },
  { label: "People", to: undefined },
  { label: "Contact", to: undefined },
];

export const mobileSocialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
