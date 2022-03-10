import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Currency, DepositTypes } from './deposit.models';

@Injectable()
export class DepositService {
  constructor(
    @InjectModel(Currency) private currencyRepository: typeof Currency,
    @InjectModel(DepositTypes)
    private depositTypesRepository: typeof DepositTypes,
  ) {}

  async getAllCurrency() {
    const currency_list = await this.currencyRepository.findAll();
    return currency_list;
  }
  async addCurrency(name: string) {
    const currency = await this.currencyRepository.create(name);
    return currency;
  }

  async getAllDepositTypes() {
    const types_list = await this.depositTypesRepository.findAll();
    return types_list;
  }
  async addDepositTypes(name: string) {
    const type = await this.depositTypesRepository.create(name);
    return type;
  }
}
