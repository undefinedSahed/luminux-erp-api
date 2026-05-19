import { PartialType } from '@nestjs/swagger';
import { CreateAssetDto } from './create.dto';

export class UpdateAssetDto extends PartialType(CreateAssetDto) { }