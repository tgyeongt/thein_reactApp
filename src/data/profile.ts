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
  role: "웹 프론트엔드 · 풀스택 개발",
  tagline: "프론트엔드를 주력으로 하는 풀스택 개발자",
  intro:
    "안정적으로 동작하는 화면을 설계하고, 흩어진 데이터를 신뢰할 수 있는 형태로 사용자에게 전달합니다. 실제 사용자와 실서비스 배포 경험을 기준으로 개발합니다.",
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
