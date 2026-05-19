import { PartialType } from '@nestjs/swagger';
import { CreateAssetCategoryDto } from './create.dto';

export class UpdateAssetCategoryDto extends PartialType(CreateAssetCategoryDto) { }