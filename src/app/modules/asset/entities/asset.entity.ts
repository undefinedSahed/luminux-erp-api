import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { ENUM_ASSET_STATUS } from '../const';
import { AssetSubCategory } from '../asset-subcategory/entities/subcategory.entity';
import { DepartmentAsset } from '../../department-asset/entities/dept-asset.entity';

@Entity(ENUM_TABLE_NAMES.ASSETS, { orderBy: { createdAt: 'DESC' } })
export class Asset extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  description?: string;

  @Column({ type: ENUM_COLUMN_TYPES.INT, nullable: false, default: 1 })
  quantity?: number;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false, default: ENUM_ASSET_STATUS.AVAILABLE })
  status?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  purchaseDate?: string;

  @Column({ type: ENUM_COLUMN_TYPES.INT, nullable: true })
  purchasePrice?: number;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  warrantyExpiry?: string;

  @ManyToOne(() => AssetSubCategory, { onDelete: 'CASCADE' })
  @Type(() => AssetSubCategory)
  subCategory?: AssetSubCategory;

  @RelationId((e: Asset) => e.subCategory)
  @Column({ nullable: false })
  subCategoryId?: string;

  @OneToMany(() => DepartmentAsset, (da) => da.asset)
  departmentAssets?: DepartmentAsset[];
}