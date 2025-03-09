import { forwardRef, Module } from '@nestjs/common';
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
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShoppingCart, User]),
  ProductModule,
  UserModule,
  CartProductsModule
],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
  exports: [ShoppingCartService]
})
export class ShoppingCartModule {}
