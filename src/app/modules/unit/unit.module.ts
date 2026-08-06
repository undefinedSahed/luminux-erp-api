import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitInternalController } from './controllers/internal/unit.internal.controller';
import { Unit } from './entities/unit.entity';
import { UnitService } from './services/unit.service';

const entities = [Unit];
const services = [UnitService];
const subscribers = [];
const controllers = [];
const internalControllers = [UnitInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class UnitModule { }
