import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Staff } from '../../staff/entities/staff.entity';

@Entity(ENUM_TABLE_NAMES.INCOME, { orderBy: { createdAt: 'DESC' } })
export class Income extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['source', 'description'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  source?: string;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false })
  amount?: number;

  @Column({ type: ENUM_COLUMN_TYPES.DATE, nullable: true })
  incomeDate?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  category?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  paymentMethod?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  reference?: string;

  @Column({ type: ENUM_COLUMN_TYPES.BOOLEAN, default: true })
  isActive?: boolean;

  @ManyToOne(() => Staff, { onDelete: 'SET NULL' })
  @Type(() => Staff)
  recordedBy?: Staff;

  @RelationId((e: Income) => e.recordedBy)
  @Column({ nullable: true })
  recordedById?: string;
}
