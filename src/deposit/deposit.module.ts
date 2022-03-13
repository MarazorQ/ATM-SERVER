import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  Currency,
  DepositTypes,
  Accounts,
  DepositPlan,
} from './deposit.models';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

@Module({
  controllers: [DepositController],
  providers: [DepositService],
  imports: [
    SequelizeModule.forFeature([Currency, DepositTypes, Accounts, DepositPlan]),
  ],
})
export class DepositModule {}
