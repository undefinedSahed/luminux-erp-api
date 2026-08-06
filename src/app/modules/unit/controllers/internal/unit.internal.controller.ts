import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { CreateUnitDto } from '../../dtos/create.dto';
import { UnitFilterDTO } from '../../dtos/filter.dto';
import { UpdateUnitDto } from '../../dtos/update.dto';
import { Unit } from '../../entities/unit.entity';
import { UnitService } from '../../services/unit.service';

@ApiTags('Unit')
@ApiBearerAuth()
@Controller('internal/units')
export class UnitInternalController {
  constructor(private readonly service: UnitService) { }

  @Get()
  async findAll(@Query() query: UnitFilterDTO): Promise<SuccessResponse<Unit[]>> {
    return this.service.findAllBase(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Unit> {
    return this.service.findByIdBase(id);
  }

  @Post()
  async createOne(@Body() body: CreateUnitDto): Promise<Unit> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateUnitDto): Promise<Unit> {
    return this.service.updateOne(id, body);
  }
}
