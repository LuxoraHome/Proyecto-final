import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartProductsService } from "./cartProducts.service";
import { CartProducts } from "./carProducts.entity";
import { ProductService } from "src/product/product.service";
import { ProductModule } from "src/product/product.module";
import { CategoryService } from "src/category/category.service";
import { ShoppingCartModule } from "src/shopping-cart/shopping-cart.module";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";
import { ShoppingCartService } from "src/shopping-cart/shopping-cart.service";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { User } from "src/user/entities/user.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CartProducts, ShoppingCart, User]),
  forwardRef(() => ShoppingCartModule),
  ProductModule,
  UserModule,
  // ShoppingCartModule
],
  controllers: [],
  providers: [CartProductsService, ShoppingCartService],
  exports: [CartProductsService],
})
export class CartProductsModule{}