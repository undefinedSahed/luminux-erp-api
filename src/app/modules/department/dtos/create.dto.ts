import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ type: String, required: true, example: 'Human Resources' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'human-resources' })
  @IsOptional()
  @IsString()
  readonly slug!: string;

  @ApiProperty({ type: String, required: false, example: 'Handles all HR related tasks' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: [String], required: true, example: ['uuid-concern-1', 'uuid-concern-2'] })
  @IsNotEmpty()
  @IsArray()
  @IsUUID('all', { each: true })
  readonly concernIds!: string[];

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly createdBy!: Record<string, any>;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly updatedBy!: Record<string, any>;
}