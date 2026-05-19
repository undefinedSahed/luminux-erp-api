import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base/baseFilter.dto';
import { IsOptional, IsString } from 'class-validator';

export class FilterExpenseDto extends BaseFilterDTO {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly purpose?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly category?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly paymentMethod?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly vendor?: string;
}
