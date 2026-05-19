import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Asset } from '../../asset/entities/asset.entity';
import { Department } from '../../department/entities/department.entity';

@Entity(ENUM_TABLE_NAMES.DEPARTMENT_ASSETS, { orderBy: { createdAt: 'DESC' } })
export class DepartmentAsset extends BaseEntity {
  @Column({ type: ENUM_COLUMN_TYPES.INT, nullable: false, default: 1 })
  quantity?: number;

  @ManyToOne(() => Department, { onDelete: 'CASCADE' })
  @Type(() => Department)
  department?: Department;

  @RelationId((e: DepartmentAsset) => e.department)
  @Column({ nullable: false })
  departmentId?: string;

  @ManyToOne(() => Asset, { onDelete: 'CASCADE' })
  @Type(() => Asset)
  asset?: Asset;

  @RelationId((e: DepartmentAsset) => e.asset)
  @Column({ nullable: false })
  assetId?: string;
}