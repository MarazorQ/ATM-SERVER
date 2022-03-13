import { Controller, Get, Post, Body } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { CreateDepositPlanDto } from './dto/crate-deposit-plan.dto';
@Controller('deposit')
export class DepositController {
  constructor(private depositService: DepositService) {}

  @Post('currency')
  addCurrency(@Body() name: string) {
    return this.depositService.addCurrency(name);
  }
  @Get('currency')
  getCurrencyList() {
    return this.depositService.getAllCurrency();
  }

  @Post('types')
  addDepositTypes(@Body() name: string) {
    return this.depositService.addDepositTypes(name);
  }
  @Get('types')
  getDepositTypesList() {
    return this.depositService.getAllDepositTypes();
  }

  @Post('account')
  addAccount(@Body() dto: CreateAccountsDto) {
    return this.depositService.addAccounts(dto);
  }

  @Post('plan')
  addDepositPlan(@Body() dto: CreateDepositPlanDto) {
    return this.depositService.addDepositPlan(dto);
  }
  @Post('plansById')
  getAllClientsDepositPlan(@Body() dto: { client_id: number }) {
    return this.depositService.getAllClientsDepositPlan(dto);
  }
  @Post('endDay')
  endDayForDepositPlan(@Body() dto: { client_id: number }) {
    return this.depositService.endDayForDepositPlan(dto);
  }
  @Post('close')
  closeDeposit(@Body() dto: { plan_id: number }) {
    return this.depositService.closeDeposit(dto);
  }
  @Post('transfer')
  transferDeposit(@Body() dto: { plan_id: number }) {
    return this.depositService.transferDeposit(dto);
  }
}
