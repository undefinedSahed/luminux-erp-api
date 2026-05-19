import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, OneToMany } from 'typeorm';
import { Staff } from '../../entities/staff.entity';

@Entity(ENUM_TABLE_NAMES.DESIGNATIONS, { orderBy: { createdAt: 'DESC' } })
export class Designation extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @OneToMany(() => Staff, (staff) => staff.designation)
  staff?: Staff[];
}