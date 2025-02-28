import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
=======
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';
import { ProductsSeed } from 'src/seeds/products/products.seeds';
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, OrderDetail]),
  CategoryModule,
  ProductModule
],
  controllers: [ProductController],
  providers: [ProductService, CategoryService, ProductsSeed],
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  exports: [ProductService],
})

export class ProductModule { }
