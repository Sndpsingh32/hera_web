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
    dropdown: [
      { label: "Company Overview", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Vision", href: "#" },
      { label: "History", href: "#" },
    ],
  },
  {
    label: "Business",
    to: "/business",
    dropdown: [
      { label: "Ferro Alloys", href: "#" },
      { label: "Manufacturing", href: "#" },
      { label: "Infrastructure", href: "#" },
      { label: "Global Presence", href: "#" },
    ],
  },
  { label: "Sustainability", to: "/sustainability" },
  { label: "People", to: undefined },
  { label: "Contact", to: undefined },
];

export const mobileSocialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
