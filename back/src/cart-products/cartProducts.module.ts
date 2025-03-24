import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartProductsService } from "./cartProducts.service";
import { CartProducts } from "./carProducts.entity";
import { ProductModule } from "src/product/product.module";
import { ShoppingCartModule } from "src/shopping-cart/shopping-cart.module";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";
import { ShoppingCartService } from "src/shopping-cart/shopping-cart.service";
import { UserModule } from "src/user/user.module";
import { User } from "src/user/entities/user.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CartProducts, ShoppingCart, User]),
  forwardRef(() => ShoppingCartModule),
  ProductModule,
  UserModule,
],
  controllers: [],
  providers: [CartProductsService, ShoppingCartService],
  exports: [CartProductsService],
})
export class CartProductsModule{}