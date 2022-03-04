import { ArrayNotEmpty, IsArray, IsEmpty, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { ResourceDto } from './resource.dto';
import { Type } from 'class-transformer';

export class CreateReportDto {
  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly timeToFirstByte: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly firstContentfulPaint: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly domLoad: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly windowLoad: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ResourceDto)
  resources: ResourceDto[];

  @IsEmpty()
  createdAt: number;
}
