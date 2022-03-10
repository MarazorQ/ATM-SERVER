import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CitysCreationsAttr {
  name: string;
}
interface DisabitilitysCreationsAttr {
  name: string;
}
interface MaterialStatusCreationsAttr {
  name: string;
}
interface СitizenshipStatusCreationsAttr {
  name: string;
}
interface ClientsCreationsAttr {
  first_name: string;
  last_name: string;
  third_name: string;
  date_born: string;
  sex: string;
  passport_series: string;
  passport_id: string;
  who_issued_the_passport: string;
  date_of_issue_of_the_passport: string;
  inspirational_passport_number: string;
  place_of_birth: string;
  city_of_residence: number;
  residential_address: string;
  mobile_phone: string;
  home_phone: string;
  email: string;
  work_place: string;
  position: string;
  place_of_registration: number;
  address_of_residence: string;
  marital_status: number;
  citizenship: number;
  disability: number;
  retiree: number;
  salary: number;
  liable_for_military_service: string;
}
@Table({ tableName: 'citys' })
export class Citys extends Model<Citys, CitysCreationsAttr> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}

@Table({ tableName: 'disabitilitys' })
export class Disabitilitys extends Model<
  Disabitilitys,
  DisabitilitysCreationsAttr
> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}

@Table({ tableName: 'marital-status' })
export class MaterialStatus extends Model<
  MaterialStatus,
  MaterialStatusCreationsAttr
> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}

@Table({ tableName: 'citizenship' })
export class Сitizenship extends Model<
  Сitizenship,
  СitizenshipStatusCreationsAttr
> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}

@Table({ tableName: 'clients' })
export class Clients extends Model<Clients, ClientsCreationsAttr> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  third_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date_born: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sex: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  passport_series: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  passport_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  who_issued_the_passport: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date_of_issue_of_the_passport: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  inspirational_passport_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_of_birth: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  city_of_residence: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  residential_address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mobile_phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  home_phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  work_place: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  place_of_registration: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address_of_residence: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  marital_status: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  citizenship: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  disability: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  retiree: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  salary: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  liable_for_military_service: string;
}
