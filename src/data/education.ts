import { GraduationCap, BookOpen, School } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  year: string;
  icon: LucideIcon;
  color: string;
}

export const education: EducationItem[] = [
  {
    id: "be-cse",
    degree: "B.E. in Computer Science Engineering",
    institution: "HVPM College of Engineering and Technology",
    university: "Sant Gadge Baba Amravati University",
    year: "2022 – 2026",
    icon: GraduationCap,
    color: "#8b5cf6",
  },
  {
    id: "hsc",
    degree: "HSC – Science",
    institution: "Vidyabharti Mahavidyalaya",
    year: "Passed: 2022",
    icon: BookOpen,
    color: "#06b6d4",
  },
  {
    id: "ssc",
    degree: "SSC",
    institution: "Golden Kids High School",
    year: "Passed: 2020",
    icon: School,
    color: "#10b981",
  },
];
