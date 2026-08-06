import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawMaterialInternalController } from './controllers/internal/rawMaterial.internal.controller';
import { RawMaterial } from './entities/rawMaterial.entity';
import { RawMaterialService } from './services/rawMaterial.service';

const entities = [RawMaterial];
const services = [RawMaterialService];
const subscribers = [];
const controllers = [];
const internalControllers = [RawMaterialInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class RawMaterialModule { }
