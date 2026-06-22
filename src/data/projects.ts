export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  category: "full-stack" | "frontend" | "backend";
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  period?: string;
}

export const projects: Project[] = [
  {
    id: "college-erp",
    title: "College ERP",
    subtitle: "Academic Management System",
    description:
      "Engineered a full-stack, role-based academic management platform serving students, faculty, and administrators. Architected both the React (TypeScript) frontend and Node.js/Express backend with a MySQL database featuring connection pooling — eliminating manual academic workflows and enabling real-time data synchronization across all connected clients.",
    features: [
      "Role-based access control for students, faculty & administrators",
      "Secure JWT authentication with httpOnly refresh-token cookies & bcrypt hashing",
      "Real-time data sync via Socket.IO — dashboards update without page reloads",
      "End-to-end workflows for attendance tracking, fee management & timetable scheduling",
      "Configurable internal-marks calculator combining assignment, test & attendance weights",
      "Polished UI with shadcn/ui (Radix), Framer Motion animations & Recharts visualizations",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "JWT",
      "TailwindCSS",
      "Vite",
    ],
    category: "full-stack",
    githubUrl: "https://github.com/DIkshant-Athawale",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    period: "Jan 2026 – Mar 2026",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    subtitle: "Responsive Developer Portfolio",
    description:
      "Designed and deployed a responsive personal portfolio showcasing projects, technical skills, and contact information. Implemented mobile-first responsive design with cross-browser compatibility, achieving a 95+ Google Lighthouse performance score. Version-controlled and hosted via GitHub Pages.",
    features: [
      "Mobile-first responsive design with fluid layouts",
      "95+ Google Lighthouse performance score",
      "Cross-browser compatibility across modern browsers",
      "Smooth CSS animations and scroll-driven transitions",
      "SEO-optimized with semantic HTML structure",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    category: "frontend",
    githubUrl: "https://github.com/DIkshant-Athawale",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    period: "June 2026",
  },
];

export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"] as const;
