import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { FileUploadDto } from 'src/file-upload/dto/file-upload.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoryService,
    private readonly fileUploadService: FileUploadService
  ) { }

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

  async removeProduct(id: string): Promise<{ message: string; }> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    await this.productRepository.delete(id);

    return { message: `Product has been deleted successfully` };
  }

  //   async fileUpload(id: string, file: FileUploadDto){
  //     const url = await this.fileUploadService.createFileUpload({
  //         fieldname: file.fieldname,
  //         originalname: file.originalname,
  //         mimetype: file.mimetype,
  //         size: file.size,
  //         buffer: file.buffer
  //     })

  //     await this.productRepository.update(id, {image: url})
  //     return {image: url}
  // }
}
