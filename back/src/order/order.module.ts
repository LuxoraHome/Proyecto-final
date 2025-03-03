import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
<<<<<<< HEAD

@Module({
  controllers: [OrderController],
  providers: [OrderService],
=======
import { Order } from './entities/order.entity';
import { User } from 'src/user/entities/user.entity';
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';
import { Product } from 'src/product/entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { OrderDetailsModule } from 'src/order_details/order_details.module';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { OrderDetailsService } from 'src/order_details/order_details.service';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, OrderDetail, Product, Category]),
  UserModule,
  ProductModule,
  OrderDetailsModule,
  CategoryModule
],
  controllers: [OrderController],
  providers: [OrderService, ProductService, UserService, OrderDetailsService],
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
})
export class OrderModule {}
