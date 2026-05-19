import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateConcernDto } from '../../dtos/create.dto';
import { FilterConcernDto } from '../../dtos/filter.dto';
import { UpdateConcernDto } from '../../dtos/update.dto';
import { Concern } from '../../entities/concern.entity';
import { ConcernService } from '../../services/concern.service';

@ApiTags('Concern')
@ApiBearerAuth()
@Controller('internal/concerns')
export class ConcernInternalController {
  constructor(private readonly service: ConcernService) { }

  RELATIONS: FindOptionsRelations<Concern> = {};

  @Get()
  async findAll(@Query() query: FilterConcernDto): Promise<SuccessResponse<Concern[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Concern> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateConcernDto): Promise<Concern> {
    return this.service.createOneBase(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateConcernDto): Promise<Concern> {
    return this.service.updateOneBase(id, body);
  }
}