export interface Profile {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  email: string;
  github: string;
  githubUrl: string;
  liveSite: { label: string; url: string };
  education: { period: string; school: string; note: string };
}

export const profile = {
  name: "박태경",
  role: "프론트엔드 · 풀스택 개발자",
  tagline: "데이터를 이해하기 쉬운 화면으로 전달하는 프론트엔드 개발자",
  intro:
    "변화하는 데이터를 의미 있는 화면으로 표현하고 안정적으로 운영되는 서비스를 만드는 프론트엔드 개발자입니다.",
  email: "tgyeongt@gmail.com",
  github: "github.com/tgyeongt",
  githubUrl: "https://github.com/tgyeongt",
  liveSite: { label: "stocket.site", url: "https://www.stocket.site/" },
  education: {
    period: "2022.03–2026.08",
    school: "서경대학교 컴퓨터공학과",
    note: "학점 3.77 / 4.5",
  },
} satisfies Profile;
