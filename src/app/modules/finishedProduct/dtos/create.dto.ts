import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateFinishedProductDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Finished Widget' })
  @IsNotEmpty()
  @IsString()
  readonly title!: string;

  @ApiProperty({ type: String, required: false, example: 'A finished product ready for sale' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-unit' })
  @IsNotEmpty()
  @IsUUID()
  readonly unitId!: string;

  @ApiProperty({ type: Number, required: true, example: 50 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly quantity!: number;

  @ApiProperty({ type: Number, required: true, example: 25.5 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly productionCostPerUnit!: number;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}
