import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientInternalController } from './controllers/internal/client.internal.controller';
import { Client } from './entities/client.entity';
import { ClientService } from './services/client.service';

const entities = [Client];
const services = [ClientService];
const subscribers = [];
const controllers = [];
const internalControllers = [ClientInternalController];
const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class ClientModule {}
