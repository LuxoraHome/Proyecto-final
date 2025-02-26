import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import typeOrmConfig from "./config/typeOrm"
import { SeedModule } from './seeds/seeds.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get("typeorm")
    }),
    ProductModule,
    UserModule,
    SeedModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
