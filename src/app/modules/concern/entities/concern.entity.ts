import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, OneToMany } from 'typeorm';
import { Department } from '../../department/entities/department.entity';

@Entity(ENUM_TABLE_NAMES.CONCERNS, { orderBy: { createdAt: 'DESC' } })
export class Concern extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name', 'short_name', 'email'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  slug?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  email?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  phone?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  address?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  website?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  logo?: string;

  @OneToMany(() => Department, (department) => department.concerns)
  departments?: Department[];

  // @OneToMany(() => Shift, (shift) => shift.concern)
  // shifts?: Shift[];
}