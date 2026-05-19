import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetCategoryService } from '../../services/asset-category.service';
import { AssetCategory } from '../../entities/asset-category.entity';
import { AssetCategoryFilterDto } from '../../dtos/filter.dto';
import { CreateAssetCategoryDto } from '../../dtos/create.dto';
import { UpdateAssetCategoryDto } from '../../dtos/update.dto';

@ApiTags('Asset Category')
@ApiBearerAuth()
@Controller('internal/asset-categories')
export class AssetCategoryInternalController {
  constructor(private readonly service: AssetCategoryService) { }

  RELATIONS: FindOptionsRelations<AssetCategory> = {};

  @Get()
  async findAll(@Query() query: AssetCategoryFilterDto): Promise<SuccessResponse<AssetCategory[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<AssetCategory> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateAssetCategoryDto): Promise<AssetCategory> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateAssetCategoryDto): Promise<AssetCategory> {
    return this.service.updateOne(id, body);
  }
}