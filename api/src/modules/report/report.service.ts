import { Injectable } from '@nestjs/common';
import { CreateReportDto } from '../../dto/create-report.dto';

@Injectable()
export class ReportService {
  reports: Report[] = [];

  getAllReports(startTime, endTime): Report[] {
    return this.reports.filter(
      (report) => report.createdAt >= startTime && report.createdAt <= endTime,
    );
  }

  createReport(createReportDto: CreateReportDto): string {
    createReportDto.createdAt = Date.now();

    this.reports.push(createReportDto);

    return 'Report saved.';
  }
}
