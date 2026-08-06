import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateRawMaterialDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Steel Rod' })
  @IsNotEmpty()
  @IsString()
  readonly title!: string;

  @ApiProperty({ type: String, required: false, example: 'Used in fabrication' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-unit' })
  @IsNotEmpty()
  @IsUUID()
  readonly unitId!: string;

  @ApiProperty({ type: Number, required: true, example: 120.5 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly unitPrice!: number;

  @ApiProperty({ type: Number, required: true, example: 10 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly quantity!: number;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}
