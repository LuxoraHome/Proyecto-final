<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { In, Repository } from "typeorm";
import { categories } from "../categories/categories-mock";

@Injectable()
export class CategoriesSeed {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { }

    async seed() {
        const existCategories = await this.categoryRepository.find({
            where: { name: In(categories) },
        });

        for (const categoryName of categories) {
            if (!existCategories.some((category) => category.name === categoryName)) {
                const category = new Category();
                category.name = categoryName;
                await this.categoryRepository.save(category);
            }
        }
    }
}
=======
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { In, Repository } from 'typeorm';
import { categories } from '../categories/categories-mock';

@Injectable()
export class CategoriesSeed {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seedCategories() {
    const existCategories = await this.categoryRepository.find({
      where: { name: In(categories) },
    });

    for (const categoryName of categories) {
      if (!existCategories.some((category) => category.name === categoryName)) {
        const category = new Category();
        category.name = categoryName;
        await this.categoryRepository.save(category);
      } else {
        return 'Ya existen categorias';
      }
    }
  }
}
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
