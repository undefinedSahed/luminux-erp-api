import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsUUID } from 'class-validator';
import { BaseDTO } from '@src/app/base/base.dto';

export class UpdateStaffShiftDto extends BaseDTO {
  @ApiProperty({ type: String, required: false, example: 'uuid-shift' })
  @IsOptional()
  @IsUUID()
  readonly shiftId!: string;

  @ApiProperty({ type: String, required: false, example: '2025-06-01' })
  @IsOptional()
  @IsDateString()
  readonly fromDate!: string;

  @ApiProperty({ type: String, required: false, example: '2025-06-30' })
  @IsOptional()
  @IsDateString()
  readonly toDate!: string;
}