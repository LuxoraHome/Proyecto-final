import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
=======
import { SeedModule } from 'src/seeds/seeds.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]),
  SeedModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
})
export class CategoryModule { }
