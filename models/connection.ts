import { Sequelize, SequelizeOptions } from "sequelize-typescript"
import Config from "../config/config"
import pg from "pg"
import process from "process"

const env: string = process.env.NODE_ENV || "development"
const config: SequelizeOptions = Config[env as keyof typeof Config]
let sequelize: Sequelize

config.host = config.host ? config.host : "127.0.0.1"

config.dialect = "postgres"
config.dialectModule = pg

sequelize = new Sequelize(config)

export default sequelize
