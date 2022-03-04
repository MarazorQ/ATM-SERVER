import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  Client,
  Citys,
  Disabitilitys,
  MaterialStatus,
  Сitizenship,
} from './clients.models';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([
      Client,
      Citys,
      Disabitilitys,
      MaterialStatus,
      Сitizenship,
    ]),
  ],
})
export class ClientsModule {}
