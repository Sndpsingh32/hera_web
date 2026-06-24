export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumnData = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumnData[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Leadership", href: "/people" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Business Overview", href: "/business" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "High Carbon Ferro Manganese", href: "/products/high-carbon-ferro-manganese" },
      { label: "Medium Carbon Ferro Manganese", href: "/products/medium-carbon-ferro-manganese" },
      { label: "Low Carbon Ferro Manganese", href: "/products/low-carbon-ferro-manganese" },
    ],
  },
];

export const footerCopy = {
  followPrefix: "Follow us on",
  linkedIn: "LinkedIn",
  copyright: "Copyright ©2026 HIRA. All Rights Reserved.",
} as const;
