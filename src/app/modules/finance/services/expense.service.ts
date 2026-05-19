import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { Expense } from '../entities/expense.entity';

@Injectable()
export class ExpenseService extends BaseService<Expense> {
  constructor(
    @InjectRepository(Expense)
    private readonly _repo: Repository<Expense>,
  ) {
    super(_repo);
  }
}
