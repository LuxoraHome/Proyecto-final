import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { ProductService } from 'src/product/product.service';
import { CartProductsService } from 'src/cart-products/cartProducts.service';
import { CategoryService } from 'src/category/category.service';
import { ProductModule } from 'src/product/product.module';
import { CartProducts } from 'src/cart-products/carProducts.entity';
import { CartProductsModule } from 'src/cart-products/cartProducts.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([ShoppingCart, CartProducts]),
  ProductModule,
  CartProductsModule,
  UserModule
],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, CartProductsService],
  exports: [ShoppingCartService]
})
export class ShoppingCartModule {}
