import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { Asset } from '../../asset/entities/asset.entity';
import { CreateDepartmentAssetDto } from '../dtos/create.dto';
import { UpdateDepartmentAssetDto } from '../dtos/update.dto';
import { DepartmentAsset } from '../entities/dept-asset.entity';

@Injectable()
export class DepartmentAssetService extends BaseService<DepartmentAsset> {
  constructor(
    @InjectRepository(DepartmentAsset)
    private readonly _repo: Repository<DepartmentAsset>,

    @InjectRepository(Asset)
    private readonly _assetRepo: Repository<Asset>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateDepartmentAssetDto): Promise<DepartmentAsset> {
    const existing = await this._repo.findOne({
      where: { assetId: payload.assetId, departmentId: payload.departmentId },
    });
    if (existing) throw new BadRequestException('Asset is already assigned to this department');

    await this.validateQuantity(payload.assetId, payload.quantity);

    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(assetId: string, payload: UpdateDepartmentAssetDto): Promise<DepartmentAsset> {
    await this.isExist({ id: assetId });
    await this.validateQuantity(assetId, payload.quantity, assetId);
    return this.updateOneBase(assetId, payload, { relations: { asset: true, department: true } });
  }

  private async validateQuantity(assetId: string, requestedQuantity: number, excludeDepartmentAssetId?: string): Promise<void> {
    const asset = await this._assetRepo.findOne({ where: { id: assetId } });
    if (!asset) throw new BadRequestException('Asset not found');

    const assignedResult = await this._repo
      .createQueryBuilder('da')
      .select('SUM(da.quantity)', 'total')
      .where('da.assetId = :assetId', { assetId })
      .andWhere(excludeDepartmentAssetId ? 'da.id != :excludeId' : '1=1', { excludeId: excludeDepartmentAssetId })
      .getRawOne();

    const totalAssigned = Number(assignedResult?.total || 0);
    const available = asset.quantity - totalAssigned;

    if (requestedQuantity > available) {
      throw new BadRequestException(
        `Only ${available} unit(s) available for this asset. Requested: ${requestedQuantity}`,
      );
    }
  }
}