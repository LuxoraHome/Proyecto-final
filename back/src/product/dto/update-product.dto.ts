import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsUUID, Min } from 'class-validator';

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Gaming Mouse', description: 'Name of the product' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'A high-quality gaming mouse with RGB lighting', description: 'Detailed description of the product' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'Electronics', description: 'Category or type of the product' })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiPropertyOptional({ example: 49.99, description: 'Price of the product in USD' })
  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'El precio no puede ser negativo' })
  price?: number;

  @ApiPropertyOptional({ example: 'Logitech', description: 'Brand or designer of the product' })
  @IsOptional()
  @IsString()
  designer?: string;

  @ApiPropertyOptional({ example: 'https://example.com/image.jpg', description: 'URL of the product image' })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({ example: 100, description: 'Available stock for the product' })
  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'El stock no puede ser negativo' })
  stock?: number;

  @ApiPropertyOptional({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'UUID of the category this product belongs to' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}
