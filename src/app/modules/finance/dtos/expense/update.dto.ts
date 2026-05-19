import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsOptional, IsNumber, IsString, IsDateString, IsBoolean } from 'class-validator';

export class UpdateExpenseDto extends BaseDTO {
  @ApiProperty({ type: String, required: false, example: 'Office Rent' })
  @IsOptional()
  @IsString()
  readonly purpose?: string;

  @ApiProperty({ type: Number, required: false, example: 1500.00 })
  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @ApiProperty({ type: String, required: false, example: '2024-01-15' })
  @IsOptional()
  @IsDateString()
  readonly expenseDate?: string;

  @ApiProperty({ type: String, required: false, example: 'Monthly office rent payment' })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({ type: String, required: false, example: 'Operations' })
  @IsOptional()
  @IsString()
  readonly category?: string;

  @ApiProperty({ type: String, required: false, example: 'Bank Transfer' })
  @IsOptional()
  @IsString()
  readonly paymentMethod?: string;

  @ApiProperty({ type: String, required: false, example: 'Office Supplies Co.' })
  @IsOptional()
  @IsString()
  readonly vendor?: string;

  @ApiProperty({ type: String, required: false, example: 'RENT-2024-001' })
  @IsOptional()
  @IsString()
  readonly reference?: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
