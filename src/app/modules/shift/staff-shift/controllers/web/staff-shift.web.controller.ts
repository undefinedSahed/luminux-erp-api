import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { StaffShiftFilterDto } from '../../dtos/filter.dto';
import { StaffShift } from '../../entities/staff-shift.entity';
import { StaffShiftService } from '../../services/staff-shift.service';

@ApiTags('Shift')
@ApiBearerAuth()
@Controller('web/staff-shifts')
export class StaffShiftWebController {
  constructor(private readonly service: StaffShiftService) { }

  RELATIONS: FindOptionsRelations<StaffShift> = { staff: true, shift: true };

  @Public()
  @Get()
  async findAll(@Query() query: StaffShiftFilterDto): Promise<SuccessResponse<StaffShift[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<StaffShift> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}