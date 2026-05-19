import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Shift
import { ShiftInternalController } from './controllers/internal/shift.internal.controller';
import { ShiftWebController } from './controllers/web/shift.web.controller';
import { Shift } from './entities/shift.entity';
import { ShiftService } from './services/shift.service';

// Staff Shift
import { StaffShiftInternalController } from './staff-shift/controllers/internal/staff-shift.internal.controller';
import { StaffShiftWebController } from './staff-shift/controllers/web/staff-shift.web.controller';
import { StaffShift } from './staff-shift/entities/staff-shift.entity';
import { StaffShiftService } from './staff-shift/services/staff-shift.service';

const entities = [Shift, StaffShift];

const services = [ShiftService, StaffShiftService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  ShiftInternalController,
  StaffShiftInternalController,
];

const webControllers = [
  ShiftWebController,
  StaffShiftWebController,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class ShiftModule { }