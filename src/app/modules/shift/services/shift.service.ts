import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateShiftDto } from '../dtos/create.dto';
import { UpdateShiftDto } from '../dtos/update.dto';
import { Shift } from '../entities/shift.entity';

@Injectable()
export class ShiftService extends BaseService<Shift> {
  constructor(
    @InjectRepository(Shift)
    private readonly _repo: Repository<Shift>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateShiftDto): Promise<Shift> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateShiftDto): Promise<Shift> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}