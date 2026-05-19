import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InquiryInternalController } from './controllers/internal/inquiry.internal.controller';
import { InquiryWebController } from './controllers/web/inquiry.web.controller';
import { Inquiry } from './entities/inquiry.entity';
import { InquiryService } from './services/inquiry.service';

const entities = [Inquiry];
const services = [InquiryService];
const subscribers = [];
const controllers = [];
const internalControllers = [InquiryInternalController];
const webControllers = [InquiryWebController];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class InquiryModule { }
