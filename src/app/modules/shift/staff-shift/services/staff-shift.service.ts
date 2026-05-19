import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateStaffShiftDto } from '../dtos/create.dto';
import { UpdateStaffShiftDto } from '../dtos/update.dto';
import { StaffShift } from '../entities/staff-shift.entity';

@Injectable()
export class StaffShiftService extends BaseService<StaffShift> {
  constructor(
    @InjectRepository(StaffShift)
    private readonly _repo: Repository<StaffShift>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateStaffShiftDto): Promise<StaffShift> {
    await this.validateOverlap(payload.staffId, payload.fromDate, payload.toDate);
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateStaffShiftDto): Promise<StaffShift> {
    const existing = await this._repo.findOne({ where: { id } });
    if (!existing) throw new BadRequestException('Staff shift not found');

    const fromDate = payload.fromDate ?? existing.fromDate;
    const toDate = payload.toDate ?? existing.toDate;

    await this.validateOverlap(existing.staffId, fromDate, toDate, id);

    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id }, relations: ['staff', 'shift'] });
  }

  async deleteOne(id: string): Promise<void> {
    const existing = await this._repo.findOne({ where: { id } });
    if (!existing) throw new BadRequestException('Staff shift not found');
    await this._repo.delete(id);
  }

  private async validateOverlap(
    staffId: string,
    fromDate: string,
    toDate: string,
    excludeId?: string,
  ): Promise<void> {
    const query = this._repo
      .createQueryBuilder('ss')
      .where('ss.staffId = :staffId', { staffId })
      .andWhere('ss.fromDate <= :toDate', { toDate })
      .andWhere('ss.toDate >= :fromDate', { fromDate });

    if (excludeId) {
      query.andWhere('ss.id != :excludeId', { excludeId });
    }

    const overlap = await query.getOne();

    if (overlap) {
      throw new BadRequestException(
        `Staff already has a shift assigned from ${overlap.fromDate} to ${overlap.toDate} that overlaps with the requested date range`,
      );
    }
  }
}