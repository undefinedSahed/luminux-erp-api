import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateAssetSubCategoryDto } from '../dtos/create.dto';
import { UpdateAssetSubCategoryDto } from '../dtos/update.dto';
import { AssetSubCategory } from '../entities/subcategory.entity';

@Injectable()
export class AssetSubCategoryService extends BaseService<AssetSubCategory> {
  constructor(
    @InjectRepository(AssetSubCategory)
    private readonly _repo: Repository<AssetSubCategory>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateAssetSubCategoryDto): Promise<AssetSubCategory> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateAssetSubCategoryDto): Promise<AssetSubCategory> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id }, relations: ['category'] });
  }
}