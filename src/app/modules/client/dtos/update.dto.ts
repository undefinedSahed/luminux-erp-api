import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
