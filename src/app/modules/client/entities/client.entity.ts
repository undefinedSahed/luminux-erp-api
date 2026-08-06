import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity } from 'typeorm';

@Entity(ENUM_TABLE_NAMES.CLIENTS, { orderBy: { createdAt: 'DESC' } })
export class Client extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['companyName', 'contactPerson', 'email', 'phone', 'taxId'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  companyName?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: true })
  contactPerson?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 100, nullable: true })
  taxId?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 50, nullable: true })
  phone?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: true })
  email?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  billingAddress?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  shippingAddress?: string;
}
