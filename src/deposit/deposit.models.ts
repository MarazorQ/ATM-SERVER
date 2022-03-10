import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CurrencyCreationsAttr {
  name: string;
}
interface DepositTypesCreationsAttr {
  name: string;
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
