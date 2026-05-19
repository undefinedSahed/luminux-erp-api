import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateDepartmentDto } from '../../dtos/create.dto';
import { FilterDepartmentDto } from '../../dtos/filter.dto';
import { UpdateDepartmentDto } from '../../dtos/update.dto';
import { Department } from '../../entities/department.entity';
import { DepartmentService } from '../../services/department.service';


@ApiTags('Department')
@ApiBearerAuth()
@Controller('internal/departments')
export class DepartmentInternalController {
  constructor(private readonly service: DepartmentService) { }

  RELATIONS: FindOptionsRelations<Department> = { concerns: true };

  @Get()
  async findAll(@Query() query: FilterDepartmentDto): Promise<SuccessResponse<Department[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Department> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateDepartmentDto): Promise<Department> {
    return this.service.createOneBase(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateDepartmentDto): Promise<Department> {
    return this.service.updateOneBase(id, body);
  }
}