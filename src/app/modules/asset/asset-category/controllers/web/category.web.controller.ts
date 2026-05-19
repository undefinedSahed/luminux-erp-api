import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetCategoryService } from '../../services/asset-category.service';
import { AssetCategory } from '../../entities/asset-category.entity';
import { AssetCategoryFilterDto } from '../../dtos/filter.dto';

@ApiTags('Asset Category')
@ApiBearerAuth()
@Controller('web/asset-categories')
export class AssetCategoryWebController {
  constructor(private readonly service: AssetCategoryService) { }

  RELATIONS: FindOptionsRelations<AssetCategory> = {};

  @Public()
  @Get()
  async findAll(@Query() query: AssetCategoryFilterDto): Promise<SuccessResponse<AssetCategory[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<AssetCategory> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}