import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Designation
import { DesignationInternalController } from './designation/controllers/internal/designation.internal.controller';
import { Designation } from './designation/entities/designation.entity';
import { DesignationService } from './designation/services/designation.service';

// Staff
import { StaffInternalController } from './controllers/internal/staff.internal.controller';
import { StaffWebController } from './controllers/web/staff.web.controller';
import { Staff } from './entities/staff.entity';
import { StaffService } from './services/staff.service';
import { DesignationWebController } from './designation/controllers/web/designation.web.controller';

const entities = [Designation, Staff];

const services = [DesignationService, StaffService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  DesignationInternalController,
  StaffInternalController,
];

const webControllers = [
  DesignationWebController,
  StaffWebController,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class StaffModule { }