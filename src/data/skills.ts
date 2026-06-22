import { Code2, Layout, Server, Database, Brain, Wrench, type LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    color: "#f97316",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "#06b6d4",
    skills: [
      { name: "React", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "RESTful API Design", level: 85 },
      { name: "JWT Authentication", level: 82 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "#10b981",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 85 },
      { name: "JDBC", level: 70 },
      { name: "Database Design", level: 80 },
      { name: "Query Optimization", level: 75 },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: Brain,
    color: "#ec4899",
    skills: [
      { name: "Data Structures & Algorithms", level: 82 },
      { name: "Object Oriented Programming", level: 88 },
      { name: "Computer Networks", level: 78 },
      { name: "Operating Systems", level: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "#eab308",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Docker", level: 65 },
      { name: "Antigravity", level: 80 },
    ],
  },
];
