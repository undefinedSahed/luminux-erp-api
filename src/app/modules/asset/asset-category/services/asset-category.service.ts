import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateAssetCategoryDto } from '../dtos/create.dto';
import { UpdateAssetCategoryDto } from '../dtos/update.dto';
import { AssetCategory } from '../entities/asset-category.entity';

@Injectable()
export class AssetCategoryService extends BaseService<AssetCategory> {
  constructor(
    @InjectRepository(AssetCategory)
    private readonly _repo: Repository<AssetCategory>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateAssetCategoryDto): Promise<AssetCategory> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateAssetCategoryDto): Promise<AssetCategory> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}