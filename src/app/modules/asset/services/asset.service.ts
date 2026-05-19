import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateAssetDto } from '../dtos/create.dto';
import { UpdateAssetDto } from '../dtos/update.dto';
import { Asset } from '../entities/asset.entity';

@Injectable()
export class AssetService extends BaseService<Asset> {
  constructor(
    @InjectRepository(Asset)
    private readonly _repo: Repository<Asset>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateAssetDto): Promise<Asset> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateAssetDto): Promise<Asset> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id }, relations: ['subCategory'] });
  }
}