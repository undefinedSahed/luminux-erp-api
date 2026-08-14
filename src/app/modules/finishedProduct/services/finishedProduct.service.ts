import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { CreateFinishedProductDto } from '../dtos/create.dto';
import { FinishedProduct } from '../entities/finishedProduct.entity';
import { UpdateFinishedProductDto } from '../dtos/update.dto';

@Injectable()
export class FinishedProductService extends BaseService<FinishedProduct> {
  constructor(
    @InjectRepository(FinishedProduct)
    private readonly _repo: Repository<FinishedProduct>,
  ) {
    super(_repo);
  }

  async createOne(payload: CreateFinishedProductDto): Promise<FinishedProduct> {
    const created = this._repo.create(this.preparePayload(payload));
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: UpdateFinishedProductDto): Promise<FinishedProduct> {
    const preparedPayload = this.preparePayload(payload);
    await this._repo.update(id, preparedPayload);
    return this._repo.findOne({ where: { id }, relations: ['unit'] });
  }

  private preparePayload(payload: CreateFinishedProductDto | UpdateFinishedProductDto): Partial<FinishedProduct> {
    const normalizedPayload: Partial<FinishedProduct> = { ...payload } as Partial<FinishedProduct>;

    if (
      normalizedPayload.productionCostPerUnit !== undefined &&
      normalizedPayload.quantity !== undefined
    ) {
      normalizedPayload.totalProductionCost =
        Number(normalizedPayload.productionCostPerUnit) * Number(normalizedPayload.quantity);
    }

    return normalizedPayload;
  }
}
