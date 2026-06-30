import hiraLogo from "@/assets/hira_logo.png";
import { Link } from "@tanstack/react-router";

const footerColumns = [
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
      { label: "Rejected Slag Dust", href: "/products/rejected-slag-dust" },
      { label: "MOX Dust", href: "/products/mox-dust" },
      { label: "Ferro Manganese Slag", href: "/products/ferro-manganese-slag" },
    ],
  },
];

export function BusinessFooter() {
  return (
    <footer className="bg-black pb-10 pt-12 text-white">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[217px_1fr] lg:items-start">
          <div>
            <Link to="/" className="flex shrink-0">
              <img
                src={hiraLogo}
                alt="HIRA Electro Smelters"
                className="h-[80px] w-auto object-contain md:h-[100px]"
              />
            </Link>
            <p className="mt-6 text-sm text-white/90">
              Follow us on{" "}
              <a href="#" className="text-[#E53630] hover:underline">
                Linkedin
              </a>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <div className="mb-4 text-[16px] font-semibold leading-none text-white">
                  {column.title}
                </div>
                <ul className="space-y-3 text-[16px] leading-none text-white/90">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.href} className="transition hover:text-[#E53630]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-[15px] leading-[28px] text-white">
          Copyright@2026-hira &nbsp;&nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
