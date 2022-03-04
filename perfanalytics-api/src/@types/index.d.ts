export {};

declare global {
  interface Report {
    timeToFirstByte: number;
    firstContentfulPaint: number;
    domLoad: number;
    windowLoad: number;
    createdAt: number;
    resources: {
      name: string;
      initiatorType: string;
      transferSize: number;
      duration: number;
    }[];
  }
}
