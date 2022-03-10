import { Controller, Get, Post, Body } from '@nestjs/common';
import { DepositService } from './deposit.service';

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
}
