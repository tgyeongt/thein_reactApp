export interface Award {
  date: string;
  title: string;
  org: string;
}

export interface Cert {
  date: string;
  title: string;
  org: string;
}

export const awards = [
  {
    date: "2025.09",
    title: "서경대학교 교내 해커톤(SKTHON) 대상",
    org: "서경대학교 대학혁신추진사업단",
  },
  {
    date: "2026.02",
    title: "UMC 9기 데모데이 AWS 특별상",
    org: "Make Us Challenge",
  },
  {
    date: "2026.02",
    title: "UMC 9기 Web 파트장 공로장",
    org: "Make Us Challenge",
  },
  {
    date: "2024.06",
    title: "멋쟁이사자처럼 12기 중앙해커톤 우수상",
    org: "멋쟁이사자처럼 대학",
  },
  {
    date: "2022–26",
    title: "성적 우수·일반 장학금 3회 수여",
    org: "서경대학교 학생처",
  },
] satisfies Award[];

export const certs = [
  { date: "2026.06", title: "정보처리기사", org: "한국산업인력공단" },
  {
    date: "2026.03",
    title: "SQL 개발자 (SQLD)",
    org: "한국데이터산업진흥원",
  },
  {
    date: "2025.10",
    title: "리눅스마스터 2급 필기",
    org: "한국정보통신진흥협회",
  },
] satisfies Cert[];
