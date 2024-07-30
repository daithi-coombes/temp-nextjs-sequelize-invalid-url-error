import fs from "fs"
import path from "path"
import Sequelize from "sequelize"
import sequelize from "./connection"
import order from "./order"

const modelPath: string = process.cwd() + "/models/"
const basename: string = path.basename(__dirname + "/../models/index.js")

const db = {
  sequelize,
  Sequelize,

  Order: order,
}

fs.readdirSync(modelPath)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
  })
  .forEach((file) => {
    const model = require(__dirname + "/../models/" + file)(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name as keyof typeof db] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
