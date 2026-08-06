import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUnitDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Meter' })
  @IsNotEmpty()
  @IsString()
  readonly title!: string;

  @ApiProperty({ type: String, required: false, example: 'Short text description' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}
