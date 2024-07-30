import { Model, Table, Column, DataType } from "sequelize-typescript"
import { Order as OrderI } from "../interfaces"
import sequelize from "./connection"

@Table({
  tableName: "Orders",
})
class Order extends Model<OrderI> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: DataType.INTEGER,
  })
  public id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    unique: true,
    field: "orderId",
  })
  public orderId: Number

  @Column({
    type: DataType.STRING,
    field: "symbol",
  })
  public symbol: string

  @Column({
    type: DataType.STRING,
    field: "status",
  })
  public status: string

  @Column({
    type: DataType.STRING(255),
    field: "clientOrderId",
  })
  public clientOrderId: string

  @Column({
    type: DataType.STRING,
    field: "price",
  })
  public price: string

  @Column({
    type: DataType.STRING,
    field: "avgPrice",
  })
  public avgPrice: string

  @Column({
    type: DataType.STRING,
    field: "origQty",
  })
  public origQty: string

  @Column({
    type: DataType.STRING,
    field: "executedQty",
  })
  public executedQty: string

  @Column({
    type: DataType.STRING,
    field: "cumQty",
  })
  public cumQty: string

  @Column({
    type: DataType.STRING,
    field: "cumQuote",
  })
  public cumQuote: string

  @Column({
    type: DataType.STRING,
    field: "timeInForce",
  })
  public timeInForce: string

  @Column({
    type: DataType.STRING,
    field: "type",
  })
  public type: string

  @Column({
    type: DataType.BOOLEAN,
    field: "reduceOnly",
  })
  public reduceOnly: boolean

  @Column({
    type: DataType.BOOLEAN,
    field: "closePosition",
  })
  public closePosition: boolean

  @Column({
    type: DataType.STRING,
    field: "side",
  })
  public side: string

  @Column({
    type: DataType.STRING,
    field: "positionSide",
  })
  public positionSide: string

  @Column({
    type: DataType.STRING,
    field: "stopPrice",
  })
  public stopPrice: string

  @Column({
    type: DataType.INTEGER,
    field: "updateTime",
  })
  public updateTime: number
}

sequelize.addModels([Order])

export default Order.init(Order.getAttributes(), {
  sequelize,
  modelName: "Order",
})
