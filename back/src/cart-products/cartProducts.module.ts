import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartProductsService } from "./cartProducts.service";
import { CartProducts } from "./carProducts.entity";
import { ProductService } from "src/product/product.service";
import { ProductModule } from "src/product/product.module";
import { CategoryService } from "src/category/category.service";
import { ShoppingCartModule } from "src/shopping-cart/shopping-cart.module";
import { ShoppingCart } from "src/shopping-cart/entities/shopping-cart.entity";


@Module({
  imports: [TypeOrmModule.forFeature([CartProducts, ShoppingCart]),
  ProductModule
],
  controllers: [],
  providers: [CartProductsService],
  exports: [],
})
export class CartProductsModule{}