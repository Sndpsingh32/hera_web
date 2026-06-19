import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import plantAerial from "@/assets/plant-aerial.jpg";
import { ContactForm } from "@/components/shared/ContactSection/ContactForm";
import { contactCopy } from "@/components/shared/ContactSection/contactData";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  /** Use inside another page section (e.g. business page) */
  embedded?: boolean;
  /** Pull section up to overlap content above */
  overlap?: boolean;
};

export function ContactSection({ embedded = false, overlap = false }: ContactSectionProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative mx-auto min-h-[520px] w-full overflow-hidden lg:h-[550px] lg:min-h-[550px]"
    >
      <img
        src={plantAerial}
        alt=""
        aria-hidden
        loading="lazy"
        width={1538}
        height={739}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.55)] backdrop-blur-[1px]"
        aria-hidden
      />

      <div className="relative z-10 grid h-full grid-cols-1 items-start gap-10 px-5 py-12 text-white md:px-10 md:py-16 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:items-center lg:gap-20 lg:px-[60px] lg:py-[70px]">
        <div className="max-w-[450px] lg:pt-2">
          <div className="flex items-center gap-3">
            <span className="font-body text-base leading-none font-bold text-white">
              {contactCopy.label}
            </span>
            <span className="h-0.5 w-7 bg-[#EB1E28]" aria-hidden />
          </div>

          <h2
            id="contact-visible-heading"
            className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[110%] font-bold text-white lg:mt-6"
          >
            {contactCopy.heading[0]}
            <br />
            {contactCopy.heading[1]}
          </h2>

          <p className="mt-5 font-body text-base leading-[150%] font-normal text-white/80 lg:mt-5 lg:text-lg">
            {contactCopy.description}
          </p>

          <a
            href={`mailto:${contactCopy.email}`}
            className="mt-10 inline-flex items-center gap-3 font-body text-xl leading-none font-semibold text-[#EB1E28] transition-colors duration-300 hover:text-[#ff4a52] lg:mt-[50px] lg:text-[28px]"
          >
            <Mail className="h-6 w-6 shrink-0 text-white lg:h-7 lg:w-7" strokeWidth={1.8} />
            {contactCopy.email}
          </a>
        </div>

        <div className="w-full min-w-0 lg:max-w-[600px] lg:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );

  if (embedded) {
    return (
      <div
        className={cn(
          "section-container",
          overlap && "-mt-8 lg:-mt-20",
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <section
      aria-labelledby="contact-visible-heading"
      className="bg-[#050505] pt-12 pb-0 lg:pt-16"
    >
      <div className="section-container">{content}</div>
    </section>
  );
}
