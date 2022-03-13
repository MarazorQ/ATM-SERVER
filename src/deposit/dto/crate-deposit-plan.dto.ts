export class CreateDepositPlanDto {
  readonly deposit_type_id: number;
  readonly client_id: number;
  readonly amount: number;
  readonly name: string;
}
