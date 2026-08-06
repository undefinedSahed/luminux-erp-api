import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto extends BaseDTO {
  @ApiProperty({ type: String, required: true, example: 'Acme Industries' })
  @IsNotEmpty()
  @IsString()
  readonly companyName!: string;

  @ApiProperty({ type: String, required: false, example: 'Jane Doe' })
  @IsOptional()
  @IsString()
  readonly contactPerson!: string;

  @ApiProperty({ type: String, required: false, example: '123-456-789' })
  @IsOptional()
  @IsString()
  readonly taxId!: string;

  @ApiProperty({ type: String, required: false, example: '+8801712345678' })
  @IsOptional()
  @IsString()
  readonly phone!: string;

  @ApiProperty({ type: String, required: false, example: 'support@acme.com' })
  @IsOptional()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ type: String, required: false, example: 'House 1, Road 2, Dhaka' })
  @IsOptional()
  @IsString()
  readonly billingAddress!: string;

  @ApiProperty({ type: String, required: false, example: 'Warehouse 5, Chattogram' })
  @IsOptional()
  @IsString()
  readonly shippingAddress!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}
