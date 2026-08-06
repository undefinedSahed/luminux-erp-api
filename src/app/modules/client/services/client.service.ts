import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateClientDto } from '../dtos/create.dto';
import { UpdateClientDto } from '../dtos/update.dto';
import { Client } from '../entities/client.entity';

@Injectable()
export class ClientService extends BaseService<Client> {
  constructor(
    @InjectRepository(Client)
    private readonly _repo: Repository<Client>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateClientDto): Promise<Client> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateClientDto): Promise<Client> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}
