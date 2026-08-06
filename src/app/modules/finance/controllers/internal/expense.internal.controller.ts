import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateExpenseDto } from '../../dtos/expense/create.dto';
import { FilterExpenseDto } from '../../dtos/expense/filter.dto';
import { UpdateExpenseDto } from '../../dtos/expense/update.dto';
import { Expense } from '../../entities/expense.entity';
import { ExpenseService } from '../../services/expense.service';

@ApiTags('Finance')
@ApiBearerAuth()
@Controller('internal/expense')
export class ExpenseInternalController {
  constructor(private readonly service: ExpenseService) {}

  RELATIONS: FindOptionsRelations<Expense> = {};

  @Get()
  async findAll(@Query() query: FilterExpenseDto): Promise<SuccessResponse<Expense[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Expense> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateExpenseDto): Promise<Expense> {
    return this.service.createOneBase(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateExpenseDto): Promise<Expense> {
    return this.service.updateOneBase(id, body);
  }
}
