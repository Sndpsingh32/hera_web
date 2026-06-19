import { ChevronDown } from "lucide-react";
import type { FooterColumnData } from "@/components/home/Footer/footerData";

function FooterLinks({ links }: Pick<FooterColumnData, "links">) {
  return (
    <ul className="space-y-[18px]">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="font-body text-[15px] leading-none font-normal text-white/75 transition-colors duration-300 hover:text-[#EB1E28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB1E28]"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <>
      <div className="hidden lg:block">
        <h3 className="font-body text-base leading-none font-bold text-white">{title}</h3>
        <div className="mt-4">
          <FooterLinks links={links} />
        </div>
      </div>

      <details className="group border-b border-white/10 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-body text-base leading-none font-bold text-white [&::-webkit-details-marker]:hidden">
          {title}
          <ChevronDown
            className="h-4 w-4 text-white/70 transition-transform duration-300 group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <div className="pb-4">
          <FooterLinks links={links} />
        </div>
      </details>
    </>
  );
}
