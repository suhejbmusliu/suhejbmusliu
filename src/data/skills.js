import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

import { FiSmartphone, FiLink } from "react-icons/fi";

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 90, icon: SiHtml5 },
      { name: "CSS3", level: 85, icon: SiCss3 },
      { name: "JavaScript (ES6+)", level: 80, icon: SiJavascript },
      { name: "React (Vite)", level: 70, icon: SiReact },
      { name: "Responsive Design", level: 85, icon: FiSmartphone },
      { name: "Figma", level: 70, icon: SiFigma },
    ],
  },
  {
    title: "Backend (Junior)",
    items: [
      { name: "Node.js", level: 65, icon: SiNodedotjs },
      { name: "Express.js", level: 65, icon: SiExpress },
      { name: "REST APIs (basic)", level: 60, icon: FiLink },
      { name: "JWT Auth (basic)", level: 58, icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL (basic)", level: 55, icon: SiPostgresql },
      { name: "Prisma ORM (basic)", level: 60, icon: SiPrisma },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 75, icon: SiGit },
      { name: "GitHub", level: 75, icon: SiGithub },
      { name: "Docker (basic)", level: 50, icon: SiDocker },
      { name: "Postman", level: 65, icon: SiPostman },
      { name: "Vercel", level: 70, icon: SiVercel },
    ],
  },
];
