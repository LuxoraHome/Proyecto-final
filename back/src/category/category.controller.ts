import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
<<<<<<< HEAD

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
=======
import { CategoriesSeed } from 'src/seeds/categories/categories.seeds';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categorySeeder: CategoriesSeed
  ) { }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Post("seeder")
  seeder() {
    return this.categorySeeder.seedCategories()
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
<<<<<<< HEAD
    return this.categoryService.findOne(id);
=======
    return this.categoryService.findOneById(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
