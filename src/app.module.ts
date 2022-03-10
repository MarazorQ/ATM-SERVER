import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import {
  Citys,
  Disabitilitys,
  MaterialStatus,
  Сitizenship,
  Clients,
} from './clients/clients.models';
import { Currency, DepositTypes } from './deposit/deposit.models';
import { DepositModule } from './deposit/deposit.module';

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
        Сitizenship,
        Clients,
        Currency,
        DepositTypes,
      ],
    }),
    ClientsModule,
    DepositModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
