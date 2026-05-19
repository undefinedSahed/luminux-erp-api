import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { DesignationService } from '../../services/designation.service';
import { Designation } from '../../entities/designation.entity';
import { DesignationFilterDto } from '../../dtos/filter.dto';


@ApiTags('Designation')
@ApiBearerAuth()
@Controller('web/designations')
export class DesignationWebController {
  constructor(private readonly service: DesignationService) { }

  RELATIONS: FindOptionsRelations<Designation> = {};

  @Public()
  @Get()
  async findAll(@Query() query: DesignationFilterDto): Promise<SuccessResponse<Designation[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Designation> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}