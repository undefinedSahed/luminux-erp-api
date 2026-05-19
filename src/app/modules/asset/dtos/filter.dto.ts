import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ENUM_ASSET_STATUS } from '../const';

export class AssetFilterDto {
  @ApiProperty({ type: Number, description: 'The page number', example: 1, required: false })
  @IsOptional()
  readonly page: number = 1;

  @ApiProperty({ type: Number, description: 'Limit the number of results', example: 10, required: false })
  @IsOptional()
  readonly limit: number = 10;

  @ApiProperty({ type: String, description: 'The search term', required: false })
  @IsOptional()
  @IsString()
  readonly searchTerm!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  isActive!: boolean;

  @ApiProperty({ enum: ENUM_ASSET_STATUS, required: false })
  @IsOptional()
  @IsEnum(ENUM_ASSET_STATUS)
  readonly status!: ENUM_ASSET_STATUS;

  @ApiProperty({ type: String, description: 'Filter by sub category ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly subCategoryId!: string;
}