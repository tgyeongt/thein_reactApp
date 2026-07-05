export interface Stat {
  n: number;
  suffix: string;
  label: string;
}

export const stats = [
  { n: 8, suffix: "", label: "Projects" },
  { n: 5, suffix: "", label: "Awards" },
  { n: 25, suffix: "+", label: "Tech Stack" },
  { n: 1500, suffix: "", label: "실 사용자" },
] satisfies Stat[];
