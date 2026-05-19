import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from '../asset/entities/asset.entity';
import { Staff } from '../staff/entities/staff.entity';

// Department Asset
import { DepartmentAssetInternalController } from '../department-asset/controllers/internal/dept-asset.internal.controller';
import { DepartmentAssetWebController } from '../department-asset/controllers/web/dept-asset.web.controller';
import { DepartmentAsset } from '../department-asset/entities/dept-asset.entity';
import { DepartmentAssetService } from '../department-asset/services/dept-asset.service';

// Finance
import { ExpenseInternalController } from './controllers/internal/expense.internal.controller';
import { IncomeInternalController } from './controllers/internal/income.internal.controller';
import { Expense } from './entities/expense.entity';
import { Income } from './entities/income.entity';
import { ExpenseService } from './services/expense.service';
import { IncomeService } from './services/income.service';

const entities = [Income, Expense, DepartmentAsset, Asset, Staff];

const services = [IncomeService, ExpenseService, DepartmentAssetService];

const subscribers = [];

const controllers = [];

const internalControllers = [
  IncomeInternalController,
  ExpenseInternalController,
  DepartmentAssetInternalController,
];

const webControllers = [
  DepartmentAssetWebController,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...internalControllers, ...webControllers],
})
export class FinanceModule { }