import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

dotenv.config()
const dataBase = new Sequelize(process.env.DATABASE_URL!, { models: [__dirname + "/../models/**/*.ts"], logging: false })

export default dataBase