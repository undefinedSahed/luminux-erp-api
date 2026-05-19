import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ENUM_ASSET_STATUS } from '../const';
import { BaseDTO } from '@src/app/base/base.dto';

export class CreateAssetDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Dell Monitor 24"' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'Full HD IPS Display' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: Number, required: true, example: 10 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  readonly quantity!: number;

  @ApiProperty({ enum: ENUM_ASSET_STATUS, required: false, example: ENUM_ASSET_STATUS.AVAILABLE })
  @IsOptional()
  @IsEnum(ENUM_ASSET_STATUS)
  readonly status!: ENUM_ASSET_STATUS;

  @ApiProperty({ type: String, required: false, example: '2024-01-15' })
  @IsOptional()
  @IsString()
  readonly purchaseDate!: string;

  @ApiProperty({ type: Number, required: false, example: 25000 })
  @IsOptional()
  @IsNumber()
  readonly purchasePrice!: number;

  @ApiProperty({ type: String, required: false, example: '2026-01-15' })
  @IsOptional()
  @IsString()
  readonly warrantyExpiry!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-category' })
  @IsNotEmpty()
  @IsUUID()
  readonly categoryId!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-sub-category' })
  @IsNotEmpty()
  @IsUUID()
  readonly subCategoryId!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}