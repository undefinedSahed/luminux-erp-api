import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateStaffDto } from '../dtos/create.dto';
import { UpdateStaffDto } from '../dtos/update.dto';
import { Staff } from '../entities/staff.entity';

@Injectable()
export class StaffService extends BaseService<Staff> {
  constructor(
    @InjectRepository(Staff)
    private readonly _repo: Repository<Staff>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateStaffDto): Promise<Staff> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateStaffDto): Promise<Staff> {
    await this._repo.update(id, payload);
    return this._repo.findOne({
      where: { id },
      relations: ['designation', 'department', 'user'],
    });
  }
}