import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { Unit } from '../entities/unit.entity';
import { CreateUnitDto } from '../dtos/create.dto';
import { UpdateUnitDto } from '../dtos/update.dto';

@Injectable()
export class UnitService extends BaseService<Unit> {
  constructor(
    @InjectRepository(Unit)
    private readonly _repo: Repository<Unit>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateUnitDto): Promise<Unit> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateUnitDto): Promise<Unit> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}
