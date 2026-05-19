import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAssetCategoryDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Electronics' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'electronics' })
  @IsOptional()
  @IsString()
  readonly slug!: string;

  @ApiProperty({ type: String, required: false, example: 'All electronic assets' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}