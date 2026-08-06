import { PartialType } from '@nestjs/swagger';
import { CreateRawMaterialDto } from './create.dto';

export class UpdateRawMaterialDto extends PartialType(CreateRawMaterialDto) { }
