import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) { }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategoty = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategoty);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOneById(id: string) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ) {
    await this.categoryRepository.update(id, updateCategoryDto)
    return this.categoryRepository.findOneBy({ id });
  }

  async removeCategory(id: string): Promise<{ message: string; }> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    await this.categoryRepository.delete(id)
    return { message: `Category has been deleted successfully` };
  }

  // Método para filtrar categorías por tipo y color
  async filterByTypeAndColor(name?: string, type?: string, color?: string): Promise<Category[]> {

    if (!name && !type && !color) {
      return await this.categoryRepository.find();
    }

    const query = this.categoryRepository.createQueryBuilder('category');

    if (name) {
      query.andWhere('category.name = :name', { name });
    }

    if (type) {
      query.andWhere('category.type = :type', { type });
    }

    if (color) {
      query.andWhere('category.color = :color', { color });
    }

    const categories = await query.getMany();

    if (categories.length === 0) {
      throw new NotFoundException(
        `No categories found with name: ${name}, type: ${type} and color: ${color}`,
      );
    }

    return categories;
  }
}
