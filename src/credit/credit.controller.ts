import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreateCreditPlanDto } from './dto/crate-credit-plan.dto';

@Controller('credit')
export class CreditController {
  constructor(private creditService: CreditService) {}

  @Post('types')
  addDepositTypes(@Body() name: string) {
    return this.creditService.addCreditTypes(name);
  }
  @Get('types')
  getAllCreditTypes() {
    return this.creditService.getAllCreditTypes();
  }

  @Post('plan')
  addCreditPlan(@Body() dto: CreateCreditPlanDto) {
    return this.creditService.addCreditPlan(dto);
  }
  @Post('plansById')
  getAllClientsDepositPlan(@Body() dto: { client_id: number }) {
    return this.creditService.getAllClientsCreditPlan(dto);
  }
  @Post('endDay')
  endDayForCreditPlan(@Body() dto: { client_id: number }) {
    return this.creditService.endDayForCreditPlan(dto);
  }
  @Post('pay')
  payForCreditPlan(@Body() dto: { plan_id: number; amount: number }) {
    return this.creditService.payForCreditPlan(dto);
  }
  @Post('close')
  closeCreditPlan(@Body() dto: { plan_id: number }) {
    return this.creditService.closeCredit(dto);
  }
}
