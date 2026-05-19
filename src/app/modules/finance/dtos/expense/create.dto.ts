import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExpenseDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Office Rent' })
  @IsNotEmpty()
  @IsString()
  readonly purpose!: string;

  @ApiProperty({ type: Number, required: true, example: 1500.00 })
  @IsNotEmpty()
  @IsNumber()
  readonly amount!: number;

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
