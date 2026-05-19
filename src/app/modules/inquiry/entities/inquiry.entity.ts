import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity } from 'typeorm';
import { ENUM_CONTACT_QUERY_STATUS } from '../const';

@Entity(ENUM_TABLE_NAMES.INQUIRIES, { orderBy: { createdAt: 'DESC' } })
export class Inquiry extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name', 'email', 'phone'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  email?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  phone?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  role?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  serviceName?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  budget?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false })
  source?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  purpose?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  message?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false, default: ENUM_CONTACT_QUERY_STATUS.PENDING })
  status?: string;
}