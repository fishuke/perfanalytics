import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from '../../dto/create-report.dto';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Query('start-time') startTime,
    @Query('end-time') endTime,
  ): Report[] {
    if (!startTime || !Number(startTime)) throw new BadRequestException();
    if (!endTime || !Number(endTime)) throw new BadRequestException();
    return this.reportService.getAllReports(startTime, endTime);
  }

  @Post()
  createReport(@Body() createReportDto: CreateReportDto): string {
    return this.reportService.createReport(createReportDto);
  }
}
