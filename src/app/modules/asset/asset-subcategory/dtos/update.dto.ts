import { PartialType } from '@nestjs/swagger';
import { CreateAssetSubCategoryDto } from './create.dto';

export class UpdateAssetSubCategoryDto extends PartialType(CreateAssetSubCategoryDto) { }