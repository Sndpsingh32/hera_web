import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { formFields } from "@/components/shared/ContactSection/contactData";

const fieldClassName =
  "h-[50px] w-full min-w-0 rounded-none border border-white/70 bg-transparent px-4 font-body text-[16px] font-normal leading-none text-white placeholder:text-white/70 transition-colors duration-300 focus:border-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClassName, props.className)} />;
}

function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        fieldClassName,
        "h-[50px] resize-none py-4 leading-normal",
        props.className,
      )}
    />
  );
}

export function ContactForm() {
  return (
    <form
      className="w-full min-w-0 space-y-3 lg:space-y-4"
      aria-label="Contact inquiry form"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
        {formFields.row1.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required
            autoComplete={field.id === "full-name" ? "name" : "organization"}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
        {formFields.row2.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required
            autoComplete={field.id === "email" ? "email" : "tel"}
          />
        ))}
      </div>

      <Input
        id={formFields.stateCountry.id}
        name={formFields.stateCountry.id}
        placeholder={formFields.stateCountry.placeholder}
        required
        autoComplete="country-name"
      />

      <Textarea
        id={formFields.message.id}
        name={formFields.message.id}
        placeholder={formFields.message.placeholder}
        required
        rows={1}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex h-[65px] w-full max-w-[294px] items-center justify-center rounded-[6px] bg-[#EB1E28] px-[26px] py-[5px] font-body text-[14px] leading-[100%] font-semibold tracking-[0.1em] text-white uppercase transition-colors duration-300 hover:bg-[#C91820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          SUBMIT FORM
        </button>
      </div>
    </form>
  );
}
