import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class StaffShiftFilterDto {
  @ApiProperty({ type: Number, description: 'The page number', example: 1, required: false })
  @IsOptional()
  readonly page: number = 1;

  @ApiProperty({ type: Number, description: 'Limit the number of results', example: 10, required: false })
  @IsOptional()
  readonly limit: number = 10;

  @ApiProperty({ type: String, description: 'Filter by staff ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly staffId!: string;

  @ApiProperty({ type: String, description: 'Filter by shift ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly shiftId!: string;

  @ApiProperty({ type: String, description: 'Filter from date', required: false })
  @IsOptional()
  @IsDateString()
  readonly fromDate!: string;

  @ApiProperty({ type: String, description: 'Filter to date', required: false })
  @IsOptional()
  @IsDateString()
  readonly toDate!: string;
}