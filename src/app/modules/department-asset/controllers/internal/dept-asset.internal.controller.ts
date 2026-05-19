import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { DepartmentAssetService } from '../../services/dept-asset.service';
import { DepartmentAsset } from '../../entities/dept-asset.entity';
import { DepartmentAssetFilterDto } from '../../dtos/filter.dto';
import { CreateDepartmentAssetDto } from '../../dtos/create.dto';
import { UpdateDepartmentAssetDto } from '../../dtos/update.dto';


@ApiTags('Department')
@ApiBearerAuth()
@Controller('internal/department-assets')
export class DepartmentAssetInternalController {
  constructor(private readonly service: DepartmentAssetService) { }

  RELATIONS: FindOptionsRelations<DepartmentAsset> = { asset: true, department: true };

  @Get()
  async findAll(@Query() query: DepartmentAssetFilterDto): Promise<SuccessResponse<DepartmentAsset[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<DepartmentAsset> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateDepartmentAssetDto): Promise<DepartmentAsset> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateDepartmentAssetDto): Promise<DepartmentAsset> {
    return this.service.updateOne(id, body);
  }
}