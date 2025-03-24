import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';
import { ProductsSeed } from 'src/seeds/products/products.seeds';
import { OrderDetail } from 'src/order_details/entities/order_detail.entity';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, OrderDetail]),
  CategoryModule,
  ProductModule,
  FileUploadModule
],
  controllers: [ProductController],
  providers: [ProductService, CategoryService, ProductsSeed, FileUploadService, CloudinaryService],
  exports: [ProductService],
})

export class ProductModule {}