import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity } from 'typeorm';

@Entity(ENUM_TABLE_NAMES.API_KEYS, { orderBy: { createdAt: 'DESC' } })
export class ApiKey extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['title'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 100, nullable: false, unique: false })
  title?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 100, nullable: false, unique: true })
  key?: string;
}
