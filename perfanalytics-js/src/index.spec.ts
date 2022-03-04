import {PerformanceReport} from './index';

describe('PerfAnalytics.JS Tests', () => {
    const performanceReport = new PerformanceReport();

    it('should be defined', () => {
        expect(performanceReport.getReport).toBeDefined();
    });

    it('should return a report', () => {
        const report = performanceReport.getReport();

        expect(report).toBeDefined();
        expect(report.domLoad).toBeGreaterThanOrEqual(0);
        expect(report.firstContentfulPaint).toBeGreaterThanOrEqual(0);
        expect(report.windowLoad).toBeGreaterThanOrEqual(0);
        expect(report.timeToFirstByte).toBeGreaterThanOrEqual(0);
        expect(report.resources.length).toBeGreaterThanOrEqual(0);
    });

    it('should be not safari', () => {
        // karma is using chrome as default
        expect(performanceReport.isSafari).toBeFalsy();
    });

});
