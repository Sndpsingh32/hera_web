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
      { label: "About Us", href: "#" },
      { label: "Our Journey", href: "#" },
      { label: "Leadership", href: "#" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "High Carbon Ferro Manganese", href: "#" },
      { label: "Medium Carbon Ferro Manganese", href: "#" },
      { label: "Low Carbon Ferro Manganese", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "People", href: "#" },
      { label: "Sustainability", href: "#" },
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
