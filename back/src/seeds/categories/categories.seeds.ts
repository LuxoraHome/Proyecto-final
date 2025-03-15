import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { categories } from '../categories/categories-mock'; // Importa los nuevos datos

@Injectable()
export class CategoriesSeed {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async seedCategories() {
    // Obtener los nombres de las categorías existentes
    const existCategories = await this.categoryRepository.find({
      select: ['name'], // Solo seleccionamos el nombre para verificar
    });

    // Convertir a un array de nombres para facilitar la búsqueda
    const existCategoryNames = existCategories.map((cat) => cat.name);

    // Recorrer las categorías de ejemplo
    for (const categoryData of categories) {
      // Verificar si la categoría ya existe
      if (!existCategoryNames.includes(categoryData.name)) {
        // Crear una nueva categoría con los campos name, type y color
        const category = new Category();
        category.name = categoryData.name;
        category.type = categoryData.type;
        category.color = categoryData.color;

        // Guardar la categoría en la base de datos
        await this.categoryRepository.save(category);
      }
    }

    return { message: 'Categories seeded successfully' };
  }
}