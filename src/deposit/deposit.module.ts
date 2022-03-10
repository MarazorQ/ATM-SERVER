import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Currency, DepositTypes } from './deposit.models';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

@Module({
  controllers: [DepositController],
  providers: [DepositService],
  imports: [SequelizeModule.forFeature([Currency, DepositTypes])],
})
export class DepositModule {}
