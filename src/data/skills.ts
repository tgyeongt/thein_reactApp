export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Styled-Components",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Spring Boot", "FastAPI", "Swagger"],
  },
  { label: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
  { label: "Infra", items: ["AWS EC2", "Docker", "GitHub Actions"] },
  { label: "Env / Build", items: ["Linux", "Turborepo", "Yarn Berry"] },
  { label: "AI Tools", items: ["Claude Code", "ChatGPT"] },
  {
    label: "Collaboration",
    items: ["Git", "GitHub", "Notion", "Discord", "Figma"],
  },
] satisfies SkillGroup[];
