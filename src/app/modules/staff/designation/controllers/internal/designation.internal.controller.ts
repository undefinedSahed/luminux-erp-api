import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { DesignationService } from '../../services/designation.service';
import { Designation } from '../../entities/designation.entity';
import { DesignationFilterDto } from '../../dtos/filter.dto';
import { CreateDesignationDto } from '../../dtos/create.dto';
import { UpdateDesignationDto } from '../../dtos/update.dto';


@ApiTags('Designation')
@ApiBearerAuth()
@Controller('internal/designations')
export class DesignationInternalController {
  constructor(private readonly service: DesignationService) { }

  RELATIONS: FindOptionsRelations<Designation> = {};

  @Get()
  async findAll(@Query() query: DesignationFilterDto): Promise<SuccessResponse<Designation[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Designation> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateDesignationDto): Promise<Designation> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateDesignationDto): Promise<Designation> {
    return this.service.updateOne(id, body);
  }
}