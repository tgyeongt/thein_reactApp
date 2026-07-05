export interface TrainingItem {
  period: string;
  title: string;
  desc: string;
  bullets: string[];
  result?: string;
}

export const education = [
  {
    period: "2026.06–2026.08",
    title: "웹퍼블리싱 & UI개발 전문가 과정 (480h)",
    desc: "서울시 × KORFIN(더인) 주관 · 핀테크 전문 인재 양성 산업 협회",
    bullets: [
      "핀테크 산업 이해 및 디지털 금융 서비스 관련 실무 교육",
      "Spring Boot · React 기반 풀스택 개발",
    ],
    result: "핀테크 서비스 구조와 금융 IT 산업에 대한 이해도 향상",
  },
  {
    period: "2025.09–2026.02",
    title: "UMC 9기 Server(Node.js) 주니어 코스",
    desc: "Make Us Challenge · 실제 웹 서비스를 런칭하는 IT 연합 대학생 단체",
    bullets: [
      "Node.js · Express 기반 RESTful API 서버 설계",
      "PostgreSQL 스키마 설계 및 데이터 연동",
      "PM · 디자이너 · 개발자와 협업 및 API 명세서 작성",
    ],
    result: "UMC 9기 데모데이 AWS 특별상 수상",
  },
  {
    period: "2025.03–2025.12",
    title: "멋쟁이사자처럼 13기 프론트엔드 트랙",
    desc: "전국 최대 규모의 대학생 IT 창업 · 개발 동아리",
    bullets: [
      "프론트엔드 운영진 — 입문자 대상 React 강의 진행",
      "매주 GitHub 과제 체크 및 1:1 코드 리뷰",
      "해커톤 대비 맞춤형 기술 멘토링 · 집중 스터디 운영",
    ],
    result: "운영진 활동으로 리더십 · 커뮤니케이션 역량 강화",
  },
  {
    period: "2024.03–2024.12",
    title: "멋쟁이사자처럼 12기 프론트엔드 트랙",
    desc: "전국 최대 규모의 대학생 IT 창업 · 개발 동아리",
    bullets: [
      "프론트엔드 기초 및 React 라이브러리 학습",
      "Git/GitHub · Notion 기반 팀 개발 워크플로우 습득",
      "중앙 해커톤 참여 — 웹 서비스 MVP 최종 빌드 · 배포",
    ],
    result: "멋사 12기 중앙 해커톤 우수상 수상",
  },
] satisfies TrainingItem[];

export const activities = [
  {
    period: "2026.05–현재",
    title: "모두의 창업 프로젝트 1기",
    desc: "창업 서비스 출시를 지원하는 전국 단위 창업 지원 프로그램",
    bullets: [
      "창업 지원 프로그램 선정",
      "전문가 멘토링 및 창업 교육 참여",
      "서비스 사업 모델 검증 및 고도화 수행",
      "앱스토어 출시를 목표로 서비스 런칭 준비",
    ],
  },
  {
    period: "2026.03–현재",
    title: "2026 한이음 드림업",
    desc: "대학생과 현업 전문가가 함께 수행하는 ICT 산학협력 프로젝트",
    bullets: [
      "Multi-Agent 기반 AI로 소송 지원 플랫폼 프론트엔드 개발",
      "현업 멘토와 정기 멘토링을 통해 서비스 기획·개발 방향 검토",
      "React 기반 UI 구현 및 백엔드 API 연동",
      "산업 현장의 개발 프로세스 및 협업 방식 학습",
    ],
  },
  {
    period: "2025.09–2025.12",
    title: "제15회 ICT멜팅플렉스 · 피우다",
    desc: "사회적 임팩트 조직의 활동을 지원하는 IT 솔루션 개발 공모",
    bullets: [
      "사회적 기업 '다시입다연구소'의 의류 교환 디지털 전환 프로젝트 수행",
      "지속가능한 의생활 문화 확산을 위한 환경 임팩트 측정 플랫폼 개발",
      "본선 진출 및 서비스 발표 진행",
      "심사위원 질의응답을 통해 서비스 가치·기술 구현 방안 설명",
    ],
  },
  {
    period: "2025.12–2026.02",
    title: "UMC 9기 데모데이",
    desc: "전국 28개 대학 연합 프로젝트 최종 발표 및 시연",
    bullets: [
      "서비스 시연 부스 운영",
      "심사위원 및 참가자 질의응답 진행",
      "AWS 특별상 수상",
    ],
  },
  {
    period: "2024.07–2025.08",
    title: "멋쟁이사자처럼 중앙 해커톤 (12·13기)",
    desc: "전국 최대 규모 IT 연합 해커톤",
    bullets: [
      "2년 연속 중앙 해커톤 참가 및 협업 프로젝트 수행",
      "서비스 기획·MVP 개발·발표 및 부스 운영 경험",
      "12기 중앙 해커톤 우수상 수상",
      "13기 중앙 해커톤 247팀 중 상위 10% 기록",
    ],
  },
] satisfies TrainingItem[];
