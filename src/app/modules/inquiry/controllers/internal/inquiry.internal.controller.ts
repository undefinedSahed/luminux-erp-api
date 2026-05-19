import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { InquiryFilterDTO } from '../../dtos/filter.dto';
import { InquiryUpdateDTO } from '../../dtos/update.dto';
import { Inquiry } from '../../entities/inquiry.entity';
import { InquiryService } from '../../services/inquiry.service';

@ApiTags('Inquiry')
@ApiBearerAuth()
@Controller('internal/inquries')
export class InquiryInternalController {
  constructor(private readonly service: InquiryService) { }

  RELATIONS: FindOptionsRelations<Inquiry> = {};

  @Get()
  async findAll(@Query() query: InquiryFilterDTO): Promise<SuccessResponse<Inquiry[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Inquiry> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: InquiryUpdateDTO): Promise<Inquiry> {
    return this.service.updateOne(id, body);
  }
}