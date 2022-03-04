export declare class PerformanceReport {
    isSafari: boolean;
    apiUrl: string;
    constructor();
    getReport(): Report;
    postReport(report: Report): void;
}
interface Report {
    timeToFirstByte: number;
    firstContentfulPaint: number;
    domLoad: number;
    windowLoad: number;
    resources: {
        name: string;
        initiatorType: string;
        transferSize: number;
        duration: number;
    }[];
}
export {};
