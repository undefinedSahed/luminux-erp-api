import { PartialType } from '@nestjs/swagger';
import { CreateFinishedProductDto } from './create.dto';

export class UpdateFinishedProductDto extends PartialType(CreateFinishedProductDto) { }
