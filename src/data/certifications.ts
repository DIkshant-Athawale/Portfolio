import { Award, type LucideIcon } from "lucide-react";

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
    issuer: "AWS Training & Certification",
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
    issuer: "University of Michigan (Coursera)",
    year: "2024",
    icon: Award,
    color: "#06b6d4",
  },
];

export const activities = [
  "Member of College Technical Club — participated in hackathons, tech talks, and brainstorming sessions on emerging technologies",
  "Volunteered in college code-a-thon event — mentored junior students on web development and version control concepts",
];
