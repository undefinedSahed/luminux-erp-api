import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base/baseFilter.dto';
import { IsOptional, IsString } from 'class-validator';

export class FilterIncomeDto extends BaseFilterDTO {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly source?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly category?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly paymentMethod?: string;
}
