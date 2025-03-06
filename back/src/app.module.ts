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
import { CategoryModule } from './category/category.module';
import { JwtModule } from '@nestjs/jwt';
import { CloudinaryService } from './services/cloudinary/cloudinary.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CartProductsModule } from './cart-products/cartProducts.module';


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
    AuthModule,
    OrderModule,
    OrderDetailsModule,
    CategoryModule,
    JwtModule.register({
      global: true, //para usarlo en cualquier lado
      signOptions: { expiresIn: '2h' }, //entiende el string como hora(h), minuto(m),segundo(s)
      secret: process.env.JWT_SECRET, //asegurar que es un jwt generado y no construido por alguien externo
    }),
    FileUploadModule,
    ShoppingCartModule,
    CartProductsModule

  ],
  controllers: [],

  //providers: [CloudinaryService],
})

export class AppModule { }
