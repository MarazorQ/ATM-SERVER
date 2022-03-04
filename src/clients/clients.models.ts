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

@Table({ tableName: 'clients' })
export class Client extends Model<Client> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  first_name: string;
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
