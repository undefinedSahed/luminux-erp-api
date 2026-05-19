import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateDesignationDto } from '../dtos/create.dto';
import { UpdateDesignationDto } from '../dtos/update.dto';
import { Designation } from '../entities/designation.entity';

@Injectable()
export class DesignationService extends BaseService<Designation> {
  constructor(
    @InjectRepository(Designation)
    private readonly _repo: Repository<Designation>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateDesignationDto): Promise<Designation> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateDesignationDto): Promise<Designation> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}