import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsOptional, IsNumber, IsString, IsDateString, IsBoolean } from 'class-validator';

export class UpdateIncomeDto extends BaseDTO {
  @ApiProperty({ type: String, required: false, example: 'Client Payment' })
  @IsOptional()
  @IsString()
  readonly source?: string;

  @ApiProperty({ type: Number, required: false, example: 5000.00 })
  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @ApiProperty({ type: String, required: false, example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  readonly incomeDate?: string;

  @ApiProperty({ type: String, required: false, example: 'Payment for web development services' })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({ type: String, required: false, example: 'Services' })
  @IsOptional()
  @IsString()
  readonly category?: string;

  @ApiProperty({ type: String, required: false, example: 'Bank Transfer' })
  @IsOptional()
  @IsString()
  readonly paymentMethod?: string;

  @ApiProperty({ type: String, required: false, example: 'INV-2024-001' })
  @IsOptional()
  @IsString()
  readonly reference?: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
