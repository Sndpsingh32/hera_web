export function Footer() {
  return (
    <footer className="bg-black text-white px-6 lg:px-16 pt-0 pb-8">
      <div className="max-w-[1400px] mx-auto -mt-[96px] bg-black px-0 pt-[156px] pb-0">
        <div className="grid gap-12 lg:grid-cols-[217px_1fr] lg:items-start">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-[58px] font-bold tracking-tight text-white">HIRA</span>
              <span className="mt-1 text-[12px] font-semibold tracking-[0.08em] text-white">HIRA ELECTRO SMELTERS</span>
            </div>
            <p className="mt-6 text-sm text-white/90">
              Follow us on <a href="#" className="text-brand hover:underline">Linkedin</a>
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            {[
              { h: "Company", items: ["About Us", "Our Journey", "Leadership"] },
              { h: "Business", items: ["High Carbon Ferro Manganese,", "Medium Carbon Ferro Manganese,", "Low Carbon Ferro Manganese"] },
              { h: "Resources", items: ["People", "Sustainability"] },
              { h: "Contact", items: ["Registered office", "Plant location", "Email", "Phone"] },
              { h: "Legal", items: ["Privacy Policy", "Terms of Use", "Disclaimer"] },
            ].map((c) => (
              <div key={c.h}>
                <div className="mb-4 text-[16px] font-semibold leading-none text-white">{c.h}</div>
                <ul className="space-y-3 text-[16px] leading-none text-white/90">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="transition hover:text-brand">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center text-xs text-white/80">
          Copyright@2026-hira &nbsp;&nbsp; All rights reserved.
        </div>
      </div>
    </footer>
  );
}
