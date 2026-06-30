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
    name: "Rahul Agrawal",
    designation: "Chairman and Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    description: "He has attended Bharati Vidyapeeth Deemed University. He is currently responsible for project assessment, coordination with technical teams, supporting the execution of new initiatives and strategic development and expansion initiatives of the group."
  },
  {
    id: 2,
    name: "Ashish Dakalia",
    designation: "Company Secretary and Compliance Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    description: "He is a fellow member of Institute of Company Secretaries of India. He is currently responsible for overseeing secretarial and corporate compliance functions, including Board and shareholder matters, statutory filings, maintenance of corporate records, and implementation of governance practice."
  },
  {
    id: 3,
    name: "Rajesh Kumar Jadwani",
    designation: "Chief Finance Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: "He holds Bachelor of Commerce degree from Pt. Ravishankar Shukla University. He is currently responsible for overseeing the financial affairs of the company and ensuring its financial stability, compliance and growth."
  },
  {
    id: 4,
    name: "Ashok Kumar Dash",
    designation: "Executive Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    description: "He holds a bachelor’s degree in commerce from P.N. College, Khurda, Utkal University and a bachelor’s degree in law from Capital Law College, Bhubaneshwar, Utkal’s University. He also holds a post graduate diploma in personnel management from National Institute of Personnel Management, Calcutta. He is currently responsible for the end-to-end management of the ferro alloys manufacturing facility, including production, engineering, maintenance, quality assurance, procurement coordination, and statutory compliance."
  },
  {
    id: 5,
    name: "Pappala Srinivasa Rao",
    designation: "Whole-Time Director",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    description: "He is responsible for personnel administration, statutory compliance, government liaison and maintaining smooth industrial relations and administrative operations of the organization. He holds a degree of Bachelor of Law from Andhra University, Visakhapatnam."
  }
];

export const seniorManagement: Director[] = [
  {
    id: 1,
    name: "Midathana Chiranjeevi",
    designation: "Assistant General Manager - Production",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    description: "Responsible for ferro alloys production management, furnace operations and supervision, process optimization, and quality control. He holds a Diploma in Metallurgical Engineering from State Board of Technical Education & Training, Andhra Pradesh."
  },
  {
    id: 2,
    name: "Potta Gunnaraju",
    designation: "Assistant Manager – Finance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    description: "Responsible for managing day-to-day finance and accounts operations, including accounting, financial reporting, cost analysis, taxation, and compliance. He holds a Master of Commerce degree from Andhra University."
  },
  {
    id: 3,
    name: "Shashikanata Behera",
    designation: "Senior Manager – Mechanical",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: "Oversees equipment reliability, preventive and corrective maintenance activities, plant utilities, resource planning, and compliance with safety requirements. He holds a Diploma in Mechanical Engineering from JRN Rajasthan Vidyapeeth University."
  },
  {
    id: 4,
    name: "Siddharth Borkar",
    designation: "Assistant General Manager – Finance",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    description: "Responsible for finalizing accounts, managing audits and ensuring adherence to tax regulations. He holds a Master's degree from Pt. Ravishankar Shukla University and an MBA from Sikkim Manipal University."
  }
];
