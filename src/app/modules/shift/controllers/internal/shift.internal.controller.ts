import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateShiftDto } from '../../dtos/create.dto';
import { ShiftFilterDto } from '../../dtos/filter.dto';
import { UpdateShiftDto } from '../../dtos/update.dto';
import { Shift } from '../../entities/shift.entity';
import { ShiftService } from '../../services/shift.service';

@ApiTags('Shift')
@ApiBearerAuth()
@Controller('internal/shifts')
export class ShiftInternalController {
  constructor(private readonly service: ShiftService) { }

  RELATIONS: FindOptionsRelations<Shift> = {};

  @Get()
  async findAll(@Query() query: ShiftFilterDto): Promise<SuccessResponse<Shift[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Shift> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateShiftDto): Promise<Shift> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateShiftDto): Promise<Shift> {
    return this.service.updateOne(id, body);
  }
}