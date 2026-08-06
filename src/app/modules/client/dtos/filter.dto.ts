import { ApiProperty } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base';
import { IsOptional, IsString } from 'class-validator';

export class ClientFilterDto extends BaseFilterDTO {

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly companyName?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly contactPerson?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly email?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly phone?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  readonly taxId?: string;
}
