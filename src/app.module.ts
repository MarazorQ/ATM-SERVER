import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import {
  Citys,
  Disabitilitys,
  MaterialStatus,
  –°itizenship,
  Clients,
} from './clients/clients.models';
import {
  Currency,
  DepositTypes,
  Accounts,
  DepositPlan,
} from './deposit/deposit.models';
import { CreditTypes, CreditPlan } from './credit/credit.model';
import { DepositModule } from './deposit/deposit.module';
import { CreditModule } from './credit/credit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Citys,
        Disabitilitys,
        MaterialStatus,
        –°itizenship,
        Clients,
        Currency,
        DepositTypes,
        Accounts,
        DepositPlan,
        CreditTypes,
        CreditPlan,
      ],
    }),
    ClientsModule,
    DepositModule,
    CreditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
