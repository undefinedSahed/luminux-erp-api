import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { InquiryCreateDTO } from '../dtos/create.dto';
import { InquiryUpdateDTO } from '../dtos/update.dto';
import { Inquiry } from '../entities/inquiry.entity';



@Injectable()
export class InquiryService extends BaseService<Inquiry> {
  constructor(
    @InjectRepository(Inquiry)
    private readonly _repo: Repository<Inquiry>,
  ) {
    super(_repo);
  }

  async createOne(payload: InquiryCreateDTO): Promise<Inquiry> {
    const created = this._repo.create(payload);
    return this._repo.save(created);
  }

  async updateOne(id: string, payload: InquiryUpdateDTO): Promise<Inquiry> {
    await this._repo.update(id, payload);
    return this._repo.findOne({ where: { id } });
  }
}