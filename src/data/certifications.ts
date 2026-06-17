import { Award } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-ai",
    title: "AI Agents: Cognitive Upgrade and Business Efficiency",
    issuer: "AWS",
    year: "2026",
    icon: Award,
    color: "#f97316",
  },
  {
    id: "nxtwave-ai",
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    year: "2025",
    icon: Award,
    color: "#8b5cf6",
  },
  {
    id: "coursera-python",
    title: "Python for Everybody",
    issuer: "University of Michigan, Coursera",
    year: "2024",
    icon: Award,
    color: "#06b6d4",
  },
];

export const activities = [
  "Member of College Technical Club",
  "Participated in hackathons and tech talks",
  "Volunteered in college code-a-thon",
  "Helped junior students with web development and Git",
];
