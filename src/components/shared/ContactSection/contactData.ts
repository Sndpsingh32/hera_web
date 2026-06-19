export const contactCopy = {
  label: "Contact Us",
  heading: ["Have a Business Requirement", "or Query?"],
  description: "Our team will reach out to you at the earliest.",
  email: "info@hira.com",
} as const;

export const formFields = {
  row1: [
    { id: "full-name", placeholder: "Full Name *", type: "text" as const },
    { id: "company-name", placeholder: "Company Name *", type: "text" as const },
  ],
  row2: [
    { id: "email", placeholder: "Email Address *", type: "email" as const },
    { id: "phone", placeholder: "Contact Number *", type: "tel" as const },
  ],
  stateCountry: { id: "state-country", placeholder: "State & Country *" },
  message: {
    id: "message",
    placeholder: "Please send a message to get conversation started*",
  },
} as const;
