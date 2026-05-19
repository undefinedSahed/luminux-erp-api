import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, OneToMany } from 'typeorm';
import { AssetSubCategory } from '../../asset-subcategory/entities/subcategory.entity';

@Entity(ENUM_TABLE_NAMES.ASSET_CATEGORIES, { orderBy: { createdAt: 'DESC' } })
export class AssetCategory extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  slug?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @OneToMany(() => AssetSubCategory, (sub) => sub.category)
  subCategories?: AssetSubCategory[];
}