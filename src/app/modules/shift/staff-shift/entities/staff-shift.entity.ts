import { BaseEntity } from '@src/app/base';
import { Staff } from '@src/app/modules/staff/entities/staff.entity';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Shift } from '../../entities/shift.entity';

@Entity(ENUM_TABLE_NAMES.STAFF_SHIFTS, { orderBy: { createdAt: 'DESC' } })
export class StaffShift extends BaseEntity {
  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  fromDate?: string; // e.g. "2025-06-01"

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  toDate?: string; // e.g. "2025-06-30"

  @ManyToOne(() => Staff, { onDelete: 'CASCADE' })
  @Type(() => Staff)
  staff?: Staff;

  @RelationId((e: StaffShift) => e.staff)
  @Column({ nullable: false })
  staffId?: string;

  @ManyToOne(() => Shift, { onDelete: 'CASCADE' })
  @Type(() => Shift)
  shift?: Shift;

  @RelationId((e: StaffShift) => e.shift)
  @Column({ nullable: false })
  shiftId?: string;
}