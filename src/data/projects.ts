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
}

export const projects: Project[] = [
  {
    id: "college-erp",
    title: "College ERP",
    subtitle: "Academic Management System",
    description:
      "A comprehensive full-stack role-based academic management system designed for students, faculty, and administrators. Features real-time data synchronization, secure authentication, and a complete suite of academic tools.",
    features: [
      "Role-based access for students, faculty, and admin",
      "JWT authentication with refresh tokens",
      "Secure password hashing using bcrypt",
      "Real-time synchronization via Socket.IO",
      "Attendance tracking & fee management",
      "Timetable scheduling system",
      "Internal marks calculator",
      "Charts & dashboards using Recharts",
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
    ],
    category: "full-stack",
    githubUrl: "https://github.com/DIkshant-Athawale",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    subtitle: "Responsive Personal Website",
    description:
      "A clean, responsive personal website built with vanilla web technologies. Achieves a 95+ Lighthouse score with mobile-first design and cross-browser compatibility.",
    features: [
      "Fully responsive mobile-first design",
      "95+ Lighthouse performance score",
      "Cross-browser compatibility",
      "Hosted on GitHub Pages",
      "Smooth animations and transitions",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    category: "frontend",
    githubUrl: "https://github.com/DIkshant-Athawale",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
];

export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"] as const;
