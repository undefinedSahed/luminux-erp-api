import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Asset Category

import { AssetCategory } from './asset-category/entities/asset-category.entity';
import { AssetCategoryService } from './asset-category/services/asset-category.service';

// Asset Sub Category


// Asset
import { AssetInternalController } from './controllers/internal/asset.internal.controller';
import { AssetWebController } from './controllers/web/asset.web.controller';
import { Asset } from './entities/asset.entity';
import { AssetService } from './services/asset.service';
import { AssetSubCategory } from './asset-subcategory/entities/subcategory.entity';
import { AssetSubCategoryService } from './asset-subcategory/services/subcategory.service';
import { AssetSubCategoryInternalController } from './asset-subcategory/controllers/internal/subcategory.internal.controller';
import { AssetSubCategoryWebController } from './asset-subcategory/controllers/web/subcategory.web.controller';
import { AssetCategoryInternalController } from './asset-category/controllers/internal/category.internal.controller';
import { AssetCategoryWebController } from './asset-category/controllers/web/category.web.controller';

const entities = [AssetCategory, AssetSubCategory, Asset];

const services = [AssetCategoryService, AssetSubCategoryService, AssetService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  AssetCategoryInternalController,
  AssetSubCategoryInternalController,
  AssetInternalController,
];

const webControllers = [
  AssetCategoryWebController,
  AssetSubCategoryWebController,
  AssetWebController,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class AssetModule { }