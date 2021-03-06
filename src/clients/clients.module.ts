import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  Citys,
  Disabitilitys,
  MaterialStatus,
  –°itizenship,
  Clients,
} from './clients.models';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([
      Citys,
      Disabitilitys,
      MaterialStatus,
      –°itizenship,
      Clients,
    ]),
  ],
})
export class ClientsModule {}
