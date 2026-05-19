import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from '@src/database/database.module';
import { ExceptionFilter } from './filters';
import { HelpersModule } from './helpers/helpers.module';
import { GlobalRequestInterceptor, ResponseInterceptor } from './interceptors';
import { RedisModule } from './modules/@redis/redis.module';
import { AclModule } from './modules/acl/acl.module';
import { AssetModule } from './modules/asset/asset.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guards/local-auth.guard';
import { ConcernModule } from './modules/concern/concern.module';
import { DepartmentModule } from './modules/department/department.module';
import { FinanceModule } from './modules/finance/finance.module';
import { FormModule } from './modules/form/form.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { InquiryModule } from './modules/inquiry/inquiry.module';
import { NoteModule } from './modules/note/note.module';
import { NotificationModule } from './modules/notification/notification.module';
import { ShiftModule } from './modules/shift/shift.module';
import { StaffModule } from './modules/staff/staff.module';
import { SupportModule } from './modules/support/support.module';
import { UserModule } from './modules/user/user.module';
import { UniqueValidatorPipe } from './pipes/uniqueValidator.pipe';

const MODULES = [
  DatabaseModule,
  HelpersModule,
  ScheduleModule.forRoot(),
  AuthModule,
  RedisModule,
  GalleryModule,
  AclModule,
  UserModule,
  NotificationModule,
  FormModule,
  SupportModule,
  NoteModule,
  ConcernModule,
  DepartmentModule,
  AssetModule,
  InquiryModule,
  FinanceModule,
  StaffModule,
  ShiftModule
];
const PIPES = [UniqueValidatorPipe];

@Module({
  imports: [...MODULES],
  controllers: [],
  providers: [
    ...PIPES,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalRequestInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule { }
