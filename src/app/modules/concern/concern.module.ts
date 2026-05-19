import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcernInternalController } from './controllers/internal/concern.internal.controller';
import { Concern } from './entities/concern.entity';
import { ConcernService } from './services/concern.service';

const entities = [Concern];
const services = [ConcernService];
const subscribers = [];
const controllers = [];
const internalControllers = [ConcernInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class ConcernModule { }
