import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import {
  Citys,
  Client,
  Disabitilitys,
  MaterialStatus,
  Сitizenship,
} from './clients/clients.models';

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
      models: [Citys, Client, Disabitilitys, MaterialStatus, Сitizenship],
    }),
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}