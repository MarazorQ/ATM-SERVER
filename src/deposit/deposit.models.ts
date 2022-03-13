import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';

interface CurrencyCreationsAttr {
  name: string;
}
interface DepositTypesCreationsAttr {
  name: string;
}
interface AccountsTypesCreationsAttr {
  number: string;
  code: number;
  activity: string;
  type: string;
  money: number;
  name: string;
}
interface DepositPlanTypesCreationsAttr {
  client_id: number;
  deposit_type_id: number;
  end_date: Date;
  amount: number;
  acc_id_percent: number;
  acc_id_main: number;
  close_depostin: boolean;
  day_count: number;
}

@Table({ tableName: 'currency' })
export class Currency extends Model<Currency, CurrencyCreationsAttr> {
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

@Table({ tableName: 'deposit-types' })
export class DepositTypes extends Model<
  DepositTypes,
  DepositTypesCreationsAttr
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

@Table({ tableName: 'accounts' })
export class Accounts extends Model<Accounts, AccountsTypesCreationsAttr> {
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
  number: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  code: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  activity: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  money: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}

@Table({ tableName: 'deposit-plan' })
export class DepositPlan extends Model<
  DepositPlan,
  DepositPlanTypesCreationsAttr
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  client_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  deposit_type_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  acc_id_percent: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  acc_id_main: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  close_depostin: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  day_count: number;
}
