import { PartialType } from '@nestjs/swagger';
import { CreateDesignationDto } from './create.dto';

export class UpdateDesignationDto extends PartialType(CreateDesignationDto) { }