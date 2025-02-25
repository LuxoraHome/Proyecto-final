import { registerAs } from "@nestjs/config"
import {config as dotenvConfig} from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm"

dotenvConfig({path: ".env.development"})

const config = {
    type: "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: false,
    logging: true

  }


  export default registerAs("typeorm", () => config)
  export const connectionsSource = new DataSource (config as DataSourceOptions)