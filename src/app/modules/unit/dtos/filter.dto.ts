import { PartialType } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base';

export class UnitFilterDTO extends PartialType(BaseFilterDTO) { }
