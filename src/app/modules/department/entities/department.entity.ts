import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { Concern } from '../../concern/entities/concern.entity';
import { DepartmentAsset } from '../../department-asset/entities/dept-asset.entity';
import { Staff } from '../../staff/entities/staff.entity';
import { Type } from 'class-transformer';

@Entity(ENUM_TABLE_NAMES.DEPARTMENTS, { orderBy: { createdAt: 'DESC' } })
export class Department extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  slug?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @ManyToMany(() => Concern, { eager: false, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'department_concerns',
    joinColumn: { name: 'department_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'concern_id', referencedColumnName: 'id' },
  })
  concerns?: Concern[];

  @OneToMany(() => DepartmentAsset, (da) => da.department)
  departmentAssets?: DepartmentAsset[];

  @ManyToOne(() => Staff, { onDelete: 'SET NULL' })
  @Type(() => Staff)
  head?: Staff;

  @RelationId((e: Department) => e.head)
  @Column({ nullable: true })
  headId?: string;

  @OneToMany(() => Staff, (staff) => staff.department)
  staff?: Staff[];
}