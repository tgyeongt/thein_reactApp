export interface AboutItem {
  key: string;
  title: string;
  desc: string;
}

export const aboutItems = [
  {
    key: "SHIP",
    title: "만드는 데서 끝내지 않고 배포까지 책임진다",
    desc: "실 사용자 1,500명이 쓴 서비스와 AWS 실서비스 운영까지, 화면을 세상에 내보내고 유지하는 전 과정을 경험했습니다.",
  },
  {
    key: "MEASURE",
    title: "느낌이 아니라 수치로 개선한다",
    desc: "병렬 API 호출과 캐싱으로 응답 속도를 약 50% 줄이는 등, 개선을 체감이 아닌 지표로 확인하고 판단합니다.",
  },
  {
    key: "OWN THE STACK",
    title: "프론트에 머무르지 않고 데이터 흐름까지 설계한다",
    desc: "화면 뒤의 데이터 파이프라인·DB·배포까지 직접 다루며, 프론트엔드를 시스템 전체 관점에서 바라봅니다.",
  },
  {
    key: "VERIFY",
    title: "잘 나온 결과일수록 먼저 의심한다",
    desc: "지표가 좋아 보일수록 실제 개선인지 착시인지부터 가리고, 통제된 조건에서 다시 확인한 뒤 결론을 냅니다.",
  },
] satisfies AboutItem[];
