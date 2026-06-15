import type { InputHTMLAttributes } from "react";
import { Mail, Send } from "lucide-react";
import plantAerial from "@/assets/plant-aerial.jpg";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-[42px] w-full border border-white/70 bg-transparent px-4 text-[16px] font-normal text-white placeholder:text-white/80 focus:outline-none focus:border-white"
    />
  );
}

export function Contact() {
  return (
    <section className="relative px-6 lg:px-16 pt-12 lg:pt-16 pb-0">
      <div className="relative max-w-[1400px] mx-auto z-10">
        <div className="relative overflow-hidden min-h-[553px] px-10 lg:px-[72px] py-12 lg:py-[62px] text-white">
          <img src={plantAerial} alt="Industrial plant aerial view" width={1538} height={739} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative grid lg:grid-cols-[1fr_600px] gap-12 lg:gap-16 items-start">
            <div className="max-w-[451px] pt-4 lg:pt-10">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <span>Contact Us</span>
                <span className="h-px w-6 bg-brand" />
              </div>

              <h2 className="mt-8 max-w-[451px] font-display text-[32px] font-bold leading-none text-white">
                Have a Business Requirement or Query?
              </h2>

              <p className="mt-5 max-w-[318px] text-base leading-none text-white/90">
                Our team will reach out to you at the earliest.
              </p>

              <div className="mt-16 flex items-center gap-3 text-[16px] font-medium leading-none text-brand">
                <Mail className="w-5 h-5 shrink-0 text-white" strokeWidth={1.8} />
                <span>info@hira.com</span>
              </div>
            </div>

            <form className="w-full max-w-[600px] space-y-3 lg:space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <Input placeholder="Full Name *" />
                <Input placeholder="Company Name *" />
                <Input placeholder="Email Address *" />
                <Input placeholder="Contact Number *" />
              </div>

              <Input placeholder="State & Country *" />

              <textarea
                placeholder="Please send a message to get conversation started*"
                rows={3}
                className="w-full border border-white/70 bg-transparent px-4 py-4 text-[16px] font-normal text-white placeholder:text-white/80 focus:outline-none focus:border-white"
              />

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex h-[50px] items-center gap-2 rounded-full bg-brand px-[26px] text-[16px] font-medium text-white transition hover:opacity-90"
                >
                  SUBMIT FORM
                  <Send className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
