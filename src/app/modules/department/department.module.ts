import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from '../asset/entities/asset.entity';

// Department
import { DepartmentAssetInternalController } from '../department-asset/controllers/internal/dept-asset.internal.controller';
import { DepartmentAssetWebController } from '../department-asset/controllers/web/dept-asset.web.controller';
import { DepartmentAsset } from '../department-asset/entities/dept-asset.entity';
import { DepartmentAssetService } from '../department-asset/services/dept-asset.service';
import { DepartmentInternalController } from './controllers/internal/department.internal.controller';
import { Department } from './entities/department.entity';
import { DepartmentService } from './services/department.service';

// Department Asset


const entities = [Department, DepartmentAsset, Asset]; // <-- Asset added here

const services = [DepartmentService, DepartmentAssetService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  DepartmentInternalController,
  DepartmentAssetInternalController,
];

const webControllers = [

  DepartmentAssetWebController,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class DepartmentModule { }