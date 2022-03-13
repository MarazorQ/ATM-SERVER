import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import {
  Currency,
  DepositTypes,
  Accounts,
  DepositPlan,
} from './deposit.models';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { CreateDepositPlanDto } from './dto/crate-deposit-plan.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DepositService {
  constructor(
    @InjectModel(Currency) private currencyRepository: typeof Currency,
    @InjectModel(DepositTypes)
    private depositTypesRepository: typeof DepositTypes,
    @InjectModel(Accounts) private accountsRepository: typeof Accounts,
    @InjectModel(DepositPlan) private depositPlanRepository: typeof DepositPlan,
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

  async addAccounts(dto: CreateAccountsDto) {
    const account = await this.accountsRepository.create(dto);
    return account;
  }

  async addDepositPlan(dto: CreateDepositPlanDto) {
    const end_date = new Date(new Date().setDate(new Date().getDate() + 40));

    const dep_account = await this.accountsRepository.create({
      number: uuidv4(),
      code: 76,
      activity: 'passive',
      type: 'deposit',
      money: 0.0,
      name: dto.name,
    });
    const percent_account = await this.accountsRepository.create({
      number: uuidv4(),
      code: 76,
      activity: 'passive',
      type: 'persent',
      money: 0.0,
      name: dto.name,
    });
    const deposit_plan = await this.depositPlanRepository.create({
      client_id: dto.client_id,
      deposit_type_id: dto.deposit_type_id,
      end_date: end_date,
      amount: dto.amount,
      acc_id_percent: percent_account.id,
      acc_id_main: dep_account.id,
      close_depostin: false,
      day_count: 40,
    });

    return deposit_plan;
  }
  async getAllClientsDepositPlan(dto: { client_id: number }) {
    const plans = await this.depositPlanRepository.findAll({
      where: { client_id: dto.client_id },
    });
    for (let i = 0; i < plans.length; i++) {
      let acc_percent = await this.accountsRepository.findOne({
        where: { id: plans[i].acc_id_percent },
      });
      let acc_main = await this.accountsRepository.findOne({
        where: { id: plans[i].acc_id_main },
      });

      plans[i].acc_id_percent = acc_percent.money;
      plans[i].acc_id_main = acc_main.money;
    }
    return plans;
  }
  async endDayForDepositPlan(dto: { client_id: number }) {
    const plans = await this.depositPlanRepository.findAll({
      where: { client_id: dto.client_id },
    });
    for (let i = 0; i < plans.length; i++) {
      if (plans[i].day_count > 0 && !plans[i].close_depostin) {
        await this.depositPlanRepository.update(
          { day_count: plans[i].day_count - 1 },
          { where: { id: plans[i].id } },
        );
        const acc_percent = await this.accountsRepository.findOne({
          where: { id: plans[i].acc_id_percent },
        });
        const percent = (plans[i].amount * 0.02) / 100;
        const all_money = await this.accountsRepository.findOne({
          where: { id: 1 },
        });
        if (plans[i].day_count - 1 === 0) {
          await this.accountsRepository.update(
            { money: (plans[i].amount += acc_percent.money) },
            { where: { id: plans[i].acc_id_main } },
          );
          await this.accountsRepository.update(
            { money: 0 },
            { where: { id: acc_percent.id } },
          );
        } else {
          await this.accountsRepository.update(
            { money: (acc_percent.money += percent) },
            { where: { id: acc_percent.id } },
          );
        }
        await this.accountsRepository.update(
          { money: all_money.money - percent },
          { where: { id: 1 } },
        );
      }
    }
    return 'ok';
  }
  async closeDeposit(dto: { plan_id: number }) {
    await this.depositPlanRepository.update(
      { close_depostin: true },
      { where: { id: dto.plan_id } },
    );
    return 'ok';
  }
  async transferDeposit(dto: { plan_id: number }) {
    const plan = await this.depositPlanRepository.findOne({
      where: { id: dto.plan_id },
    });
    const acc_percent = await this.accountsRepository.findOne({
      where: { id: plan.acc_id_percent },
    });
    const acc_main = await this.accountsRepository.findOne({
      where: { id: plan.acc_id_main },
    });
    await this.accountsRepository.update(
      { money: (acc_main.money += acc_percent.money) },
      { where: { id: acc_main.id } },
    );
    await this.accountsRepository.update(
      { money: 0 },
      { where: { id: acc_percent.id } },
    );
    return 'ok';
  }
}
