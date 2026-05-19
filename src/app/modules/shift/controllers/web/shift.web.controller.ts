import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { ShiftFilterDto } from '../../dtos/filter.dto';
import { Shift } from '../../entities/shift.entity';
import { ShiftService } from '../../services/shift.service';

@ApiTags('Shift')
@ApiBearerAuth()
@Controller('web/shifts')
export class ShiftWebController {
  constructor(private readonly service: ShiftService) { }

  RELATIONS: FindOptionsRelations<Shift> = {};

  @Public()
  @Get()
  async findAll(@Query() query: ShiftFilterDto): Promise<SuccessResponse<Shift[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Shift> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}