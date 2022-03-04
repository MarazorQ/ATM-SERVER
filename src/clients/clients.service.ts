import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  Citys,
  Disabitilitys,
  MaterialStatus,
  Сitizenship,
} from './clients.models';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Citys) private citysRepository: typeof Citys,
    @InjectModel(Disabitilitys) private disabitilitys: typeof Disabitilitys,
    @InjectModel(MaterialStatus) private materialStatus: typeof MaterialStatus,
    @InjectModel(Сitizenship) private citizenship: typeof Сitizenship,
  ) {}

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
