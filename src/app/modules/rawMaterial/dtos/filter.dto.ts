import { PartialType } from '@nestjs/swagger';
import { BaseFilterDTO } from '@src/app/base';

export class RawMaterialFilterDto extends PartialType(BaseFilterDTO) { }
