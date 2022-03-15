import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { CreditTypes, CreditPlan } from './credit.model';
import { Accounts } from '../deposit/deposit.models';

@Module({
  controllers: [CreditController],
  providers: [CreditService],
  imports: [SequelizeModule.forFeature([CreditTypes, CreditPlan, Accounts])],
})
export class CreditModule {}
