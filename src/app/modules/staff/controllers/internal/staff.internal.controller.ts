import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../entities/staff.entity';
import { StaffFilterDto } from '../../dtos/filter.dto';
import { CreateStaffDto } from '../../dtos/create.dto';
import { UpdateStaffDto } from '../../dtos/update.dto';


@ApiTags('Staff')
@ApiBearerAuth()
@Controller('internal/staff')
export class StaffInternalController {
  constructor(private readonly service: StaffService) { }

  RELATIONS: FindOptionsRelations<Staff> = {
    designation: true,
    department: true,
    user: true,
  };

  @Get()
  async findAll(@Query() query: StaffFilterDto): Promise<SuccessResponse<Staff[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Staff> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateStaffDto): Promise<Staff> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateStaffDto): Promise<Staff> {
    return this.service.updateOne(id, body);
  }
}