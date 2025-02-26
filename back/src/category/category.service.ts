import { Injectable } from '@nestjs/common';
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

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategoty = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategoty);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: string) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ) {
    await this.categoryRepository.update(id, updateCategoryDto)
    return this.categoryRepository.findOneBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
