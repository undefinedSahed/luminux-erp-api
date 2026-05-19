import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { DepartmentAssetService } from '../../services/dept-asset.service';
import { DepartmentAsset } from '../../entities/dept-asset.entity';
import { DepartmentAssetFilterDto } from '../../dtos/filter.dto';

@ApiTags('Department')
@ApiBearerAuth()
@Controller('web/department-assets')
export class DepartmentAssetWebController {
  constructor(private readonly service: DepartmentAssetService) { }

  RELATIONS: FindOptionsRelations<DepartmentAsset> = { asset: true, department: true };

  @Public()
  @Get()
  async findAll(@Query() query: DepartmentAssetFilterDto): Promise<SuccessResponse<DepartmentAsset[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<DepartmentAsset> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}