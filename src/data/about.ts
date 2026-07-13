export interface AboutItem {
  key: string;
  title: string;
  desc: string;
}

export const aboutItems = [
  {
    key: "USER EXPERIENCE",
    title: "데이터를 사용자 경험으로 바꿉니다",
    desc: "변화하는 데이터를 사용자가 이해하기 쉬운 화면으로 표현하는 과정에 관심이 있습니다.\n실시간 데이터를 활용한 서비스 개발을 통해 의미 있는 화면을 만드는 경험을 쌓았습니다.",
  },
  {
    key: "SHIP",
    title: "만든 기능은 실제 서비스까지 연결합니다",
    desc: "프로젝트 기획부터 개발, 배포와 운영까지 경험하며 단순히 동작하는 기능을 넘어 사용자가 사용할 수 있는 서비스를 만드는 과정을 경험했습니다.",
  },
  {
    key: "SOLVE",
    title: "문제의 원인을 찾고 개선합니다",
    desc: "문제가 발생하면 바로 수정하기보다 원인을 분석하고 해결 방법을 비교합니다.\nAPI 성능 개선과 비동기 데이터 처리 문제 해결을 통해 안정적인 서비스를 만드는 방법을 배웠습니다.",
  },
  {
    key: "GROW",
    title: "함께 고민하며 성장합니다",
    desc: "코드 리뷰와 기술 공유를 통해 더 나은 코드를 고민해왔습니다.\n혼자 작성하는 코드보다 팀이 함께 유지보수할 수 있는 코드를 중요하게 생각합니다.",
  },
] satisfies AboutItem[];
