import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentAssetInternalController } from './controllers/internal/dept-asset.internal.controller';
import { DepartmentAsset } from './entities/dept-asset.entity';
import { DepartmentAssetService } from './services/dept-asset.service';

const entities = [DepartmentAsset];
const services = [DepartmentAssetService];
const subscribers = [];
const controllers = [];
const internalControllers = [DepartmentAssetInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class DepartmentAssetModule { }
