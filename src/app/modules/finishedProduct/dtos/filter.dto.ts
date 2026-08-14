import { PartialType } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base/baseFilter.dto';

export class FinishedProductFilterDto extends PartialType(BaseFilterDTO) { }
