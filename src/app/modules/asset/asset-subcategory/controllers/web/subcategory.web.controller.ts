import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetSubCategoryService } from '../../services/subcategory.service';
import { AssetSubCategory } from '../../entities/subcategory.entity';
import { AssetSubCategoryFilterDto } from '../../dtos/filter.dto';

@ApiTags('Asset Category')
@ApiBearerAuth()
@Controller('web/asset-sub-categories')
export class AssetSubCategoryWebController {
  constructor(private readonly service: AssetSubCategoryService) { }

  RELATIONS: FindOptionsRelations<AssetSubCategory> = { category: true };

  @Public()
  @Get()
  async findAll(@Query() query: AssetSubCategoryFilterDto): Promise<SuccessResponse<AssetSubCategory[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<AssetSubCategory> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}