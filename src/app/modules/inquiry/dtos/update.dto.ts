import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '@src/app/base/base.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ENUM_CONTACT_QUERY_STATUS } from '../const';

export class InquiryUpdateDTO extends BaseDTO {
  @ApiProperty({ enum: ENUM_CONTACT_QUERY_STATUS, required: true, example: ENUM_CONTACT_QUERY_STATUS.IN_PROGRESS })
  @IsNotEmpty()
  @IsEnum(ENUM_CONTACT_QUERY_STATUS)
  readonly status!: ENUM_CONTACT_QUERY_STATUS;
}