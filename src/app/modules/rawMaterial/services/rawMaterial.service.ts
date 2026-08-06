import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateRawMaterialDto } from '../dtos/create.dto';
import { UpdateRawMaterialDto } from '../dtos/update.dto';
import { RawMaterial } from '../entities/rawMaterial.entity';

@Injectable()
export class RawMaterialService extends BaseService<RawMaterial> {
  constructor(
    @InjectRepository(RawMaterial)
    private readonly _repo: Repository<RawMaterial>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateRawMaterialDto): Promise<RawMaterial> {
    const created = this._repo.create(this.preparePayload(payload));
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateRawMaterialDto): Promise<RawMaterial> {
    const preparedPayload = this.preparePayload(payload);
    await this._repo.update(id, preparedPayload);
    return this._repo.findOne({ where: { id }, relations: ['unit'] });
  }

  private preparePayload(payload: CreateRawMaterialDto | UpdateRawMaterialDto): Partial<RawMaterial> {
    const normalizedPayload: Partial<RawMaterial> = { ...payload } as Partial<RawMaterial>;

    if (normalizedPayload.unitPrice !== undefined && normalizedPayload.quantity !== undefined) {
      normalizedPayload.totalPrice = Number(normalizedPayload.unitPrice) * Number(normalizedPayload.quantity);
    }

    return normalizedPayload;
  }
}
