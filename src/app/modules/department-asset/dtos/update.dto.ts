import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class UpdateDepartmentAssetDto {
  @ApiProperty({ type: Number, required: true, example: 5 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  readonly quantity!: number;
}