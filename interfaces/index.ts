import { SequelizeOptions } from "sequelize-typescript"

export type Order = {
  id?: number
  clientOrderId?: string
} //& FuturesOrder

export type Config = {
  development: SequelizeOptions
  test: SequelizeOptions
  production: SequelizeOptions
}

export type ResponseError = {
  message: string
}
