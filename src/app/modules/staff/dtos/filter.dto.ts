import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class StaffFilterDto {
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

  @ApiProperty({ type: Boolean, required: false })
  @IsOptional()
  isActive!: boolean;

  @ApiProperty({ type: String, description: 'Filter by department ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ type: String, description: 'Filter by designation ID', required: false })
  @IsOptional()
  @IsUUID()
  readonly designationId!: string;
}