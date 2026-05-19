import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAssetSubCategoryDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Monitor' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'monitor' })
  @IsOptional()
  @IsString()
  readonly slug!: string;

  @ApiProperty({ type: String, required: false, example: 'All monitor assets' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: String, required: true, example: 'uuid-category' })
  @IsNotEmpty()
  @IsUUID()
  readonly categoryId!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}