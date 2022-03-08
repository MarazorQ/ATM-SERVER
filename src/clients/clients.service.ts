import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  Citys,
  Disabitilitys,
  MaterialStatus,
  Сitizenship,
  Clients,
} from './clients.models';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateClientsDto } from './dto/create-clients.dto';
import { Op } from 'sequelize';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Citys) private citysRepository: typeof Citys,
    @InjectModel(Disabitilitys) private disabitilitys: typeof Disabitilitys,
    @InjectModel(MaterialStatus) private materialStatus: typeof MaterialStatus,
    @InjectModel(Сitizenship) private citizenship: typeof Сitizenship,
    @InjectModel(Clients) private clients: typeof Clients,
  ) {}

  async addClient(dto: CreateClientsDto) {
    const check_client = await this.clients.findOne({
      where: {
        [Op.or]: [
          { passport_id: dto.passport_id },
          { inspirational_passport_number: dto.inspirational_passport_number },
          { mobile_phone: dto.mobile_phone },
          { email: dto.email },
        ],
      },
    });

    if (check_client) {
      throw new HttpException(
        'Клиент с такими данными уже существует!',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const client = await this.clients.create(dto);
      return client;
    } catch (e) {
      console.log('EEEE', e);
    }
  }
  async getAllClient() {
    const client = await this.clients.findAll();
    return client;
  }
  async deleteClientById(dto: { id: number }) {
    const client = await this.clients.destroy({
      where: {
        id: dto.id,
      },
    });
    return client;
  }

  async addCity(dto: CreateCityDto) {
    const city = await this.citysRepository.create(dto);
    return city;
  }
  async getAllCity() {
    const citys = await this.citysRepository.findAll();
    return citys;
  }

  async addDisability(dto: CreateCityDto) {
    const disability = await this.disabitilitys.create(dto);
    return disability;
  }
  async getAllDisability() {
    const disability = await this.disabitilitys.findAll();
    return disability;
  }

  async addMaterialStatus(dto: CreateCityDto) {
    const material_status = await this.materialStatus.create(dto);
    return material_status;
  }
  async getAllMaterialStatus() {
    const disability = await this.materialStatus.findAll();
    return disability;
  }

  async addCitizenship(dto: CreateCityDto) {
    const citizenships = await this.citizenship.create(dto);
    return citizenships;
  }
  async getAllCitizenship() {
    const citizenships = await this.citizenship.findAll();
    return citizenships;
  }
}
