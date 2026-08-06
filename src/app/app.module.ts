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
import { ClientModule } from './modules/client/client.module';
import { ConcernModule } from './modules/concern/concern.module';
import { FinanceModule } from './modules/finance/finance.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { RawMaterialModule } from './modules/rawMaterial/rawMaterial.module';
import { UnitModule } from './modules/unit/unit.module';
import { UserModule } from './modules/user/user.module';
import { UniqueValidatorPipe } from './pipes/uniqueValidator.pipe';

const MODULES = [
  DatabaseModule,
  HelpersModule,
  ScheduleModule.forRoot(),
  RedisModule,
  AuthModule,
  AclModule,
  UserModule,
  GalleryModule,
  ConcernModule,
  AssetModule,
  ClientModule,
  FinanceModule,
  UnitModule,
  RawMaterialModule,
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
