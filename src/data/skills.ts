export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Zustand",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Recharts",
      "PWA",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Spring Boot", "Swagger"],
  },
  { label: "Database", items: ["PostgreSQL", "MySQL"] },
  {
    label: "Infra",
    items: ["AWS EC2", "Docker", "GitHub Actions", "AWS S3", "CloudFront"],
  },
  { label: "Env / Build", items: ["Linux", "Turborepo", "Yarn Berry"] },
  { label: "AI Tools", items: ["Claude Code", "ChatGPT"] },
  {
    label: "Collaboration",
    items: ["Git", "GitHub", "Notion", "Discord", "Figma"],
  },
] satisfies SkillGroup[];
