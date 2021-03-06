export class CreateClientsDto {
  id?: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly third_name: string;
  readonly date_born: string;
  readonly sex: string;
  readonly passport_series: string;
  readonly passport_id: string;
  readonly who_issued_the_passport: string;
  readonly date_of_issue_of_the_passport: string;
  readonly inspirational_passport_number: string;
  readonly place_of_birth: string;
  readonly city_of_residence: number;
  readonly residential_address: string;
  readonly mobile_phone: string;
  readonly home_phone: string;
  readonly email: string;
  readonly work_place: string;
  readonly position: string;
  readonly place_of_registration: number;
  readonly address_of_residence: string;
  readonly marital_status: number;
  readonly citizenship: number;
  readonly disability: number;
  readonly retiree: number;
  readonly salary: number;
  readonly liable_for_military_service: string;
}
