export interface ConsoleData {
  title: string;
  logs: string[];
}

// Hero 오른쪽 라이브 콘솔 (Stocket 실서비스 관제 컨셉)
export const consoleData = {
  title: "STOCKET // LIVE",
  logs: [
    "GET /api/stocks 200",
    "sync market-data OK",
    "DART API fetch 200",
    "cache HIT redis",
    "deploy healthcheck OK",
    "GET /compare/005930 200",
    "cron: price-sync done",
  ],
} satisfies ConsoleData;
