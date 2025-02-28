import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, HttpException, HttpStatus, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
<<<<<<< HEAD
=======
import { ProductsSeed } from 'src/seeds/products/products.seeds';
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69

@ApiTags('Product')
@Controller('product')
export class ProductController {
<<<<<<< HEAD
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
=======
  constructor(
    private readonly productService: ProductService,
    private readonly productSeed: ProductsSeed
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
  @Post("seeder")
  createSeeder() {
    return this.productSeed.createSeedProduct()
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Get()
  findAll() {
<<<<<<< HEAD
    return this.productService.findAll();
=======
    return this.productService.findAllProducts();
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Get(':id')
  async asyncfindOne(@Param('id', new ParseUUIDPipe()) id: string) {
<<<<<<< HEAD
    const product = await this.productService.findOne(id);
=======
    const product = await this.productService.findOneById(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
<<<<<<< HEAD
    return this.productService.update(id, updateProductDto);
=======
    return this.productService.updateProduct(id, updateProductDto);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
<<<<<<< HEAD
    return this.productService.remove(id);
=======
    return this.productService.removeProduct(id);
>>>>>>> 5b4bb86c69a2aa639c2b7e16d6e59c0f40fdbb69
  }
}
