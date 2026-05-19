import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseDTO } from '@src/app/base/base.dto';

export class CreateDesignationDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Software Engineer' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'Responsible for software development' })
  @IsOptional()
  @IsString()
  readonly description!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}