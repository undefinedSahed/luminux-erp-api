import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateRawMaterialDto } from '../../dtos/create.dto';
import { RawMaterialFilterDto } from '../../dtos/filter.dto';
import { UpdateRawMaterialDto } from '../../dtos/update.dto';
import { RawMaterial } from '../../entities/rawMaterial.entity';
import { RawMaterialService } from '../../services/rawMaterial.service';

@ApiTags('Raw Material')
@ApiBearerAuth()
@Controller('internal/raw-materials')
export class RawMaterialInternalController {
  constructor(private readonly service: RawMaterialService) { }

  RELATIONS: FindOptionsRelations<RawMaterial> = { unit: true };

  @Get()
  async findAll(@Query() query: RawMaterialFilterDto): Promise<SuccessResponse<RawMaterial[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<RawMaterial> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateRawMaterialDto): Promise<RawMaterial> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateRawMaterialDto): Promise<RawMaterial> {
    return this.service.updateOne(id, body);
  }
}
