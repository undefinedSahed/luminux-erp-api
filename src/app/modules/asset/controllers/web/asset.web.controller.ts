import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetFilterDto } from '../../dtos/filter.dto';
import { Asset } from '../../entities/asset.entity';
import { AssetService } from '../../services/asset.service';

@ApiTags('Asset')
@ApiBearerAuth()
@Controller('web/assets')
export class AssetWebController {
  constructor(private readonly service: AssetService) { }

  RELATIONS: FindOptionsRelations<Asset> = { subCategory: true };

  @Public()
  @Get()
  async findAll(@Query() query: AssetFilterDto): Promise<SuccessResponse<Asset[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Asset> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}