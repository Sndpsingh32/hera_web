import ashishImg from "@/assets/ashishd.jpeg";
import rajeshImg from "@/assets/leader/rajeshj.jpeg";
import dscf102 from "@/assets/leader/rahulagrawal.png";
import dscf104 from "@/assets/leader/DSCF104.jpeg";
import dscf1017 from "@/assets/leader/DSCF1017.jpeg";
import dscf1012 from "@/assets/leader/compressed_DSCF1012.png";
import dscf1022 from "@/assets/leader/compressed_DSCF1022.png";
import omprakashImg from "@/assets/leader/omprakash.jpeg";
import vikashaImg from "@/assets/leader/vikasha.jpeg";
import shrinaivas from "@/assets/leader/shrinivasa.JPG"
import ashokkumar from "@/assets/leader/ashokkumar.JPG"
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
    image: dscf102,
    description: "He has attended Bharati Vidyapeeth Deemed University. He is currently responsible for project assessment, coordination with technical teams, supporting the execution of new initiatives and strategic development and expansion initiatives of the group."
  },
  {
    id: 2,
    name: "Rajesh Kumar Jadwani",
    designation: "Chief Finance Officer",
    image: rajeshImg,
    description: "He holds Bachelor of Commerce degree from Pt. Ravishankar Shukla University. He is currently responsible for overseeing the financial affairs of the company and ensuring its financial stability, compliance and growth."
  },
  {
    id: 3,
    name: "Ashish Dakalia",
    designation: "Company Secretary and Compliance Officer",
    image: ashishImg,
    description: "He is a fellow member of Institute of Company Secretaries of India. He is currently responsible for overseeing secretarial and corporate compliance functions, including Board and shareholder matters, statutory filings, maintenance of corporate records, and implementation of governance practice."
  },

  {
    id: 4,
    name: "Ashok Kumar Dash",
    designation: "Executive Director",
    image: ashokkumar,
    description: "He holds a bachelor’s degree in commerce from P.N. College, Khurda, Utkal University and a bachelor’s degree in law from Capital Law College, Bhubaneshwar, Utkal’s University. He also holds a post graduate diploma in personnel management from National Institute of Personnel Management, Calcutta. He is currently responsible for the end-to-end management of the ferro alloys manufacturing facility, including production, engineering, maintenance, quality assurance, procurement coordination, and statutory compliance."
  },
  {
    id: 5,
    name: "Pappala Srinivasa Rao",
    designation: "Whole-Time Director",
    image: shrinaivas,
    description: "He is responsible for personnel administration, statutory compliance, government liaison and maintaining smooth industrial relations and administrative operations of the organization. He holds a degree of Bachelor of Law from Andhra University, Visakhapatnam."
  }
];

export const seniorManagement: Director[] = [
  {
    id: 1,
    name: "Siddharth Borkar",
    designation: "Finance",
    image: vikashaImg,
    description: "Responsible for finalizing accounts, managing audits and ensuring adherence to tax regulations. He holds a Master's degree from Pt. Ravishankar Shukla University and an MBA from Sikkim Manipal University."
  },
  {
    id: 2,
    name: "Midathana Chiranjeevi",
    designation: "Production",
    image: dscf1012,
    description: "Responsible for ferro alloys production management, furnace operations and supervision, process optimization, and quality control. He holds a Diploma in Metallurgical Engineering from State Board of Technical Education & Training, Andhra Pradesh."
  },
  {
    id: 3,
    name: "Potta Gunnaraju",
    designation: "Finance",
    image: dscf1022,
    description: "Responsible for managing day-to-day finance and accounts operations, including accounting, financial reporting, cost analysis, taxation, and compliance. He holds a Master of Commerce degree from Andhra University."
  },
  {
    id: 4,
    name: "Shashikanata Behera",
    designation: "Mechanical",
    image: omprakashImg,
    description: "Oversees equipment reliability, preventive and corrective maintenance activities, plant utilities, resource planning, and compliance with safety requirements. He holds a Diploma in Mechanical Engineering from JRN Rajasthan Vidyapeeth University."
  },

];
