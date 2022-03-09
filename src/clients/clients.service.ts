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
          {
            inspirational_passport_number: dto.inspirational_passport_number,
          },
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

    const client = await this.clients.create(dto);
    return client;
  }
  async updateClientInfo(dto: CreateClientsDto) {
    const client = await this.clients.findOne({ where: { id: dto.id } });

    if (client?.passport_id !== dto.passport_id) {
      const check_client = await this.clients.findOne({
        where: {
          passport_id: dto.passport_id,
        },
      });
      if (check_client) {
        throw new HttpException(
          'Клиент с такими данными уже существует!',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (
      client?.inspirational_passport_number !==
      dto.inspirational_passport_number
    ) {
      const check_client = await this.clients.findOne({
        where: {
          inspirational_passport_number: dto.inspirational_passport_number,
        },
      });
      if (check_client) {
        throw new HttpException(
          'Клиент с такими данными уже существует!',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (client?.mobile_phone !== dto.mobile_phone) {
      const check_client = await this.clients.findOne({
        where: {
          mobile_phone: dto.mobile_phone,
        },
      });
      if (check_client) {
        throw new HttpException(
          'Клиент с такими данными уже существует!',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (client?.email !== dto.email) {
      const check_client = await this.clients.findOne({
        where: {
          email: dto.email,
        },
      });
      if (check_client) {
        throw new HttpException(
          'Клиент с такими данными уже существует!',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    const updated_client = await this.clients.update(
      { ...dto },
      { where: { id: dto.id } },
    );
    return updated_client;
  }
  async getAllClient() {
    const client = await this.clients.findAll();
    return client;
  }
  async getClientById(dto: { id: number }) {
    const client = await this.clients.findOne({ where: { id: dto.id } });
    return client;
  }
  async deleteClientById(dto: { id: number }) {
    const client = await this.clients.destroy({
      where: {
        id: dto.id,
      },
    });
    const client_list = await this.clients.findAll();

    return client_list;
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
