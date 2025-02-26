import { registerAs } from "@nestjs/config"
import { config as dotenvConfig } from "dotenv"
import { DataSource, DataSourceOptions } from "typeorm"

dotenvConfig({
  path: ".env.development"
})

const config = {
  type: "postgres",
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,

  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,

  //autoLoadEntities: true,
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],

}


export default registerAs("typeorm", () => config)
export const connectionsSource = new DataSource(config as DataSourceOptions)