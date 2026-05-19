import { PartialType } from '@nestjs/swagger';
import { CreateShiftDto } from './create.dto';

export class UpdateShiftDto extends PartialType(CreateShiftDto) { }