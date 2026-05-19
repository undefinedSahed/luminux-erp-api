import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class DepartmentAssetFilterDto {
  @ApiProperty({ type: Number, description: 'The page number', example: 1, required: false })
  @IsOptional()
  readonly page: number = 1;

  @ApiProperty({ type: Number, description: 'Limit the number of results', example: 10, required: false })
  @IsOptional()
  readonly limit: number = 10;

  @ApiProperty({ type: String, description: 'Filter by department ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ type: String, description: 'Filter by asset ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly assetId!: string;
}