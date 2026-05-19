import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateStaffShiftDto } from '../../dtos/create.dto';
import { StaffShiftFilterDto } from '../../dtos/filter.dto';
import { UpdateStaffShiftDto } from '../../dtos/update.dto';
import { StaffShift } from '../../entities/staff-shift.entity';
import { StaffShiftService } from '../../services/staff-shift.service';

@ApiTags('Shift')
@ApiBearerAuth()
@Controller('internal/staff-shifts')
export class StaffShiftInternalController {
  constructor(private readonly service: StaffShiftService) { }

  RELATIONS: FindOptionsRelations<StaffShift> = { staff: true, shift: true };

  @Get()
  async findAll(@Query() query: StaffShiftFilterDto): Promise<SuccessResponse<StaffShift[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<StaffShift> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateStaffShiftDto): Promise<StaffShift> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateStaffShiftDto): Promise<StaffShift> {
    return this.service.updateOne(id, body);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<void> {
    return this.service.deleteOne(id);
  }
}