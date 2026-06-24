export const contactCopy = {
  label: "CONTACT US",
  heading: ["Have a Business Requirement", "or Query?"],
  description: "Our team will reach out to you at the earliest.",
  address: {
    title: "Plant Office Address",
    details: "Plot no 364-367, APIIC Growth Center, Bobbili- 535558, Dist. Vizianagaram (Andhra Pradesh) India",
  },
  phone: "+91 8944247008",
  emails: [
    { label: "Admin", email: "admin@heslindia.com" },
    { label: "CFO", email: "cfo@heslindia.com" },
    { label: "CS", email: "compliance@heslindia.com" },
    { label: "HR", email: "hr@heslindia.com" },
  ]
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
