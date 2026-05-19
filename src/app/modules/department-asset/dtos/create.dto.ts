import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateDepartmentAssetDto {
  @ApiProperty({ type: String, required: true, example: 'uuid-asset' })
  @IsNotEmpty()
  @IsUUID()
  readonly assetId!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-department' })
  @IsNotEmpty()
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ type: Number, required: true, example: 5 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  readonly quantity!: number;
}