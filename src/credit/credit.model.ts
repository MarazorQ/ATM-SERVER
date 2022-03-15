import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';

interface CreditTypesCreationsAttr {
  name: string;
}
interface CreditPlanTypesCreationsAttr {
  client_id: number;
  credit_type_id: number;
  end_date: Date;
  amount: number;
  payed: number;
  acc_id_repay: number;
  acc_id_main: number;
  close_credit: boolean;
  day_count: number;
}

@Table({ tableName: 'credit-types' })
export class CreditTypes extends Model<CreditTypes, CreditTypesCreationsAttr> {
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

@Table({ tableName: 'credit-plan' })
export class CreditPlan extends Model<
  CreditPlan,
  CreditPlanTypesCreationsAttr
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
  credit_type_id: number;

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
    type: DataType.FLOAT,
    allowNull: false,
  })
  payed: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  acc_id_repay: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  acc_id_main: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  close_credit: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  day_count: number;
}
