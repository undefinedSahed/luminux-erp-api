import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { Income } from '../entities/income.entity';

@Injectable()
export class IncomeService extends BaseService<Income> {
  constructor(
    @InjectRepository(Income)
    private readonly _repo: Repository<Income>,
  ) {
    super(_repo);
  }
}
