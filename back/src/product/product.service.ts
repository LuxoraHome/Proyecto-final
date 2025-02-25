import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
