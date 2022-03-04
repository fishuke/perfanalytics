export class PerformanceReport {
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    apiUrl = process.env.API_URL;

    constructor() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const report = this.getReport();
                this.postReport(report);
            }, 100);
        });
    }

    getReport(): Report {
        let domLoad, timeToFirstByte, windowLoad = 0;

        const resourceEntries = performance.getEntriesByType("resource");


        if (this.isSafari) {
            // Deprecated but there is no other way to support safari.
            const timing = performance.timing;

            domLoad = timing.domContentLoadedEventEnd - timing.navigationStart;

            timeToFirstByte = timing.responseStart - timing.requestStart;

            windowLoad = timing.loadEventEnd - timing.loadEventStart;
        } else {
            const navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

            domLoad = navigationTiming.domContentLoadedEventEnd;

            timeToFirstByte = navigationTiming.responseStart;

            windowLoad = navigationTiming.loadEventStart;
        }

        const resources = resourceEntries
            .filter((resource: PerformanceResourceTiming) => resource.initiatorType !== 'xmlhttprequest')
            .map((resource: PerformanceResourceTiming) => {
                return {
                    name: resource.name,
                    initiatorType: resource.initiatorType,
                    transferSize: resource.transferSize,
                    duration: resource.duration
                }
            });

        const firstContentfulPaintEntry = performance.getEntriesByType("paint")[0];

        const firstContentfulPaint = firstContentfulPaintEntry ? firstContentfulPaintEntry.startTime : 0;

        const report: Report = {
            domLoad,
            timeToFirstByte,
            windowLoad,
            firstContentfulPaint,
            resources
        };

        console.log(report);

        return report;

    }

    postReport(report: Report): void {
        fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(report)
        }).then(() => {
            console.log('Report successfully sent.')
        }).catch(() => {
            console.error('An error occurred while sending the report.')
        });
    }
}

new PerformanceReport();

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