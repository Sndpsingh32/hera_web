import hiraLogo from "@/assets/hira_logo.jpg";

const footerColumns = [
  { title: "Company", links: ["About Us", "Our Journey", "Leadership"] },
  {
    title: "Business",
    links: [
      "High Carbon Ferro Manganese,",
      "Medium Carbon Ferro Manganese,",
      "Low Carbon Ferro Manganese",
    ],
  },
  { title: "Resources", links: ["People", "Sustainability"] },
  { title: "Contact", links: ["Registered office", "Plant location", "Email", "Phone"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Disclaimer"] },
];

export function BusinessFooter() {
  return (
    <footer className="bg-black pb-10 pt-12 text-white">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[217px_1fr] lg:items-start">
          <div>
            <a href="/" className="flex shrink-0">
              <img
                src={hiraLogo}
                alt="HIRA Electro Smelters"
                className="h-[60px] w-auto object-contain md:h-[80px]"
              />
            </a>
            <p className="mt-6 text-sm text-white/90">
              Follow us on{" "}
              <a href="#" className="text-[#E53630] hover:underline">
                Linkedin
              </a>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <div className="mb-4 text-[16px] font-semibold leading-none text-white">
                  {column.title}
                </div>
                <ul className="space-y-3 text-[16px] leading-none text-white/90">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#E53630]">
                        {link}
                      </a>
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
