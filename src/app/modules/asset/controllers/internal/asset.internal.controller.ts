import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { AssetService } from '../../services/asset.service';
import { Asset } from '../../entities/asset.entity';
import { AssetFilterDto } from '../../dtos/filter.dto';
import { CreateAssetDto } from '../../dtos/create.dto';
import { UpdateAssetDto } from '../../dtos/update.dto';


@ApiTags('Asset')
@ApiBearerAuth()
@Controller('internal/assets')
export class AssetInternalController {
  constructor(private readonly service: AssetService) { }

  RELATIONS: FindOptionsRelations<Asset> = { subCategory: true };

  @Get()
  async findAll(@Query() query: AssetFilterDto): Promise<SuccessResponse<Asset[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Asset> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateAssetDto): Promise<Asset> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateAssetDto): Promise<Asset> {
    return this.service.updateOne(id, body);
  }
}