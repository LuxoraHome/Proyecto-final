<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
=======
import { Injectable, NotFoundException } from '@nestjs/common';
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
<<<<<<< HEAD

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {

    await this.productRepository.update(id, updateProductDto)
    return this.productRepository.findOneBy({ id })
  }

  async remove(id: string): Promise<{ id: string }> {
    await this.productRepository.delete(id)
=======
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoryService,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { categoryId, ...productData } = createProductDto;

    const category = await this.categoryService.findOneById(categoryId);
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    const newProduct = this.productRepository.create({
      ...productData,
      category,
    });

    return await this.productRepository.save(newProduct);
  }

  async findAllProducts() {
    return await this.productRepository.find();
  }

  async findOneById(id: string): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { categoryId, ...updateData } = updateProductDto;

    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    if (categoryId) {
      const category = await this.categoryService.findOneById(categoryId);
      if (!category) {
        throw new NotFoundException(`Category with ID ${categoryId} not found`);
      }
      product.category = category;
    }

    Object.assign(product, updateData);
    return await this.productRepository.save(product);
  }

  async removeProduct(id: string): Promise<{ id: string }> {
    await this.productRepository.delete(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
    return { id };
  }
}
