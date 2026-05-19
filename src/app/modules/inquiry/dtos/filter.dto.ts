import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ENUM_CONTACT_QUERY_STATUS } from '../const';

export class InquiryFilterDTO {
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

  @ApiProperty({ enum: ENUM_CONTACT_QUERY_STATUS, required: false })
  @IsOptional()
  @IsEnum(ENUM_CONTACT_QUERY_STATUS)
  readonly status!: ENUM_CONTACT_QUERY_STATUS;

  @ApiProperty({ type: String, description: 'Filter by source', required: false })
  @IsOptional()
  @IsString()
  readonly source!: string;
}