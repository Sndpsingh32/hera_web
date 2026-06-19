import { footerCopy } from "@/components/home/Footer/footerData";

export function FooterBottom() {
  return (
    <div className="mt-10 border-t border-white/10 pt-8 text-center lg:mt-[50px] lg:border-0 lg:pt-0">
      <p className="font-body text-[15px] leading-none font-normal text-white/65">
        {footerCopy.copyright}
      </p>
    </div>
  );
}
