import { SequelizeOptions } from "sequelize-typescript"
import dotenv from "dotenv"
import { Config } from "../interfaces"

dotenv.config()

let username: string = "postgres"
let password: string = "mysecretpassword"
let hostname: string = "127.0.0.1"
let dbname: string = "foo-bar"

if (process.env.NODE_ENV == "production") {
  const parts = new URL(process.env.DATABASE_URL!)
  username = parts.username
  password = parts.password
  hostname = parts.hostname
  dbname = parts.pathname.replace("/", "")
}

const defaultConnection: SequelizeOptions = {
  username,
  password,
  database: dbname,
  host: hostname,
  dialect: "postgres",
  ssl: false,
}

const production: SequelizeOptions = {
  username,
  password,
  database: dbname,
  host: hostname,
  dialect: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}

const config: Config = {
  development: defaultConnection,
  test: defaultConnection,
  production,
}
export default config
