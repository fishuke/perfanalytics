import { Test, TestingModule } from '@nestjs/testing';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

describe('ReportController', () => {
  let controller: ReportController;
  let service: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportController],
      providers: [ReportService],
    }).compile();

    controller = module.get<ReportController>(ReportController);
    service = module.get<ReportService>(ReportService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should add report to array', () => {
    const dummyData: Report = {
      domLoad: 0,
      createdAt: 0,
      firstContentfulPaint: 0,
      timeToFirstByte: 0,
      windowLoad: 0,
      resources: [
        {
          name: 'google.com/style.css',
          initiatorType: 'css',
          duration: 100,
          transferSize: 50,
        },
      ],
    };

    expect(service.createReport(dummyData)).toBe('Report saved.');

    expect(service.reports.length).toBe(1);
  });

  it('should get all report', () => {
    expect(service.getAllReports(1, 1)).toBeInstanceOf(Array);
    expect(service.getAllReports(1, 1)).toBeDefined();
  });

  it('should be the equal', () => {
    expect(service.getAllReports(1, 1)).toStrictEqual(
      controller.getAllReports(1, 1),
    );
  });
});
