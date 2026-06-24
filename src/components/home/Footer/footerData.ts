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
      { label: "Our Journey", href: "#" },
      { label: "Our Leadership", href: "/people" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Business Overview", href: "/business" },
      { label: "Our Products", href: "/sustainability" },
      { label: "High Carbon Ferro Manganese", href: "/products/high-carbon-ferro-manganese" },
      { label: "Medium Carbon Ferro Manganese", href: "/products/medium-carbon-ferro-manganese" },
      { label: "Low Carbon Ferro Manganese", href: "/products/low-carbon-ferro-manganese" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sustainability", href: "#" },
      { label: "By-Products", href: "/by-products" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Registered Office", href: "#" },
      { label: "Plant Location", href: "#" },
      { label: "Email", href: "#" },
      { label: "Phone", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export const footerCopy = {
  followPrefix: "Follow us on",
  linkedIn: "LinkedIn",
  copyright: "Copyright ©2026 HIRA. All Rights Reserved.",
} as const;
