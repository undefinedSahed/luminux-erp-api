import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateIncomeDto } from '../../dtos/income/create.dto';
import { FilterIncomeDto } from '../../dtos/income/filter.dto';
import { UpdateIncomeDto } from '../../dtos/income/update.dto';
import { Income } from '../../entities/income.entity';
import { IncomeService } from '../../services/income.service';

@ApiTags('Finance')
@ApiBearerAuth()
@Controller('internal/income')
export class IncomeInternalController {
  constructor(private readonly service: IncomeService) {}

  RELATIONS: FindOptionsRelations<Income> = {};

  @Get()
  async findAll(@Query() query: FilterIncomeDto): Promise<SuccessResponse<Income[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Income> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateIncomeDto): Promise<Income> {
    return this.service.createOneBase(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateIncomeDto): Promise<Income> {
    return this.service.updateOneBase(id, body);
  }
}
