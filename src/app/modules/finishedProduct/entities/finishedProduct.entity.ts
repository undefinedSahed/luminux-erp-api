import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Unit } from '../../unit/entities/unit.entity';

@Entity(ENUM_TABLE_NAMES.FINISHED_PRODUCTS, { orderBy: { createdAt: 'DESC' } })
export class FinishedProduct extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['title', 'description'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  title?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  quantity?: number;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  productionCostPerUnit?: number;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  totalProductionCost?: number;

  @ManyToOne(() => Unit, { onDelete: 'RESTRICT' })
  @Type(() => Unit)
  unit?: Unit;

  @RelationId((e: FinishedProduct) => e.unit)
  @Column({ nullable: false })
  unitId?: string;
}
