import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { CreditTypes, CreditPlan } from './credit.model';
import { Accounts } from '../deposit/deposit.models';
import { CreateCreditPlanDto } from './dto/crate-credit-plan.dto';
import { isDolzen } from './helper';

@Injectable()
export class CreditService {
  constructor(
    @InjectModel(CreditTypes) private creditTypesRepository: typeof CreditTypes,
    @InjectModel(CreditPlan) private creditPlanRepository: typeof CreditPlan,
    @InjectModel(Accounts) private accountsRepository: typeof Accounts,
  ) {}

  async addCreditTypes(name: string) {
    const type = await this.creditTypesRepository.create(name);
    return type;
  }
  async getAllCreditTypes() {
    const types = await this.creditTypesRepository.findAll();
    return types;
  }

  async addCreditPlan(dto: CreateCreditPlanDto) {
    const end_date = new Date(new Date().setDate(new Date().getDate() + 365));

    const payment_account = await this.accountsRepository.create({
      number: uuidv4(),
      code: 76,
      activity: 'passive',
      type: 'payment',
      money: 0.0,
      name: dto.name,
    });
    const credit_account = await this.accountsRepository.create({
      number: uuidv4(),
      code: 76,
      activity: 'passive',
      type: 'credit',
      money: dto.amount,
      name: dto.name,
    });
    const all_money = await this.accountsRepository.findOne({
      where: { id: 1 },
    });
    await this.accountsRepository.update(
      { money: all_money.money - dto.amount },
      { where: { id: 1 } },
    );
    const credit_plan = await this.creditPlanRepository.create({
      client_id: dto.client_id,
      credit_type_id: dto.credit_type_id,
      end_date: end_date,
      amount: dto.amount,
      acc_id_repay: payment_account.id,
      acc_id_main: credit_account.id,
      close_credit: false,
      payed: 0,
      day_count: 365,
    });

    return credit_plan;
  }
  async getAllClientsCreditPlan(dto: { client_id: number }) {
    const plans = await this.creditPlanRepository.findAll({
      where: { client_id: dto.client_id, close_credit: false },
    });
    for (let i = 0; i < plans.length; i++) {
      let acc_repay = await this.accountsRepository.findOne({
        where: { id: plans[i].acc_id_repay },
      });
      let acc_main = await this.accountsRepository.findOne({
        where: { id: plans[i].acc_id_main },
      });

      plans[i].acc_id_repay = acc_repay.money;
      plans[i].acc_id_main = acc_main.money;
      plans[i].day_count = isDolzen(
        365,
        plans[i].amount,
        plans[i].acc_id_repay,
        plans[i].day_count,
      );
    }
    return plans;
  }
  async endDayForCreditPlan(dto: { client_id: number }) {
    const plans = await this.creditPlanRepository.findAll({
      where: { client_id: dto.client_id },
    });
    for (let i = 0; i < plans.length; i++) {
      if (plans[i].day_count > 0 && !plans[i].close_credit) {
        await this.creditPlanRepository.update(
          { day_count: plans[i].day_count - 1 },
          { where: { id: plans[i].id } },
        );
      }
    }
    return 'ok';
  }
  async payForCreditPlan(dto: { plan_id: number; amount: number }) {
    const plan = await this.creditPlanRepository.findOne({
      where: { id: dto.plan_id },
    });
    const acc_repay = await this.accountsRepository.findOne({
      where: { id: plan.acc_id_repay },
    });
    await this.accountsRepository.update(
      { money: (acc_repay.money += dto.amount) },
      { where: { id: acc_repay.id } },
    );
    return 'ok';
  }
  async closeCredit(dto: { plan_id: number }) {
    await this.creditPlanRepository.update(
      { close_credit: true },
      { where: { id: dto.plan_id } },
    );
    return 'ok';
  }
}
