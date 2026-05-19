import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InquiryCreateDTO extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: true, example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ type: String, required: false, example: '8801XXXXXXXXX' })
  @IsOptional()
  @IsString()
  readonly phone!: string;

  @ApiProperty({ type: String, required: false, example: 'CEO' })
  @IsOptional()
  @IsString()
  readonly role!: string;

  @ApiProperty({ type: String, required: false, example: 'Web Development' })
  @IsOptional()
  @IsString()
  readonly serviceName!: string;

  @ApiProperty({ type: Number, required: false, example: '100000' })
  @IsOptional()
  @IsString()
  readonly budget!: string;

  @ApiProperty({ type: String, required: true, example: 'quicksoftltd.com' })
  @IsOptional()
  @IsString()
  readonly source!: string;

  @ApiProperty({ type: String, required: false, example: 'Service Inquiry' })
  @IsOptional()
  @IsString()
  readonly purpose!: string;

  @ApiProperty({ type: String, required: false, example: 'I am interested in your services' })
  @IsOptional()
  @IsString()
  readonly message!: string;
}