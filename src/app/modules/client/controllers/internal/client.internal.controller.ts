import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from '@src/app/types';
import { ClientService } from '../../services/client.service';
import { Client } from '../../entities/client.entity';
import { ClientFilterDto } from '../../dtos/filter.dto';
import { CreateClientDto } from '../../dtos/create.dto';
import { UpdateClientDto } from '../../dtos/update.dto';

@ApiTags('Client')
@ApiBearerAuth()
@Controller('internal/clients')
export class ClientInternalController {
  constructor(private readonly service: ClientService) {}

  @Get()
  async findAll(@Query() query: ClientFilterDto): Promise<SuccessResponse<Client[]>> {
    return this.service.findAllBase(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Client> {
    return this.service.findByIdBase(id);
  }

  @Post()
  async createOne(@Body() body: CreateClientDto): Promise<Client> {
    return this.service.createOne(body);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateClientDto): Promise<Client> {
    return this.service.updateOne(id, body);
  }
}
