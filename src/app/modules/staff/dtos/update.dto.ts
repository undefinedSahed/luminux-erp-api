import { PartialType } from '@nestjs/swagger';
import { CreateStaffDto } from './create.dto';

export class UpdateStaffDto extends PartialType(CreateStaffDto) { }