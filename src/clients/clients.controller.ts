import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateDisabilityDto } from './dto/create-disabitility.dto';
import { CreateMaterialStatusDto } from './dto/create-material-status.dto';
import { CreateCitizenshipDto } from './dto/create-citizenship.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Post('citys')
  addCity(@Body() cityDto: CreateCityDto) {
    return this.clientService.addCity(cityDto);
  }
  @Get('citys')
  getAllCity() {
    return this.clientService.getAllCity();
  }

  @Post('disabilitys')
  addDisability(@Body() disability: CreateDisabilityDto) {
    return this.clientService.addDisability(disability);
  }
  @Get('disabilitys')
  getAllDisability() {
    return this.clientService.getAllDisability();
  }

  @Post('material_status')
  addMaterialStatus(@Body() material_status: CreateMaterialStatusDto) {
    return this.clientService.addMaterialStatus(material_status);
  }
  @Get('material_status')
  getAllMaterialStatus() {
    return this.clientService.getAllMaterialStatus();
  }

  @Post('citizenship')
  addCitizenship(@Body() citizenship: CreateCitizenshipDto) {
    return this.clientService.addCitizenship(citizenship);
  }
  @Get('citizenship')
  getAllCitizenship() {
    return this.clientService.getAllCitizenship();
  }
}
