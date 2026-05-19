import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@src/app/decorators/publicRoute.decorator';
import { InquiryCreateDTO } from '../../dtos/create.dto';
import { Inquiry } from '../../entities/inquiry.entity';
import { InquiryService } from '../../services/inquiry.service';

@ApiTags('Inquiry')
@ApiBearerAuth()
@Controller('web/inquiries')
export class InquiryWebController {
  constructor(private readonly service: InquiryService) { }

  @Public()
  @Post()
  async createOne(@Body() body: InquiryCreateDTO): Promise<Inquiry> {
    return this.service.createOne(body);
  }
}