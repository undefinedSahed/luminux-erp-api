import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Unit } from '../../unit/entities/unit.entity';

@Entity(ENUM_TABLE_NAMES.RAW_MATERIALS, { orderBy: { createdAt: 'DESC' } })
export class RawMaterial extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['title', 'description'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  title?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  quantity?: number;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  unitPrice?: number;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false, default: 0 })
  totalPrice?: number;

  @ManyToOne(() => Unit, { onDelete: 'RESTRICT' })
  @Type(() => Unit)
  unit?: Unit;

  @RelationId((e: RawMaterial) => e.unit)
  @Column({ nullable: false })
  unitId?: string;
}
