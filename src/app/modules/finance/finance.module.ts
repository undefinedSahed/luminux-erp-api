import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from '../asset/entities/asset.entity';

import { ExpenseInternalController } from './controllers/internal/expense.internal.controller';
import { IncomeInternalController } from './controllers/internal/income.internal.controller';
import { Expense } from './entities/expense.entity';
import { Income } from './entities/income.entity';
import { ExpenseService } from './services/expense.service';
import { IncomeService } from './services/income.service';

const entities = [Income, Expense, Asset];

const services = [IncomeService, ExpenseService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  IncomeInternalController,
  ExpenseInternalController,
];

const webControllers = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class FinanceModule { }