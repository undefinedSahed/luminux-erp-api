import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../entities/staff.entity';
import { StaffFilterDto } from '../../dtos/filter.dto';

@ApiTags('Staff')
@ApiBearerAuth()
@Controller('web/staff')
export class StaffWebController {
  constructor(private readonly service: StaffService) { }

  RELATIONS: FindOptionsRelations<Staff> = {
    designation: true,
    department: true,
  };

  @Public()
  @Get()
  async findAll(@Query() query: StaffFilterDto): Promise<SuccessResponse<Staff[]>> {
    query['isActive'] = true;
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Staff> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }
}