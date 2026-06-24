export interface Director {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

export const boardDirectors: Director[] = [
  {
    id: 1,
    name: "Mr Rahul Agrawal",
    designation: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    description: "Mr Rahul Agrawal leads HESL with a strong focus on technical execution, project development, and operational performance. With an engineering background and active involvement in the company's day-to-day affairs, he has played an important role in strengthening project execution, manufacturing systems, and business growth."
  },
  {
    id: 2,
    name: "Mr Ashok Kumar Dash",
    designation: "Wholetime Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    description: ""
  },
  {
    id: 3,
    name: "Mr Pappala Srinivasa Rao",
    designation: "Wholetime Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    description: ""
  },
  {
    id: 4,
    name: "Mr Gururaj Kundargi",
    designation: "Independent Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: ""
  },
  {
    id: 5,
    name: "Mr Ketan Prafulkumar Bhansali",
    designation: "Independent Director",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    description: ""
  },
  {
    id: 6,
    name: "Ms Rinku Gulgulia",
    designation: "Independent Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    description: ""
  }
];

export const internalCommittees: Director[] = [
  {
    id: 1,
    name: "Audit Committee",
    designation: "Financial Oversight",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    description: "Responsible for reviewing financial reporting, maintaining internal controls, and ensuring regulatory compliance."
  },
  {
    id: 2,
    name: "CSR Committee",
    designation: "Community Initiatives",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    description: "Dedicated to designing and executing impactful corporate social responsibility programs in our surrounding communities."
  },
  {
    id: 3,
    name: "Risk Management",
    designation: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    description: "Identifies, evaluates, and mitigates operational and financial risks to ensure long-term business resilience."
  }
];
