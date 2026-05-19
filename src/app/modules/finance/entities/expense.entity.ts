import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Staff } from '../../staff/entities/staff.entity';

@Entity(ENUM_TABLE_NAMES.EXPENSES, { orderBy: { createdAt: 'DESC' } })
export class Expense extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['purpose', 'description'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  purpose?: string;

  @Column({ type: ENUM_COLUMN_TYPES.FLOAT, nullable: false })
  amount?: number;

  @Column({ type: ENUM_COLUMN_TYPES.DATE, nullable: true })
  expenseDate?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  category?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  paymentMethod?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  vendor?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  reference?: string;

  @Column({ type: ENUM_COLUMN_TYPES.BOOLEAN, default: true })
  isActive?: boolean;

  @ManyToOne(() => Staff, { onDelete: 'SET NULL' })
  @Type(() => Staff)
  approvedBy?: Staff;

  @RelationId((e: Expense) => e.approvedBy)
  @Column({ nullable: true })
  approvedById?: string;

  @ManyToOne(() => Staff, { onDelete: 'SET NULL' })
  @Type(() => Staff)
  recordedBy?: Staff;

  @RelationId((e: Expense) => e.recordedBy)
  @Column({ nullable: true })
  recordedById?: string;
}
