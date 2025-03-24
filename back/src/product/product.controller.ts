import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpException,
  HttpStatus,
  Put,
  UseGuards,
  HttpCode,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { ProductsSeed } from 'src/seeds/products/products.seeds';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly productSeed: ProductsSeed,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @ApiExcludeEndpoint()
  @Post('seeder')
  createSeeder() {
    return this.productSeed.createSeedProduct();
  }

  @Get()
  findAll() {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async asyncfindOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productService.findOneById(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.removeProduct(id);
  }
}
