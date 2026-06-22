import { GraduationCap, BookOpen, School } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  year: string;
  location: string;
  icon: LucideIcon;
  color: string;
}

export const education: EducationItem[] = [
  {
    id: "be-cse",
    degree: "B.E. in Computer Science Engineering (CSE)",
    institution: "HVPM College of Engineering and Technology",
    university: "Sant Gadge Baba Amravati University (SGBAU)",
    year: "2022 – 2026",
    location: "Amravati, India",
    icon: GraduationCap,
    color: "#8b5cf6",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Vidyabharti Mahavidyalaya, Amravati",
    year: "Passed: March 2022",
    location: "Amravati, India",
    icon: BookOpen,
    color: "#06b6d4",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Golden Kids High School, Amravati",
    year: "Passed: March 2020",
    location: "Amravati, India",
    icon: School,
    color: "#10b981",
  },
];
