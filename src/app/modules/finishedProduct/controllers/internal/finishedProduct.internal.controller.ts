import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { FindOptionsRelations } from 'typeorm';
import { CreateFinishedProductDto } from '../../dtos/create.dto';
import { FinishedProductFilterDto } from '../../dtos/filter.dto';
import { UpdateFinishedProductDto } from '../../dtos/update.dto';
import { FinishedProduct } from '../../entities/finishedProduct.entity';
import { FinishedProductService } from '../../services/finishedProduct.service';

@ApiTags('Finished Product')
@ApiBearerAuth()
@Controller('internal/finished-products')
export class FinishedProductInternalController {
  constructor(private readonly service: FinishedProductService) { }

  RELATIONS: FindOptionsRelations<FinishedProduct> = { unit: true };

  @Get()
  async findAll(@Query() query: FinishedProductFilterDto): Promise<SuccessResponse<FinishedProduct[]>> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<FinishedProduct> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateFinishedProductDto): Promise<FinishedProduct> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateFinishedProductDto): Promise<FinishedProduct> {
    return this.service.updateOne(id, body);
  }
}
