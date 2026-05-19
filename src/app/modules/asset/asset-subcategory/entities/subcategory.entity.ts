import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { AssetCategory } from '../../asset-category/entities/asset-category.entity';
import { Asset } from '../../entities/asset.entity';

@Entity(ENUM_TABLE_NAMES.ASSET_SUB_CATEGORIES, { orderBy: { createdAt: 'DESC' } })
export class AssetSubCategory extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  slug?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @ManyToOne(() => AssetCategory, { onDelete: 'CASCADE' })
  @Type(() => AssetCategory)
  category?: AssetCategory;

  @RelationId((e: AssetSubCategory) => e.category)
  @Column({ nullable: false })
  categoryId?: string;

  @OneToMany(() => Asset, (asset) => asset.subCategory)
  assets?: Asset[];
}