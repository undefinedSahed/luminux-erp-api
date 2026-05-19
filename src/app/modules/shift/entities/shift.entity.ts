import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, OneToMany } from 'typeorm';
import { StaffShift } from '../staff-shift/entities/staff-shift.entity';

@Entity(ENUM_TABLE_NAMES.SHIFTS, { orderBy: { createdAt: 'DESC' } })
export class Shift extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  startTime?: string; // e.g. "08:00"

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  endTime?: string; // e.g. "16:00"

  @OneToMany(() => StaffShift, (ss) => ss.shift)
  staffShifts?: StaffShift[];
}