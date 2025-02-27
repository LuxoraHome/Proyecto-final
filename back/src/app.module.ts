import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import typeOrmConfig from "./config/typeOrm"
import { SeedModule } from './seeds/seeds.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order_details/order_details.module';


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
    AuthModule
    OrderModule,
    OrderDetailsModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
