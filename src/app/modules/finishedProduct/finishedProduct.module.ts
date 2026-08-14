import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinishedProductInternalController } from './controllers/internal/finishedProduct.internal.controller';
import { FinishedProduct } from './entities/finishedProduct.entity';
import { FinishedProductService } from './services/finishedProduct.service';

const entities = [FinishedProduct];
const services = [FinishedProductService];
const subscribers = [];
const controllers = [];
const internalControllers = [FinishedProductInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class FinishedProductModule { }
