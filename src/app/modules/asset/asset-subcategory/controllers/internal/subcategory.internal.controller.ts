import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetSubCategoryService } from '../../services/subcategory.service';
import { AssetSubCategory } from '../../entities/subcategory.entity';
import { AssetSubCategoryFilterDto } from '../../dtos/filter.dto';
import { CreateAssetSubCategoryDto } from '../../dtos/create.dto';
import { UpdateAssetSubCategoryDto } from '../../dtos/update.dto';

@ApiTags('Asset Category')
@ApiBearerAuth()
@Controller('internal/asset-sub-categories')
export class AssetSubCategoryInternalController {
  constructor(private readonly service: AssetSubCategoryService) { }

  RELATIONS: FindOptionsRelations<AssetSubCategory> = { category: true };

  @Get()
  async findAll(@Query() query: AssetSubCategoryFilterDto): Promise<SuccessResponse<AssetSubCategory[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<AssetSubCategory> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateAssetSubCategoryDto): Promise<AssetSubCategory> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateAssetSubCategoryDto): Promise<AssetSubCategory> {
    return this.service.updateOne(id, body);
  }
}