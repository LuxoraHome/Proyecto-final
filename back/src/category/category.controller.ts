import { Controller, Get, Post, Body, Param, Delete, Put, Query, NotFoundException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiExcludeEndpoint, ApiQuery, ApiTags } from '@nestjs/swagger';
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

  @ApiExcludeEndpoint()
  @Post("seeder")
  seeder() {
    return this.categorySeeder.seedCategories()
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('filter')
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'color', required: false })
  async filterByTypeAndColor(
    @Query('name') name?: string,
    @Query('type') type?: string,
    @Query('color') color?: string,
  ) {
    try {
      return await this.categoryService.filterByTypeAndColor(name, type, color);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOneById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiExcludeEndpoint()
  remove(@Param('id') id: string) {
    return this.categoryService.removeCategory(id);
  }
}
