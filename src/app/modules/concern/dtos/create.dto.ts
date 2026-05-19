// create.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateConcernDto {
  @ApiProperty({ type: String, required: true, example: 'Prime Satttelite TV Ltd' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'abc-technologies-ltd' })
  @IsOptional()
  @IsString()
  readonly slug!: string;

  @ApiProperty({ type: String, required: false, example: 'info@abc.com' })
  @IsOptional()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ type: String, required: false, example: '+8801XXXXXXXXX' })
  @IsOptional()
  @IsString()
  readonly phone!: string;

  @ApiProperty({ type: String, required: false, example: '123 Main St, Dhaka' })
  @IsOptional()
  @IsString()
  readonly address!: string;

  @ApiProperty({ type: String, required: false, example: 'https://abc.com' })
  @IsOptional()
  @IsUrl()
  readonly website!: string;

  @ApiProperty({ type: String, required: false, example: 'https://cdn.example.com/logo.png' })
  @IsOptional()
  @IsString()
  readonly logo!: string;

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