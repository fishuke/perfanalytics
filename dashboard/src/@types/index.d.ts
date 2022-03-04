export {};

declare global {
  interface Report {
    timeToFirstByte: number;
    firstContentfulPaint: number;
    domLoad: number;
    windowLoad: number;
    createdAt: number;
    resources: Resource[];
  }

  interface Resource {
    name: string;
    initiatorType: string;
    transferSize: number;
    duration: number;
  }

  interface HomeState {
    endTime: Date | null;
    startTime: Date | null;
    reports: Report[];
  }

  interface TimePickerProps {
    label: string,
    value: Date | null,
    onUpdate: any
  }
}
